export interface KnowledgeEntry {
  source: string;
  title: string;
  content: string;
  metadata: Record<string, unknown>;
}

export function getHASGuidelines(): KnowledgeEntry[] {
  const guidelines: {
    condition: string;
    specialty: string;
    sections: { title: string; content: string }[];
  }[] = [
    {
      condition: "Hypertension artérielle (HTA)",
      specialty: "Cardiologie",
      sections: [
        {
          title: "Définition et épidémiologie",
          content: `L'hypertension artérielle (HTA) est définie par une pression artérielle systolique (PAS) ≥ 140 mmHg et/ou une pression artérielle diastolique (PAD) ≥ 90 mmHg, mesurée au cabinet médical et confirmée par des mesures ambulatoires (MAPA ou automesure). En France, l'HTA touche environ 30 % de la population adulte, soit environ 12 millions de personnes. C'est le facteur de risque cardiovasculaire modifiable le plus fréquent. La prévalence augmente avec l'âge : 40 % après 65 ans, 90 % après 85 ans. Seulement 50 % des hypertendus sont diagnostiqués, et parmi eux, seule la moitié a une PA contrôlée.`,
        },
        {
          title: "Critères diagnostiques",
          content: `Diagnostic de l'HTA selon la HAS : La mesure au cabinet doit être confirmée par des mesures en dehors du cabinet. MAPA (Mesure Ambulatoire de la PA sur 24h) : HTA confirmée si PA moyenne diurne ≥ 135/85 mmHg ou PA moyenne des 24h ≥ 130/80 mmHg. Automesure tensionnelle : HTA confirmée si moyenne ≥ 135/85 mmHg (protocole : 3 mesures matin et soir pendant 3 jours). Classification : PA normale haute 130-139/85-89, HTA grade 1 140-159/90-99, HTA grade 2 160-179/100-109, HTA grade 3 ≥ 180/110. Bilan initial : rechercher une atteinte des organes cibles (cœur, rein, vaisseaux, rétine) et une cause secondaire chez le sujet jeune.`,
        },
        {
          title: "Examens complémentaires recommandés",
          content: `Bilan initial de l'HTA recommandé par la HAS : Biologie : glycémie à jeun, bilan lipidique complet (CT, LDL-c, HDL-c, TG), créatininémie avec estimation du DFG (CKD-EPI), kaliémie (sans garrot), uricémie, bandelette urinaire (protéinurie, hématurie). Si positive : rapport albumine/créatinine urinaire. ECG de repos 12 dérivations. En cas de suspicion d'HTA secondaire : dosage de rénine et aldostérone plasmatiques (hyperaldostéronisme), métanéphrines et normétanéphrines urinaires des 24h ou plasmatiques (phéochromocytome), cortisol libre urinaire des 24h (Cushing), TSH (dysthyroïdie), écho-Doppler des artères rénales (sténose). Échocardiographie si suspicion d'HVG ou insuffisance cardiaque.`,
        },
        {
          title: "Prise en charge thérapeutique",
          content: `Objectifs tensionnels selon la HAS : PA < 140/90 mmHg en général, < 130/80 mmHg chez le diabétique et l'insuffisant rénal. Chez le sujet âgé > 80 ans : PAS < 150 mmHg sans hypotension orthostatique. Mesures hygiéno-diététiques systématiques : réduction du sel < 6 g/j, alimentation riche en fruits et légumes (régime DASH), activité physique régulière (30 min/j, 5j/semaine), limitation de l'alcool (≤ 2 verres/j homme, ≤ 1 femme), arrêt du tabac, perte de poids si IMC > 25. Traitement médicamenteux : monothérapie en première intention (IEC ou ARA2, inhibiteur calcique, ou diurétique thiazidique). Bithérapie si PA non contrôlée à 1 mois (association IEC/ARA2 + IC ou IEC/ARA2 + diurétique). Trithérapie si échec : IEC/ARA2 + IC + diurétique. HTA résistante : ajouter spironolactone 25 mg. Bêtabloquants en cas d'indication spécifique (post-IDM, insuffisance cardiaque, FA).`,
        },
      ],
    },
    {
      condition: "Diabète de type 2",
      specialty: "Endocrinologie",
      sections: [
        {
          title: "Définition et épidémiologie",
          content: `Le diabète de type 2 (DT2) est une maladie métabolique chronique caractérisée par une hyperglycémie résultant d'un défaut de sécrétion d'insuline et/ou d'une résistance à l'insuline. Critères diagnostiques : glycémie à jeun ≥ 1,26 g/L (7 mmol/L) à deux reprises, ou glycémie ≥ 2 g/L (11,1 mmol/L) à n'importe quel moment avec symptômes (polyurie, polydipsie, amaigrissement), ou HbA1c ≥ 6,5 %. En France, la prévalence est d'environ 5 % de la population (3,5 millions de personnes traitées). Le DT2 représente 90 % des cas de diabète. Facteurs de risque : âge > 45 ans, surpoids/obésité, sédentarité, antécédents familiaux, diabète gestationnel, syndrome métabolique.`,
        },
        {
          title: "Examens complémentaires recommandés",
          content: `Bilan initial du DT2 : HbA1c (objectif individualisé, généralement < 7 %), glycémie à jeun, bilan lipidique complet, créatininémie avec DFG, microalbuminurie (rapport albumine/créatinine urinaire), bilan hépatique (ASAT, ALAT, GGT), NFS, TSH si signes d'appel. Bilan des complications : fond d'œil annuel (rétinopathie diabétique), ECG de repos annuel, écho-Doppler des TSA si FdR, examen des pieds (monofilament, diapason), bilan dentaire annuel. Dépistage de la neuropathie : EMG si symptômes. Recherche d'AOMI : IPS (index de pression systolique). Suivi trimestriel : HbA1c, créatinine et DFG annuels, microalbuminurie annuelle.`,
        },
        {
          title: "Prise en charge thérapeutique",
          content: `Stratégie thérapeutique du DT2 selon la HAS (2024) : Objectif HbA1c individualisé : ≤ 7 % en général, ≤ 6,5 % si DT2 récent sans complication, ≤ 8 % si sujet âgé fragile ou comorbidités sévères, ≤ 9 % si espérance de vie limitée. Étape 1 : Mesures hygiéno-diététiques seules pendant 3-6 mois. Activité physique 150 min/semaine, alimentation équilibrée, perte de poids 5-10 %. Étape 2 : Metformine en monothérapie (première intention). Débuter à 500 mg/j, augmenter progressivement jusqu'à 2-3 g/j. CI : DFG < 30 mL/min. Étape 3 : Bithérapie si HbA1c non à l'objectif après 3-6 mois. Ajouter : inhibiteur SGLT2 (empagliflozine, dapagliflozine) si maladie cardiovasculaire ou rénale, ou agoniste GLP-1 (liraglutide, sémaglutide, dulaglutide) si obésité ou athérosclérose, ou iDPP4 (sitagliptine, vildagliptine) si les précédents ne conviennent pas, ou sulfamide hypoglycémiant si nécessaire (attention aux hypoglycémies). Étape 4 : Trithérapie ou insulinothérapie basale. Insuline basale (glargine, dégludec) en association avec metformine. Adapter selon profil patient et comorbidités.`,
        },
      ],
    },
    {
      condition: "Insuffisance cardiaque",
      specialty: "Cardiologie",
      sections: [
        {
          title: "Définition et classification",
          content: `L'insuffisance cardiaque (IC) est un syndrome clinique caractérisé par des symptômes (dyspnée, fatigue, œdèmes) causés par une anomalie structurelle ou fonctionnelle du cœur, entraînant une élévation des pressions intracardiaques et/ou un débit cardiaque insuffisant. Classification selon la FEVG : IC à fraction d'éjection réduite (ICFEr) : FEVG ≤ 40 %. IC à fraction d'éjection modérément réduite (ICFEmr) : FEVG 41-49 %. IC à fraction d'éjection préservée (ICFEp) : FEVG ≥ 50 %. Classification fonctionnelle NYHA : Classe I (pas de limitation), Classe II (limitation légère), Classe III (limitation marquée), Classe IV (symptômes au repos). Prévalence en France : 1-2 % de la population adulte, 10 % après 70 ans. Première cause d'hospitalisation après 65 ans.`,
        },
        {
          title: "Critères diagnostiques et examens",
          content: `Diagnostic de l'IC : Clinique : dyspnée d'effort puis de repos, orthopnée, dyspnée paroxystique nocturne, fatigue, œdèmes des membres inférieurs, turgescence jugulaire, reflux hépato-jugulaire, crépitants pulmonaires, hépatomégalie. Biomarqueurs : BNP > 100 pg/mL ou NT-proBNP > 300 pg/mL (valeur prédictive négative excellente si taux normaux). Échocardiographie transthoracique : examen clé — évalue FEVG, dimensions cavitaires, valvulopathies, pressions de remplissage, PAPS. Examens complémentaires : ECG 12 dérivations (recherche BBG, séquelles d'IDM, FA, HVG), radiographie thoracique (cardiomégalie, signes de congestion), biologie (NFS, ionogramme, créatinine/DFG, bilan hépatique, ferritine/CST, TSH, glycémie, bilan lipidique, BNP/NT-proBNP). Coronarographie si suspicion d'étiologie ischémique. IRM cardiaque si doute diagnostique.`,
        },
        {
          title: "Prise en charge thérapeutique",
          content: `Traitement de l'ICFEr (FEVG ≤ 40 %) — les 4 piliers : 1) IEC (ramipril, énalapril) ou ARNI (sacubitril/valsartan) si toléré — réduction de mortalité de 20 %. 2) Bêtabloquants (bisoprolol, carvédilol, métoprolol succinate, nébivolol) — introduction à faible dose, titration progressive. 3) Antagonistes des récepteurs minéralocorticoïdes (spironolactone 25-50 mg ou éplérénone) — si FEVG ≤ 35 % et symptômes persistants. 4) Inhibiteurs SGLT2 (dapagliflozine 10 mg ou empagliflozine 10 mg) — bénéfice additionnel indépendant du statut diabétique. Diurétiques de l'anse (furosémide, bumétanide) pour soulager la congestion (traitement symptomatique). Dispositifs : DAI si FEVG ≤ 35 % malgré traitement optimal > 3 mois, CRT si FEVG ≤ 35 % + BBG + QRS ≥ 150 ms. Mesures associées : restriction sodée modérée, activité physique adaptée, vaccination grippe et pneumocoque, programme d'éducation thérapeutique.`,
        },
      ],
    },
    {
      condition: "Bronchopneumopathie chronique obstructive (BPCO)",
      specialty: "Pneumologie",
      sections: [
        {
          title: "Définition et diagnostic",
          content: `La BPCO est une maladie respiratoire chronique caractérisée par des symptômes respiratoires persistants (dyspnée, toux, expectoration) et une obstruction bronchique non complètement réversible. Diagnostic spirométrique : rapport VEMS/CVF < 0,70 après bronchodilatation. Classification GOLD de la sévérité de l'obstruction : GOLD 1 (légère) VEMS ≥ 80 %, GOLD 2 (modérée) 50 % ≤ VEMS < 80 %, GOLD 3 (sévère) 30 % ≤ VEMS < 50 %, GOLD 4 (très sévère) VEMS < 30 %. Facteur de risque principal : tabagisme (80-90 % des cas). Autres : exposition professionnelle (poussières, fumées), pollution atmosphérique, déficit en alpha-1 antitrypsine. Prévalence en France : 5-10 % des adultes > 45 ans, 3,5 millions de personnes concernées. Sous-diagnostiquée dans 70 % des cas.`,
        },
        {
          title: "Examens complémentaires",
          content: `Bilan de la BPCO : Spirométrie (EFR) avec test de réversibilité : examen clé, indispensable au diagnostic. Mesurer VEMS, CVF, rapport VEMS/CVF, et capacité de diffusion du CO (DLCO). Gaz du sang artériels : en cas de VEMS < 50 % ou de signes d'insuffisance respiratoire. Rechercher hypoxémie (PaO2 < 60 mmHg) et hypercapnie (PaCO2 > 45 mmHg). Radiographie thoracique : distension thoracique, aplatissement des coupoles diaphragmatiques, augmentation de l'espace clair rétrosternal. Scanner thoracique : recherche d'emphysème, de bronchectasies, ou de nodule suspect. NFS : recherche de polyglobulie (hypoxémie chronique). Alpha-1 antitrypsine : dosage systématique au moins une fois. ECG et échocardiographie : si suspicion d'hypertension pulmonaire ou de cœur pulmonaire. Test de marche de 6 minutes : évaluation fonctionnelle et pronostique. Score BODE (BMI, Obstruction, Dyspnée, Exercice).`,
        },
        {
          title: "Prise en charge thérapeutique",
          content: `Traitement de la BPCO selon les recommandations : Sevrage tabagique : mesure la plus efficace — substituts nicotiniques, varénicline. Traitement pharmacologique selon le groupe GOLD ABE : Groupe A (peu de symptômes, peu d'exacerbations) : bronchodilatateur de courte durée d'action à la demande. Groupe B (symptômes significatifs, peu d'exacerbations) : LABA (salmétérol, indacatérol, formotérol) ou LAMA (tiotropium, glycopyrronium, uméclidinium) au long cours. Groupe E (exacerbations fréquentes ≥ 2/an ou ≥ 1 hospitalisation) : LABA + LAMA d'emblée. Si éosinophiles ≥ 300/µL : LABA + LAMA + CSI (corticostéroïde inhalé). Réhabilitation respiratoire : recommandée dès le stade II (VEMS < 80 %), améliore la dyspnée, la tolérance à l'effort et la qualité de vie. Oxygénothérapie de longue durée : si PaO2 ≤ 55 mmHg ou PaO2 56-59 mmHg avec polyglobulie ou HTAP ou signes d'ICD. Vaccinations : grippe annuelle, pneumocoque, COVID-19. Traitement des exacerbations : bronchodilatateurs à courte durée d'action, corticothérapie systémique courte (5 jours), antibiothérapie si expectoration purulente.`,
        },
      ],
    },
    {
      condition: "Asthme",
      specialty: "Pneumologie",
      sections: [
        {
          title: "Définition et diagnostic",
          content: `L'asthme est une maladie inflammatoire chronique des voies aériennes caractérisée par une hyperréactivité bronchique et une obstruction bronchique variable et réversible. Symptômes : dyspnée sifflante, toux (souvent nocturne), oppression thoracique, sibilants. Diagnostic : Clinique évocatrice + confirmation par spirométrie : réversibilité significative du VEMS ≥ 12 % et ≥ 200 mL après bronchodilatateur. Si spirométrie normale : test de provocation à la méthacholine (PC20 < 16 mg/mL) ou test d'effort. Variabilité du DEP > 20 % sur 2 semaines. Classification de sévérité (paliers GINA) : Palier 1 (intermittent), Palier 2 (persistant léger), Palier 3 (persistant modéré), Palier 4 (persistant sévère), Palier 5 (sévère réfractaire). Prévalence en France : 6-7 % des adultes, 9-10 % des enfants. Environ 900 décès par an. Phénotypes : asthme allergique (le plus fréquent), asthme à éosinophiles, asthme d'effort, asthme professionnel, asthme de l'obèse.`,
        },
        {
          title: "Examens complémentaires",
          content: `Bilan de l'asthme : Spirométrie avec test de réversibilité : examen de référence. Courbe débit-volume avant et après bronchodilatateur. DEP (débit expiratoire de pointe) : suivi ambulatoire, variabilité. Bilan allergologique : prick-tests cutanés (acariens, pollens, moisissures, phanères d'animaux), IgE spécifiques si prick-tests non réalisables, IgE totales. Radiographie thoracique : au diagnostic (éliminer diagnostics différentiels). NFS avec formule : recherche d'éosinophilie (> 300/µL suggère un asthme éosinophilique). FeNO (fraction exhalée du monoxyde d'azote) : FeNO > 50 ppb chez l'adulte suggère une inflammation éosinophilique, utile pour guider le traitement par CSI. Scanner thoracique si asthme sévère ou atypique. Test de provocation bronchique à la méthacholine : si doute diagnostique avec spirométrie normale.`,
        },
        {
          title: "Prise en charge thérapeutique",
          content: `Traitement de l'asthme par paliers (GINA 2024 — approche préférentielle adulte) : Palier 1-2 : CSI faible dose (budésonide 200 µg ou fluticasone 100 µg) + formotérol à la demande (traitement MART — maintenance et secours). Palier 3 : CSI faible dose + LABA au long cours (budésonide/formotérol ou fluticasone/salmétérol). Palier 4 : CSI dose moyenne-forte + LABA. Ajouter tiotropium (LAMA) si contrôle insuffisant. Palier 5 : CSI forte dose + LABA + LAMA. Biothérapies selon phénotype : anti-IgE (omalizumab) si asthme allergique sévère, anti-IL5/IL5R (mépolizumab, benralizumab) si éosinophilique, anti-IL4R (dupilumab) si éosinophilique ou cortico-dépendant, anti-TSLP (tézépélumab). Corticothérapie orale au long cours : à éviter autant que possible. Mesures associées : éviction des allergènes, traitement du RGO, arrêt du tabac, plan d'action écrit pour les exacerbations. Critères de contrôle (4 questions sur 4 semaines) : symptômes diurnes ≤ 2/semaine, réveil nocturne 0, recours au BD de secours ≤ 2/semaine, limitation d'activité 0.`,
        },
      ],
    },
    {
      condition: "Épisode dépressif caractérisé",
      specialty: "Psychiatrie",
      sections: [
        {
          title: "Définition et critères diagnostiques",
          content: `L'épisode dépressif caractérisé (EDC) selon le DSM-5 requiert la présence d'au moins 5 symptômes pendant au moins 2 semaines, dont obligatoirement humeur dépressive ou perte d'intérêt/plaisir (anhédonie). Critères : 1) Humeur dépressive quasi-quotidienne, 2) Diminution marquée de l'intérêt ou du plaisir, 3) Perte ou gain de poids significatif (> 5 % en 1 mois), 4) Insomnie ou hypersomnie, 5) Agitation ou ralentissement psychomoteur, 6) Fatigue ou perte d'énergie, 7) Sentiment de dévalorisation ou culpabilité excessive, 8) Diminution de la concentration, 9) Pensées de mort récurrentes, idées suicidaires. Sévérité : léger (5-6 symptômes, retentissement modéré), modéré (7-8 symptômes), sévère (≥ 8 symptômes, retentissement majeur). Prévalence vie entière : 15-20 %. Ratio femme/homme : 2/1. Risque suicidaire : à évaluer systématiquement (échelle Columbia, RUD).`,
        },
        {
          title: "Examens complémentaires",
          content: `Bilan somatique à réaliser devant un EDC (éliminer une cause organique) : Biologie : NFS, CRP, ionogramme, calcémie, glycémie, bilan hépatique, TSH (hypothyroïdie), vitamine B12 et folates (carence), ferritine, cortisol (si signes de Cushing). Sérologies VIH et syphilis si contexte. Bilan toxicologique si suspicion d'addiction. Imagerie cérébrale (IRM) : si premier épisode tardif (> 50 ans), signes neurologiques focaux, ou atypicité clinique. ECG : avant prescription d'antidépresseur (certains allongent le QT). Évaluation psychométrique : échelle de Hamilton (HAM-D), PHQ-9, Beck Depression Inventory. Évaluation du risque suicidaire : systématique à chaque consultation.`,
        },
        {
          title: "Prise en charge thérapeutique",
          content: `Traitement de l'EDC selon la HAS : EDC léger : psychothérapie seule en première intention (TCC, thérapie interpersonnelle). Mesures hygiéno-diététiques : activité physique régulière (30 min 3-5 fois/semaine — niveau de preuve A), hygiène du sommeil, soutien social. EDC modéré à sévère : antidépresseur + psychothérapie. Première intention : ISRS (fluoxétine, sertraline, escitalopram, paroxétine) ou IRSN (venlafaxine, duloxétine). Évaluation de l'efficacité à 4-6 semaines à dose efficace. En cas de non-réponse : changement d'antidépresseur (même classe ou autre) ou potentialisation (lithium, aripiprazole, quétiapine). Durée du traitement : phase aiguë (6-12 semaines) + phase de consolidation (4-6 mois après rémission) + phase d'entretien si récurrences (≥ 2 épisodes : traitement ≥ 2 ans). EDC sévère avec caractéristiques psychotiques : antidépresseur + antipsychotique, ou ECT. Indications de l'ECT : résistance au traitement, urgence suicidaire, dénutrition sévère, caractéristiques psychotiques, catatonie. Arrêt progressif des antidépresseurs (réduction sur 4-8 semaines minimum).`,
        },
      ],
    },
    {
      condition: "Troubles anxieux généralisés",
      specialty: "Psychiatrie",
      sections: [
        {
          title: "Définition et critères diagnostiques",
          content: `Le trouble anxieux généralisé (TAG) est caractérisé par une anxiété et des soucis excessifs et incontrôlables, survenant la plupart du temps pendant au moins 6 mois, concernant plusieurs domaines (travail, santé, famille). Critères DSM-5 : anxiété et soucis excessifs + au moins 3 des 6 symptômes suivants : agitation ou sensation d'être survolté, fatigabilité, difficultés de concentration, irritabilité, tension musculaire, perturbation du sommeil. Le trouble cause une détresse cliniquement significative ou une altération du fonctionnement. Diagnostic différentiel : trouble panique, phobie sociale, TOC, TSPT, hyperthyroïdie, phéochromocytome, hypoglycémie, intoxication (caféine, substances). Prévalence vie entière : 5-8 %. Souvent comorbide avec EDC (60 %), trouble panique, abus de substances. Échelles d'évaluation : GAD-7, échelle d'Hamilton-Anxiété (HAM-A).`,
        },
        {
          title: "Prise en charge thérapeutique",
          content: `Traitement du TAG selon la HAS : Première intention : psychothérapie (TCC — techniques de relaxation, restructuration cognitive, exposition) et/ou traitement médicamenteux. Médicaments de première intention : ISRS (escitalopram 10-20 mg, paroxétine 20-50 mg, sertraline 50-200 mg) ou IRSN (venlafaxine LP 75-225 mg, duloxétine 60-120 mg). Délai d'efficacité : 2-4 semaines, efficacité optimale à 6-8 semaines. Deuxième intention : prégabaline (150-600 mg/j) — efficacité anxiolytique sans dépendance de type BZD. Buspirone (15-60 mg/j). Benzodiazépines : utilisation limitée à 12 semaines maximum en raison du risque de dépendance. Réservées aux situations d'anxiété aiguë sévère. Préférer les BZD à demi-vie longue (alprazolam LP). Durée du traitement : 6-12 mois minimum après rémission, puis réduction très progressive. Hydroxyzine : alternative pour l'anxiété légère, effet sédatif. Mesures associées : activité physique, réduction de la caféine, techniques de relaxation, méditation de pleine conscience.`,
        },
      ],
    },
    {
      condition: "Dysthyroïdies",
      specialty: "Endocrinologie",
      sections: [
        {
          title: "Hypothyroïdie — diagnostic et traitement",
          content: `Hypothyroïdie : déficit en hormones thyroïdiennes. Étiologie principale : thyroïdite de Hashimoto (auto-immune). Autres : post-thyroïdectomie, post-iode radioactif, médicamenteuse (amiodarone, lithium, immunothérapie), carence en iode. Diagnostic : TSH élevée (> 4 mUI/L) + T4L basse (hypothyroïdie franche) ou TSH élevée + T4L normale (hypothyroïdie fruste/infraclinique). Symptômes : fatigue, prise de poids, constipation, frilosité, bradycardie, sécheresse cutanée, myxœdème, ralentissement psychomoteur, troubles de la concentration, syndrome du canal carpien. Bilan : TSH, T4L, anticorps anti-TPO (Hashimoto), échographie thyroïdienne si nodule palpable. Traitement : lévothyroxine (L-T4) — dose initiale 1,6 µg/kg/j chez l'adulte jeune sans comorbidité cardiaque, débuter à 25-50 µg/j chez le sujet âgé ou coronarien, augmenter par paliers de 12,5-25 µg toutes les 4-6 semaines. Objectif : TSH dans les valeurs normales (0,4-4 mUI/L), prise à jeun le matin. Hypothyroïdie fruste : traiter si TSH > 10 mUI/L, ou TSH 4-10 avec symptômes, anti-TPO positifs, ou grossesse.`,
        },
        {
          title: "Hyperthyroïdie — diagnostic et traitement",
          content: `Hyperthyroïdie : excès d'hormones thyroïdiennes. Étiologie principale : maladie de Basedow (auto-immune). Autres : goitre multinodulaire toxique, adénome toxique, thyroïdite subaiguë de De Quervain, surcharge iodée. Symptômes : amaigrissement malgré un appétit conservé, tachycardie/palpitations, tremblements des extrémités, thermophobie, hypersudation, diarrhée, nervosité/irritabilité, insomnie, exophtalmie (Basedow). Diagnostic : TSH basse (< 0,1 mUI/L) + T4L et/ou T3L élevées. Bilan : TSH, T4L, T3L, anticorps anti-récepteurs de la TSH (TRAK — positifs dans Basedow), scintigraphie thyroïdienne (hyperfixation diffuse = Basedow, nodulaire = adénome/GMT toxique, blanche = thyroïdite). Échographie thyroïdienne + Doppler. Traitement de la maladie de Basedow : antithyroïdiens de synthèse (ATS) en première intention — carbimazole ou thiamazole (dose d'attaque 20-40 mg/j puis décroissance) ou propylthiouracile si CI. Durée : 12-18 mois. Bêtabloquants (propranolol) pour contrôle symptomatique. En cas de rechute ou CI aux ATS : iode radioactif (iode 131) ou thyroïdectomie totale. Surveillance sous ATS : NFS tous les 10 jours pendant 2 mois (risque d'agranulocytose — arrêt immédiat si fièvre/angine), bilan hépatique.`,
        },
      ],
    },
    {
      condition: "Anémie",
      specialty: "Hématologie",
      sections: [
        {
          title: "Définition et orientation diagnostique",
          content: `Anémie : diminution du taux d'hémoglobine en dessous des valeurs normales. Seuils OMS : homme < 13 g/dL, femme < 12 g/dL, femme enceinte < 11 g/dL. Orientation diagnostique par le VGM : Anémie microcytaire (VGM < 80 fL) : carence martiale (cause la plus fréquente), anémie inflammatoire, thalassémie, anémie sidéroblastique. Anémie normocytaire (VGM 80-100 fL) : anémie inflammatoire, insuffisance rénale chronique, hémorragie aiguë, anémie hémolytique, insuffisance médullaire. Anémie macrocytaire (VGM > 100 fL) : carence en vitamine B12 ou folates, syndrome myélodysplasique, alcoolisme, hypothyroïdie, médicaments (méthotrexate, azathioprine). Puis compter les réticulocytes : anémie régénérative (réticulocytes > 120 G/L) = cause périphérique (hémorragie, hémolyse), anémie arégénérative (réticulocytes < 120 G/L) = cause centrale (carence, moelle).`,
        },
        {
          title: "Examens complémentaires et traitement",
          content: `Bilan d'anémie : NFS complète (Hb, VGM, CCMH, réticulocytes), ferritine (meilleur marqueur de réserve en fer — basse si < 30 µg/L, attention : augmentée si inflammation), fer sérique + transferrine + CST (coefficient de saturation de la transferrine), CRP (contexte inflammatoire), bilan d'hémolyse si suspicion (LDH, bilirubine libre, haptoglobine, test de Coombs direct), vitamine B12 et folates sériques si macrocytaire, créatinine/DFG (insuffisance rénale), TSH, électrophorèse de l'hémoglobine si microcytaire sans carence martiale. Myélogramme si bilan étiologique négatif ou suspicion d'hémopathie. Traitement de l'anémie ferriprive : supplémentation en fer oral (sulfate ferreux 200 mg/j soit 65 mg de fer élément, pendant 3-6 mois), rechercher et traiter la cause (ménorragies, saignement digestif — FOGD + coloscopie si homme > 50 ans ou femme ménopausée). Fer IV (carboxymaltose ferrique) si intolérance orale ou malabsorption. Traitement de la carence en B12 : injections IM de cyanocobalamine (1000 µg/j pendant 7 jours, puis 1/semaine pendant 1 mois, puis 1/mois à vie si Biermer).`,
        },
      ],
    },
    {
      condition: "Douleur chronique",
      specialty: "Médecine de la douleur",
      sections: [
        {
          title: "Définition et évaluation",
          content: `La douleur chronique est définie comme une douleur persistant ou récurrente depuis plus de 3 mois, associée à une détresse émotionnelle et/ou un retentissement fonctionnel significatif. Classification CIM-11 : douleur chronique primaire (fibromyalgie, lombalgie chronique primaire, céphalée chronique), douleur chronique secondaire (post-chirurgicale, cancéreuse, neuropathique, musculosquelettique, viscérale). Évaluation multidimensionnelle : Intensité : EVA (échelle visuelle analogique 0-10), EN (échelle numérique). Caractère neuropathique : questionnaire DN4 (score ≥ 4/10 = composante neuropathique probable). Retentissement fonctionnel : questionnaire d'incapacité. Retentissement psychologique : HAD (Hospital Anxiety and Depression scale), échelle catastrophisme PCS. Qualité de vie : SF-36, EQ-5D. Prévalence : 20-30 % de la population générale. Impact socio-économique majeur : première cause d'arrêt de travail prolongé.`,
        },
        {
          title: "Prise en charge thérapeutique",
          content: `Prise en charge de la douleur chronique selon la HAS — approche multimodale : Douleur nociceptive : Palier 1 OMS — paracétamol (1 g × 3-4/j, max 3 g/j chez le sujet âgé), AINS (ibuprofène, naproxène — durée limitée, CI si insuffisance rénale, ulcère, anticoagulants). Palier 2 — tramadol (attention : pas de codéine ni tramadol en association avec ISRS — risque sérotoninergique). Palier 3 — morphine et opioïdes forts : uniquement si échec des autres traitements, réévaluation régulière, contrat de soins. Douleur neuropathique (DN4 ≥ 4) : Première intention : prégabaline (150-600 mg/j) ou gabapentine (1200-3600 mg/j), ou antidépresseur tricyclique (amitriptyline 25-75 mg/j), ou duloxétine (60-120 mg/j). Deuxième intention : association de deux classes, emplâtre de lidocaïne (douleur neuropathique localisée), capsaïcine patch 8 %. Approches non médicamenteuses (essentielles) : exercice physique adapté (niveau de preuve élevé), kinésithérapie, TCC de la douleur, TENS (neurostimulation transcutanée), hypnose, méditation de pleine conscience, relaxation, programmes multidisciplinaires en centre de la douleur. Éviter les opioïdes au long cours dans la douleur chronique non cancéreuse (risque de mésusage, hyperalgésie induite).`,
        },
      ],
    },
    {
      condition: "Syndrome de l'intestin irritable (SII)",
      specialty: "Gastro-entérologie",
      sections: [
        {
          title: "Définition et diagnostic",
          content: `Le syndrome de l'intestin irritable (SII) est un trouble fonctionnel intestinal défini par les critères de Rome IV : douleur abdominale récurrente, en moyenne au moins 1 jour/semaine au cours des 3 derniers mois, associée à au moins 2 des critères suivants : liée à la défécation, associée à une modification de la fréquence des selles, associée à une modification de la consistance des selles. Sous-types selon l'échelle de Bristol : SII-D (diarrhée prédominante), SII-C (constipation prédominante), SII-M (mixte), SII-I (indéterminé). Prévalence : 10-15 % de la population, ratio F/H = 2/1. Diagnostic d'exclusion : éliminer les signaux d'alarme (âge > 50 ans sans coloscopie, rectorragies, amaigrissement involontaire, anémie, antécédents familiaux de cancer colorectal ou MICI, symptômes nocturnes). Diagnostic positif selon les critères de Rome IV sans bilan exhaustif si pas de signal d'alarme.`,
        },
        {
          title: "Examens et traitement",
          content: `Bilan minimal du SII : NFS, CRP, sérologie maladie cœliaque (anticorps anti-transglutaminase IgA + dosage IgA totales), TSH. Si SII-D : calprotectine fécale (élimine une MICI si < 50 µg/g). Coloscopie si signal d'alarme ou âge > 50 ans. Traitement du SII : Règles hygiéno-diététiques : alimentation régulière, mastication lente, hydratation suffisante. Régime pauvre en FODMAPs (efficace dans 50-80 % des cas — réintroduction progressive après 4-6 semaines d'éviction). Éviter le lactose si intolérance confirmée. Traitement symptomatique : Douleur : antispasmodiques (phloroglucinol, trimébutine, pinaverium, huile essentielle de menthe poivrée — efficacité démontrée). SII-D : lopéramide à la demande, cholestyramine si diarrhée biliaire. SII-C : laxatifs osmotiques (macrogol/PEG), linaclotide (Constella®), prunalopride si échec. Approches psycho : TCC, hypnothérapie dirigée sur l'intestin (hypnose — niveau de preuve A), antidépresseurs à faible dose (amitriptyline 10-25 mg si SII-D, ISRS si SII-C). Probiotiques : certaines souches (Bifidobacterium infantis 35624) peuvent améliorer les symptômes globaux.`,
        },
      ],
    },
    {
      condition: "Migraine",
      specialty: "Neurologie",
      sections: [
        {
          title: "Définition et critères diagnostiques",
          content: `Migraine sans aura (critères ICHD-3) : au moins 5 crises répondant aux critères suivants : céphalée durant 4-72 heures (sans traitement), au moins 2 caractéristiques parmi : unilatérale, pulsatile, intensité modérée à sévère, aggravée par l'activité physique de routine. Au moins 1 signe associé parmi : nausées et/ou vomissements, photophobie et phonophobie. Migraine avec aura : au moins 2 crises avec aura visuelle (scotome scintillant, phosphènes — le plus fréquent), sensitive, ou aphasique, se développant progressivement (> 5 min), durant 5-60 min, suivie d'une céphalée. Épidémiologie : prévalence 12-15 % (18 % des femmes, 6 % des hommes). Pic de fréquence : 25-55 ans. Migraine chronique : ≥ 15 jours de céphalée/mois dont ≥ 8 jours de migraine, depuis > 3 mois. Attention aux céphalées par abus médicamenteux (> 10 jours/mois de triptans ou > 15 jours/mois d'antalgiques simples).`,
        },
        {
          title: "Prise en charge thérapeutique",
          content: `Traitement de crise de migraine : Première intention : AINS (ibuprofène 400 mg, kétoprofène 100 mg, naproxène 500-1000 mg) ou aspirine 1000 mg + métoclopramide. Deuxième intention (si AINS insuffisants) : triptans (sumatriptan 50-100 mg PO ou 6 mg SC, rizatriptan 10 mg, élétriptan 40 mg, zolmitriptan 2,5 mg). CI des triptans : antécédents cardiovasculaires, HTA non contrôlée. Traitement de fond (si ≥ 4 crises/mois ou crises sévères impactant la qualité de vie) : Première intention : bêtabloquants (propranolol 40-240 mg/j — AMM, métoprolol), amitriptyline (10-50 mg/j si comorbidité dépressive ou tensionnelle), topiramate (50-100 mg/j — CI grossesse), candésartan (8-16 mg/j). Deuxième intention : flunarizine (10 mg/j, max 6 mois), valproate de sodium (CI femme en âge de procréer). Anti-CGRP (si ≥ 2 échecs de prophylaxie) : anticorps monoclonaux — érénumab (Aimovig® 70-140 mg/mois SC), frémanézumab (Ajovy® 225 mg/mois ou 675 mg/3 mois), galcanézumab (Emgality® 120 mg/mois). Rimégépant (Nurtec® — anti-CGRP oral, traitement de crise et prophylaxie). Mesures associées : identifier et éviter les facteurs déclenchants, hygiène de vie (sommeil régulier, exercice), tenir un agenda des crises.`,
        },
      ],
    },
    {
      condition: "Pneumonie aiguë communautaire",
      specialty: "Infectiologie / Pneumologie",
      sections: [
        {
          title: "Définition et diagnostic",
          content: `La pneumonie aiguë communautaire (PAC) est une infection du parenchyme pulmonaire acquise en milieu extrahospitalier ou dans les 48 premières heures d'hospitalisation. Agents pathogènes principaux : Streptococcus pneumoniae (pneumocoque — 30-50 % des cas), Mycoplasma pneumoniae (sujet jeune), Haemophilus influenzae (BPCO), Legionella pneumophila (forme grave), virus respiratoires (grippe, SARS-CoV-2, VRS). Diagnostic : Clinique : fièvre, toux, expectoration purulente, dyspnée, douleur thoracique pleurale, foyer de crépitants à l'auscultation. Radiographie thoracique : opacité alvéolaire systématisée (pneumocoque), opacités interstitielles bilatérales (atypiques/virus), abcès, pleurésie. Biologie : NFS, CRP, procalcitonine (> 0,25 µg/L en faveur d'une étiologie bactérienne), hémocultures si hospitalisation, antigénuries pneumocoque et Legionella (si forme grave). Score CRB-65 (ambulatoire) : Confusion, FR ≥ 30, PAS < 90 ou PAD ≤ 60, Âge ≥ 65 ans. Score 0 : ambulatoire, score 1 : évaluation hospitalière, score ≥ 2 : hospitalisation.`,
        },
        {
          title: "Antibiothérapie",
          content: `Antibiothérapie de la PAC selon les recommandations françaises : En ambulatoire, sujet jeune sans comorbidité : amoxicilline 1 g × 3/j PO pendant 5 jours (première intention — cible pneumocoque). Si suspicion d'atypique (sujet jeune, début progressif, toux sèche, signes extra-respiratoires) : macrolide (azithromycine 500 mg J1 puis 250 mg/j pendant 4 jours, ou clarithromycine 500 mg × 2/j) ou pristinamycine 1 g × 3/j. En ambulatoire, sujet âgé ou avec comorbidité : amoxicilline-acide clavulanique 1 g × 3/j. Réévaluation à 48-72 heures : si échec de l'amoxicilline, switcher vers un macrolide (ou inversement). Hospitalisation (PAC non grave) : amoxicilline IV 1 g × 3/j ou amoxicilline-acide clavulanique. Si allergie vraie aux pénicillines : C3G IV (ceftriaxone 1-2 g/j) + macrolide. PAC grave (soins intensifs/réanimation) : C3G IV (ceftriaxone 2 g/j ou céfotaxime 2 g × 3/j) + macrolide IV (spiramycine) ou fluoroquinolone antipneumococcique (lévofloxacine 500 mg × 2/j). Si suspicion de Legionella : macrolide à forte dose (spiramycine IV) ou fluoroquinolone. Durée : 5-7 jours pour la PAC non compliquée (critères d'arrêt : apyrexie > 48h, stabilité clinique).`,
        },
      ],
    },
    {
      condition: "Infection urinaire",
      specialty: "Infectiologie / Urologie",
      sections: [
        {
          title: "Classification et diagnostic",
          content: `Classification des infections urinaires (IU) : Cystite aiguë simple : femme jeune, non enceinte, sans facteur de risque de complication. Symptômes : brûlures mictionnelles, pollakiurie, urgenturies, hématurie macroscopique possible, pas de fièvre. Diagnostic : BU seule suffit (leucocytes + et/ou nitrites +). ECBU non nécessaire. Cystite à risque de complication : grossesse, anomalie de l'arbre urinaire, insuffisance rénale sévère, immunodépression, homme. ECBU systématique. Pyélonéphrite aiguë (PNA) : infection du parenchyme rénal. Fièvre > 38,5°C, frissons, douleur lombaire unilatérale (signe de Giordano), signes fonctionnels urinaires inconstants. Bilan : ECBU + NFS + CRP + créatinine. Échographie rénale dans les 24h (PNA simple) ou en urgence (PNA grave ou obstacle suspecté). Scanner abdominal si PNA compliquée ou hyperalgique. IU masculine : toujours considérée comme à risque de complication. ECBU systématique. Toucher rectal (prostatite ?). Agents pathogènes principaux : E. coli (70-80 %), Proteus mirabilis, Klebsiella, Staphylococcus saprophyticus (femme jeune).`,
        },
        {
          title: "Antibiothérapie",
          content: `Traitement des IU selon les recommandations SPILF 2024 : Cystite aiguë simple : fosfomycine-trométamol 3 g dose unique (première intention), pivmécillinam 400 mg × 2/j pendant 5 jours (deuxième intention). Éviter fluoroquinolones en première intention (épargne). Cystite à risque de complication : attendre l'antibiogramme si possible. Sinon : nitrofurantoïne 100 mg × 3/j pendant 5 jours (si DFG > 40), ou amoxicilline-acide clavulanique, ou fluoroquinolone, adapté à l'antibiogramme. PNA simple sans signe de gravité : fluoroquinolone PO (ciprofloxacine 500 mg × 2/j ou lévofloxacine 500 mg/j) pendant 5 jours (si pas d'utilisation dans les 6 mois), ou C3G IV (ceftriaxone 1 g/j) relais PO selon antibiogramme, durée totale 7 jours. PNA grave (sepsis) : C3G IV (ceftriaxone 2 g/j ou céfotaxime 2 g × 3/j) + amikacine 30 mg/kg/j IV dose unique quotidienne pendant 48h. Relais PO selon antibiogramme, durée 10-14 jours. IU masculine : fluoroquinolone 14 jours (bonne diffusion prostatique) ou cotrimoxazole 14-21 jours selon antibiogramme. Cystite gravidique : fosfomycine-trométamol dose unique ou pivmécillinam, ECBU de contrôle.`,
        },
      ],
    },
    {
      condition: "Arthrose",
      specialty: "Rhumatologie",
      sections: [
        {
          title: "Définition et diagnostic",
          content: `L'arthrose est la maladie articulaire la plus fréquente, caractérisée par une dégradation du cartilage articulaire, un remodelage osseux sous-chondral et une inflammation synoviale de bas grade. Localisations les plus fréquentes : genou (gonarthrose), hanche (coxarthrose), mains (articulations interphalangiennes distales — nodules d'Heberden, IPP — nodules de Bouchard, rhizarthrose du pouce), rachis. Diagnostic essentiellement clinique et radiographique : Clinique : douleur mécanique (aggravée par l'effort, soulagée par le repos), raideur matinale brève (< 30 minutes), limitation progressive de la mobilité, déformations articulaires, craquements. Radiographie (signes cardinaux) : pincement de l'interligne articulaire, ostéophytes, condensation de l'os sous-chondral, géodes. Classification Kellgren-Lawrence (0 à 4). La discordance radio-clinique est fréquente. Pas de bilan biologique spécifique : VS et CRP normales (sauf poussée congestive). Liquide articulaire si ponction : mécanique (< 2000 éléments/mm³). Prévalence : 17 % de la population française, augmente avec l'âge (65 % après 65 ans).`,
        },
        {
          title: "Prise en charge thérapeutique",
          content: `Traitement de l'arthrose selon les recommandations OARSI et HAS : Mesures non pharmacologiques (pilier du traitement) : éducation thérapeutique, exercice physique régulier (renforcement musculaire, aérobie — niveau de preuve A), perte de poids si surpoids (chaque kg perdu réduit la charge sur le genou de 4 kg), kinésithérapie, orthèses (semelles, genouillères, attelle de rhizarthrose), aides techniques (canne du côté sain). Traitement pharmacologique : Paracétamol : 1 g × 3/j en première intention (efficacité modeste), AINS topiques (diclofénac gel — efficaces pour le genou et les mains, bonne tolérance), AINS oraux (ibuprofène, naproxène, célécoxib — cures courtes, à la dose minimale efficace, attention aux CI gastro-rénales-cardiovasculaires). Infiltrations intra-articulaires de corticoïdes : en cas de poussée congestive (épanchement), effet à court terme (4-8 semaines), max 3-4/an/articulation. Acide hyaluronique intra-articulaire (visco-supplémentation) : gonarthrose, effet modéré et retardé. AASAL (anti-arthrosiques symptomatiques d'action lente) : chondroïtine sulfate, glucosamine — effet modeste, bonne tolérance. Chirurgie : prothèse articulaire (hanche, genou) si échec du traitement médical et retentissement fonctionnel majeur. Résultats excellents à long terme.`,
        },
      ],
    },
    {
      condition: "Polyarthrite rhumatoïde",
      specialty: "Rhumatologie",
      sections: [
        {
          title: "Diagnostic",
          content: `La polyarthrite rhumatoïde (PR) est un rhumatisme inflammatoire chronique auto-immun touchant principalement les articulations périphériques de manière bilatérale et symétrique. Critères de classification ACR/EULAR 2010 (score ≥ 6/10) : Atteinte articulaire : 1 grosse articulation (0 pts), 2-10 grosses (1), 1-3 petites (2), 4-10 petites (3), > 10 dont ≥ 1 petite (5). Sérologie : FR et ACPA négatifs (0), FR ou ACPA faiblement positifs (2), FR ou ACPA fortement positifs (3). Marqueurs d'inflammation : CRP et VS normales (0), CRP ou VS élevée (1). Durée des symptômes : < 6 semaines (0), ≥ 6 semaines (1). Présentation clinique typique : polyarthrite bilatérale et symétrique des petites articulations (MCP, IPP, MTP, poignets), raideur matinale prolongée > 30 minutes, gonflement articulaire (synovite), douleur inflammatoire (nocturne, dérouillage matinal). Atteinte précoce : MCP 2-3, IPP, poignets, MTP (squeeze test positif). Évolution : destruction articulaire progressive si non traitée.`,
        },
        {
          title: "Examens et traitement",
          content: `Bilan de la PR : Biologie : VS, CRP (syndrome inflammatoire), NFS, créatinine, bilan hépatique (pré-thérapeutique). Sérologie : facteur rhumatoïde (FR — sensibilité 70-80 %, spécificité modérée), anticorps anti-peptides citrullinés (ACPA/anti-CCP — spécificité > 95 %, apparaissent avant les symptômes). Imagerie : radiographies des mains/poignets/pieds face (érosions, pincement), échographie articulaire (synovite, érosions précoces, Doppler puissance), IRM si doute ou radiographies normales. Stratégie thérapeutique « Treat-to-Target » : Objectif : rémission (DAS28 < 2,6) ou faible activité (DAS28 < 3,2). Première intention : méthotrexate (MTX) 15-25 mg/semaine (PO ou SC) + acide folique. Évaluation à 3 mois (objectif : amélioration ≥ 50 %) et 6 mois (objectif : rémission). Si échec du MTX : bithérapie csDMARD (MTX + léflunomide ou sulfasalazine) ou biothérapie : anti-TNF (adalimumab, étanercept, infliximab, certolizumab, golimumab), anti-IL6 (tocilizumab, sarilumab), anti-CD20 (rituximab), CTLA4-Ig (abatacept), ou JAK inhibiteurs (tofacitinib, baricitinib, upadacitinib, filgotinib). Corticothérapie : prednisone ≤ 7,5 mg/j en « bridging therapy » (≤ 6 mois), décroissance rapide. Surveillance : DAS28 trimestriel, radiographies annuelles, bilan biologique régulier (NFS, transaminases, créatinine).`,
        },
      ],
    },
    {
      condition: "Reflux gastro-œsophagien (RGO)",
      specialty: "Gastro-entérologie",
      sections: [
        {
          title: "Diagnostic",
          content: `Le reflux gastro-œsophagien (RGO) est défini par le passage anormal du contenu gastrique dans l'œsophage. Symptômes typiques : pyrosis (brûlure rétrosternale ascendante, postprandiale, majorée par le décubitus et l'antéflexion), régurgitations acides. Diagnostic clinique si symptômes typiques chez un sujet jeune (< 50 ans) sans signe d'alarme. Signes d'alarme nécessitant une endoscopie (FOGD) : dysphagie, amaigrissement, anémie, hémorragie digestive, âge > 50 ans, symptômes résistants au traitement. Manifestations extra-digestives : toux chronique, laryngite postérieure, asthme, érosions dentaires, douleur thoracique non cardiaque. pH-métrie des 24h (± impédancemétrie) : gold standard pour le diagnostic, indiquée si symptômes atypiques ou endoscopie normale et résistance au traitement. Endoscopie : classification de Los Angeles des œsophagites (A à D). Complications : œsophagite peptique, sténose peptique, endobrachyœsophage (EBO/Barrett — risque d'adénocarcinome : surveillance par biopsies).`,
        },
        {
          title: "Traitement",
          content: `Traitement du RGO selon la HAS : Mesures hygiéno-diététiques : surélévation de la tête du lit, éviter le décubitus postprandial (attendre 2-3h), perte de poids si surpoids, éviter les repas copieux et tardifs, réduction alcool/tabac/café/aliments acides. Traitement médicamenteux : RGO typique sans signe d'alarme : IPP demi-dose (oméprazole 10-20 mg, ésoméprazole 20 mg, lansoprazole 15 mg, pantoprazole 20 mg, rabéprazole 10 mg) pendant 4 semaines. Si récidive : IPP à la demande ou en continu à dose minimale efficace. Antiacides et alginates (Gaviscon®) : traitement symptomatique d'appoint. Œsophagite sévère (Los Angeles C-D) : IPP pleine dose pendant 8 semaines, puis dose d'entretien au long cours. Endobrachyœsophage sans dysplasie : surveillance endoscopique avec biopsies tous les 3-5 ans. Avec dysplasie de bas grade : surveillance rapprochée ou traitement endoscopique (radiofréquence). Dysplasie de haut grade ou cancer superficiel : résection endoscopique. Traitement chirurgical (fundoplicature de Nissen) : RGO résistant avec preuve objective de reflux, patient jeune refusant le traitement au long cours. Effets indésirables des IPP au long cours : hypomaganésémie, risque fracturaire (modeste), infections à Clostridioides difficile, néphrite interstitielle (rare).`,
        },
      ],
    },
    {
      condition: "Ulcère gastroduodénal",
      specialty: "Gastro-entérologie",
      sections: [
        {
          title: "Diagnostic",
          content: `L'ulcère gastroduodénal (UGD) est une perte de substance de la muqueuse gastrique ou duodénale atteignant la musculaire muqueuse. Étiologies principales : infection à Helicobacter pylori (60-70 % des ulcères gastriques, 90 % des ulcères duodénaux), AINS/aspirine (20-25 %). Autres causes rares : syndrome de Zollinger-Ellison (gastrinome), maladie de Crohn, stress en réanimation. Symptômes : douleur épigastrique à type de crampe ou de faim douloureuse, rythmée par les repas (douleur postprandiale tardive pour l'ulcère duodénal, aggravée par les repas pour l'ulcère gastrique), périodique (poussées de quelques semaines). Complications : hémorragie digestive (hématémèse, méléna — urgence), perforation (douleur brutale en coup de poignard, péritonite), sténose pyloro-duodénale (vomissements). Diagnostic : FOGD (endoscopie œso-gastro-duodénale) avec biopsies systématiques (éliminer un cancer si ulcère gastrique, recherche de H. pylori par biopsies antrales et fundiques). Recherche de H. pylori : biopsies (CLO-test, anatomopathologie), test respiratoire à l'urée marquée (¹³C), antigène fécal.`,
        },
        {
          title: "Traitement",
          content: `Traitement de l'UGD : Éradication de H. pylori (si positif) : traitement probabiliste : quadrithérapie bismuthée (PYLERA® — sous-citrate de bismuth + tétracycline + métronidazole + IPP, 10 jours) ou quadrithérapie concomitante (IPP + amoxicilline + clarithromycine + métronidazole, 14 jours). Contrôle de l'éradication : test respiratoire à l'urée ¹³C, au moins 4 semaines après arrêt des IPP et 2 semaines après arrêt des antibiotiques. Traitement antisécrétoire : IPP pleine dose pendant 4-6 semaines (ulcère duodénal) ou 6-8 semaines (ulcère gastrique). Ulcère gastrique : endoscopie de contrôle à 6-8 semaines avec biopsies (éliminer un cancer). Ulcère lié aux AINS : arrêt de l'AINS si possible, IPP pleine dose pendant 4-8 semaines. Prévention de la récidive sous AINS : IPP au long cours si poursuite des AINS indispensable, surtout si antécédent d'UGD, âge > 65 ans, anticoagulant ou antiagrégant associé. Hémorragie ulcéreuse : hospitalisation urgente, IPP IV forte dose (bolus 80 mg puis 8 mg/h), endoscopie en urgence (dans les 24h), hémostase endoscopique (injection, clips, thermocoagulation). Score de Rockall et Blatchford pour stratification du risque.`,
        },
      ],
    },
    {
      condition: "Épilepsie",
      specialty: "Neurologie",
      sections: [
        {
          title: "Définition et classification",
          content: `L'épilepsie est une maladie neurologique chronique définie par la survenue d'au moins 2 crises épileptiques non provoquées espacées de plus de 24 heures, ou par une seule crise avec probabilité élevée de récurrence (> 60 %) sur 10 ans. Types de crises : Crises focales (partielles) : début dans un réseau limité d'un hémisphère. Sans altération de la conscience (anciennement « simples ») : motrices (clonies d'un membre), sensitives, sensorielles, végétatives, psychiques (déjà-vu). Avec altération de la conscience (anciennement « complexes ») : rupture de contact, automatismes (mastication, gestualisation). Avec généralisation secondaire (crise tonico-clonique bilatérale). Crises généralisées : engagement d'emblée des deux hémisphères. Tonico-cloniques (« grand mal »), absences (« petit mal » — enfant, suspension brève de conscience), myocloniques, toniques, atoniques. Syndromes épileptiques : épilepsie-absence de l'enfant, épilepsie myoclonique juvénile, épilepsie temporale mésiale, syndrome de West (spasmes infantiles), syndrome de Lennox-Gastaut. Prévalence : 0,5-1 % de la population.`,
        },
        {
          title: "Examens et traitement",
          content: `Bilan de l'épilepsie : EEG (électroencéphalogramme) : examen clé, recherche d'anomalies paroxystiques (pointes, pointes-ondes). EEG standard (30 min), EEG de sommeil, EEG prolongé (vidéo-EEG si chirurgie envisagée). IRM cérébrale : systématique (recherche de lésion structurelle — sclérose hippocampique, malformation corticale, tumeur, séquelle vasculaire). Biologie : ionogramme, glycémie, calcémie (exclure crises symptomatiques), bilan hépatique et NFS (pré-thérapeutique). Traitement antiépileptique : Épilepsie focale — première intention : lamotrigine ou lévétiracétam. Alternative : carbamazépine, oxcarbazépine, lacosamide. Épilepsie généralisée — première intention : valproate de sodium (CI absolue chez la femme en âge de procréer — tératogène). Alternative : lamotrigine, lévétiracétam. Absence : valproate, lamotrigine, éthosuximide. À éviter dans les épilepsies généralisées : carbamazépine, oxcarbazépine, phénytoïne (peuvent aggraver les absences et myoclonies). Règles : monothérapie d'abord, augmentation progressive, en cas d'échec : substitution ou bithérapie rationnelle. Durée : traitement au long cours (années). Arrêt envisageable après 2-5 ans sans crise (sous contrôle EEG). Mesures associées : hygiène de vie (sommeil régulier, éviter l'alcool), conduite automobile (réglementation : au moins 1 an sans crise).`,
        },
      ],
    },
    {
      condition: "Accident vasculaire cérébral (AVC)",
      specialty: "Neurologie / Urgences",
      sections: [
        {
          title: "Diagnostic et prise en charge initiale",
          content: `L'AVC est une urgence neurologique absolue (« Time is Brain »). Deux types : AVC ischémique (85 %) : obstruction d'une artère cérébrale (thrombus), et AVC hémorragique (15 %) : rupture d'un vaisseau intracérébral. Diagnostic clinique — signes d'alerte FAST : Face (paralysie faciale), Arm (déficit moteur d'un membre), Speech (troubles du langage), Time (appeler le 15/SAMU immédiatement). Autres symptômes : hémiparésie/hémiplégie, hémianopsie, troubles sensitifs unilatéraux, vertiges/ataxie brutale (AVC postérieur), céphalée brutale (hémorragie). Score NIHSS pour quantifier la sévérité. Prise en charge en urgence : Scanner cérébral sans injection en urgence (< 30 min) : élimine l'hémorragie. Angio-scanner des TSA et intracrânien : visualise l'occlusion. IRM cérébrale (séquence diffusion) : plus sensible que le scanner pour l'ischémie précoce. AVC ischémique — traitement de reperfusion : Thrombolyse IV (altéplase 0,9 mg/kg ou ténectéplase) : fenêtre 4h30 après le début des symptômes. Thrombectomie mécanique : occlusion de gros vaisseau (ACI, M1, basilaire), fenêtre jusqu'à 24h selon imagerie de perfusion. Hospitalisation en unité neuro-vasculaire (UNV) : réduit mortalité et handicap de 20 %.`,
        },
        {
          title: "Bilan étiologique et prévention secondaire",
          content: `Bilan étiologique de l'AVC ischémique : Classification TOAST : athérosclérose des gros vaisseaux, cardio-embolique, maladie des petites artères (lacunaire), autre étiologie, cryptogénique. Bilan systématique : IRM cérébrale, écho-Doppler des TSA (sténose carotidienne), ECG + monitoring cardiaque continu 24-72h (recherche de FA), échocardiographie transthoracique (± ETO si suspicion d'embolie cardiaque ou patient jeune), bilan lipidique, glycémie/HbA1c, NFS, bilan d'hémostase. Si AVC cryptogénique < 60 ans : Holter ECG prolongé ou moniteur cardiaque implantable (recherche de FA paroxystique), ETO, bilan de thrombophilie, recherche de foramen ovale perméable (FOP). Prévention secondaire : Antiagrégant plaquettaire : aspirine 75-300 mg/j (ou clopidogrel 75 mg/j si CI aspirine). Double antiagrégation (aspirine + clopidogrel) pendant 21 jours si AIT/AVC mineur (NIHSS ≤ 3). Anticoagulation (AOD — apixaban, rivaroxaban, edoxaban, ou dabigatran) si FA. Statine haute intensité (atorvastatine 80 mg) si LDL > 0,7 g/L. Antihypertenseur (objectif PA < 130/80 mmHg à distance de la phase aiguë). Endartériectomie carotidienne si sténose symptomatique ≥ 70 % (NASCET). Fermeture de FOP si AVC cryptogénique avec shunt significatif chez le patient < 60 ans. Rééducation : kinésithérapie, orthophonie (aphasie), ergothérapie. Mesures de prévention : arrêt du tabac, activité physique, contrôle glycémique.`,
        },
      ],
    },
  ];

  const entries: KnowledgeEntry[] = [];

  for (const g of guidelines) {
    for (const section of g.sections) {
      entries.push({
        source: "has-guidelines",
        title: `${g.condition} — ${section.title}`,
        content: section.content,
        metadata: {
          condition: g.condition,
          specialty: g.specialty,
          section: section.title,
          country: "France",
          language: "fr",
          type: "clinical_guideline",
        },
      });
    }
  }

  return entries;
}
