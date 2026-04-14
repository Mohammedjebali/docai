-- Enable pgvector
CREATE EXTENSION IF NOT EXISTS vector;

-- Doctors table
CREATE TABLE doctors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  specialty TEXT NOT NULL,
  license_number TEXT,
  subscription_status TEXT DEFAULT 'free' CHECK (subscription_status IN ('free', 'active', 'cancelled')),
  cases_this_month INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Patients (anonymized)
CREATE TABLE patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  doctor_id UUID REFERENCES doctors(id) ON DELETE CASCADE,
  age INT,
  sex TEXT CHECK (sex IN ('M', 'F')),
  region TEXT,
  anonymized_hash TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Cases
CREATE TABLE cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  doctor_id UUID REFERENCES doctors(id) ON DELETE CASCADE,
  patient_id UUID REFERENCES patients(id) ON DELETE CASCADE,
  chief_complaint TEXT NOT NULL,
  specialty TEXT,
  status TEXT DEFAULT 'en_cours' CHECK (status IN ('en_cours', 'resolu', 'archive')),
  analysis JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Symptoms
CREATE TABLE case_symptoms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id UUID REFERENCES cases(id) ON DELETE CASCADE,
  symptom TEXT NOT NULL,
  severity INT CHECK (severity BETWEEN 1 AND 5),
  duration TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Medical history
CREATE TABLE case_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id UUID REFERENCES cases(id) ON DELETE CASCADE,
  condition_name TEXT NOT NULL,
  year_diagnosed INT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Lab results
CREATE TABLE case_tests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id UUID REFERENCES cases(id) ON DELETE CASCADE,
  test_name TEXT NOT NULL,
  result_value TEXT,
  unit TEXT,
  reference_range TEXT,
  test_date DATE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Treatments
CREATE TABLE case_treatments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id UUID REFERENCES cases(id) ON DELETE CASCADE,
  treatment_name TEXT NOT NULL,
  dosage TEXT,
  duration TEXT,
  outcome TEXT CHECK (outcome IN ('ameliore', 'stable', 'aggrave', 'sans_effet')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- AI Suggestions
CREATE TABLE suggestions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id UUID REFERENCES cases(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('diagnosis', 'blind_spot', 'recommended_test')),
  content TEXT NOT NULL,
  confidence REAL,
  sources JSONB DEFAULT '[]'::jsonb,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Doctor feedback
CREATE TABLE feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  suggestion_id UUID REFERENCES suggestions(id) ON DELETE CASCADE,
  doctor_id UUID REFERENCES doctors(id) ON DELETE CASCADE,
  rating TEXT CHECK (rating IN ('useful', 'not_relevant')),
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Knowledge base chunks (for RAG)
CREATE TABLE knowledge_chunks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source TEXT NOT NULL,
  title TEXT,
  content TEXT NOT NULL,
  embedding vector(1536),
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- RLS policies
ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_symptoms ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_treatments ENABLE ROW LEVEL SECURITY;
ALTER TABLE suggestions ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Doctors can only see their own data
CREATE POLICY doctors_own ON doctors FOR ALL USING (user_id = auth.uid());
CREATE POLICY patients_own ON patients FOR ALL USING (doctor_id IN (SELECT id FROM doctors WHERE user_id = auth.uid()));
CREATE POLICY cases_own ON cases FOR ALL USING (doctor_id IN (SELECT id FROM doctors WHERE user_id = auth.uid()));
CREATE POLICY symptoms_own ON case_symptoms FOR ALL USING (case_id IN (SELECT id FROM cases WHERE doctor_id IN (SELECT id FROM doctors WHERE user_id = auth.uid())));
CREATE POLICY history_own ON case_history FOR ALL USING (case_id IN (SELECT id FROM cases WHERE doctor_id IN (SELECT id FROM doctors WHERE user_id = auth.uid())));
CREATE POLICY tests_own ON case_tests FOR ALL USING (case_id IN (SELECT id FROM cases WHERE doctor_id IN (SELECT id FROM doctors WHERE user_id = auth.uid())));
CREATE POLICY treatments_own ON case_treatments FOR ALL USING (case_id IN (SELECT id FROM cases WHERE doctor_id IN (SELECT id FROM doctors WHERE user_id = auth.uid())));
CREATE POLICY suggestions_own ON suggestions FOR ALL USING (case_id IN (SELECT id FROM cases WHERE doctor_id IN (SELECT id FROM doctors WHERE user_id = auth.uid())));
CREATE POLICY feedback_own ON feedback FOR ALL USING (doctor_id IN (SELECT id FROM doctors WHERE user_id = auth.uid()));

-- Knowledge base is readable by all authenticated users
CREATE POLICY knowledge_read ON knowledge_chunks FOR SELECT USING (true);

-- Auto-create doctor profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO doctors (user_id, first_name, last_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'last_name', ''),
    NEW.email
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
