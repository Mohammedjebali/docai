import { KnowledgeEntry } from "./has-guidelines";

interface ICD10Code {
  code: string;
  name: string;
  symptoms: string;
  related: string;
}

interface ICD10Group {
  specialty: string;
  category: string;
  codes: ICD10Code[];
}

const groups: ICD10Group[] = [
  // ──────── INFECTIOLOGIE ────────
  {
    specialty: "Infectiologie",
    category: "Infections intestinales (A00-A09)",
    codes: [
      { code: "A00", name: "Choléra", symptoms: "Diarrhée aqueuse profuse, déshydratation sévère, vomissements", related: "A04, A09" },
      { code: "A01", name: "Fièvres typhoïde et paratyphoïde", symptoms: "Fièvre prolongée, céphalées, splénomégalie, tuphos, pouls dissocié", related: "A02, A04" },
      { code: "A02", name: "Infections à Salmonella", symptoms: "Gastro-entérite aiguë, diarrhée, fièvre, douleurs abdominales", related: "A01, A04, A05" },
      { code: "A04", name: "Autres infections intestinales bactériennes", symptoms: "Diarrhée, crampes abdominales, fièvre", related: "A02, A09" },
      { code: "A04.7", name: "Entérocolite à Clostridioides difficile", symptoms: "Diarrhée post-antibiotiques, fièvre, douleurs abdominales, colite pseudomembraneuse", related: "A04, K52" },
      { code: "A05", name: "Toxi-infections alimentaires bactériennes", symptoms: "Nausées, vomissements, diarrhée aiguë, début brutal collectif", related: "A02, A04" },
      { code: "A06", name: "Amibiase", symptoms: "Diarrhée glairo-sanglante, ténesme, abcès hépatique", related: "A07, A09" },
      { code: "A08", name: "Infections intestinales virales", symptoms: "Gastro-entérite, vomissements, diarrhée aqueuse, norovirus/rotavirus", related: "A09" },
      { code: "A09", name: "Gastro-entérite infectieuse, sans précision", symptoms: "Diarrhée, vomissements, déshydratation", related: "A04, A08" },
    ],
  },
  {
    specialty: "Infectiologie",
    category: "Tuberculose (A15-A19)",
    codes: [
      { code: "A15", name: "Tuberculose pulmonaire", symptoms: "Toux chronique, hémoptysie, sueurs nocturnes, amaigrissement, fièvre vespérale", related: "A16, A19" },
      { code: "A17", name: "Tuberculose du système nerveux", symptoms: "Méningite, céphalées, confusion, paralysie des nerfs crâniens", related: "A15, G00" },
      { code: "A18", name: "Tuberculose extra-pulmonaire", symptoms: "Adénopathies, atteinte osseuse (mal de Pott), urogénitale, péricardique", related: "A15, A19" },
      { code: "A19", name: "Tuberculose miliaire", symptoms: "Fièvre prolongée, dyspnée, micronodules diffus bilatéraux", related: "A15, A18" },
    ],
  },
  {
    specialty: "Infectiologie",
    category: "Infections bactériennes systémiques (A30-A49)",
    codes: [
      { code: "A39", name: "Méningococcie", symptoms: "Fièvre brutale, purpura fulminans, méningite, choc septique", related: "G00, A40" },
      { code: "A40", name: "Septicémie à streptocoque", symptoms: "Fièvre élevée, frissons, hypotension, défaillance d'organe", related: "A41, R65" },
      { code: "A41", name: "Septicémie, autres germes", symptoms: "Fièvre, tachycardie, hypotension, confusion, marbrures", related: "A40, R65" },
      { code: "A41.0", name: "Septicémie à Staphylococcus aureus", symptoms: "Fièvre, portes d'entrée cutanée ou veineuse, endocardite possible", related: "A41, I33" },
      { code: "A46", name: "Érysipèle", symptoms: "Placard inflammatoire cutané, fièvre brutale, bourrelet périphérique, adénopathie", related: "L03" },
      { code: "A49", name: "Infection bactérienne, sans précision", symptoms: "Fièvre, inflammation, selon site", related: "A41" },
    ],
  },
  {
    specialty: "Infectiologie",
    category: "Infections virales (A80-B34)",
    codes: [
      { code: "B00", name: "Herpès simplex (HSV)", symptoms: "Vésicules groupées en bouquet, labiales ou génitales, kératite, encéphalite", related: "B02, A60" },
      { code: "B01", name: "Varicelle", symptoms: "Éruption vésiculeuse prurigineuse en plusieurs poussées, fièvre modérée", related: "B02" },
      { code: "B02", name: "Zona", symptoms: "Éruption vésiculeuse métamérique unilatérale, douleur radiculaire, névralgies post-zostériennes", related: "B01" },
      { code: "B05", name: "Rougeole", symptoms: "Fièvre, catarrhe oculo-nasal, tache de Köplik, exanthème maculo-papuleux descendant", related: "B06" },
      { code: "B06", name: "Rubéole", symptoms: "Éruption maculo-papuleuse, adénopathies cervicales postérieures, fièvre modérée", related: "B05" },
      { code: "B15", name: "Hépatite A", symptoms: "Ictère, asthénie, hépatomégalie sensible, transmission oro-fécale", related: "B16, B17" },
      { code: "B16", name: "Hépatite B aiguë", symptoms: "Ictère, asthénie intense, nausées, arthralgies, transaminases très élevées", related: "B18.1" },
      { code: "B17.1", name: "Hépatite C aiguë", symptoms: "Souvent asymptomatique, ictère possible, transaminases élevées", related: "B18.2" },
      { code: "B18.1", name: "Hépatite B chronique", symptoms: "Souvent asymptomatique, risque de cirrhose et CHC, transaminases fluctuantes", related: "B16, K74" },
      { code: "B18.2", name: "Hépatite C chronique", symptoms: "Souvent asymptomatique, fatigue, risque de cirrhose et CHC", related: "B17.1, K74" },
      { code: "B20", name: "VIH/SIDA", symptoms: "Primo-infection (fièvre, adénopathies, pharyngite), puis infections opportunistes, sarcome de Kaposi", related: "B24" },
      { code: "B27", name: "Mononucléose infectieuse (EBV)", symptoms: "Fièvre prolongée, angine pseudomembraneuse, splénomégalie, adénopathies cervicales", related: "B00" },
      { code: "B34", name: "Infection virale non précisée", symptoms: "Fièvre, myalgies, syndrome grippal", related: "J06, J11" },
    ],
  },
  {
    specialty: "Infectiologie",
    category: "Infections parasitaires et fongiques (B35-B83)",
    codes: [
      { code: "B35", name: "Dermatophytose", symptoms: "Lésions cutanées annulaires, prurit, atteinte des ongles (onychomycose), pieds", related: "B36, B37" },
      { code: "B37", name: "Candidose", symptoms: "Muguet buccal, candidose vaginale, intertrigo, candidémie si immunodéprimé", related: "B35" },
      { code: "B50", name: "Paludisme à Plasmodium falciparum", symptoms: "Fièvre élevée, frissons, sueurs, accès palustre, splénomégalie, anémie, neuropaludisme", related: "B51, B52" },
      { code: "B58", name: "Toxoplasmose", symptoms: "Adénopathies cervicales, fièvre modérée, toxoplasmose congénitale, cérébrale si immunodéprimé", related: "B59" },
      { code: "B67", name: "Kyste hydatique (Echinococcose)", symptoms: "Kyste hépatique ou pulmonaire, découverte fortuite ou complication (fissuration, surinfection)", related: "B66" },
      { code: "B77", name: "Ascaridiose", symptoms: "Syndrome de Löffler, douleurs abdominales, troubles digestifs", related: "B79, B80" },
      { code: "B80", name: "Oxyurose", symptoms: "Prurit anal nocturne, irritabilité, troubles du sommeil (enfant)", related: "B77" },
    ],
  },

  // ──────── ONCOLOGIE ────────
  {
    specialty: "Oncologie",
    category: "Tumeurs malignes digestives (C15-C26)",
    codes: [
      { code: "C15", name: "Cancer de l'œsophage", symptoms: "Dysphagie progressive, amaigrissement, régurgitations, douleur rétrosternale", related: "K22, C16" },
      { code: "C16", name: "Cancer de l'estomac", symptoms: "Épigastralgies, anorexie, amaigrissement, anémie ferriprive, dysphagie si cardia", related: "K25, C15" },
      { code: "C18", name: "Cancer du côlon", symptoms: "Troubles du transit, rectorragies, anémie ferriprive, masse abdominale, AEG", related: "C19, C20, K63" },
      { code: "C19", name: "Cancer de la jonction recto-sigmoïdienne", symptoms: "Rectorragies, faux besoins, constipation récente, occlusion", related: "C18, C20" },
      { code: "C20", name: "Cancer du rectum", symptoms: "Rectorragies, ténesme, épreintes, faux besoins, syndrome rectal", related: "C18, C19" },
      { code: "C22", name: "Carcinome hépatocellulaire (CHC)", symptoms: "Hépatomégalie, AEG, ictère, ascite, décompensation de cirrhose, AFP élevée", related: "K74, C78.7" },
      { code: "C23", name: "Cancer de la vésicule biliaire", symptoms: "Douleur de l'hypocondre droit, ictère, AEG, masse palpable", related: "C24, K80" },
      { code: "C25", name: "Cancer du pancréas", symptoms: "Ictère obstructif sans douleur, AEG, diabète récent, douleur épigastrique transfixiante", related: "K86, C22" },
    ],
  },
  {
    specialty: "Oncologie",
    category: "Tumeurs malignes respiratoires et thoraciques (C30-C39)",
    codes: [
      { code: "C34", name: "Cancer bronchique (poumon)", symptoms: "Toux chronique, hémoptysie, dyspnée, AEG, syndrome paranéoplasique, douleur thoracique", related: "C78, D02" },
      { code: "C34.0", name: "Cancer bronchique — petites cellules (CBPC)", symptoms: "Évolution rapide, syndrome cave supérieur, syndrome paranéoplasique (SIADH, Cushing)", related: "C34" },
      { code: "C38", name: "Mésothéliome pleural", symptoms: "Dyspnée, douleur thoracique, épanchement pleural récidivant, exposition à l'amiante", related: "C34, J92" },
    ],
  },
  {
    specialty: "Oncologie",
    category: "Tumeurs malignes du sein et génitales (C50-C58)",
    codes: [
      { code: "C50", name: "Cancer du sein", symptoms: "Nodule mammaire dur, fixé, indolore, rétraction cutanée/mamelon, écoulement sanglant, adénopathie axillaire", related: "D05, N63" },
      { code: "C53", name: "Cancer du col de l'utérus", symptoms: "Métrorragies provoquées, leucorrhées, douleurs pelviennes, lié au HPV", related: "D06, N87" },
      { code: "C54", name: "Cancer de l'endomètre", symptoms: "Métrorragies post-ménopausiques, douleurs pelviennes, épaississement endométrial", related: "N85, C55" },
      { code: "C56", name: "Cancer de l'ovaire", symptoms: "Ascite, masse pelvienne, AEG, douleurs abdominales, CA-125 élevé", related: "D27, N83" },
    ],
  },
  {
    specialty: "Oncologie",
    category: "Tumeurs malignes urologiques (C61-C68)",
    codes: [
      { code: "C61", name: "Cancer de la prostate", symptoms: "Souvent asymptomatique, troubles mictionnels, PSA élevé, douleurs osseuses si métastatique", related: "N40, C67" },
      { code: "C64", name: "Cancer du rein", symptoms: "Hématurie, douleur lombaire, masse palpable (triade classique rare), AEG, fièvre", related: "N28, C65" },
      { code: "C67", name: "Cancer de la vessie", symptoms: "Hématurie macroscopique indolore, cystite récidivante, dysurie, pollakiurie", related: "N30, C64" },
    ],
  },
  {
    specialty: "Oncologie",
    category: "Hémopathies malignes (C81-C96)",
    codes: [
      { code: "C81", name: "Lymphome de Hodgkin", symptoms: "Adénopathies cervicales/médiastinales indolores, prurit, fièvre, sueurs nocturnes, AEG", related: "C82, C83" },
      { code: "C83", name: "Lymphome non hodgkinien diffus à grandes cellules B", symptoms: "Adénopathies rapidement évolutives, AEG, syndrome compressif, LDH élevées", related: "C81, C85" },
      { code: "C85", name: "Lymphome non hodgkinien, sans précision", symptoms: "Adénopathies, splénomégalie, cytopénies, signes généraux", related: "C83, C82" },
      { code: "C90", name: "Myélome multiple", symptoms: "Douleurs osseuses (rachis), fractures pathologiques, anémie, IR, hypercalcémie, pic monoclonal", related: "C88, D47" },
      { code: "C91.0", name: "Leucémie lymphoïde aiguë (LLA)", symptoms: "Syndrome d'insuffisance médullaire (anémie, infections, hémorragies), douleurs osseuses, adénopathies", related: "C91.1, C92" },
      { code: "C91.1", name: "Leucémie lymphoïde chronique (LLC)", symptoms: "Hyperlymphocytose > 5 G/L, adénopathies, splénomégalie, infections récurrentes", related: "C91.0, C83" },
      { code: "C92.0", name: "Leucémie myéloïde aiguë (LMA)", symptoms: "Pancytopénie aiguë, fatigue, infections, hémorragies, CIVD, hypertrophie gingivale (LAM4/5)", related: "C92.1, D46" },
      { code: "C92.1", name: "Leucémie myéloïde chronique (LMC)", symptoms: "Hyperleucocytose avec myélémie, splénomégalie, fatigue, sueurs, chromosome Philadelphie t(9;22)", related: "C92.0, D47" },
    ],
  },
  {
    specialty: "Oncologie",
    category: "Autres cancers fréquents (C43-C80)",
    codes: [
      { code: "C43", name: "Mélanome malin de la peau", symptoms: "Lésion pigmentée asymétrique, bords irréguliers, couleur hétérogène, diamètre > 6 mm, évolutive (ABCDE)", related: "D03, C44" },
      { code: "C44", name: "Carcinome cutané (basocellulaire/épidermoïde)", symptoms: "Nodule perlé (CBC), ulcération chronique, kératose, zones photo-exposées", related: "C43, L57" },
      { code: "C71", name: "Tumeur maligne du cerveau", symptoms: "Céphalées matinales, crises d'épilepsie, déficit neurologique focal, HTIC", related: "D33, G40" },
      { code: "C73", name: "Cancer de la thyroïde", symptoms: "Nodule thyroïdien dur, fixé, adénopathie cervicale, dysphonie (nerf récurrent)", related: "E04, D34" },
    ],
  },

  // ──────── HÉMATOLOGIE ────────
  {
    specialty: "Hématologie",
    category: "Anémies (D50-D64)",
    codes: [
      { code: "D50", name: "Anémie ferriprive", symptoms: "Fatigue, pâleur, dyspnée d'effort, tachycardie, pica, koïlonychie, syndrome des jambes sans repos", related: "D51, D52" },
      { code: "D51", name: "Anémie par carence en vitamine B12", symptoms: "Macrocytose, glossite, troubles neurologiques (sclérose combinée), paresthésies, ataxie", related: "D50, D52" },
      { code: "D52", name: "Anémie par carence en folates", symptoms: "Macrocytose, fatigue, glossite, pas d'atteinte neurologique", related: "D51, D50" },
      { code: "D56", name: "Thalassémie", symptoms: "Anémie microcytaire chronique, splénomégalie, faciès thalassémique (forme majeure), surcharge en fer", related: "D57, D50" },
      { code: "D57", name: "Drépanocytose", symptoms: "Crises vaso-occlusives, anémie hémolytique, syndrome thoracique aigu, infections", related: "D56, D58" },
      { code: "D58", name: "Sphérocytose héréditaire (Minkowski-Chauffard)", symptoms: "Anémie hémolytique, ictère, splénomégalie, lithiase biliaire pigmentaire", related: "D59, D57" },
      { code: "D59", name: "Anémie hémolytique auto-immune (AHAI)", symptoms: "Anémie régénérative, ictère, splénomégalie, test de Coombs direct positif", related: "D58, D55" },
      { code: "D61", name: "Aplasie médullaire", symptoms: "Pancytopénie (anémie, infections, hémorragies), moelle pauvre à la biopsie", related: "D46, D70" },
      { code: "D64", name: "Anémie sidéroblastique", symptoms: "Anémie réfractaire, sidéroblastes en couronne au myélogramme", related: "D46, D50" },
    ],
  },
  {
    specialty: "Hématologie",
    category: "Troubles de l'hémostase (D65-D69)",
    codes: [
      { code: "D65", name: "CIVD (Coagulation intravasculaire disséminée)", symptoms: "Hémorragies diffuses, thromboses, consommation des facteurs, D-dimères très élevés, fibrinogène bas", related: "D66, D68" },
      { code: "D66", name: "Hémophilie A (déficit en facteur VIII)", symptoms: "Hémarthroses, hématomes profonds, hémorragies post-chirurgicales", related: "D67, D68" },
      { code: "D67", name: "Hémophilie B (déficit en facteur IX)", symptoms: "Identiques à l'hémophilie A, TCA allongé", related: "D66" },
      { code: "D68", name: "Maladie de Willebrand", symptoms: "Saignements muco-cutanés (épistaxis, ménorragies, ecchymoses), TCA allongé", related: "D66, D69" },
      { code: "D69.3", name: "Purpura thrombopénique immunologique (PTI)", symptoms: "Thrombopénie isolée, purpura pétéchial, ecchymoses, épistaxis, ménorragies", related: "D69, D65" },
      { code: "D69.6", name: "Thrombopénie non précisée", symptoms: "Purpura, ecchymoses, saignement des muqueuses", related: "D69.3" },
    ],
  },

  // ──────── ENDOCRINOLOGIE ────────
  {
    specialty: "Endocrinologie",
    category: "Diabète sucré (E10-E14)",
    codes: [
      { code: "E10", name: "Diabète de type 1", symptoms: "Polyurie, polydipsie, amaigrissement, acidocétose inaugurale, auto-anticorps positifs", related: "E11, E13" },
      { code: "E11", name: "Diabète de type 2", symptoms: "Souvent asymptomatique, découverte par glycémie > 1,26 g/L, syndrome métabolique", related: "E10, E14" },
      { code: "E10.1/E11.1", name: "Diabète avec acidocétose", symptoms: "Dyspnée de Kussmaul, déshydratation, douleurs abdominales, haleine acétonique, glycémie élevée", related: "E10, E11" },
      { code: "E11.4", name: "Diabète avec complications neurologiques", symptoms: "Polyneuropathie distale, neuropathie autonome, gastroparésie, dysfonction érectile", related: "E11, G63" },
      { code: "E11.5", name: "Diabète avec complications vasculaires périphériques", symptoms: "Artériopathie, mal perforant plantaire, gangrène, pied diabétique", related: "E11, I73" },
      { code: "E13", name: "Diabète gestationnel", symptoms: "Glycémie élevée pendant la grossesse, macrosomie fœtale, risque DT2 ultérieur", related: "E11, O24" },
    ],
  },
  {
    specialty: "Endocrinologie",
    category: "Dysthyroïdies (E00-E07)",
    codes: [
      { code: "E01", name: "Goitre par carence en iode", symptoms: "Augmentation de volume de la thyroïde, gêne cervicale, dysphagie/dyspnée si compressif", related: "E04, E05" },
      { code: "E03", name: "Hypothyroïdie", symptoms: "Fatigue, prise de poids, constipation, frilosité, bradycardie, myxœdème, ralentissement", related: "E06.3, E05" },
      { code: "E05", name: "Hyperthyroïdie", symptoms: "Amaigrissement, tachycardie, tremblements, thermophobie, nervosité, exophtalmie (Basedow)", related: "E03, E06" },
      { code: "E06", name: "Thyroïdite", symptoms: "Thyroïdite de Hashimoto (auto-immune, hypothyroïdie), De Quervain (subaiguë, douleur cervicale)", related: "E03, E05" },
    ],
  },
  {
    specialty: "Endocrinologie",
    category: "Autres troubles métaboliques et endocriniens (E20-E90)",
    codes: [
      { code: "E21", name: "Hyperparathyroïdie", symptoms: "Hypercalcémie, lithiase rénale, douleurs osseuses, asthénie, troubles digestifs, confusion", related: "E20, E83" },
      { code: "E22.0", name: "Acromégalie", symptoms: "Élargissement des extrémités, prognathisme, canal carpien, HTA, diabète, apnées", related: "E22, E24" },
      { code: "E24", name: "Syndrome de Cushing", symptoms: "Obésité facio-tronculaire, vergetures pourpres, amyotrophie, HTA, diabète, ostéoporose", related: "E22, E27" },
      { code: "E27.1", name: "Insuffisance surrénale (Addison)", symptoms: "Fatigue, hypotension, mélanodermie, amaigrissement, appétence pour le sel, hyponatrémie", related: "E24, E27" },
      { code: "E27.5", name: "Phéochromocytome", symptoms: "HTA paroxystique, céphalées, sueurs, palpitations (triade de Ménard)", related: "E27, I10" },
      { code: "E66", name: "Obésité", symptoms: "IMC ≥ 30, syndrome métabolique, apnées du sommeil, arthrose, RGO", related: "E11, I10, E78" },
      { code: "E78", name: "Dyslipidémie", symptoms: "Souvent asymptomatique, hypercholestérolémie, hypertriglycéridémie, xanthomes, arc cornéen", related: "I25, I10, E66" },
      { code: "E83.1", name: "Hémochromatose", symptoms: "Fatigue, mélanodermie, hépatomégalie, diabète, arthralgies (MCP 2-3), cardiomyopathie, ferritine élevée", related: "K74, E11" },
      { code: "E84", name: "Mucoviscidose", symptoms: "Infections pulmonaires récurrentes, insuffisance pancréatique, test de la sueur positif", related: "J47, K86" },
      { code: "E85", name: "Amylose", symptoms: "Atteinte multi-organe (cœur, rein, nerf, foie), protéinurie, cardiomyopathie restrictive, macroglossie", related: "I43, N04" },
      { code: "E87", name: "Troubles hydro-électrolytiques", symptoms: "Hyponatrémie, hyperkaliémie, déshydratation, confusion, troubles du rythme", related: "E86" },
    ],
  },

  // ──────── PSYCHIATRIE ────────
  {
    specialty: "Psychiatrie",
    category: "Troubles de l'humeur et anxieux (F30-F48)",
    codes: [
      { code: "F20", name: "Schizophrénie", symptoms: "Délire, hallucinations auditives, retrait social, émoussement affectif, désorganisation", related: "F22, F25" },
      { code: "F31", name: "Trouble bipolaire", symptoms: "Alternance épisodes maniaques (euphorie, insomnie, logorrhée, désinhibition) et dépressifs", related: "F32, F30" },
      { code: "F32", name: "Épisode dépressif", symptoms: "Humeur dépressive, anhédonie, fatigue, troubles du sommeil, idées suicidaires", related: "F33, F31" },
      { code: "F33", name: "Trouble dépressif récurrent", symptoms: "Épisodes dépressifs récurrents, avec rémissions entre les épisodes", related: "F32, F34" },
      { code: "F40", name: "Phobies", symptoms: "Peur intense et irrationnelle, évitement, attaques de panique situationnelles", related: "F41, F42" },
      { code: "F41.0", name: "Trouble panique", symptoms: "Attaques de panique récurrentes, peur de mourir, douleur thoracique, palpitations, anxiété anticipatoire", related: "F41.1, F40" },
      { code: "F41.1", name: "Trouble anxieux généralisé", symptoms: "Anxiété chronique, inquiétudes excessives, tension musculaire, insomnie, irritabilité", related: "F41.0, F43" },
      { code: "F42", name: "TOC (Trouble obsessionnel compulsif)", symptoms: "Obsessions (pensées intrusives), compulsions (rituels), détresse si empêché", related: "F40, F41" },
      { code: "F43.1", name: "TSPT (Trouble de stress post-traumatique)", symptoms: "Reviviscences, cauchemars, évitement, hypervigilance, détachement émotionnel", related: "F43.0, F41" },
      { code: "F44", name: "Trouble dissociatif / conversion", symptoms: "Déficit moteur ou sensitif sans substrat organique, amnésie dissociative", related: "F45" },
      { code: "F45", name: "Trouble somatoforme", symptoms: "Plaintes physiques multiples sans explication médicale, conviction de maladie", related: "F44" },
    ],
  },
  {
    specialty: "Psychiatrie",
    category: "Addictions et troubles du comportement alimentaire (F10-F19, F50)",
    codes: [
      { code: "F10", name: "Troubles liés à l'alcool", symptoms: "Dépendance, sevrage (tremblements, delirium tremens), hépatopathie, neuropathie", related: "K70, G62" },
      { code: "F11", name: "Troubles liés aux opioïdes", symptoms: "Dépendance, tolérance, syndrome de sevrage, myosis, dépression respiratoire", related: "F19, T40" },
      { code: "F17", name: "Troubles liés au tabac", symptoms: "Dépendance nicotinique, sevrage (irritabilité, prise de poids, anxiété)", related: "J44, C34" },
      { code: "F50.0", name: "Anorexie mentale", symptoms: "Restriction alimentaire, peur de grossir, amaigrissement sévère, aménorrhée, dénutrition", related: "F50.2, E44" },
      { code: "F50.2", name: "Boulimie nerveuse", symptoms: "Crises de boulimie, vomissements provoqués, usage de laxatifs, poids normal ou élevé", related: "F50.0" },
    ],
  },

  // ──────── NEUROLOGIE ────────
  {
    specialty: "Neurologie",
    category: "Maladies du système nerveux central (G00-G47)",
    codes: [
      { code: "G00", name: "Méningite bactérienne", symptoms: "Céphalées, fièvre élevée, raideur de nuque, photophobie, purpura (méningocoque)", related: "G03, A39" },
      { code: "G03", name: "Méningite virale", symptoms: "Céphalées, fièvre modérée, syndrome méningé, évolution bénigne habituellement", related: "G00" },
      { code: "G04", name: "Encéphalite", symptoms: "Troubles de conscience, fièvre, crises d'épilepsie, déficit focal, HSV le plus fréquent", related: "G00, B00" },
      { code: "G20", name: "Maladie de Parkinson", symptoms: "Tremblements de repos, rigidité, bradykinésie, instabilité posturale, début unilatéral", related: "G21, G25" },
      { code: "G25", name: "Tremblement essentiel", symptoms: "Tremblement postural et d'action bilatéral, céphalique, amélioration par l'alcool", related: "G20" },
      { code: "G30", name: "Maladie d'Alzheimer", symptoms: "Troubles de la mémoire épisodique, désorientation, aphasie, apraxie, agnosie progressive", related: "F03, G31" },
      { code: "G35", name: "Sclérose en plaques", symptoms: "Poussées de déficit neurologique focal (NORB, myélite, syndrome cérébelleux), dissémination temporo-spatiale", related: "G36, G37" },
      { code: "G40", name: "Épilepsie", symptoms: "Crises épileptiques récurrentes (focales, généralisées), anomalies EEG", related: "G41, R56" },
      { code: "G41", name: "État de mal épileptique", symptoms: "Crise prolongée > 5 min ou crises subintrantes sans reprise de conscience, urgence vitale", related: "G40" },
      { code: "G43", name: "Migraine", symptoms: "Céphalée pulsatile unilatérale, nausées, photophobie, aura visuelle possible", related: "G44, R51" },
      { code: "G44", name: "Algie vasculaire de la face (cluster headache)", symptoms: "Douleur péri-orbitaire unilatérale intense, larmoiement, rhinorrhée, signe de Claude-Bernard-Horner", related: "G43" },
      { code: "G47", name: "Troubles du sommeil", symptoms: "Insomnie, apnées du sommeil, narcolepsie, somnolence diurne excessive", related: "G25, F51" },
    ],
  },
  {
    specialty: "Neurologie",
    category: "Neuropathies et maladies neuromusculaires (G50-G73)",
    codes: [
      { code: "G50", name: "Névralgie du trijumeau", symptoms: "Douleur fulgurante du visage, en décharges électriques, unilatérale, zone gâchette", related: "G51" },
      { code: "G51", name: "Paralysie faciale de Bell", symptoms: "Paralysie faciale périphérique brutale unilatérale, signe de Charles-Bell, lagophtalmie", related: "G50, B02" },
      { code: "G56", name: "Syndrome du canal carpien", symptoms: "Paresthésies nocturnes des 3 premiers doigts, faiblesse du pouce (abducteur), signe de Tinel", related: "G57, M65" },
      { code: "G61", name: "Syndrome de Guillain-Barré", symptoms: "Paralysie ascendante, aréflexie, dissociation albumino-cytologique, risque respiratoire", related: "G62" },
      { code: "G62", name: "Polyneuropathie", symptoms: "Paresthésies, hypoesthésie en chaussettes/gants, aréflexie achilléenne, douleurs", related: "G61, G63" },
      { code: "G70", name: "Myasthénie", symptoms: "Faiblesse musculaire fluctuante, ptosis, diplopie, dysphagie, aggravée par l'effort", related: "G73, C37" },
    ],
  },

  // ──────── CARDIOLOGIE ────────
  {
    specialty: "Cardiologie",
    category: "Cardiopathies ischémiques et hypertensives (I10-I25)",
    codes: [
      { code: "I10", name: "Hypertension artérielle essentielle", symptoms: "Souvent asymptomatique, céphalées, acouphènes, phosphènes si sévère, atteinte des organes cibles", related: "I11, I13, I15" },
      { code: "I11", name: "Cardiopathie hypertensive", symptoms: "HVG, insuffisance cardiaque diastolique, dyspnée d'effort", related: "I10, I50" },
      { code: "I20", name: "Angor (angine de poitrine)", symptoms: "Douleur thoracique constrictive, rétrosternale, irradiant au bras gauche, effort/stress, cédant au repos/trinitrine", related: "I21, I25" },
      { code: "I21", name: "Infarctus du myocarde (SCA ST+)", symptoms: "Douleur thoracique intense et prolongée, sueurs, dyspnée, sus-décalage ST, troponine élevée", related: "I20, I22, I25" },
      { code: "I25", name: "Cardiopathie ischémique chronique", symptoms: "Angor stable, séquelles d'IDM, dysfonction VG, insuffisance cardiaque ischémique", related: "I20, I21, I50" },
    ],
  },
  {
    specialty: "Cardiologie",
    category: "Troubles du rythme et insuffisance cardiaque (I44-I52)",
    codes: [
      { code: "I44", name: "Bloc auriculo-ventriculaire", symptoms: "Bradycardie, syncope (Adams-Stokes), lipothymies, BAV 1/2/3", related: "I45, I49" },
      { code: "I48", name: "Fibrillation atriale (FA)", symptoms: "Palpitations irrégulières, dyspnée, fatigue, risque d'AVC embolique", related: "I49, I63" },
      { code: "I49", name: "Autres arythmies cardiaques", symptoms: "Palpitations, tachycardie, extrasystoles, flutter, TV", related: "I48, I44" },
      { code: "I50", name: "Insuffisance cardiaque", symptoms: "Dyspnée d'effort puis de repos, œdèmes des MI, orthopnée, crépitants, BNP élevé", related: "I11, I25, I42" },
      { code: "I42", name: "Cardiomyopathie", symptoms: "Dilatée (IC), hypertrophique (syncope, mort subite), restrictive (IC diastolique)", related: "I50, I43" },
    ],
  },
  {
    specialty: "Cardiologie",
    category: "Maladies vasculaires (I26-I89)",
    codes: [
      { code: "I26", name: "Embolie pulmonaire", symptoms: "Dyspnée brutale, douleur thoracique, tachycardie, hémoptysie, D-dimères élevés, état de choc si massive", related: "I80, I27" },
      { code: "I33", name: "Endocardite infectieuse", symptoms: "Fièvre prolongée + souffle cardiaque, hémocultures positives, végétations valvulaires, emboles septiques", related: "I38, I34" },
      { code: "I63", name: "AVC ischémique", symptoms: "Déficit neurologique focal brutal (hémiplégie, aphasie, hémianopsie), paralysie faciale", related: "I64, I61" },
      { code: "I61", name: "AVC hémorragique", symptoms: "Céphalée brutale, déficit neurologique, troubles de conscience, HTA sévère", related: "I63, I60" },
      { code: "I60", name: "Hémorragie sous-arachnoïdienne", symptoms: "Céphalée brutale en coup de tonnerre, raideur de nuque, troubles de conscience, rupture d'anévrisme", related: "I61, I67" },
      { code: "I71", name: "Anévrisme et dissection de l'aorte", symptoms: "Douleur thoracique brutale transfixiante, asymétrie tensionnelle, souffle diastolique, urgence vitale", related: "I70, I72" },
      { code: "I73", name: "Artériopathie oblitérante des MI", symptoms: "Claudication intermittente, douleur de décubitus, trouble trophique, IPS < 0,9", related: "I70, E11" },
      { code: "I80", name: "Thrombose veineuse profonde (TVP)", symptoms: "Douleur du mollet, œdème unilatéral, chaleur locale, signe de Homans, D-dimères élevés", related: "I26, I82" },
      { code: "I83", name: "Insuffisance veineuse des MI", symptoms: "Varices, œdèmes vespéraux, dermite ocre, ulcère veineux", related: "I80, I87" },
    ],
  },

  // ──────── PNEUMOLOGIE ────────
  {
    specialty: "Pneumologie",
    category: "Infections respiratoires (J00-J22)",
    codes: [
      { code: "J00", name: "Rhinopharyngite aiguë", symptoms: "Rhinorrhée, éternuements, congestion nasale, fièvre modérée, pharyngite", related: "J06, J02" },
      { code: "J02", name: "Pharyngite aiguë", symptoms: "Douleur pharyngée, dysphagie, fièvre, angine (TDR streptocoque)", related: "J03, J00" },
      { code: "J03", name: "Amygdalite aiguë", symptoms: "Odynophagie intense, fièvre élevée, amygdales hypertrophiées, adénopathies cervicales", related: "J02, J36" },
      { code: "J06", name: "Infection aiguë des voies respiratoires supérieures", symptoms: "Toux, rhinorrhée, fièvre modérée, pharyngite, malaise général", related: "J00, J20" },
      { code: "J09", name: "Grippe (virus identifié)", symptoms: "Fièvre élevée brutale, myalgies, céphalées, toux sèche, asthénie intense", related: "J10, J11" },
      { code: "J12", name: "Pneumonie virale", symptoms: "Toux sèche, fièvre, dyspnée, infiltrats bilatéraux, COVID-19/grippe/VRS", related: "J13, J18" },
      { code: "J13", name: "Pneumonie à pneumocoque", symptoms: "Fièvre élevée, frissons, toux productive rouillée, foyer de condensation", related: "J12, J18" },
      { code: "J15", name: "Pneumonie bactérienne (autres)", symptoms: "Fièvre, toux, expectoration purulente, dyspnée, foyer de crépitants", related: "J13, J18" },
      { code: "J18", name: "Pneumonie, sans précision", symptoms: "Fièvre + toux + opacité radiographique", related: "J13, J15" },
      { code: "J20", name: "Bronchite aiguë", symptoms: "Toux d'abord sèche puis productive, fièvre modérée, pas de foyer auscultatoire", related: "J06, J22" },
    ],
  },
  {
    specialty: "Pneumologie",
    category: "Maladies respiratoires chroniques (J30-J99)",
    codes: [
      { code: "J30", name: "Rhinite allergique", symptoms: "Rhinorrhée claire, éternuements en salve, prurit nasal, obstruction nasale, conjonctivite", related: "J45, J31" },
      { code: "J44", name: "BPCO", symptoms: "Dyspnée chronique progressive, toux productive matinale, tabagisme, exacerbations", related: "J43, J45" },
      { code: "J45", name: "Asthme", symptoms: "Dyspnée sifflante, toux nocturne, oppression thoracique, réversibilité spirométrique", related: "J44, J30" },
      { code: "J46", name: "Asthme aigu grave (état de mal asthmatique)", symptoms: "Dyspnée majeure, silence auscultatoire, cyanose, SpO2 < 92 %, DEP < 30 %, urgence vitale", related: "J45" },
      { code: "J47", name: "Bronchectasies", symptoms: "Toux chronique productive, hémoptysies, infections bronchiques récidivantes", related: "J44, E84" },
      { code: "J84", name: "Pneumopathie interstitielle diffuse", symptoms: "Dyspnée d'effort, crépitants secs, hippocratisme digital, fibrose au scanner", related: "J84.1" },
      { code: "J84.1", name: "Fibrose pulmonaire idiopathique", symptoms: "Dyspnée progressive, crépitants velcro, rayon de miel au scanner, DLCO diminuée", related: "J84" },
      { code: "J90", name: "Épanchement pleural", symptoms: "Dyspnée, douleur thoracique, matité à la percussion, diminution du MV", related: "J91, J94" },
      { code: "J93", name: "Pneumothorax", symptoms: "Douleur thoracique brutale, dyspnée, hypersonorité, abolition du MV, tympanisme", related: "J90" },
      { code: "J96", name: "Insuffisance respiratoire", symptoms: "Dyspnée, cyanose, tirage, hypoxémie (PaO2 < 60 mmHg), hypercapnie", related: "J44, J84" },
    ],
  },

  // ──────── GASTRO-ENTÉROLOGIE ────────
  {
    specialty: "Gastro-entérologie",
    category: "Maladies de l'œsophage et de l'estomac (K20-K31)",
    codes: [
      { code: "K20", name: "Œsophagite", symptoms: "Pyrosis, dysphagie, douleur rétrosternale, odynophagie", related: "K21, K22" },
      { code: "K21", name: "Reflux gastro-œsophagien (RGO)", symptoms: "Pyrosis, régurgitations acides, toux chronique, laryngite", related: "K20, K22" },
      { code: "K25", name: "Ulcère gastrique", symptoms: "Épigastralgie postprandiale, nausées, hémorragie digestive possible, lié à H. pylori/AINS", related: "K26, K27" },
      { code: "K26", name: "Ulcère duodénal", symptoms: "Douleur épigastrique de faim, soulagée par l'alimentation, périodicité", related: "K25, K27" },
      { code: "K29", name: "Gastrite", symptoms: "Épigastralgies, nausées, satiété précoce, dyspepsie, H. pylori fréquent", related: "K25, K30" },
    ],
  },
  {
    specialty: "Gastro-entérologie",
    category: "Maladies intestinales (K50-K63)",
    codes: [
      { code: "K50", name: "Maladie de Crohn", symptoms: "Douleurs abdominales, diarrhée chronique, AEG, fistules, atteinte iléale terminale, granulomes", related: "K51, K52" },
      { code: "K51", name: "Rectocolite hémorragique (RCH)", symptoms: "Rectorragies, diarrhée glairo-sanglante, ténesme, épreintes, atteinte rectale constante", related: "K50, K52" },
      { code: "K52", name: "Colite non infectieuse", symptoms: "Douleurs abdominales, diarrhée, colite microscopique, colite médicamenteuse", related: "K50, K51" },
      { code: "K56", name: "Occlusion intestinale", symptoms: "Douleurs abdominales, vomissements, arrêt des matières et des gaz, distension abdominale, NHA", related: "K57, K60" },
      { code: "K57", name: "Diverticulose et diverticulite", symptoms: "Douleur FIG (sigmoïdite), fièvre, défense, risque de perforation/abcès, hémorragie diverticulaire", related: "K56, K63" },
      { code: "K58", name: "Syndrome de l'intestin irritable", symptoms: "Douleurs abdominales liées à la défécation, ballonnements, alternance diarrhée/constipation", related: "K59, K52" },
      { code: "K59", name: "Troubles fonctionnels intestinaux", symptoms: "Constipation chronique, diarrhée fonctionnelle, ballonnements", related: "K58" },
      { code: "K60", name: "Fissure et fistule anale", symptoms: "Douleur anale à la défécation, rectorragies, contracture sphinctérienne", related: "K61, K62" },
      { code: "K62", name: "Maladies de l'anus et du rectum", symptoms: "Hémorroïdes, prolapsus rectal, rectorragies, prurit anal", related: "K60, K64" },
    ],
  },
  {
    specialty: "Gastro-entérologie",
    category: "Maladies hépatobiliaires et pancréatiques (K70-K87)",
    codes: [
      { code: "K70", name: "Hépatopathie alcoolique", symptoms: "Hépatite alcoolique (ictère, fièvre, hépatalgie), stéatose, cirrhose, hépatite aiguë grave", related: "K74, K76" },
      { code: "K73", name: "Hépatite chronique", symptoms: "Souvent asymptomatique, fatigue, transaminases élevées, risque de cirrhose", related: "K74, B18" },
      { code: "K74", name: "Cirrhose hépatique", symptoms: "Ictère, ascite, varices œsophagiennes, encéphalopathie, TP bas, hypoalbuminémie, thrombopénie", related: "K70, K76, C22" },
      { code: "K75", name: "Hépatite auto-immune", symptoms: "Fatigue, ictère, transaminases élevées, hypergammaglobulinémie, anticorps anti-LKM/anti-muscle lisse", related: "K73, K74" },
      { code: "K76", name: "Stéatose hépatique non alcoolique (NAFLD/MASLD)", symptoms: "Souvent asymptomatique, hépatomégalie, transaminases modérément élevées, syndrome métabolique", related: "K74, E66" },
      { code: "K80", name: "Lithiase biliaire", symptoms: "Colique hépatique, douleur HCD post-prandiale, ictère si calcul du cholédoque", related: "K81, K83" },
      { code: "K81", name: "Cholécystite aiguë", symptoms: "Douleur HCD, fièvre, Murphy positif, épaississement vésiculaire à l'échographie", related: "K80, K83" },
      { code: "K83", name: "Angiocholite", symptoms: "Triade de Charcot : fièvre + ictère + douleur HCD, obstacle biliaire infecté", related: "K80, K81" },
      { code: "K85", name: "Pancréatite aiguë", symptoms: "Douleur épigastrique intense transfixiante, lipase > 3N, vomissements, défense", related: "K86, K80" },
      { code: "K86", name: "Pancréatite chronique", symptoms: "Douleurs abdominales récurrentes, insuffisance exocrine (stéatorrhée), diabète, calcifications", related: "K85, E11" },
    ],
  },

  // ──────── DERMATOLOGIE ────────
  {
    specialty: "Dermatologie",
    category: "Dermatoses courantes (L00-L99)",
    codes: [
      { code: "L01", name: "Impétigo", symptoms: "Croûtes mélicériques dorées, vésicules puis bulles, contagieux, enfant", related: "L02, L03" },
      { code: "L02", name: "Abcès cutané / furoncle", symptoms: "Nodule inflammatoire douloureux, collection de pus, fièvre si sévère", related: "L01, L03" },
      { code: "L03", name: "Cellulite / Dermohypodermite bactérienne", symptoms: "Placard inflammatoire chaud, douloureux, fièvre, porte d'entrée, traînée lymphangitique", related: "A46, L02" },
      { code: "L20", name: "Dermatite atopique (eczéma)", symptoms: "Prurit intense, plaques érythémateuses vésiculeuses puis sèches, plis de flexion, terrain atopique", related: "L23, J45" },
      { code: "L23", name: "Dermatite de contact allergique", symptoms: "Eczéma localisé au site de contact, prurit, vésicules, limites nettes", related: "L20, L25" },
      { code: "L40", name: "Psoriasis", symptoms: "Plaques érythémato-squameuses bien limitées, coudes, genoux, cuir chevelu, ongles, rhumatisme psoriasique", related: "L41, M07" },
      { code: "L50", name: "Urticaire", symptoms: "Papules œdémateuses prurigineuses fugaces, dermographisme, angioœdème possible", related: "L50.1, T78" },
      { code: "L51", name: "Érythème polymorphe / Stevens-Johnson / Lyell", symptoms: "Lésions en cocarde, bulles, décollement cutané, érosions muqueuses, médicaments", related: "L50, T88" },
      { code: "L63", name: "Pelade (Alopecia areata)", symptoms: "Plaque d'alopécie non cicatricielle, cuir chevelu, auto-immune", related: "L65, L66" },
      { code: "L70", name: "Acné", symptoms: "Comédons, papules, pustules, nodules, visage/dos, excès de sébum, adolescence", related: "L72, L73" },
      { code: "L80", name: "Vitiligo", symptoms: "Macules achromiques (dépigmentées), bien limitées, symétriques, auto-immun", related: "L81" },
      { code: "L82", name: "Kératose séborrhéique", symptoms: "Lésion verruqueuse brunâtre, posée sur la peau, bénigne, sujet âgé", related: "L57, D23" },
    ],
  },

  // ──────── RHUMATOLOGIE ────────
  {
    specialty: "Rhumatologie",
    category: "Arthropathies et dorsalgies (M00-M54)",
    codes: [
      { code: "M05", name: "Polyarthrite rhumatoïde séropositive", symptoms: "Polyarthrite bilatérale symétrique des petites articulations, raideur matinale, FR/ACPA+", related: "M06, M13" },
      { code: "M10", name: "Goutte", symptoms: "Arthrite aiguë du gros orteil (podagre), hyperuricémie, tophi, lithiase urique", related: "M11, E79" },
      { code: "M11", name: "Chondrocalcinose", symptoms: "Arthrite aiguë du genou/poignet, calcifications des cartilages, cristaux de pyrophosphate de calcium", related: "M10, M15" },
      { code: "M15", name: "Polyarthrose", symptoms: "Douleurs mécaniques de plusieurs articulations, raideur, déformations (nodules d'Heberden)", related: "M16, M17" },
      { code: "M16", name: "Coxarthrose", symptoms: "Douleur mécanique de la hanche, limitation de la rotation interne, pincement articulaire", related: "M15, M17" },
      { code: "M17", name: "Gonarthrose", symptoms: "Douleur mécanique du genou, craquements, épanchement, genu varum/valgum", related: "M15, M16" },
      { code: "M32", name: "Lupus érythémateux systémique", symptoms: "Érythème en aile de papillon, arthralgies, photosensibilité, néphrite, ANA+, anti-ADN+", related: "M33, M35" },
      { code: "M34", name: "Sclérodermie systémique", symptoms: "Sclérose cutanée, Raynaud, atteinte pulmonaire (FPI, HTAP), atteinte digestive, rénale", related: "M35, J84" },
      { code: "M35.0", name: "Syndrome de Gougerot-Sjögren", symptoms: "Xérostomie (bouche sèche), xérophtalmie (yeux secs), polyarthralgies, fatigue", related: "M32, M34" },
      { code: "M45", name: "Spondylarthrite ankylosante", symptoms: "Lombalgies inflammatoires nocturnes, raideur matinale, sacro-iliite, HLA-B27, enthésite, uvéite", related: "M46, M07" },
      { code: "M47", name: "Spondylose (arthrose rachidienne)", symptoms: "Cervicalgie/dorsalgie/lombalgie mécanique, raideur, canal lombaire étroit", related: "M54, M50" },
      { code: "M50", name: "Discopathie cervicale / Hernie discale cervicale", symptoms: "Cervico-brachialgie, névralgie cervicale, paresthésies du membre supérieur", related: "M51, M54" },
      { code: "M51", name: "Hernie discale lombaire", symptoms: "Lombo-sciatique, lombo-cruralgie, Lasègue positif, déficit moteur possible", related: "M54, M50" },
      { code: "M54", name: "Lombalgie", symptoms: "Douleur lombaire, contracture musculaire, raideur rachidienne, la plus fréquente des douleurs rachidiennes", related: "M51, M47" },
    ],
  },

  // ──────── NÉPHROLOGIE / UROLOGIE ────────
  {
    specialty: "Néphrologie / Urologie",
    category: "Maladies rénales et urinaires (N00-N39)",
    codes: [
      { code: "N00", name: "Glomérulonéphrite aiguë", symptoms: "Hématurie, protéinurie, HTA, œdèmes, insuffisance rénale aiguë, post-infectieuse", related: "N03, N04" },
      { code: "N03", name: "Glomérulonéphrite chronique", symptoms: "Protéinurie persistante, hématurie microscopique, IRC progressive", related: "N00, N18" },
      { code: "N04", name: "Syndrome néphrotique", symptoms: "Protéinurie > 3 g/j, hypoalbuminémie, œdèmes, hyperlipidémie, risque thrombotique", related: "N00, N03" },
      { code: "N10", name: "Pyélonéphrite aiguë", symptoms: "Fièvre > 38,5°C, frissons, douleur lombaire, signes urinaires inconstants, ECBU positif", related: "N30, N11" },
      { code: "N17", name: "Insuffisance rénale aiguë", symptoms: "Oligurie/anurie, élévation rapide de la créatinine, hyperkaliémie, acidose, surcharge", related: "N18, N19" },
      { code: "N18", name: "Insuffisance rénale chronique (IRC)", symptoms: "Asymptomatique longtemps, fatigue, anorexie, nausées, anémie, HTA, œdèmes, prurit si avancée", related: "N17, N19" },
      { code: "N20", name: "Lithiase urinaire (calcul rénal)", symptoms: "Colique néphrétique (douleur lombo-abdominale brutale, irradiant vers les OGE), hématurie, agitation", related: "N23, N13" },
      { code: "N30", name: "Cystite", symptoms: "Brûlures mictionnelles, pollakiurie, urgenturies, hématurie, pas de fièvre", related: "N10, N34" },
      { code: "N39", name: "Infection urinaire sans précision", symptoms: "Signes urinaires, ECBU positif (bactériurie > 10³-10⁵ UFC/mL + leucocyturie)", related: "N30, N10" },
      { code: "N40", name: "Hypertrophie bénigne de la prostate (HBP)", symptoms: "Dysurie, pollakiurie nocturne, jet faible, miction impérieuse, résidu post-mictionnel", related: "N41, C61" },
      { code: "N41", name: "Prostatite", symptoms: "Douleur périnéale, fièvre, dysurie, TR douloureux, ECBU positif", related: "N40, N30" },
    ],
  },

  // ──────── OPHTALMOLOGIE ────────
  {
    specialty: "Ophtalmologie",
    category: "Maladies de l'œil (H00-H59)",
    codes: [
      { code: "H01", name: "Blépharite / Chalazion / Orgelet", symptoms: "Inflammation palpébrale, croûtes, tuméfaction, douleur localisée", related: "H10" },
      { code: "H10", name: "Conjonctivite", symptoms: "Œil rouge, larmoiement, sécrétions (purulentes si bactérien), prurit (allergique)", related: "H01, H16" },
      { code: "H16", name: "Kératite", symptoms: "Douleur oculaire, photophobie, larmoiement, baisse d'acuité visuelle, ulcère cornéen", related: "H10, B00" },
      { code: "H20", name: "Uvéite", symptoms: "Douleur oculaire, photophobie, BAV, cercle périkératique, synéchies, tyndall", related: "H30, M45" },
      { code: "H25", name: "Cataracte", symptoms: "BAV progressive, photophobie, éblouissement, vision trouble, opacification du cristallin", related: "H26" },
      { code: "H33", name: "Décollement de rétine", symptoms: "Phosphènes, myodésopsies (mouches volantes), puis amputation du champ visuel, urgence", related: "H35" },
      { code: "H35", name: "Rétinopathie (diabétique, hypertensive)", symptoms: "BAV progressive, microanévrysmes, exsudats, hémorragies rétiniennes, néovaisseaux", related: "E11, I10" },
      { code: "H40", name: "Glaucome", symptoms: "GPAO : BAV lente, rétrécissement du champ visuel. GFA : douleur oculaire intense, œil rouge, BAV brutale, nausées", related: "H42" },
      { code: "H46", name: "Névrite optique (NORB)", symptoms: "BAV brutale unilatérale, douleur à la mobilisation oculaire, dyschromatopsie, SEP", related: "G35, H47" },
    ],
  },

  // ──────── ORL ────────
  {
    specialty: "ORL",
    category: "Maladies de l'oreille, du nez et de la gorge (H60-H95, J30-J39)",
    codes: [
      { code: "H60", name: "Otite externe", symptoms: "Otalgie exacerbée par la mobilisation du pavillon, otorrhée, prurit", related: "H65, H66" },
      { code: "H65", name: "Otite moyenne aiguë séreuse", symptoms: "Hypoacousie, sensation d'oreille bouchée, tympan mat, épanchement rétrotympanique", related: "H66" },
      { code: "H66", name: "Otite moyenne aiguë purulente", symptoms: "Otalgie intense, fièvre, otorrhée si perforation, tympan bombé congestif", related: "H65, H70" },
      { code: "H81", name: "Vertige paroxystique positionnel bénin (VPPB)", symptoms: "Vertiges rotatoires brefs positionnels, manœuvre de Dix-Hallpike positive, nystagmus", related: "H82, H81.0" },
      { code: "H81.0", name: "Maladie de Ménière", symptoms: "Vertiges rotatoires par crises, acouphènes, surdité de perception fluctuante, sensation de plénitude auriculaire", related: "H81, H83" },
      { code: "H90", name: "Surdité de transmission", symptoms: "Hypoacousie, Rinne négatif, Weber latéralisé côté atteint, otospongiose, otite chronique", related: "H91" },
      { code: "H91", name: "Surdité de perception", symptoms: "Hypoacousie, Rinne positif, Weber latéralisé côté sain, presbyacousie, neurinome", related: "H90" },
      { code: "J01", name: "Sinusite aiguë", symptoms: "Douleur faciale, congestion nasale, rhinorrhée purulente, fièvre, pesanteur faciale", related: "J32, J00" },
      { code: "J32", name: "Sinusite chronique", symptoms: "Obstruction nasale chronique, rhinorrhée postérieure, anosmie, polypose naso-sinusienne", related: "J01, J33" },
      { code: "J35", name: "Hypertrophie des amygdales et végétations", symptoms: "Obstruction nasale, ronflements, apnées du sommeil, otites récidivantes (enfant)", related: "J03, G47" },
      { code: "J38", name: "Dysphonie / Pathologie des cordes vocales", symptoms: "Enrouement, fatigue vocale, nodules/polypes des cordes vocales, laryngite", related: "C32, J04" },
    ],
  },

  // ──────── GYNÉCOLOGIE / OBSTÉTRIQUE ────────
  {
    specialty: "Gynécologie / Obstétrique",
    category: "Grossesse et complications (O00-O99) et gynécologie (N60-N98)",
    codes: [
      { code: "N60", name: "Mastopathie bénigne", symptoms: "Mastodynie, nodule mammaire mobile, fibroadénome, kystes mammaires", related: "N63, C50" },
      { code: "N70", name: "Salpingite / Infection génitale haute", symptoms: "Douleurs pelviennes, fièvre, leucorrhées, métrorragies, douleur à la mobilisation utérine", related: "N73, N74" },
      { code: "N80", name: "Endométriose", symptoms: "Dysménorrhée sévère, dyspareunie, douleurs pelviennes chroniques, infertilité", related: "N97, N83" },
      { code: "N83", name: "Kyste de l'ovaire", symptoms: "Douleur pelvienne latéralisée, pesanteur, complication (torsion, rupture, hémorragie)", related: "N80, C56" },
      { code: "N91", name: "Aménorrhée", symptoms: "Absence de règles, primaire (jamais eu de règles) ou secondaire (arrêt > 3 mois)", related: "E28, N97" },
      { code: "N92", name: "Ménorragies / Métrorragies", symptoms: "Règles abondantes ou prolongées, saignements utérins anormaux, anémie ferriprive", related: "N93, D25" },
      { code: "O00", name: "Grossesse extra-utérine (GEU)", symptoms: "Douleur pelvienne, métrorragies, hCG positif sans GIU, risque de rupture/choc hémorragique", related: "O02, O20" },
      { code: "O14", name: "Pré-éclampsie", symptoms: "HTA gravidique ≥ 140/90 + protéinurie, œdèmes, risque d'éclampsie (convulsions)", related: "O15, O10" },
      { code: "O24", name: "Diabète gestationnel", symptoms: "Hyperglycémie diagnostiquée pendant la grossesse, macrosomie fœtale", related: "E11, E13" },
      { code: "O46", name: "Hémorragie ante-partum", symptoms: "Saignement vaginal au 3e trimestre, placenta praevia, hématome rétroplacentaire", related: "O44, O45" },
      { code: "O72", name: "Hémorragie du post-partum", symptoms: "Saignement > 500 mL après accouchement, atonie utérine, rétention placentaire, urgence", related: "O73" },
    ],
  },

  // ──────── PÉDIATRIE ────────
  {
    specialty: "Pédiatrie",
    category: "Affections courantes de l'enfant",
    codes: [
      { code: "P07", name: "Prématurité / Petit poids de naissance", symptoms: "Naissance < 37 SA, détresse respiratoire, hypothermie, hypoglycémie, ictère", related: "P22, P59" },
      { code: "P22", name: "Détresse respiratoire du nouveau-né (MMH)", symptoms: "Geignement, tirage, cyanose, maladie des membranes hyalines", related: "P07" },
      { code: "P59", name: "Ictère néonatal", symptoms: "Jaunisse, bilirubine élevée, ictère physiologique ou pathologique, photothérapie", related: "P07, P55" },
      { code: "J21", name: "Bronchiolite du nourrisson", symptoms: "Dyspnée expiratoire, sibilants, distension thoracique, VRS, nourrisson < 2 ans", related: "J45, J20" },
      { code: "K21.0", name: "RGO du nourrisson", symptoms: "Régurgitations, vomissements post-prandiaux, irritabilité, mauvaise prise pondérale", related: "K21" },
      { code: "R56", name: "Convulsions fébriles", symptoms: "Crise convulsive lors d'un épisode fébrile (> 38°C), enfant 6 mois-5 ans, bénigne si simple", related: "G40" },
    ],
  },

  // ──────── MÉDECINE INTERNE / URGENCES ────────
  {
    specialty: "Médecine interne / Urgences",
    category: "Symptômes, signes et résultats anormaux (R00-R99)",
    codes: [
      { code: "R00", name: "Anomalies du rythme cardiaque", symptoms: "Tachycardie, bradycardie, palpitations, arythmie", related: "I48, I49" },
      { code: "R04", name: "Hémoptysie / Épistaxis", symptoms: "Saignement d'origine respiratoire ou nasale", related: "J18, C34" },
      { code: "R07", name: "Douleur thoracique", symptoms: "Précordiale, rétrosternale, pleurale — diagnostic différentiel SCA, EP, dissection, pneumothorax", related: "I21, I26, J93" },
      { code: "R10", name: "Douleur abdominale", symptoms: "Aiguë ou chronique, localisation oriente le diagnostic (FID, FIG, épigastre, HCD)", related: "K35, K80, K85" },
      { code: "R11", name: "Nausées et vomissements", symptoms: "Symptôme non spécifique, rechercher cause digestive, neurologique, métabolique, médicamenteuse", related: "R10, K29" },
      { code: "R17", name: "Ictère", symptoms: "Coloration jaune de la peau et des muqueuses, bilirubine élevée, pré/intra/post-hépatique", related: "K74, K80, B16" },
      { code: "R31", name: "Hématurie", symptoms: "Macroscopique ou microscopique, urologique (tumeur, lithiase) ou néphrologique (glomérulopathie)", related: "N20, C67, N00" },
      { code: "R42", name: "Vertige", symptoms: "Sensation de rotation, central (AVC, tumeur) ou périphérique (VPPB, Ménière, névrite vestibulaire)", related: "H81, I63" },
      { code: "R50", name: "Fièvre d'origine indéterminée", symptoms: "Fièvre > 38,3°C pendant > 3 semaines sans diagnostic après bilan initial, infections, cancers, maladies systémiques", related: "A41, C81, M32" },
      { code: "R51", name: "Céphalée", symptoms: "Primaire (migraine, céphalée de tension, AVF) ou secondaire (HSA, méningite, HTIC, Horton)", related: "G43, G44, I60" },
      { code: "R55", name: "Syncope", symptoms: "Perte de connaissance brève, récupération spontanée, vasovagale, cardiaque, neurologique", related: "I44, I45, G40" },
      { code: "R56", name: "Convulsions", symptoms: "Mouvements anormaux involontaires, perte de connaissance, morsure de langue, confusion post-critique", related: "G40, G41" },
      { code: "R57", name: "Choc", symptoms: "Hypotension, tachycardie, marbrures, confusion — septique, hypovolémique, cardiogénique, anaphylactique", related: "A41, I21, T78" },
      { code: "R63", name: "Anorexie et amaigrissement", symptoms: "Perte de poids involontaire > 5 % en 6 mois, AEG, rechercher cancer, infection, maladie systémique", related: "C80, R50" },
      { code: "R65", name: "Syndrome de réponse inflammatoire systémique (SRIS/Sepsis)", symptoms: "Fièvre, tachycardie, polypnée, leucocytose, dysfonction d'organe si sepsis", related: "A41, R57" },
    ],
  },

  // ──────── TRAUMATOLOGIE / ORTHOPÉDIE ────────
  {
    specialty: "Traumatologie / Orthopédie",
    category: "Traumatismes et fractures (S00-T98)",
    codes: [
      { code: "S06", name: "Traumatisme crânien", symptoms: "Céphalées, perte de connaissance, amnésie, vomissements, confusion, embarrure, hématome", related: "S09, I62" },
      { code: "S22", name: "Fracture de côte", symptoms: "Douleur thoracique augmentée à l'inspiration, crépitation, risque de pneumothorax/hémothorax", related: "S27, J93" },
      { code: "S32", name: "Fracture du rachis lombaire", symptoms: "Douleur rachidienne, risque neurologique (syndrome de la queue de cheval)", related: "S12, S22" },
      { code: "S42", name: "Fracture de l'épaule (clavicule, humérus proximal)", symptoms: "Douleur, impotence fonctionnelle, déformation, attitude des traumatisés du membre supérieur", related: "S52" },
      { code: "S52", name: "Fracture de l'avant-bras (radius, ulna)", symptoms: "Douleur, déformation (Pouteau-Colles au poignet), impotence fonctionnelle", related: "S62, S42" },
      { code: "S62", name: "Fracture de la main / doigt", symptoms: "Douleur, gonflement, impotence fonctionnelle, déformation, entorse grave du pouce (ski)", related: "S52" },
      { code: "S72", name: "Fracture du fémur / col fémoral", symptoms: "Raccourcissement et rotation externe du MI (FESF), impotence totale, sujet âgé, douleur inguinale", related: "S82, M80" },
      { code: "S82", name: "Fracture de la jambe (tibia, fibula, cheville)", symptoms: "Douleur, impotence, déformation, fracture bi/tri-malléolaire", related: "S72, S92" },
      { code: "S83", name: "Lésion ligamentaire du genou", symptoms: "Craquement, gonflement rapide (hémarthrose), instabilité, tiroir antérieur (LCA)", related: "M23, S82" },
      { code: "T78.2", name: "Choc anaphylactique", symptoms: "Hypotension brutale, bronchospasme, urticaire/angioœdème, contact allergène, urgence vitale", related: "T78, R57" },
      { code: "T78", name: "Réaction allergique sévère", symptoms: "Urticaire géant, angioœdème, dyspnée, signes de choc", related: "T78.2, L50" },
    ],
  },
];

