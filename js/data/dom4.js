// Domaine IV : Gestion de la fonction d'audit interne — contenu pédagogique original.
export const principles = [];

export const standards = [
{
  num: "9.1", title: "Processus de gouvernance, de gestion des risques et de contrôle", p: 9, pages: "63-64",
  sum: "Le responsable de l'audit interne comprend les processus de gouvernance, de gestion des risques et de contrôle (GRCS) de l'organisation, et évalue l'impact de leurs changements sur les services d'audit.",
  kw: ["gouvernance", "gestion des risques", "contrôle", "GRCS", "changement"],
  u: { g: "Que la stratégie et le plan d'audit interne s'appuient sur une connaissance à jour des processus GRCS de l'organisation.",
    r: ["Comprendre les processus GRCS et leur évolution ; en prendre compte dans la stratégie, les méthodologies et le plan.",
        "Évaluer l'impact des changements sur la capacité à fournir des services d'audit interne et planifier les actions.",
        "Rechercher les rapports émis par les autres prestataires d'assurance sur ces processus."],
    p: "Sources d'apprentissage : documents (cartographies, procédures), échanges avec la direction générale et le Conseil, participation à des réunions (sans rôle décisionnel), outils internes.",
    a: ["L'évaluation de l'impact des changements peut faire évoluer la stratégie et le plan d'audit.",
        "Exposer clairement la contribution attendue de l'audit interne évite les chevauchements et les lacunes."] },
  req: [
    ["Comprendre et prendre en compte les processus de gouvernance, de gestion des risques et de contrôle de l'organisation lors de l'élaboration de la stratégie, des méthodologies et du plan d'audit interne.", "D"],
    ["Évaluer l'impact des changements de ces processus sur les services d'audit interne et planifier les actions nécessaires.", "D"],
    ["S'informer sur les processus (documents, échanges, outils, rapports d'autres prestataires d'assurance).", "S"],
    ["Demander le point de vue des responsables de l'organisation sur les changements en cours ou prévus.", "S"],
    ["Exposer clairement sa contribution attendue aux processus GRCS de l'organisation.", "S"]
  ],
  impl: ["Apprendre à connaître l'organisation : documents de gouvernance, cartographies des risques, échanges réguliers avec la direction et le Conseil.", "Évaluer les changements (structure, systèmes, risques émergents) et en déduire les ajustements du plan."],
  ev: ["Politique documentée sur la prise en compte des changements des processus GRCS.", "Éléments démontrant la mise à jour de la stratégie, des méthodologies et du plan en fonction des changements.", "Notes d'échanges avec les responsables de l'organisation."],
  check: ["Les processus GRCS sont-ils documentés et compris par la fonction ?", "L'impact des changements est-il évalué et intégré au plan ?", "Les rapports d'autres prestataires d'assurance sont-ils consultés ?"],
  quiz: [
    { q: "Que doit faire le responsable de l'audit interne lorsque les processus de gouvernance, de gestion des risques et de contrôle de l'organisation changent ?", o: ["Ne rien faire, le plan reste fixe", "Évaluer l'impact des changements sur les services et planifier les actions nécessaires", "Supprimer les missions concernées", "Attendre le rapport d'audit externe"], a: 1, e: "Il doit évaluer l'impact des changements et planifier les actions nécessaires (Norme 9.1).", d: 0 },
    { q: "Comment le responsable de l'audit interne peut-il se familiariser avec les processus GRCS ?", o: ["Uniquement en auditant chaque activité", "En étudiant la documentation, en échangeant avec les responsables et en consultant les rapports d'autres prestataires d'assurance", "En confiant l'analyse à un prestataire externe", "En se limitant aux risques financiers"], a: 1, e: "La Norme 9.1 cite ces sources d'apprentissage, y compris la consultation des rapports des autres prestataires d'assurance.", d: 1 }
  ]
},
{
  num: "9.2", title: "Stratégie d'audit interne", p: 9, pages: "65-66",
  sum: "Le responsable de l'audit interne établit par écrit une stratégie soutenant les objectifs de l'organisation, la soumet au Conseil pour approbation, la communique, la met en œuvre et la revoit périodiquement.",
  kw: ["stratégie", "objectifs", "approbation", "priorités", "parties prenantes"],
  u: { g: "Que les services d'audit interne soient orientés par une stratégie écrite, approuvée et alignée sur les objectifs de l'organisation.",
    r: ["Élaborer et mettre en œuvre une stratégie soutenant les objectifs et les priorités de l'organisation, tenant compte des attentes du Conseil, de la direction générale et des autres parties prenantes.",
        "Établir la stratégie par écrit, la soumettre au Conseil pour approbation et communication, et la mettre en œuvre.",
        "Déterminer périodiquement si les résultats attendus de la stratégie demeurent appropriés ; apporter les changements nécessaires et en informer le Conseil et la direction générale."],
    p: "La stratégie peut couvrir les objectifs de la fonction, les activités (assurance, conseil, suivi, autres rôles), les ressources nécessaires et la périodicité de sa révision.",
    a: ["La stratégie complète le mandat et la charte : elle traduit les attentes en orientations concrètes.",
        "Les attentes des parties prenantes (Conseil, direction, régulateurs) doivent être intégrées dès l'élaboration."] },
  req: [
    ["Élaborer et mettre en œuvre une stratégie soutenant les objectifs et les priorités de l'organisation et prenant en compte les attentes des parties prenantes.", "D"],
    ["Établir la stratégie par écrit.", "D"],
    ["Soumettre la stratégie au Conseil pour approbation et communication.", "D"],
    ["Déterminer périodiquement si les résultats attendus demeurent appropriés ; apporter les changements nécessaires et en informer le Conseil et la direction générale.", "D"],
    ["Faire porter la stratégie sur les objectifs, les activités prévues, les ressources nécessaires et la périodicité de la révision.", "S"]
  ],
  impl: ["Aligner la stratégie sur les attentes du Conseil et de la direction générale exprimées dans la charte et le mandat.", "Revoir la stratégie lors des changements majeurs (stratégie d'entreprise, nouveau dirigeant, nouvelles normes)."],
  ev: ["Document de stratégie approuvé, avec date d'approbation et version.", "Procès-verbaux des réunions du Conseil sur l'approbation de la stratégie.", "Évaluation périodique et mise à jour de la stratégie communiquées au Conseil et à la direction générale."],
  check: ["Une stratégie écrite existe-t-elle et est-elle approuvée par le Conseil ?", "Est-elle communiquée et mise en œuvre ?", "Est-elle revue périodiquement et ajustée si nécessaire ?"],
  quiz: [
    { q: "La stratégie d'audit interne doit être :", o: ["Verbale, validée en réunion informelle", "Établie par écrit et soumise au Conseil pour approbation", "Définie par la direction générale seule", "Identique à celle du contrôle interne"], a: 1, e: "Le responsable de l'audit interne doit établir la stratégie par écrit, la soumettre au Conseil pour approbation et communication (Norme 9.2).", d: 0 },
    { q: "À quelle fréquence le responsable de l'audit interne doit-il déterminer si les résultats attendus de la stratégie demeurent appropriés ?", o: ["Périodiquement", "Une seule fois, à la création", "Uniquement tous les cinq ans", "Jamais, sauf si le Conseil le demande"], a: 0, e: "Il doit le déterminer périodiquement, apporter les changements nécessaires et en informer le Conseil et la direction générale (Norme 9.2).", d: 0 }
  ]
},
{
  num: "9.3", title: "Méthodologies", p: 9, pages: "66-68",
  sum: "Le responsable de l'audit interne conçoit des méthodologies permettant d'exécuter la stratégie et d'accomplir les responsabilités ; il les met en œuvre, les documente, les communique et en garantit l'appropriation par les auditeurs.",
  kw: ["méthodologies", "politiques", "procédures", "modèles", "outils"],
  u: { g: "Que la fonction dispose de méthodes de travail formalisées, cohérentes avec les Normes, connues et appliquées par tous les auditeurs.",
    r: ["Concevoir des méthodologies permettant d'exécuter la stratégie et d'accomplir les responsabilités de la fonction, en se fondant sur les attentes du Conseil et de la direction générale.",
        "Mettre en œuvre les méthodologies, les documenter et les communiquer, et garantir l'accès aux personnes concernées.",
        "Garantir l'appropriation des méthodologies : veiller à ce que les auditeurs aient les compétences nécessaires et une formation suffisante.",
        "Gérer les changements de méthodologies : évaluer la nécessité, élaborer, tester, approuver et communiquer les changements."],
    p: "Les méthodologies comprennent généralement des politiques, des procédures, des modèles et des outils, ainsi que des systèmes de référence (planification, réalisation, communication des résultats).",
    a: ["La conception des méthodologies peut s'appuyer sur les Normes, les méthodes et outils du secteur, et sur les autres fonctions de l'organisation.",
        "Les méthodologies doivent rester conformes aux Normes (cf. Norme 4.1)."] },
  req: [
    ["Concevoir des méthodologies permettant d'exécuter la stratégie et d'accomplir les responsabilités, en se fondant sur les attentes du Conseil et de la direction générale.", "D"],
    ["Mettre en œuvre, documenter et communiquer les méthodologies, et garantir l'accès aux personnes concernées.", "D"],
    ["Garantir l'appropriation des méthodologies par les auditeurs (compétences, formation).", "D"],
    ["Gérer les changements de méthodologies : évaluer, élaborer, tester, approuver, communiquer.", "D"],
    ["Décrire les éléments de référence (politiques, procédures, modèles, outils, systèmes).", "S"],
    ["Périodiquement, exposer la nécessité de changer les méthodologies, planifier les changements et mettre en place une équipe pour les concevoir.", "S"]
  ],
  impl: ["Élaborer les méthodologies en tenant compte de la taille, du périmètre et de la complexité des services, et de la diversité des équipes.", "S'assurer que les changements sont communiqués et appliqués de manière homogène."],
  ev: ["Méthodologies documentées, mises à jour et accessibles.", "Preuves de formation sur les méthodologies et modèles correspondants.", "Communication et retours des parties prenantes sur les changements apportés."],
  check: ["Les méthodologies sont-elles documentées et conformes aux Normes ?", "Les auditeurs sont-ils formés et compétents sur ces méthodologies ?", "Les changements sont-ils testés, approuvés et communiqués ?"],
  quiz: [
    { q: "Sur quoi les méthodologies de la fonction doivent-elles se fonder pour être conçues ?", o: ["Sur les préférences de chaque auditeur", "Sur les attentes du Conseil et de la direction générale, et elles doivent permettre d'exécuter la stratégie", "Uniquement sur les anciennes pratiques", "Sur le modèle d'une autre organisation, sans adaptation"], a: 1, e: "Les méthodologies sont conçues en se fondant sur les attentes du Conseil et de la direction générale et permettent d'exécuter la stratégie (Norme 9.3).", d: 0 },
    { q: "Quelle exigence s'applique lorsque les méthodologies changent ?", o: ["Aucune formalité", "Évaluer la nécessité, élaborer, tester, approuver et communiquer les changements", "Publier un communiqué de presse", "Attendre la prochaine évaluation externe"], a: 1, e: "Le responsable de l'audit interne doit gérer les changements en évaluant la nécessité, puis en élaborant, testant, approuvant et communiquant les changements (Norme 9.3).", d: 0 }
  ]
},
{
  num: "9.4", title: "Plan d'audit interne", p: 9, pages: "69-71",
  sum: "Le responsable de l'audit interne élabore un plan d'audit fondé sur une évaluation documentée des risques, en consultation avec la direction générale et le Conseil, et le réexamine au moins une fois par an.",
  kw: ["plan d'audit", "évaluation des risques", "priorités", "risques omniprésents", "flexibilité"],
  u: { g: "Que les ressources limitées de la fonction soient dirigées vers les domaines qui apportent la plus grande valeur, selon un plan fondé sur les risques.",
    r: ["Élaborer un plan d'audit fondé sur une évaluation documentée des risques de l'organisation, en consultation avec la direction générale et le Conseil.",
        "Déterminer les priorités du plan à partir des caractéristiques pertinentes : mandat, stratégie, méthodologies, exigences et réglementations, attentes des parties prenantes, risques de l'organisation, culture, opportunités, contributions d'autres prestataires d'assurance.",
        "Élaborer un plan flexible comportant des priorités, après évaluation des priorités et des processus établis pour les approuver.",
        "Pendant la planification, prendre en compte les risques omniprésents pour l'organisation.",
        "Examiner le plan d'audit interne au moins une fois par an et procéder aux ajustements nécessaires.",
        "Informer le Conseil et la direction générale si, pour des raisons autres que les ressources, le plan ne peut être exécuté."],
    p: "Un plan peut être présenté à plusieurs niveaux de détail (objectifs, sujets, processus, entités) selon le contexte ; il peut comprendre des missions d'assurance et de conseil, des évaluations continues et l'accompagnement de transformations.",
    a: ["Un risque omniprésent (cybersécurité, durabilité, catastrophes) peut affecter l'ensemble de l'organisation ou des activités multiples.",
        "Le calendrier d'exécution des missions est généralement défini dans le plan ou ses annexes."] },
  req: [
    ["Élaborer un plan d'audit fondé sur une évaluation documentée des risques de l'organisation, en consultation avec la direction générale et le Conseil.", "D"],
    ["Déterminer les priorités du plan à partir du mandat, de la stratégie, des exigences et réglementations, des attentes des parties prenantes, des risques, de la culture, des opportunités et des contributions des autres prestataires d'assurance.", "D"],
    ["Élaborer un plan flexible comportant des priorités, après évaluation des processus établis pour l'approuver.", "D"],
    ["Prendre en compte les risques omnipresents pour l'organisation pendant la planification.", "D"],
    ["Examiner le plan au moins une fois par an et procéder aux ajustements nécessaires.", "D"],
    ["Informer le Conseil et la direction générale si, pour des raisons autres que les ressources, le plan ne peut être exécuté.", "D"],
    ["Soumettre le plan d'audit, et ses modifications significatives, au Conseil pour examen, commentaire et approbation, et suivre les processus établis.", "S"]
  ],
  impl: ["Utiliser une évaluation des risques fondée sur les processus de l'organisation pour identifier les risques et les réduire à un niveau acceptable.", "Préciser dans le plan les missions, l'étendue, le calendrier, les ressources ; le rendre adaptable en cours d'année."],
  ev: ["Procès-verbaux des réunions du Conseil et de la direction générale sur le plan d'audit interne.", "Document du plan approuvé et communications des changements.", "Évaluation des risques de l'organisation, documentée et à jour, avec historique.", "Échanges documentés sur les risques omniprésents et la méthodologie de planification."],
  check: ["Le plan repose-t-il sur une évaluation des risques documentée et à jour ?", "A-t-il été élaboré en consultation avec la direction générale et le Conseil ?", "Est-il revu au moins une fois par an et ajusté ?"],
  quiz: [
    { q: "Sur quoi le plan d'audit interne doit-il être fondé ?", o: ["Sur les demandes de la direction seule", "Sur une évaluation documentée des risques de l'organisation", "Sur le plan de l'année précédente, sans changement", "Sur les missions les plus faciles à réaliser"], a: 1, e: "Le plan doit être fondé sur une évaluation documentée des risques, élaboré en consultation avec la direction générale et le Conseil (Norme 9.4).", d: 0 },
    { q: "À quelle fréquence le plan d'audit interne doit-il être examiné ?", o: ["Tous les cinq ans", "Au moins une fois par an", "Uniquement en cas d'acquisition", "Chaque mois"], a: 1, e: "Le plan doit être examiné au moins une fois par an, avec les ajustements nécessaires (Norme 9.4).", d: 1 }
  ]
},
{
  num: "9.5", title: "Coordination et utilisation des travaux d'autres prestataires d'assurance", p: 9, pages: "71-73",
  sum: "Le responsable de l'audit interne se coordonne avec les autres prestataires d'assurance pour un recouvrement approprié des travaux, partage les informations disponibles et s'assure de la qualité des travaux qu'il utilise.",
  kw: ["coordination", "prestataires d'assurance", "recouvrement", "fiabilité", "co-sourcing"],
  u: { g: "Que la couverture des risques soit complète et sans recouvrement inutile, grâce à la coordination de tous les prestataires d'assurance.",
    r: ["Se coordonner avec les autres prestataires d'assurance, internes et externes, pour parvenir à un recouvrement approprié des travaux.",
        "Élaborer périodiquement un plan de coordination comportant des processus d'échange d'informations.",
        "Partager avec les autres prestataires les informations disponibles dont ils ont besoin.",
        "Si les travaux d'autres prestataires sont utilisés : s'assurer qu'ils sont évalués pour garantir leur fiabilité et que les prestataires respectent les Normes le cas échéant.",
        "En cas de collaboration avec des tiers (co-sourcing) : convenir des rôles, s'assurer du respect des exigences de conduite et les informer des changements."],
    p: "L'évaluation de l'utilisation des travaux porte sur : les compétences, la portée des travaux, le contexte d'exécution, la fiabilité des résultats, la conformité aux Normes et la communication.",
    a: ["Exemples de prestataires : audit externe, conformité, sécurité, gestion des risques, qualité, agences gouvernementales, prestataires contractuels, auto-évaluations certifiées.",
        "La coordination peut s'organiser par des réunions régulières, des ententes et le partage des cartographies de risques."] },
  req: [
    ["Se coordonner avec les autres prestataires d'assurance, internes et externes, pour parvenir à un recouvrement approprié des travaux.", "D"],
    ["Élaborer périodiquement un plan de coordination comportant des processus d'échange d'informations.", "D"],
    ["Partager les informations disponibles avec les autres prestataires d'assurance.", "D"],
    ["Évaluer les travaux d'autres prestataires avant de les utiliser (compétences, portée, contexte, fiabilité, conformité aux Normes, communication).", "D"],
    ["En cas de co-sourcing : convenir des rôles respectifs, s'assurer du respect des exigences de conduite et informer des changements de la fonction.", "D"],
    ["Identifier les autres prestataires d'assurance internes et externes et leur périmètre, et analyser le potentiel de recouvrement.", "S"]
  ],
  impl: ["Établir des relations de travail et une communication régulière avec les autres prestataires ; mutualiser les données et le calendrier.", "Documenter les évaluations des travaux des tiers utilisés à l'appui des conclusions."],
  ev: ["Politique documentée de coordination des prestataires d'assurance.", "Plan de coordination et procès-verbaux des réunions.", "Évaluations documentées de l'utilisation des travaux d'autres prestataires, y compris jugements de fiabilité.", "Accords de confidentialité et de non-divulgation."],
  check: ["Un plan de coordination avec les autres prestataires existe-t-il ?", "Les travaux des autres prestataires sont-ils évalués avant utilisation ?", "Les accords de co-sourcing définissent-ils les rôles et exigences de conduite ?"],
  quiz: [
    { q: "Avant d'utiliser les travaux d'un autre prestataire d'assurance, le responsable de l'audit interne doit :", o: ["Accepter les travaux sans vérification", "Évaluer ces travaux pour garantir leur fiabilité", "Refuser systématiquement", "Demander au Conseil d'approuver chaque document"], a: 1, e: "Il doit s'assurer que les travaux sont évalués (compétences, portée, contexte, fiabilité, conformité aux Normes) avant utilisation (Norme 9.5).", d: 0 },
    { q: "Quel est l'objectif principal de la coordination avec les autres prestataires d'assurance ?", o: ["Réduire le budget de l'audit interne", "Parvenir à un recouvrement approprié des travaux", "Transférer les responsabilités de l'audit interne", "Limiter l'accès à l'information"], a: 1, e: "La coordination vise un recouvrement approprié des travaux, pour une couverture complète sans doublons (Norme 9.5).", d: 1 }
  ]
},
{
  num: "10.1", title: "Gestion des ressources financières", p: 10, pages: "74-75",
  sum: "Le responsable de l'audit interne élabore et soumet à l'approbation un budget (avec le soutien de la direction générale et l'approbation du Conseil), gère les ressources financières du budget approuvé et en rend compte périodiquement.",
  kw: ["budget", "ressources financières", "coûts", "rendu de comptes", "prévisions"],
  u: { g: "Que la fonction dispose des moyens financiers nécessaires à son mandat, et que leur emploi soit géré et justifié.",
    r: ["Élaborer et soumettre à l'approbation un budget d'audit interne, avec le soutien de la direction générale et l'approbation du Conseil.",
        "Gérer les ressources financières disponibles du budget approuvé.",
        "Rendre compte périodiquement à la direction générale et au Conseil de l'adhérence au budget et des prévisions par rapport à celui-ci."],
    p: "Le budget peut couvrir les coûts d'exploitation (personnel, formation, voyages), les logiciels et licences, et les prestataires externes ; il est souvent présenté en heures-hommes et dépenses.",
    a: ["Le budget est généralement élaboré en collaboration avec la direction générale, pour couvrir mandat, stratégie, plan et risques.",
        "Le responsable de l'audit interne devrait plaider pour les ressources nécessaires si le budget s'avère insuffisant."] },
  req: [
    ["Élaborer et soumettre à l'approbation un budget d'audit interne, avec le soutien de la direction générale et l'approbation du Conseil.", "D"],
    ["Gérer les ressources financières du budget approuvé.", "D"],
    ["Rendre compte périodiquement de l'adhérence au budget et des prévisions par rapport à celui-ci.", "D"],
    ["Élaborer le budget en collaboration avec la direction générale, pour couvrir le mandat, la stratégie, le plan d'audit et les risques.", "S"],
    ["Solliciter du Conseil et de la direction générale les ressources financières nécessaires pour mener à bien les missions.", "S"]
  ],
  impl: ["Identifier les coûts des activités d'audit (ressources, déplacements, logiciels) et les rapprocher du budget approuvé.", "Rendre compte des écarts et des besoins supplémentaires à intervalles réguliers."],
  ev: ["Documents budgétaires approuvés et suivis.", "Rendus de comptes périodiques au Conseil et à la direction générale.", "Procédure et documentation des coûts de remplacement."],
  check: ["Un budget est-il élaboré et approuvé (direction générale et Conseil) ?", "Le suivi de l'adhérence au budget est-il effectué ?", "Les ressources insuffisantes sont-elles communiquées au Conseil (cf. Norme 8.2) ?"],
  quiz: [
    { q: "Qui approuve le budget d'audit interne soumis par le responsable de l'audit interne ?", o: ["La direction financière seule", "Le Conseil", "Le comité de direction de l'activité auditée", "Le prestataire externe"], a: 1, e: "Le budget est soumis à l'approbation du Conseil, avec le soutien de la direction générale (Norme 10.1, cf. 6.3).", d: 0 },
    { q: "Que doit faire le responsable de l'audit interne après l'approbation de son budget ?", o: ["Consulter les détails uniquement en fin d'année", "Gérer les ressources financières disponibles et rendre compte périodiquement de l'adhérence", "Réallouer librement les fonds aux activités auditées", "N'en informer personne"], a: 1, e: "Il doit gérer les ressources du budget approuvé et rendre compte périodiquement de l'adhérence et des prévisions (Norme 10.1).", d: 1 }
  ]
},
{
  num: "10.2", title: "Gestion des ressources humaines", p: 10, pages: "76-78",
  sum: "Le responsable de l'audit interne planifie les effectifs et les affectations, recrute des auditeurs qualifiés, établit des critères équitables d'évaluation et de développement, et se conforme aux lois et réglementations applicables en matière RH.",
  kw: ["ressources humaines", "recrutement", "évaluation", "rémunération", "développement"],
  u: { g: "Que la fonction dispose, à tout moment, des personnes qualifiées et en nombre suffisant, gérées selon des critères clairs et équitables.",
    r: ["Élaborer et mettre en œuvre un plan de dotation et d'affectation des auditeurs couvrant les besoins actuels et futurs, en collaboration avec les RH.",
        "Élaborer des politiques de gestion : recrutement, rémunération, évaluation, développement, promotion et discipline.",
        "Recruter des auditeurs qualifiés, en tenant compte de la stratégie, du mandat, des compétences, des descriptions de poste et des lois applicables.",
        "Élaborer, documenter et communiquer des critères clairs et équitables pour évaluer les performances.",
        "Se conformer aux lois et réglementations applicables aux ressources humaines."],
    p: "Les critères de recrutement peuvent inclure les compétences (cf. Norme 3.1), l'expérience, la formation, et un inventaire des qualifications requises par rapport aux services prévus.",
    a: ["Les évaluations de performance et de rémunération doivent éviter d'encourager des comportements contraires à l'objectivité et à l'éthique (cf. Norme 2.2).",
        "Les promotions, les modifications des rôles et l'acquisition de compétences doivent reposer sur des critères documentés et équitables."] },
  req: [
    ["Élaborer et mettre en œuvre un plan de dotation et d'affectation des auditeurs, actuel et futur, en collaboration avec les RH.", "D"],
    ["Élaborer des politiques et procédures de gestion : recrutement, rémunération, évaluation des performances, développement, promotion et discipline.", "D"],
    ["Recruter des auditeurs qualifiés, en tenant compte de la stratégie, du mandat, des compétences, des descriptions de poste et des lois applicables.", "D"],
    ["Élaborer, documenter et communiquer des critères clairs et équitables pour évaluer les performances et le développement professionnel.", "D"],
    ["Se conformer aux lois et réglementations applicables aux ressources humaines de l'organisation.", "D"],
    ["S'entendre avec le Conseil sur le processus d'évaluation de la performance du responsable de l'audit interne.", "S"],
    ["Concevoir des évaluations de performance et des programmes de rémunération n'encourageant pas les comportements contraires à l'objectivité ou à l'éthique.", "S"],
    ["Mettre en place des processus d'évaluation de la performance par la direction générale et le Conseil.", "S"],
    ["S'assurer que les promotions et les modifications de rôles reposent sur des critères documentés et équitables.", "S"]
  ],
  impl: ["Mettre en place un inventaire des compétences et une description de poste type ; coordonner avec les RH pour le recrutement.", "Convenir avec le Conseil des modalités d'évaluation de la performance du responsable de l'audit interne (indicateurs, ajustements)."],
  ev: ["Programmes de développement professionnel et formation continue.", "Plans de dotation en personnel documentés.", "Évaluations de performance et mesures de développement professionnel des auditeurs.", "Critères documentés pour les évaluations et les promotions."],
  check: ["Un plan de dotation et d'affectation existe-t-il ?", "Les critères d'évaluation de la performance sont-ils documentés et équitables ?", "Les politiques RH (recrutement, rémunération, discipline) sont-elles établies et appliquées ?"],
  quiz: [
    { q: "Que faut-il éviter dans la conception des évaluations de performance et de rémunération des auditeurs ?", o: ["Les objectifs chiffrés", "Les incitations encourageant des comportements contraires à l'objectivité ou à l'éthique", "Les évaluations annuelles", "Les entretiens avec les auditeurs"], a: 1, e: "Les évaluations et rémunérations doivent être conçues de manière à éviter d'encourager les comportements contraires à l'objectivité ou à l'éthique (Normes 10.2 et 2.2).", d: 1 },
    { q: "Le responsable de l'audit interne devrait s'entendre avec le Conseil sur :", o: ["Le choix des ordinateurs de la fonction", "Le processus d'évaluation de sa propre performance", "Le choix des couleurs du logo", "La rémunération des activités auditées"], a: 1, e: "Il devrait s'entendre avec le Conseil sur le processus d'évaluation de sa performance (Norme 10.2).", d: 1 }
  ]
},
{
  num: "10.3", title: "Gestion des ressources technologiques", p: 10, pages: "79-80",
  sum: "Le responsable de l'audit interne identifie les technologies pour soutenir la stratégie et le plan, en gère le cycle de vie et maîtrise les risques associés (sécurité, confidentialité, obsolescence).",
  kw: ["technologies", "logiciels", "cybersécurité", "analyse de données", "cycle de vie"],
  u: { g: "Que la fonction dispose d'outils technologiques adaptés et sécurisés pour améliorer son efficacité et son efficience.",
    r: ["Déterminer les technologies pour soutenir la stratégie, les méthodologies et le plan d'audit interne, en collaboration avec les RH et la direction générale.",
        "Élaborer et mettre en œuvre un plan de ressources technologiques, complémentaire au budget.",
        "Évaluer périodiquement si les technologies demeurent efficaces pour atteindre les objectifs de la fonction.",
        "Gérer les risques liés aux technologies : cybersécurité, sécurité et confidentialité des données ; tenir les technologies à jour (mises à jour, sauvegardes)."],
    p: "Les technologies soutiennent l'évaluation des risques, la planification et la réalisation des missions (dont l'analyse de données), la documentation et le suivi.",
    a: ["Les risques de cybersécurité des données collectées pendant les missions doivent être maîtrisés (cf. Norme 5.2).",
        "Il faut éviter les logiciels incompatibles entre eux et avec les systèmes de l'organisation."] },
  req: [
    ["Déterminer les technologies nécessaires pour soutenir la stratégie, les méthodologies et le plan d'audit interne, en collaboration avec les RH et la direction générale.", "D"],
    ["Élaborer et mettre en œuvre un plan de ressources technologiques, complémentaire au budget.", "D"],
    ["Évaluer périodiquement l'efficacité des technologies au regard des objectifs de la fonction.", "D"],
    ["Gérer les risques de cybersécurité, de sécurité et de confidentialité des données collectées, et tenir les technologies à jour.", "D"],
    ["Inventorier et mettre à jour les logiciels et systèmes, et respecter les politiques de l'organisation en matière de technologies.", "S"],
    ["Élaborer une méthodologie et des outils pour sélectionner et introduire de nouvelles technologies, en consultant les autres fonctions.", "S"]
  ],
  impl: ["Évaluer les logiciels et systèmes existants (inventaire) et les besoins futurs ; planifier les acquisitions et les mises à jour.", "Prévoir la sécurité, la confidentialité et l'intégrité des données lors de la sélection des outils."],
  ev: ["Inventaire des technologies (logiciels, licences, systèmes) et plan de mise à jour.", "Documents de formation et d'assistance sur les technologies.", "Documents du plan de ressources technologiques et suivi de sa mise en œuvre."],
  check: ["Un inventaire des technologies existe-t-il et est-il à jour ?", "Les risques de cybersécurité et de confidentialité des données d'audit sont-ils gérés ?", "L'efficacité des technologies est-elle évaluée périodiquement ?"],
  quiz: [
    { q: "Que doit faire le responsable de l'audit interne concernant les données collectées pendant les missions, au regard des technologies ?", o: ["Les stocker librement sur des supports personnels", "Gérer les risques de cybersécurité, de sécurité et de confidentialité et tenir les technologies à jour", "Les publier dans le rapport annuel", "Les supprimer immédiatement après chaque mission"], a: 1, e: "Il doit gérer ces risques et maintenir les technologies à jour (mises à jour, sauvegardes) (Norme 10.3).", d: 1 },
    { q: "Le plan de ressources technologiques est :", o: ["Interdit par les Normes", "Complémentaire au budget et élaboré avec les RH et la direction générale", "Réservé aux grandes organisations", "Un document facultatif sans suivi"], a: 1, e: "Le responsable de l'audit interne doit élaborer et mettre en œuvre un plan de ressources technologiques complémentaire au budget (Norme 10.3).", d: 1 }
  ]
},
{
  num: "11.1", title: "Établissement de relations et communication avec les parties prenantes", p: 11, pages: "81-82",
  sum: "Le responsable de l'audit interne établit et maintient des relations de confiance avec les parties prenantes grâce à un plan de communication évalué périodiquement et amélioré si nécessaire.",
  kw: ["parties prenantes", "relations", "plan de communication", "confiance", "cartographie"],
  u: { g: "Que la fonction connaisse ses parties prenantes, leurs attentes et entretienne des relations efficaces avec chacune.",
    r: ["Élaborer et mettre en œuvre un plan de communication et d'établissement de relations avec les parties prenantes.",
        "Périodiquement, évaluer la qualité des relations avec les parties prenantes et faire part des améliorations possibles au Conseil et à la direction générale."],
    p: "Les parties prenantes peuvent être internes (direction générale, Conseil, directions opérationnelles, fonctions) et externes (régulateurs, auditeurs externes, prestataires). Un plan de communication précise : qui, quand, avec quelle fréquence, quel contenu, quel format.",
    a: ["Les parties prenantes de l'activité auditée et de la fonction elles-mêmes doivent être prises en compte.",
        "La communication doit éviter les redondances et les contradictions avec les échanges d'autres fonctions."] },
  req: [
    ["Élaborer et mettre en œuvre un plan de communication et d'établissement de relations avec les parties prenantes.", "D"],
    ["Évaluer périodiquement la qualité des relations et faire part des améliorations possibles au Conseil et à la direction générale.", "D"],
    ["Élaborer le plan de communication en tenant compte des attentes (fréquence, contenu, format) et des besoins des parties prenantes.", "S"],
    ["Faciliter les échanges entre les parties prenantes de l'activité examinée et les membres de l'équipe d'audit.", "S"]
  ],
  impl: ["Identifier les parties prenantes (cartographie), leurs attentes et besoins d'information, et définir les interactions.", "Solliciter des retours (enquêtes, entretiens) pour évaluer la qualité des relations et s'améliorer."],
  ev: ["Méthodologie et plan de communication documentés.", "Échanges sur les améliorations possibles avec le Conseil et la direction générale.", "Enquêtes de satisfaction ou retours des parties prenantes."],
  check: ["Une cartographie des parties prenantes existe-t-elle ?", "Un plan de communication est-il mis en œuvre et tenu à jour ?", "La qualité des relations est-elle évaluée périodiquement ?"],
  quiz: [
    { q: "Que doit faire le responsable de l'audit interne concernant les parties prenantes ?", o: ["Communiquer uniquement en fin de mission", "Élaborer et mettre en œuvre un plan de communication et d'établissement de relations", "Déléguer toutes les relations à la direction générale", "Communiquer seulement avec le Conseil"], a: 1, e: "Il doit élaborer et mettre en œuvre un plan de communication et d'établissement de relations avec les parties prenantes (Norme 11.1).", d: 0 },
    { q: "Que doit-il faire périodiquement au sujet de la qualité des relations avec les parties prenantes ?", o: ["Rien, c'est à chacune d'en juger", "Évaluer cette qualité et faire part des améliorations possibles au Conseil et à la direction générale", "La mesurer uniquement via les réseaux sociaux", "Attendre l'évaluation externe"], a: 1, e: "Il doit évaluer périodiquement la qualité des relations et faire part des améliorations possibles (Norme 11.1).", d: 1 }
  ]
},
{
  num: "11.2", title: "Communication efficace", p: 11, pages: "83-85",
  sum: "Les auditeurs internes communiquent des informations exactes, objectives, claires, concises, constructives, complètes et en temps utile, dans un format et une langue adaptés à leurs destinataires, après avoir vérifié leur exactitude.",
  kw: ["communication", "exactitude", "clarté", "concision", "temps utile"],
  u: { g: "Que chaque communication de la fonction soit utile, fiable et compréhensible par ses destinataires.",
    r: ["Communiquer des informations : exactes, objectives, claires, concises, constructives, complètes, et en temps utile.",
        "S'assurer de l'exactitude des informations : obtenir les éléments disponibles pour valider, peaufiner ou conclure à l'exactitude.",
        "Sélectionner le format et la langue de communication en fonction du contexte et des destinataires, y compris en cas de langue maternelle différente."],
    p: "Définitions clés : exacte = libre d'erreurs et de distorsions ; objective = impartiale, non biaisée ; claire = facile à comprendre ; concise = limitée aux points importants ; constructive = utile et orientée vers l'amélioration ; complète = tous les éléments significatifs ; en temps utile = au moment opportun.",
    a: ["Si des désaccords subsistent après l'examen des résultats, ajouter l'avis de l'auditeur interne et celui de la direction à la communication.",
        "Les faits non vérifiables (opinions, estimations) doivent être présentés comme tels, avec les éléments à l'appui."] },
  req: [
    ["Communiquer des informations exactes, objectives, claires, concises, constructives, complètes et en temps utile.", "D"],
    ["S'assurer de l'exactitude des informations en obtenant et en validant les éléments disponibles.", "D"],
    ["Sélectionner le format et la langue adaptés au contexte et aux destinataires.", "D"],
    ["Peaufiner les communications et veiller à ce qu'elles concordent avec ce qui a été discuté avec les parties prenantes avant la diffusion.", "S"],
    ["En cas de désaccord persistant, ajouter l'avis de l'auditeur interne et celui de la direction à la communication.", "S"]
  ],
  impl: ["Structurer la communication : objectifs, périmètre, constats, conclusions, recommandations ; faire relire et valider.", "Adapter le niveau de détail au lectorat (Conseil, direction, opérationnels)."],
  ev: ["Processus et modèles de communication (rapports, présentations).", "Documents démontrant l'examen et l'approbation des communications avant diffusion.", "Communications diffusées aux destinataires appropriés, y compris versions adaptées."],
  check: ["Les communications respectent-elles les 7 qualités (exacte, objective, claire, concise, constructive, complète, en temps utile) ?", "L'exactitude des faits est-elle vérifiée avant diffusion ?", "Le format est-il adapté aux destinataires ?"],
  quiz: [
    { q: "Parmi ces listes, laquelle reprend les qualités exigées des communications de l'audit interne ?", o: ["Exacte, objective, claire, concise, constructive, complète, en temps utile", "Rapide, brève, détaillée, chiffrée, signée", "Complète, confidentielle, juridique, annuelle", "Formelle, sûre, privée, publique"], a: 0, e: "Les communications doivent être exactes, objectives, claires, concises, constructives, complètes et en temps utile (Norme 11.2).", d: 0 },
    { q: "Des désaccords subsistent entre l'auditeur et la direction après l'examen des résultats. Que faut-il faire ?", o: ["Supprimer les constats contestés", "Ajouter l'avis de l'auditeur interne et celui de la direction à la communication", "Reporter la publication indéfiniment", "Trancher en faveur de la direction"], a: 1, e: "Si des désaccords subsistent, l'avis de l'auditeur interne et celui de la direction doivent être ajoutés à la communication (Norme 11.2).", d: 1 }
  ]
},
{
  num: "11.3", title: "Communication des résultats", p: 11, pages: "85-86",
  sum: "Les auditeurs internes communiquent les résultats de leurs travaux aux parties appropriées, selon un processus établi, en assurant un accès sûr et protégé, dans le respect des restrictions applicables.",
  kw: ["résultats", "diffusion", "destinataires", "confidentialité", "restrictions"],
  u: { g: "Que les résultats parviennent aux personnes qui peuvent en tirer parti, tout en protégeant l'information.",
    r: ["Communiquer les résultats des travaux aux parties appropriées.",
        "Élaborer des processus pour déterminer à qui communiquer les résultats, à chaque mission ou selon un calendrier défini, sur la base d'une analyse des parties prenantes.",
        "S'assurer que l'accès aux résultats est sûr et protégé (confidentialité, protection de la vie privée, restriction des accès).",
        "Prendre en compte les restrictions : lois et réglementations, accords, avis du conseiller juridique, avant de divulguer des résultats."],
    p: "Destinataires potentiels : Conseil, direction générale, direction de l'activité examinée, autres fonctions, régulateurs, prestataires d'assurance externes.",
    a: ["Les restrictions d'accès (notion de « besoin d'en connaître ») doivent être justifiées et documentées.",
        "Certains résultats peuvent être communiqués aux régulateurs ; identifier les situations le permettant."] },
  req: [
    ["Communiquer les résultats des travaux aux parties appropriées.", "D"],
    ["Élaborer des processus déterminant les destinataires appropriés, à chaque mission ou selon un calendrier défini.", "D"],
    ["S'assurer que l'accès aux résultats est sûr et protégé (confidentialité, vie privée, restrictions d'accès).", "D"],
    ["Prendre en compte les restrictions (lois, réglementations, accords, avis juridique) avant toute divulgation.", "D"],
    ["Élaborer des processus internes et externes de communication et de protection des informations sensibles.", "S"]
  ],
  impl: ["Basé sur l'analyse des parties prenantes : identifier les résultats à communiquer et le niveau de détail pour chaque destinataire.", "Encadrer la diffusion des résultats aux tiers et régulateurs."],
  ev: ["Processus et communication des résultats aux destinataires appropriés.", "Contrôles d'accès protégés et restrictions des résultats."],
  check: ["Un processus de détermination des destinataires existe-t-il ?", "L'accès aux résultats est-il contrôlé et protégé ?", "Les restrictions légales et contractuelles sont-elles respectées avant diffusion ?"],
  quiz: [
    { q: "Sur quoi fonder le choix des destinataires des résultats d'une mission ?", o: ["Sur les préférences de l'auditeur", "Sur une analyse des parties prenantes et un processus établi", "Sur l'ancienneté des employés", "Sur l'ordre alphabétique des directions"], a: 1, e: "Un processus doit être élaboré pour déterminer à qui communiquer les résultats, fondé sur une analyse des parties prenantes (Norme 11.3).", d: 0 },
    { q: "L'accès aux résultats des missions doit être :", o: ["Ouvert à tous les employés", "Sûr et protégé, en tenant compte de la confidentialité et des restrictions", "Réservé aux auditeurs uniquement", "Public par défaut"], a: 1, e: "L'accès doit être sûr et protégé, avec des restrictions d'accès si nécessaire (Norme 11.3).", d: 1 }
  ]
},
{
  num: "11.4", title: "Communication relative aux atteintes à l'indépendance et à la gravité des situations", p: 11, pages: "87-88",
  sum: "Lorsque l'indépendance de la fonction ou du responsable de l'audit interne est compromise, ou qu'une inconduite grave est avérée, les détails, l'impact et les mesures de protection sont communiqués au Conseil et/ou à la direction générale.",
  kw: ["indépendance", "inconduite", "gravité", "conseil", "mesures de protection"],
  u: { g: "Que le Conseil et la direction générale soient informés, au bon niveau de gravité, des atteintes à l'indépendance et des inconduites graves.",
    r: ["Si l'indépendance de la fonction ou du responsable de l'audit interne est compromise, en fait ou en apparence : communiquer au Conseil et/ou à la direction générale les détails, l'impact potentiel et les mesures de protection.",
        "Si la gravité de l'inconduite est avérée (activités illégales, fraudes, d'autres actes) : communiquer au Conseil l'inconduite, l'impact potentiel et les mesures de protection.",
        "Évaluer et communiquer au Conseil les exigences applicables relatives à la gravité, après avoir consulté le conseiller juridique le cas échéant."],
    p: "Exemples d'atteintes à l'indépendance : impossibilité de communiquer directement avec le Conseil, restriction du périmètre ou de l'accès, pressions pour modifier des constats, audit d'un domaine dont le responsable de l'audit interne est responsable.",
    a: ["Le niveau de communication dépend de la gravité : la direction générale pour des sujets opérationnels, le Conseil pour les sujets significatifs.",
        "Les inconduites graves (fraude, activités illégales) doivent remonter au Conseil."] },
  req: [
    ["Communiquer au Conseil et/ou à la direction générale les détails, l'impact potentiel et les mesures de protection en cas d'atteinte à l'indépendance (fait ou apparence).", "D"],
    ["Communiquer au Conseil l'inconduite avérée, son impact potentiel et les mesures de protection lorsque la gravité est avérée.", "D"],
    ["Évaluer et communiquer les exigences applicables relatives à la gravité, avec le conseil juridique le cas échéant.", "D"],
    ["Convenir du niveau de communication adapté à la nature et à la gravité de la situation.", "S"]
  ],
  impl: ["Établir dans les méthodologies les seuils de gravité et les circuits de communication correspondants.", "Documenter l'impact potentiel et les mesures de protection proposées."],
  ev: ["Précision des éléments communiqés et des parties destinataires.", "Communications des mesures de protection au Conseil et à la direction générale."],
  check: ["Un processus de communication des atteintes à l'indépendance existe-t-il ?", "Les inconduites graves remontent-elles au Conseil ?", "Les mesures de protection sont-elles proposées et suivies ?"],
  quiz: [
    { q: "Une inconduite avérée (fraude, activité illégale) est identifiée. À qui doit-elle être communiquée ?", o: ["À personne, c'est confidentiel", "Au Conseil", "Au collègue concerné", "Au fournisseur impliqué"], a: 1, e: "Si la gravité de l'inconduite est avérée, elle doit être communiquée au Conseil avec l'impact potentiel et les mesures de protection (Norme 11.4).", d: 0 },
    { q: "En cas d'atteinte à l'indépendance de la fonction, que doit-on communiquer ?", o: ["Uniquement le nom du fautif", "Les détails de la situation, l'impact potentiel et les mesures de protection", "Rien, si l'atteinte n'est qu'en apparence", "Uniquement au régulateur"], a: 1, e: "Les détails, l'impact potentiel et les mesures de protection doivent être communiqués au Conseil et/ou à la direction générale (Norme 11.4).", d: 1 }
  ]
},
{
  num: "11.5", title: "Communication relative à l'acceptation des risques", p: 11, pages: "89-90",
  sum: "Le responsable de l'audit interne aide le Conseil et la direction générale à comprendre et évaluer les risques dont l'acceptation dépasse le seuil de tolérance, et les informe au moins une fois par an des risques résiduels significatifs non traités.",
  kw: ["acceptation des risques", "seuil de tolérance", "escalade", "risques résiduels", "traitement"],
  u: { g: "Que l'acceptation de risques au-delà du seuil de tolérance soit une décision éclairée, prise au bon niveau de gouvernance.",
    r: ["Aider le Conseil et la direction générale à comprendre et évaluer les risques dont l'acceptation dépasse le seuil de tolérance au risque de l'organisation.",
        "Déterminer le processus d'escalade et l'informer des risques dont l'acceptation dépasse le seuil de tolérance.",
        "Informer au moins une fois par an le Conseil et la direction générale des risques résiduels et potentiels significatifs non traités, et documenter les risques identifiés, discutés et communiqués.",
        "Si le Conseil ou la direction générale décident d'accepter des risques dépassant le seuil de tolérance : communiquer les risques et la décision ; si la décision excède leur autorité, escalader."],
    p: "Le seuil de tolérance au risque définit l'exposition maximale que l'organisation est prête à accepter ; il est défini par le Conseil et/ou la direction générale et précisé dans les méthodologies.",
    a: ["L'escalade doit être escaladée aux niveaux supérieurs de l'organisation et les risques résiduels non traités communiqués au Conseil.",
        "La décision d'accepter les risques demeure une responsabilité de la direction et du Conseil, pas de l'audit interne."] },
  req: [
    ["Aider le Conseil et la direction générale à comprendre et évaluer les risques dont l'acceptation dépasse le seuil de tolérance.", "D"],
    ["Déterminer le processus d'escalade et informer des risques dont l'acceptation dépasse le seuil de tolérance.", "D"],
    ["Informer au moins une fois par an des risques résiduels et potentiels significatifs non traités.", "D"],
    ["Documenter les risques identifiés, discutés et communiqués, pour garantir la continuité.", "D"],
    ["Communiquer les risques et la décision lorsque le Conseil ou la direction générale acceptent des risques au-delà du seuil ; escalader si la décision excède leur autorité.", "D"],
    ["Préciser dans les méthodologies le processus de communication des risques dont l'acceptation dépasse le seuil de tolérance.", "S"]
  ],
  impl: ["Identifier les risques résiduels et potentiels non traités ; en tenir une liste et la communiquer périodiquement.", "Convenir avec le Conseil du seuil de tolérance et des processus d'escalade."],
  ev: ["Processus documenté de communication et d'escalade des risques.", "Liste des risques résiduels et potentiels non traités et documentation de leur communication.", "Décisions d'acceptation des risques documentées, avec autorisation et suivi."],
  check: ["Le seuil de tolérance au risque est-il défini et connu ?", "Un processus d'escalade des risques significatifs non traités existe-t-il ?", "Le Conseil et la direction générale sont-ils informés au moins une fois par an des risques résiduels non traités ?"],
  quiz: [
    { q: "À quelle fréquence le responsable de l'audit interne doit-il informer le Conseil et la direction générale des risques résiduels et potentiels significatifs non traités ?", o: ["Chaque semaine", "Au moins une fois par an", "Tous les cinq ans", "Uniquement lors d'une crise"], a: 1, e: "Au moins une fois par an, pour les aider à comprendre et évaluer les risques (Norme 11.5).", d: 1 },
    { q: "Qui décide d'accepter un risque dépassant le seuil de tolérance de l'organisation ?", o: ["L'auditeur interne", "Le Conseil et/ou la direction générale", "La direction de l'activité auditée seule", "Le prestataire externe"], a: 1, e: "Cette décision relève du Conseil et/ou de la direction générale ; l'audit interne communique les risques et la décision, et escalade si l'autorité est dépassée (Norme 11.5).", d: 1 }
  ]
},
{
  num: "12.1", title: "Évaluation interne de la qualité", p: 12, pages: "91-94",
  sum: "Le responsable de l'audit interne conçoit et déploie un programme d'évaluations internes couvrant tous les aspects de la fonction, réalisé par des personnes compétentes, dont les résultats sont communiqués au moins une fois par an.",
  kw: ["qualité", "évaluation interne", "revues", "conformité", "amélioration"],
  u: { g: "Que la qualité de la fonction — conformité aux Normes et atteinte des objectifs — soit évaluée en continu et améliorée.",
    r: ["Concevoir, déployer et tenir à jour un programme d'évaluations internes couvrant tous les aspects de la fonction d'audit interne.",
        "Mener des évaluations par des personnes compétentes, internes ou externes à la fonction et à l'organisation.",
        "Inclure des évaluations en cours de mission (revue des documents de travail par le superviseur) et après réalisation (revue du processus global).",
        "Communiquer les résultats au moins une fois par an au Conseil, à la direction générale et aux autres parties concernées, et expliquer les mesures à prendre.",
        "Approuver les éléments et priorités du programme avec le Conseil et la direction générale.",
        "Faire réaliser les évaluations par des personnes internes ne participant pas aux activités évaluées, ou par des tiers externes si nécessaire."],
    p: "Le programme d'évaluation interne complète l'évaluation externe (Norme 8.4) ; ensemble, ils constituent le programme d'assurance et d'amélioration de la qualité.",
    a: ["Les lacunes identifiées donnent lieu à un plan d'action et à un suivi de sa mise en œuvre.",
        "Les évaluateurs internes peuvent être recrutés au sein de la fonction ou de l'organisation, à condition d'être compétents et indépendants des activités évaluées."] },
  req: [
    ["Concevoir, déployer et tenir à jour un programme d'évaluations internes couvrant tous les aspects de la fonction.", "D"],
    ["Mener des évaluations par des personnes compétentes, internes ou externes à la fonction et à l'organisation.", "D"],
    ["Inclure des évaluations en cours et après réalisation des missions.", "D"],
    ["Communiquer les résultats au moins une fois par an au Conseil, à la direction générale et aux parties concernées, avec les mesures à prendre.", "D"],
    ["Approuver les éléments et priorités du programme avec le Conseil et la direction générale.", "D"],
    ["Confier les évaluations à des personnes internes ne participant pas aux activités évaluées, ou à des tiers externes si nécessaire.", "D"],
    ["Définir la fréquence, les méthodologies et les processus d'évaluation, en cohérence avec le programme qualité (Norme 8.3).", "S"]
  ],
  impl: ["Évaluer la conformité aux Normes et aux méthodologies, l'efficacité des processus et les opportunités d'amélioration.", "Communiquer périodiquement les résultats et l'état d'avancement des plans d'action."],
  ev: ["Programme d'évaluations internes et résultats des évaluations.", "Communications annuelles des résultats au Conseil et à la direction générale.", "Plan d'action et suivi de la mise en œuvre des mesures."],
  check: ["Un programme d'évaluations internes couvre-t-il tous les aspects de la fonction ?", "Les évaluateurs sont-ils compétents et indépendants des activités évaluées ?", "Les résultats sont-ils communiqués au moins une fois par an avec un plan d'action ?"],
  quiz: [
    { q: "Qui peut réaliser les évaluations internes de la qualité ?", o: ["Uniquement le responsable de l'audit interne", "Des personnes internes compétentes ne participant pas aux activités évaluées, ou des tiers externes", "La direction de l'activité auditée", "Le prestataire d'audit externe financier"], a: 1, e: "Les évaluations doivent être menées par des personnes internes ne participant pas aux activités évaluées, ou par des tiers externes si nécessaire (Norme 12.1).", d: 1 },
    { q: "Les résultats des évaluations internes de la qualité doivent être communiqués au moins :", o: ["Une fois par mois", "Une fois par an", "Une fois tous les cinq ans", "Jamais"], a: 1, e: "Au moins une fois par an, au Conseil, à la direction générale et aux autres parties concernées, avec les mesures à prendre (Norme 12.1).", d: 1 }
  ]
},
{
  num: "12.2", title: "Mesures de performance", p: 12, pages: "94-96",
  sum: "Le responsable de l'audit interne élabore des mesures de performance démontrant l'atteinte des objectifs et l'efficacité de la fonction, convenues avec le Conseil et la direction générale, et en communique périodiquement les résultats.",
  kw: ["mesures", "indicateurs", "KPI", "efficacité", "comparaisons"],
  u: { g: "Que la performance de la fonction soit mesurée objectivement, avec des indicateurs qui ne déforment pas les comportements.",
    r: ["Élaborer des mesures de performance démontrant l'atteinte des objectifs de la fonction et son efficacité.",
        "Collaborer avec le Conseil et la direction générale pour convenir des mesures de performance.",
        "Communiquer périodiquement les mesures, et des comparaisons aux indicateurs similaires d'autres fonctions.",
        "Faire des recommandations sur l'amélioration des performances de la fonction.",
        "S'assurer que les mesures ne favorisent pas des comportements contraires à l'éthique ou à l'objectivité."],
    p: "Exemples de mesures : délais de remise des rapports, satisfaction des parties prenantes, taux de mise en œuvre des recommandations, acquisition de compétences et certifications, acceptabilité de l'audit.",
    a: ["Les mesures et les objectifs doivent tenir compte du contexte de l'organisation (taille, complexité, secteur).",
        "Les mesures mal conçues (ex. vitesse au détriment de la qualité) peuvent dégrader la performance réelle."] },
  req: [
    ["Élaborer des mesures de performance démontrant l'atteinte des objectifs et l'efficacité de la fonction.", "D"],
    ["Collaborer avec le Conseil et la direction générale pour convenir des mesures.", "D"],
    ["Communiquer périodiquement les mesures et les comparaisons à des indicateurs similaires.", "D"],
    ["Faire des recommandations d'amélioration de la performance.", "D"],
    ["S'assurer que les mesures de performance ne favorisent pas des comportements contraires à l'éthique ou à l'objectivité.", "D"],
    ["Examiner périodiquement les mesures de performance et les mettre à jour si nécessaire.", "S"]
  ],
  impl: ["Choisir des indicateurs équilibrés (délais, qualité, satisfaction, compétences) et fixer des objectifs réalistes.", "Comparer les résultats avec des organisations similaires lorsque possible."],
  ev: ["Rapports sur les mesures de performance communiqués au Conseil et à la direction générale.", "Comparaisons avec des mesures d'autres fonctions d'audit interne similaires."],
  check: ["Des mesures de performance ont-elles été convenues avec le Conseil et la direction générale ?", "Sont-elles communiquées périodiquement avec des comparaisons ?", "Évitent-elles de pousser à des comportements contraires à l'éthique ?"],
  quiz: [
    { q: "Avec qui le responsable de l'audit interne doit-il collaborer pour convenir des mesures de performance ?", o: ["Avec les auditeurs uniquement", "Avec le Conseil et la direction générale", "Avec les régulateurs", "Avec le prestataire externe"], a: 1, e: "Il doit collaborer avec le Conseil et la direction générale pour convenir des mesures de performance (Norme 12.2).", d: 0 },
    { q: "Un indicateur mesurant uniquement la rapidité de remise des rapports risque de :", o: ["Améliorer la qualité globale", "Favoriser des comportements contraires à l'objectivité et à l'éthique (au détriment de la qualité)", "N'avoir aucun effet", "Remplacer l'évaluation externe"], a: 1, e: "Les mesures doivent être conçues de manière à ne pas encourager de tels comportements ; un indicateur unilatéral peut déformer les priorités (Norme 12.2).", d: 1 }
  ]
}
];
