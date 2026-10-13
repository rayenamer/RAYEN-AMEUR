// ============================================================
//  CONTENU DE LA PRÉSENTATION — c'est le seul fichier à remplir.
//  Tout champ laissé vide ("") s'affiche en gris comme repère.
//  Ajoutez / supprimez des éléments dans les listes librement.
// ============================================================

// ---------- Diapo 1 : couverture ----------
export const profil = {
  prenom: "Rayen",
  nom: "Ameur",
  titre: "Etudiant Alternant a l'ESIEE-IT", // ex : « Développeur Full-Stack en alternance »
  // Déposez vos 5 photos dans /public/photos/ avec ces noms
  photos: [
    "photos/image.png",
    "https://ik.imagekit.io/qypbatx8h/director%20of%20partnerships.jfif?updatedAt=1757731314008",
    "https://ik.imagekit.io/qypbatx8h/RayenAmeur.jpeg?updatedAt=1757728242042",
    "https://ik.imagekit.io/qypbatx8h/businessDeveloper.jpeg?updatedAt=1757730688579",
    "photos/hackathon.png",
  ],
};

// ---------- Diapo 2 : parcours (style CV) ----------
export const parcours = {
  formations: [
    { periode: "2026-2028", diplome: "Double Diplôme d’ingénieur ", etablissement: "ESIEE-IT" },
    { periode: "2022-2026", diplome: "Cycle ingénieur en Technologies de l’Information", etablissement: "ESPRIT" },
    { periode: "2018-2022", diplome: "Baccalaureat mathematiques", etablissement: "Lycée " },
  ],
  experiences: [
    { periode: "juil 2026-aout 2026", poste: "Ingénieur AI stagiaire", entreprise: "Banque National Agricole" },
    { periode: "juil 2026-aout 2026", poste: "Ingénieur AI stagiaire", entreprise: "Banque National Agricole" },
    { periode: "nov 2025-juil 2026", poste: "Co-Fondateur", entreprise: "Edugate" },
    { periode: "aout 2025-jan 2026", poste: "Data analyste", entreprise: "Aiesec International" },
    { periode: "Juil 2025-aout2026", poste: "Ingénieur AI stagiaire", entreprise: "Discoevry Intech" },
    { periode: "Juil 2024-aout 2024", poste: "Ingénieur logiciel Stagiaire", entreprise: "Poulina Group Holding" },
    { periode: "Juil 2023-aout 2023", poste: "Ingénieur logiciel Stagiaire", entreprise: "Poulina Group Holding" },
    { periode: "Nov 2023-Juil 2025", poste: "Team Leader", entreprise: "Aiesec en Tunisie" },
  ],
  competences: [
  "RAG (Retrieval-Augmented Generation)",
  "Harness Engineering",
  "PyTorch / Hugging Face",
  "Docker & Kubernetes",
  "MLOps / LLMOps (CI/CD, monitoring)",
  "Bases vectorielles (pgvector, Qdrant, Pinecone)",
  "LangChain / LlamaIndex",
  "Python/FastAPI",
],
  langues: ["Francais", "Anglais", "Arabe"],
};

