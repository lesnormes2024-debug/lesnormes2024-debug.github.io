// Audit Normes — Référentiel structuré à partir de : Normes internationales d'audit interne 2024, IIA (FR).
// Contenu pédagogique original (reformulations) + références de source. Ne reproduit pas le texte de l'IIA.

export const SOURCE_LABEL = "Source : Normes internationales d'audit interne 2024 – IIA";

export const domains = [
  {
    code: "I", n: 1, title: "Mission de l'audit interne", pages: "15",
    summary: "Ce domaine énonce la Mission de l'audit interne : renforcer la capacité de l'organisation à créer de la valeur et à se protéger, en fournissant au Conseil et aux directions une assurance, un conseil, un éclairage et une prospective indépendants, objectifs et fondés sur les risques.",
    mission: "L'audit interne renforce la capacité de l'organisation à créer de la valeur, à se protéger et à durer, en apportant au Conseil et aux directions une assurance, un conseil, un éclairage et une prospective indépendants, objectifs et fondés sur les risques.",
    effects: [
      "L'atteinte des objectifs de l'organisation",
      "Ses processus de gouvernance, de gestion des risques et de contrôle",
      "Ses prises de décision et sa surveillance",
      "Sa réputation et sa crédibilité auprès des parties prenantes",
      "Sa capacité à servir l'intérêt général"
    ],
    conditions: [
      "Des professionnels qualifiés, au regard des Normes",
      "Une fonction indépendante rendant directement compte au Conseil",
      "Des auditeurs libres de toute influence indue et engagés dans des évaluations objectives"
    ]
  },
  {
    code: "II", n: 2, title: "Éthique et professionnalisme", pages: "16-37",
    summary: "Ce domaine décrit les comportements attendus des auditeurs internes : intégrité, objectivité, compétence, conscience professionnelle et confidentialité. Il remplace l'ancien code de déontologie de l'IIA et constitue le socle de la confiance accordée aux travaux des auditeurs."
  },
  {
    code: "III", n: 3, title: "Gouvernance de la fonction d'audit interne", pages: "38-60",
    summary: "Ce domaine fixe les exigences de collaboration entre le responsable de l'audit interne, le Conseil et la direction générale : mandat et charte, indépendance, qualifications, surveillance et qualité. Chaque norme identifie des « conditions indispensables » à réunir par le Conseil et la direction générale."
  },
  {
    code: "IV", n: 4, title: "Gestion de la fonction d'audit interne", pages: "61-97",
    summary: "Ce domaine couvre la gestion de la fonction par le responsable de l'audit interne : planification stratégique, méthodologies, plan d'audit, ressources (financières, humaines, technologiques), communication avec les parties prenantes et amélioration continue de la qualité."
  },
  {
    code: "V", n: 5, title: "Réalisation des activités d'audit interne", pages: "98-123",
    summary: "Ce domaine décrit le déroulement des missions, de la planification à la communication des résultats définitifs et au suivi des plans d'action : communication, évaluation des risques, objectifs et périmètre, critères, ressources, programme de travail, analyses et constats, conclusions, documentation et suivi."
  }
];

export const fundamentals = {
  pages: "7-9",
  intro: "Les Normes guident la pratique professionnelle de l'audit interne au niveau international et servent de base à l'évaluation de la qualité de la fonction. Au cœur des Normes figurent 15 principes directeurs ; chaque norme est divisée en exigences (obligatoires), en éléments à prendre en compte pour la mise en œuvre (pratiques privilégiées) et en exemples de preuves de conformité.",
  levels: [
    ["doit", "Exigence impérative (sections « Exigences » des Normes)"],
    ["devrait", "Pratique privilégiée (éléments de mise en œuvre)"],
    ["peut", "Pratique optionnelle (éléments de mise en œuvre)"]
  ],
  applicability: "Les Normes s'appliquent à toute personne ou fonction réalisant des services d'audit interne, que les auditeurs soient employés directement, via un prestataire externe, ou les deux.",
  smallFunctions: "Pour les fonctions de taille restreinte, respecter l'intégralité des Normes peut être difficile avec des ressources limitées ; un programme de qualité adéquat peut alors exiger une aide extérieure.",
  publicSector: "Dans le secteur public, un cadre politique, juridique et budgétaire spécifique peut modifier les modalités d'application ; un chapitre dédié décrit les stratégies de mise en conformité.",
  nonConformity: "Lorsqu'une exigence ne peut pas être respectée, des mesures alternatives répondant à l'esprit de la norme devraient être mises en œuvre, documentées et communiquées (cf. Norme 4.1)."
};