export function getICD10Codes(): KnowledgeEntry[] {
  const entries: KnowledgeEntry[] = [];

  for (const group of groups) {
    const codesText = group.codes
      .map(
        (c) =>
          `${c.code} — ${c.name} : ${c.symptoms}. Codes associés : ${c.related}.`
      )
      .join("\n");

    entries.push({
      source: "icd10-cim10",
      title: `CIM-10 — ${group.category} (${group.specialty})`,
      content: `Classification CIM-10 (ICD-10) — ${group.specialty}\nCatégorie : ${group.category}\n\n${codesText}`,
      metadata: {
        specialty: group.specialty,
        category: group.category,
        codeRange: group.category.match(/\(([^)]+)\)/)?.[1] ?? "",
        codeCount: group.codes.length,
        language: "fr",
        type: "icd10_classification",
      },
    });

    if (group.codes.length > 8) {
      const mid = Math.ceil(group.codes.length / 2);
      const firstHalf = group.codes.slice(0, mid);
      const secondHalf = group.codes.slice(mid);

      entries.pop();

      entries.push({
        source: "icd10-cim10",
        title: `CIM-10 — ${group.category} (${group.specialty}) — Partie 1`,
        content: `Classification CIM-10 (ICD-10) — ${group.specialty}\nCatégorie : ${group.category}\n\n${firstHalf.map((c) => `${c.code} — ${c.name} : ${c.symptoms}. Codes associés : ${c.related}.`).join("\n")}`,
        metadata: {
          specialty: group.specialty,
          category: group.category,
          codeRange: group.category.match(/\(([^)]+)\)/)?.[1] ?? "",
          codeCount: firstHalf.length,
          language: "fr",
          type: "icd10_classification",
          part: 1,
        },
      });

      entries.push({
        source: "icd10-cim10",
        title: `CIM-10 — ${group.category} (${group.specialty}) — Partie 2`,
        content: `Classification CIM-10 (ICD-10) — ${group.specialty}\nCatégorie : ${group.category} (suite)\n\n${secondHalf.map((c) => `${c.code} — ${c.name} : ${c.symptoms}. Codes associés : ${c.related}.`).join("\n")}`,
        metadata: {
          specialty: group.specialty,
          category: group.category,
          codeRange: group.category.match(/\(([^)]+)\)/)?.[1] ?? "",
          codeCount: secondHalf.length,
          language: "fr",
          type: "icd10_classification",
          part: 2,
        },
      });
    }
  }

  return entries;
}