// ---------- Diapo 3 : certificats professionnels ----------
// Déposez les logos dans /public/certificats/ avec ces noms
export const certificats = [
  { nom: "IBM AI Engineering Specialization", organisme: "IBM", date: "2025", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", lien: "https://www.coursera.org/account/accomplishments/verify/7WJ51OFEH7CV" },
  { nom: "Explainable Machine Learning (XAI)", organisme: "Duke UNiversity ", date: "2025", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Duke_University_logo.svg", lien: "https://www.coursera.org/account/accomplishments/verify/7WJ51OFEH7CV" },
  { nom: "Introduction to Computer Vision and Image Processing", organisme: "IBM", date: "2025", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", lien: "https://www.coursera.org/account/accomplishments/verify/AZAJPOEWVOIO" },
  { nom: "Advanced AI and Machine Learning Techniques and Capstone", organisme: "Microsoft", date: "2025", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", lien: "https://www.coursera.org/account/accomplishments/verify/JICLZQM3TQUN" },
 ];

// ---------- Diapo 4 : aujourd'hui (étudiant, double diplôme) ----------
export const statut = {
  accroche: "Étudiant admis en double diplôme", // ex : « Étudiant admis en double diplôme »

  diplome1: {
    intitule: "Cycle ingénieur en Technologies de l’Information",
    ecole: "ESPRIT",
    periode: "2022-2026",
  },
  // Deuxième diplôme, en alternance
  diplome2: {
    intitule: "Cycle ingénieur en Technologies de l’Information",
    ecole: "ESIEE-IT",
    periode: "2026-2028",
    rythme: "5 semaines entreprise / 4 semaines école", // ex : « 3 semaines entreprise / 1 semaine école »
  },
};

// ---------- Diapos d'expériences (une diapo par élément) ----------
export const experiences = [
  {
    titre: "Ingénieur IA Stagiaire",
    entreprise: "Banque Nationale Agricole (BNA)",
    periode: "Juil. 2026 – Août 2026",
    contexte: "Stage",
    taches: [
      "Risque de crédit : modèle de scoring de défaut (PD) sur données clients, avec explicabilité des décisions (SHAP)",
      "Assistant RAG interne pour interroger la réglementation BCT / Bâle III et les procédures de crédit",
      "Pipeline d'évaluation des modèles et reporting automatisé pour les analystes risques",
    ],
    techs: [
      { nom: "Python", detail: "Pandas, Scikit-learn, XGBoost, SHAP" },
      { nom: "LLM & RAG", detail: "LangChain, embeddings, base vectorielle (Qdrant)" },
      { nom: "Data & API", detail: "SQL, FastAPI" },
      { nom: "Déploiement", detail: "Docker, Git, Bash" },
    ],
  },
    {
    titre: "Ingénieur IA Stagiaire",
    entreprise: "Poulina Group Holding (PGH)",
    periode: "Juil. 2026 – Août 2026",
    contexte: "Stage – Risque de marché",
    taches: [
      "Prévision des prix des matières premières (maïs, soja, acier) par modèles de séries temporelles et ML pour anticiper les achats du groupe",
      "Mesure de l'exposition au risque de change (TND/EUR/USD) : VaR, stress tests et simulations Monte-Carlo",
      "Agent IA d'analyse de marché : synthèse automatique des actualités et rapports matières premières (LLM + RAG)",
      "Tableau de bord de suivi des risques avec alertes automatiques pour la direction financière",
    ],
    techs: [
      { nom: "Python", detail: "Pandas, NumPy, Statsmodels, Prophet, LightGBM" },
      { nom: "LLM & Agents", detail: "LangChain, tool calling, RAG, embeddings" },
      { nom: "Data & Visualisation", detail: "SQL, Streamlit " },
      { nom: "Déploiement", detail: "Docker, Git, FastAPI" },
    ],
  },
    {
    titre: "Co-fondateur & Lead AI Engineer",
    entreprise: "Edugate",
    periode: "Nov. 2025 – Juil. 2026",
    contexte: "Startup EdTech",
    taches: [
      "Étude de marché et validation du besoin auprès d'étudiants et d'établissements (entretiens, analyse concurrentielle, définition du MVP)",
      "Conception et développement d'une plateforme full stack (Quarkus, Angular) déployée sur le cloud",
      "Agent conversationnel RAG de questions-réponses sur les programmes, admissions et contenus pédagogiques",
      "Système de recommandation hybride (LightFM, factorisation matricielle + features de profil) pour orienter les étudiants vers les formations adaptées, avec gestion du cold-start",
    ],
    techs: [
      { nom: "Backend & Frontend", detail: "Java Quarkus, Angular, TypeScript, PostgreSQL" },
      { nom: "LLM & RAG", detail: "LangChain, embeddings, base vectorielle, évaluation des réponses" },
      { nom: "Machine Learning", detail: "Python, LightFM, Sentence-Transformers, Scikit-learn (évaluation Precision@K, NDCG)" },
      { nom: "Cloud & DevOps", detail: "Docker, CI/CD, déploiement cloud (AWS / Azure)" },
    ],
  },
    {
    titre: "Data Analyst",
    entreprise: "AIESEC International",
    periode: "aout 2025-jan 2026",
    contexte: "Engagement associatif",
    taches: [
      "Analyse des données d'échanges internationaux et du funnel de recrutement (inscriptions, candidatures, réalisations) pour identifier les leviers de conversion",
      "Collecte, nettoyage et préparation de données issues de plusieurs sources pour fiabiliser le reporting",
      "Automatisation des traitements et analyses statistiques avec Python",
      "Automatisation des tableaux de bord et rapports dans Google Sheets via Apps Script (JavaScript)",
    ],
    techs: [
      { nom: "Python", detail: "Pandas, NumPy, Matplotlib, Seaborn" },
      { nom: "Google Sheets", detail: "Tableaux croisés, formules avancées, dashboards" },
      { nom: "Apps Script", detail: "JavaScript, automatisation de rapports et d'alertes" },
      { nom: "Data Visualisation", detail: "Looker Studio, KPIs de performance" },
    ],
  },
    {
    titre: "Ingénieur IA Stagiaire",
    entreprise: "Discovery Intech",
    periode: "Juil. 2025 – Août 2025",
    contexte: "Stage – Maintenance prédictive industrielle",
    taches: [
      "Conception d'un système de maintenance prédictive à partir de ~26 000 ordres de travail de maintenance d'un site industriel agroalimentaire (2019–2022)",
      "Pipeline de préparation des données : dédoublonnage, normalisation des catégories, imputation des valeurs manquantes et reconstruction des dates",
      "Classification du type de panne (mécanique, électrique, énergétique) par Random Forest (99 % d'accuracy) et expérimentation d'un fine-tuning BERT sur les descriptions d'interventions",
      "Prévision du nombre journalier de pannes par lissage exponentiel en walk-forward (MAE 3,3), avec un tableau de bord Angular pour les équipes de maintenance",
    ],
    techs: [
      { nom: "Machine Learning", detail: "Scikit-learn (Random Forest), Pandas, NumPy, Joblib" },
      { nom: "NLP", detail: "Hugging Face Transformers, BERT (fine-tuning classification)" },
      { nom: "Séries temporelles", detail: "Statsmodels (Simple Exponential Smoothing), MAE / RMSE" },
      { nom: "Application", detail: "Backend Python, Angular, TypeScript, Plotly" },
    ],
  },
];

// ---------- Dernière diapo : compatibilité avec l'entreprise ----------
export const compatibilite = {
  entreprise: "Tecma Aries",
  intro:
    "Tecma Aries conçoit et installe des lignes complètes d’emballage de fin de ligne (formage de cartons, encaissage, suremballage, palettisation) pour les industriels de l’agroalimentaire, de l’hygiène et de la cosmétique. En m’intéressant à l’usage de l’IA dans votre métier, j’ai identifié plusieurs pistes :",
  axes: [
    {
      titre: "Sur les machines",
      cas: [
        {
          titre: "Vision pour le contrôle qualité",
          texte:
            "Détecter un carton mal formé, un produit manquant dans une caisse, une étiquette ou un code-barres illisible, ou un film de suremballage déchiré.",
        },
      ],
    },
    {
      titre: "Sur les données machines",
      cas: [
        {
          titre: "Maintenance prédictive",
          texte:
            "Analyser les données des capteurs et des automates (vibrations, couples moteurs, temps de cycle) pour anticiper une panne avant l’arrêt de ligne.",
        },
        {
          titre: "Assistant pour les techniciens",
          texte:
            "Chatbot LLM / RAG branché sur la documentation, les historiques de pannes et les manuels, pour aider le SAV et les opérateurs à diagnostiquer les problèmes.",
        },
      ],
    },
    {
      titre: "En interne",
      cas: [
        {
          titre: "Simulation / jumeau numérique",
          texte: "Simuler et optimiser une ligne avant de la construire.",
          preuve: "Simulations Monte-Carlo — PGH",
        },
        {
          titre: "Traitement de documents",
          texte:
            "Analyser les cahiers des charges clients et générer la documentation technique.",
        },
      ],
    },
  ],
  conclusion:
    "Ces cas d’usage correspondent directement à des projets que j’ai déjà menés. Je serais ravi d’en discuter avec vous et de contribuer à intégrer l’IA dans vos lignes et vos services.",
};

// ---------- Dernière diapo : prototypes (cliquables → fenêtre détaillée) ----------
// « diagramme » : image de l'architecture (SVG ou PNG), ex. "prototypes/maintenance.svg"
//                 → déposez le fichier dans /public/prototypes/
// « video »     : fichier local ("prototypes/maintenance.mp4") ou lien YouTube / Vimeo / Google Drive
// « lien »      : (optionnel) URL du prototype en ligne
// Tout champ laissé vide ("") s'affiche comme repère dans la fenêtre.
export const prototypes = [
  { titre: "Maintenance prédictive", diagramme: "photos/architecture-predmaint.png", video: "photos/predMainDemo.webm", lien: "https://github.com/rayenamer/PredMaint" },
  { titre: "Assistant pour les techniciens", diagramme: "photos/assiTech.png", video: "", lien: "https://github.com/rayenamer/AssisTech" },
  { titre: "Traitement de documents", diagramme: "photos/traiteDoc.png", video: "", lien: "https://github.com/rayenamer/TraiteDoc" },
];