export const principles = [
  { domain: 2, n: 1, t: "Faire preuve d'intégrité", s: "Les auditeurs internes font preuve d'intégrité dans leur travail comme dans leur comportement : ils disent la vérité et agissent en conséquence, même lorsque c'est difficile. L'intégrité est à la base des autres principes." },
  { domain: 2, n: 2, t: "Faire preuve d'objectivité", s: "Les auditeurs internes veillent à une attitude impartiale et non biaisée. L'objectivité est un état d'esprit qui permet des jugements professionnels sans compromis ; l'indépendance de la fonction la rend possible." },
  { domain: 2, n: 3, t: "Faire preuve de compétence", s: "Les auditeurs internes mettent en pratique leurs savoirs, savoir-faire et aptitudes, et poursuivent leur développement professionnel pour améliorer l'efficacité et la qualité des services." },
  { domain: 2, n: 4, t: "Pratiquer avec conscience professionnelle", s: "Les auditeurs internes respectent les Normes, tiennent compte de la nature et du contexte des travaux et font preuve de scepticisme professionnel — sans que l'on leur demande d'être infaillibles." },
  { domain: 2, n: 5, t: "Préserver la confidentialité", s: "Les auditeurs internes utilisent l'information uniquement à des fins professionnelles et la protègent contre tout accès ou divulgation non autorisés." },
  { domain: 3, n: 6, t: "Autorité conférée par le Conseil", s: "Le Conseil définit et approuve le mandat de la fonction d'audit interne et l'accompagne dans l'exercice de celui-ci." },
  { domain: 3, n: 7, t: "Indépendance", s: "Le Conseil définit et préserve l'indépendance et les qualifications de la fonction d'audit interne, notamment via un rattachement direct au Conseil." },
  { domain: 3, n: 8, t: "Surveillance du Conseil", s: "Le Conseil assure la surveillance de la fonction d'audit interne pour veiller à son efficacité, notamment via le programme d'assurance et d'amélioration de la qualité." },
  { domain: 4, n: 9, t: "Planifier de manière stratégique", s: "Le responsable de l'audit interne planifie stratégiquement : compréhension des processus de gouvernance, risques et contrôle, stratégie, méthodologies et plan d'audit." },
  { domain: 4, n: 10, t: "Gérer les ressources", s: "Le responsable de l'audit interne obtient et déploie les ressources financières, humaines et technologiques nécessaires à la stratégie, au plan et au mandat." },
  { domain: 4, n: 11, t: "Communiquer avec efficacité", s: "Le responsable de l'audit interne aide la fonction à établir des relations de confiance avec les parties prenantes et à communiquer des informations exactes, objectives, claires, concises, constructives, complètes et en temps utile." },
  { domain: 4, n: 12, t: "Améliorer la qualité", s: "Le responsable de l'audit interne est responsable du respect des Normes et de l'amélioration continue, via un programme d'assurance et d'amélioration de la qualité." },
  { domain: 5, n: 13, t: "Planifier les missions avec efficacité", s: "Les auditeurs internes planifient chaque mission selon une approche systématique et rigoureuse : communication, évaluation des risques, objectifs et périmètre, critères, ressources et programme de travail." },
  { domain: 5, n: 14, t: "Réaliser les travaux de la mission", s: "Les auditeurs internes mettent en œuvre le programme de travail : collecte d'informations pertinentes, fiables et suffisantes, analyses, constats, recommandations et conclusions." },
  { domain: 5, n: 15, t: "Communiquer les résultats de la mission et suivre les plans d'action", s: "Les auditeurs internes communiquent les résultats définitifs aux parties concernées et suivent l'avancement de la mise en œuvre des recommandations et plans d'action." }
];

export const dailyPool = () => principles; // helper for "norme du jour" selection
