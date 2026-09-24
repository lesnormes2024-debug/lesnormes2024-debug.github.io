// Domaine V : Réalisation des activités d'audit interne — contenu pédagogique original.
export const principles = [];

export const standards = [
{
  num: "13.1", title: "Communication avec la direction générale et le Conseil", p: 13, pages: "100-101",
  sum: "Les auditeurs internes se coordonnent avec la direction générale et le Conseil pour confirmer que la mission répond aux attentes, et communiquent les changements importants intervenant pendant son déroulement.",
  kw: ["coordination", "attentes", "communication", "changements", "planification"],
  u: { g: "Que chaque mission parte sur des attentes claires et partagées avec la direction générale et le Conseil.",
    r: ["Se coordonner avec la direction générale et le Conseil pour confirmer que la mission répond à leurs attentes.",
        "Comprendre leurs attentes concernant les résultats, le calendrier et les ressources de la mission, et la communication des résultats.",
        "Communiquer les changements importants intervenant pendant la mission."],
    p: "Les attentes à clarifier en amont : résultat attendu, délais, ressources, périodicité et format de la communication.",
    a: ["Des changements importants (périmètre, calendrier, résultats intermédiaires) doivent remonter sans attendre le rapport final.",
        "Cette coordination s'inscrit dans les relations établies au niveau de la fonction (Normes 11.1 et 11.3)."] },
  req: [
    ["Se coordonner avec la direction générale et le Conseil pour confirmer que la mission répond à leurs attentes.", "D"],
    ["Comprendre leurs attentes quant aux résultats, au calendrier, aux ressources et à la communication.", "D"],
    ["Communiquer les changements importants intervenant pendant la mission.", "D"],
    ["Discuter des besoins et attentes de communication périodique pendant la mission (rapports d'étape).", "S"]
  ],
  impl: ["Organiser une réunion d'ouverture avec les responsables et convenir du déroulement, des échéances et des points de contact.", "Tenir informés le Conseil et la direction générale des développements significatifs."],
  ev: ["Documentation des réunions d'ouverture, des résultats attendus, du calendrier et des ressources.", "Communications avec le Conseil et la direction générale sur les attentes.", "Documents de travail liés à la mission attestant des communications."],
  check: ["Les attentes de la direction générale et du Conseil sont-elles clarifiées avant la mission ?", "Les changements importants sont-ils communiqués en cours de mission ?", "Le calendrier et les ressources sont-ils convenus ?"],
  quiz: [
    { q: "Avant de commencer une mission, les auditeurs internes doivent :", o: ["Lancer directement les tests", "Se coordonner avec la direction générale et le Conseil pour confirmer que la mission répond à leurs attentes", "Attendre le rapport final pour communiquer", "Déléguer la coordination à la direction de l'activité"], a: 1, e: "Ils doivent se coordonner pour confirmer les attentes concernant les résultats, le calendrier, les ressources et la communication (Norme 13.1).", d: 0 },
    { q: "Que doivent faire les auditeurs si un changement important survient pendant la mission ?", o: ["L'ignorer et suivre le plan initial", "Le communiquer à la direction générale et au Conseil", "Attendre la conclusion de la mission", "Décider seuls de l'arrêt de la mission"], a: 1, e: "Ils doivent communiquer les changements importants intervenant pendant la mission (Norme 13.1).", d: 1 }
  ]
},
{
  num: "13.2", title: "Évaluation des risques dans le cadre de la mission", p: 13, pages: "101-103",
  sum: "Les auditeurs internes évaluent les risques liés à l'activité examinée pour déterminer les domaines d'attention prioritaires de la mission : processus concernés, changements, probabilité d'erreurs significatives, fraude et non-conformité.",
  kw: ["évaluation des risques", "mission", "priorités", "fraude", "non-conformité"],
  u: { g: "Que les travaux de la mission portent en priorité sur les aspects les plus risqués de l'activité examinée.",
    r: ["Évaluer les risques de l'activité examinée pour déterminer les domaines d'attention prioritaires.",
        "Identifier les processus de gouvernance, de gestion des risques et de contrôle applicables, et leur degré de formalisation.",
        "Examiner la documentation : rôles et responsabilités, personnel concerné, changements survenus ou prévus.",
        "Tenir compte de la probabilité d'erreurs significatives, de fraude et de non-conformité aux lois et réglementations.",
        "Évaluer l'efficacité et l'efficience des processus de gouvernance, de gestion des risques et de contrôle.",
        "Solliciter la direction de l'activité et les autres parties concernées pour recueillir leur point de vue sur les risques."],
    p: "Cette évaluation alimente la définition des objectifs et du périmètre de la mission (Norme 13.3) ; elle est documentée et actualisée au fil des travaux.",
    a: ["Les objectifs et le périmètre peuvent être affinés à mesure que les risques se précisent.",
        "L'évaluation des risques de mission s'appuie sur l'évaluation des risques au niveau de l'organisation (cf. Norme 9.4)."] },
  req: [
    ["Évaluer les risques de l'activité examinée pour déterminer les domaines d'attention prioritaires.", "D"],
    ["Identifier les processus de gouvernance, de gestion des risques et de contrôle applicables et leur degré de formalisation.", "D"],
    ["Examiner la documentation de l'activité : rôles, personnel, changements.", "D"],
    ["Tenir compte de la probabilité d'erreurs significatives, de fraude et de non-conformité.", "D"],
    ["Évaluer l'efficacité et l'efficience des processus applicables.", "D"],
    ["Solliciter la direction de l'activité et les autres parties concernées sur les risques.", "D"],
    ["Par exemple, examiner la cartographie des risques, les procédures et les rapports antérieurs.", "S"]
  ],
  impl: ["Collecter et analyser les informations sur l'activité : stratégie, processus, contrôles, incidents, indicateurs.", "Hiérarchiser les risques pour orienter les travaux ; documenter l'évaluation."],
  ev: ["Notes de planification et évaluations des risques documentées.", "Notes de réunions avec la direction et les parties concernées.", "Documents de travail liés à la mission."],
  check: ["Une évaluation des risques de la mission est-elle documentée avant les travaux ?", "Les risques de fraude et de non-conformité sont-ils pris en compte ?", "Le point de vue de la direction de l'activité a-t-il été recueilli ?"],
  quiz: [
    { q: "L'évaluation des risques dans le cadre de la mission sert à :", o: ["Déterminer le budget de l'audit interne", "Déterminer les domaines d'attention prioritaires de la mission", "Évaluer le personnel de l'activité", "Choisir le prestataire externe"], a: 1, e: "Elle sert à déterminer les domaines d'attention prioritaires pour atteindre les objectifs de la mission (Norme 13.2).", d: 0 },
    { q: "Parmi ces éléments, lequel les auditeurs doivent-ils prendre en compte lors de l'évaluation des risques de mission ?", o: ["La météo", "La probabilité d'erreurs significatives, de fraude et de non-conformité", "La couleur du logo de l'activité", "L'âge des systèmes uniquement"], a: 1, e: "La probabilité d'erreurs significatives, de fraude et de non-conformité aux lois et réglementations doit être prise en compte (Norme 13.2).", d: 0 }
  ]
},
{
  num: "13.3", title: "Objectifs et périmètre de la mission", p: 13, pages: "103-105",
  sum: "Les auditeurs internes fixent des objectifs qui répondent aux attentes et prennent en compte les risques, définissent un périmètre qui les appuie, et communiquent toute restriction susceptible d'empêcher d'atteindre les objectifs.",
  kw: ["objectifs", "périmètre", "restrictions", "limitations", "approbation"],
  u: { g: "Que chaque mission ait des objectifs clairs et un périmètre suffisant pour y répondre, sans restriction non traitée.",
    r: ["Fixer des objectifs qui prennent en compte les risques de l'activité, aident à comprendre ses processus et répondent aux attentes du Conseil, de la direction générale et des autres parties prenantes ; les faire approuver par le responsable de l'audit interne ou un délégué.",
        "Élaborer un périmètre qui appuie les objectifs et prend en compte les rôles, les responsabilités et les activités de l'organisation.",
        "Mener des missions avec des objectifs et un périmètre définis ; les modifier si nécessaire en obtenant l'accord des parties concernées et en les informant.",
        "Si une restriction empêche de satisfaire le périmètre et d'atteindre les objectifs : évaluer son impact et communiquer au responsable de l'audit interne, qui détermine les parties à en informer."],
    p: "Exemples de modifications : révision du calendrier, changement de périmètre ou d'objectifs, remplacement d'une activité par une autre.",
    a: ["Des objectifs trop larges ou flous compromettent la mission : ils doivent être précis et atteignables.",
        "Les restrictions (accès refusé, données indisponibles) ne doivent jamais être passées sous silence."] },
  req: [
    ["Fixer des objectifs prenant en compte les risques et répondant aux attentes des parties prenantes, et les faire approuver.", "D"],
    ["Élaborer un périmètre qui appuie les objectifs et prend en compte les rôles et responsabilités de l'organisation.", "D"],
    ["Mener des missions avec des objectifs et un périmètre définis, et les modifier en obtenant l'accord des parties concernées.", "D"],
    ["Évaluer l'impact de toute restriction et communiquer au responsable de l'audit interne, qui détermine les parties à informer.", "D"],
    ["Modifier les objectifs et le périmètre si l'évaluation des risques de mission le justifie, avec accord et information des parties.", "S"]
  ],
  impl: ["Formuler des objectifs mesurables et un périmètre précisant activités, sites, périodes et systèmes couverts.", "Documenter les approbations et les éventuelles modifications (qui, quoi, pourquoi)."],
  ev: ["Objectifs et périmètre de mission documentés et approuvés.", "Documents de travail et communications attestant des modifications des objectifs ou du périmètre.", "Communications des restrictions et de leur impact, avec mesures prises."],
  check: ["Les objectifs de la mission sont-ils approuvés et alignés sur les risques ?", "Le périmètre permet-il d'atteindre les objectifs ?", "Les restrictions éventuelles sont-elles évaluées et communiquées ?"],
  quiz: [
    { q: "Qui approuve les objectifs et le périmètre d'une mission ?", o: ["L'auditeur débutant", "Le responsable de l'audit interne ou un délégué", "La direction de l'activité auditée", "Le Conseil à chaque mission"], a: 1, e: "Les objectifs doivent être approuvés par le responsable de l'audit interne ou une personne qu'il a désignée (Norme 13.3).", d: 0 },
    { q: "Une restriction empêche de couvrir tout le périmètre prévu. Que doivent faire les auditeurs ?", o: ["Réduire les objectifs en silence", "Évaluer l'impact de la restriction et communiquer au responsable de l'audit interne, qui détermine les parties à en informer", "Prolonger la mission sans en parler", "Supprimer la mission"], a: 1, e: "Ils doivent évaluer l'impact et en communiquer au responsable de l'audit interne, qui détermine les parties appropriées à informer (Norme 13.3).", d: 1 }
  ]
},
{
  num: "13.4", title: "Critères d'évaluation", p: 13, pages: "105-106",
  sum: "Les auditeurs internes confirment avec les parties concernées les critères d'évaluation appropriés : lois, politiques, normes sectorielles, meilleures pratiques, objectifs internes — la référence à partir de laquelle la situation est jugée.",
  kw: ["critères", "référentiel", "conformité", "meilleures pratiques", "confirmation"],
  u: { g: "Que les constats reposent sur des critères clairs, pertinents et convenus avec les parties concernées.",
    r: ["Confirmer avec les parties concernées les critères d'évaluation appropriés pour la mission.",
        "Collaborer pour déterminer l'adéquation des critères, sur la base des lois et réglementations, des politiques et procédures, des normes et meilleures pratiques, des principes de gestion solides, des objectifs et critères internes, et des exigences d'externalisations."],
    p: "Exemples de critères : lois et règlements, politiques et procédures internes, normes et meilleures pratiques sectorielles, objectifs de performance, processus et standards de l'organisation.",
    a: ["Les critères constituent la base de comparaison avec la situation de fait (Norme 14.2) : un écart révèle un constat potentiel.",
        "Si les critères manquent ou sont ambigus, ils doivent être définis et convenus avant l'analyse."] },
  req: [
    ["Confirmer avec les parties concernées les critères d'évaluation appropriés.", "D"],
    ["Collaborer pour déterminer l'adéquation des critères, à partir des lois, politiques, normes, meilleures pratiques et objectifs applicables.", "D"],
    ["Déterminer si des critères supplémentaires ou des avis d'experts sont nécessaires, et les examiner avec les parties concernées.", "S"],
    ["Utiliser les critères de référence utilisés par la direction et le Conseil, et ceux des autres prestataires d'assurance.", "S"]
  ],
  impl: ["Documenter les critères retenus et leur source, et les valider avec la direction de l'activité.", "En l'absence de critères, en proposer et convenir avec les parties concernées."],
  ev: ["Confirmation documentée de l'adéquation des critères avec les parties concernées.", "Documents de travail liés à la mission détaillant les critères."],
  check: ["Les critères d'évaluation sont-ils identifiés et documentés ?", "Ont-ils été confirmés avec les parties concernées ?", "Sont-ils appropriés et à jour au regard de l'activité examinée ?"],
  quiz: [
    { q: "Que sont les critères d'évaluation dans une mission d'audit interne ?", o: ["Les objectifs de la carrière de l'auditeur", "Les références par rapport auxquelles la situation de l'activité est évaluée", "Les critères de recrutement des auditeurs", "Les seuils budgétaires de l'organisation"], a: 1, e: "Les critères sont les références (lois, politiques, normes, meilleures pratiques, objectifs) par rapport auxquelles la situation est évaluée (Norme 13.4).", d: 0 },
    { q: "Avec qui les critères d'évaluation appropriés doivent-ils être confirmés ?", o: ["Avec le Conseil uniquement", "Avec les parties concernées", "Avec le régulateur uniquement", "Avec l'équipe d'audit externe"], a: 1, e: "Les auditeurs doivent confirmer avec les parties concernées les critères appropriés (Norme 13.4).", d: 1 }
  ]
},
{
  num: "13.5", title: "Ressources de la mission", p: 13, pages: "106-108",
  sum: "Les auditeurs internes s'assurent que l'équipe de mission dispose des compétences, du savoir-faire et des ressources suffisantes pour atteindre les objectifs, et surveillent leur adéquation tout au long de la mission.",
  kw: ["ressources", "équipe", "compétences", "affectation", "supervision"],
  u: { g: "Que la mission soit menée par une équipe aux compétences adaptées, avec les moyens nécessaires, dans le respect du calendrier.",
    r: ["Évaluer si l'équipe de mission possède les compétences et le savoir-faire pour atteindre les objectifs de la mission.",
        "S'assurer que les ressources sont suffisantes, disponibles et utilisées efficacement.",
        "Surveiller l'adéquation des ressources pendant la mission et traiter les insuffisances identifiées.",
        "Utiliser les compétences de personnes externes ou internes pour compléter celles de l'équipe, le cas échéant."],
    p: "Ressources de mission : membres de l'équipe (internes, prestataires externes), compétences spécialisées, technologies et outils, budget et temps.",
    a: ["L'affectation doit tenir compte des exigences d'objectivité (Norme 2.2) : pas d'audit d'activités dont les auditeurs étaient responsables.",
        "Des insuffisances de ressources doivent être remontées au responsable de l'audit interne (cf. Norme 8.2)."] },
  req: [
    ["Évaluer si l'équipe de mission possède les compétences et le savoir-faire nécessaires pour atteindre les objectifs.", "D"],
    ["S'assurer que les ressources sont suffisantes, disponibles et efficacement utilisées.", "D"],
    ["Surveiller l'adéquation des ressources pendant la mission et traiter les insuffisances.", "D"],
    ["Utiliser les compétences de personnes externes ou internes pour compléter celles de l'équipe, si nécessaire.", "S"],
    ["En cas de désaccord sur les ressources, escalader conformément au processus établi (cf. Norme 8.2).", "S"]
  ],
  impl: ["Planifier les besoins (personnes, compétences, outils, budget) et affecter l'équipe selon les compétences requises et l'objectivité.", "Ajuster les ressources en cours de mission si les travaux évoluent."],
  ev: ["Plan de la mission incluant l'affectation des personnes et des ressources, avec suivi.", "Évaluation des besoins et jugements sur l'adéquation des compétences et de l'effectif."],
  check: ["Les compétences requises pour la mission sont-elles identifiées et disponibles dans l'équipe ?", "Les ressources sont-elles suffisantes et disponibles ?", "L'adéquation est-elle surveillée en cours de mission ?"],
  quiz: [
    { q: "Que doivent faire les auditeurs si les ressources de la mission s'avèrent insuffisantes en cours de travaux ?", o: ["Arrêter la mission", "Surveiller l'adéquation des ressources et traiter les insuffisances identifiées", "Continuer malgré tout sans rien signaler", "Réduire les objectifs unilatéralement"], a: 1, e: "Ils doivent surveiller l'adéquation des ressources et traiter les insuffisances identifiées pendant la mission (Norme 13.5).", d: 1 },
    { q: "L'affectation de l'équipe de mission doit notamment tenir compte :", o: ["Des préférences de vacances des auditeurs", "Des exigences d'objectivité et des compétences nécessaires", "De l'ancienneté uniquement", "Du lieu de résidence des auditeurs"], a: 1, e: "L'équipe doit disposer des compétences nécessaires et respecter les exigences d'objectivité (Normes 13.5 et 2.2).", d: 1 }
  ]
},
{
  num: "13.6", title: "Programme de travail de la mission", p: 13, pages: "108-110",
  sum: "Les auditeurs internes élaborent et documentent un programme de travail pour atteindre les objectifs de la mission, approuvé par le responsable de l'audit interne ou un délégué, précisant les étapes, le calendrier et les ressources.",
  kw: ["programme de travail", "procédures", "planification", "approbation", "étapes"],
  u: { g: "Que les travaux de la mission suivent une démarche structurée et approuvée, orientée vers les objectifs.",
    r: ["Élaborer et documenter un programme de travail pour atteindre les objectifs de la mission.",
        "Faire approuver le programme par le responsable de l'audit interne ou un délégué.",
        "Préciser les étapes de réalisation : calendrier, ressources, tests de conformité, corroboration et évaluation des informations, évaluation des risques et contrôles, plans de collecte et d'analyse, évaluation et documentation des constats potentiels."],
    p: "Le programme de travail peut être adapté en cours de mission si des travaux supplémentaires ou modifiés sont nécessaires (avec approbation, cf. Norme 14.2).",
    a: ["Le programme doit rester aligné sur les objectifs et le périmètre approuvés (Norme 13.3).",
        "Des changements importants de programme doivent être approuvés et documentés."] },
  req: [
    ["Élaborer et documenter un programme de travail pour atteindre les objectifs de la mission.", "D"],
    ["Faire approuver le programme de travail par le responsable de l'audit interne ou un délégué.", "D"],
    ["Préciser le calendrier, les ressources et les procédures de collecte, d'analyse, de corroboration et d'évaluation des informations.", "D"],
    ["Adapter le programme si nécessaire, avec approbation des changements et information des parties.", "S"],
    ["Organiser les travaux de manière cohérente avec les méthodologies de la fonction (cf. Norme 9.3).", "S"]
  ],
  impl: ["Structurer le programme par objectif : procédures, sources d'information, tests, responsables, échéances.", "Revoir le programme avec le superviseur avant de commencer les travaux."],
  ev: ["Programme de travail approuvé (documenté, daté, avec signatures).", "Documents de travail liés à la mission attestant de la mise en œuvre du programme."],
  check: ["Un programme de travail documenté existe-t-il pour chaque mission ?", "A-t-il été approuvé par le responsable de l'audit interne ou un délégué ?", "Les changements en cours de mission sont-ils approuvés et documentés ?"],
  quiz: [
    { q: "Qui approuve le programme de travail de la mission ?", o: ["L'auditeur qui le rédige", "Le responsable de l'audit interne ou un délégué", "La direction de l'activité auditée", "Le Conseil"], a: 1, e: "Le programme de travail doit être approuvé par le responsable de l'audit interne ou une personne qu'il a désignée (Norme 13.6).", d: 0 },
    { q: "Que doit préciser le programme de travail ?", o: ["Uniquement la liste des personnes à interviewer", "Le calendrier, les ressources et les procédures de collecte, d'analyse et de corroboration des informations", "Seulement la date de fin", "Le salaire des auditeurs"], a: 1, e: "Il doit préciser le calendrier, les ressources et les étapes de collecte, d'analyse, de corroboration et d'évaluation (Norme 13.6).", d: 1 }
  ]
},
{
  num: "14.1", title: "Collecte d'informations pour analyse et évaluation", p: 14, pages: "111-112",
  sum: "Les auditeurs internes recueillent des informations pertinentes, fiables et suffisantes pour atteindre les objectifs de la mission, en faisant preuve de scepticisme professionnel sur leur qualité.",
  kw: ["informations", "éléments probants", "pertinence", "fiabilité", "corroboration"],
  u: { g: "Que les analyses et conclusions de la mission reposent sur des informations solides, adaptées aux objectifs.",
    r: ["Recueillir des informations pertinentes, fiables et suffisantes pour atteindre les objectifs de la mission et s'inscrire dans son périmètre.",
        "Appuyer les résultats et conclusions de la mission sur des analyses appropriées et des informations adéquates."],
    p: "Avec scepticisme : évaluer si les informations sont factuelles, à jour, obtenues directement (observation) ou d'une source indépendante ; corroborer par comparaison à plusieurs sources accroît la fiabilité.",
    a: ["Techniques possibles : entretiens, observation directe (« test de cheminement »), confirmation externe, inspection de pièces, extraction de données des systèmes, échantillonnage représentatif.",
        "Une information non corroborée ou douteuse ne devrait pas fonder seule un constat."] },
  req: [
    ["Recueillir des informations pertinentes, fiables et suffisantes pour atteindre les objectifs de la mission.", "D"],
    ["S'assurer que les informations s'inscrivent dans le périmètre et appuient les résultats et conclusions.", "D"],
    ["Privilégier les informations pertinentes au regard des objectifs et du périmètre de la mission.", "S"],
    ["Évaluer avec un regard critique si les informations sont factuelles, à jour et obtenues directement ou d'une source indépendante.", "S"],
    ["Corroborer les informations en les comparant à plusieurs sources.", "S"],
    ["Envisager de tester une population complète ou un échantillon représentatif, notamment à l'aide d'outils d'analyse de données.", "S"]
  ],
  impl: ["Définir dans le programme de travail les procédures de collecte adaptées aux objectifs (entretiens, observation, confirmations, inspections, données).", "Documenter pour chaque information sa source, sa date de collecte et la période couverte."],
  ev: ["Programme de travail décrivant les procédures de collecte pertinentes.", "Descriptif des informations collectées (source, date, période).", "Explication documentée de la méthode d'évaluation du caractère suffisant des informations."],
  check: ["Les informations recueillies sont-elles pertinentes, fiables et suffisantes ?", "Les sources sont-elles documentées et, si possible, indépendantes ?", "Les informations clés sont-elles corroborées par plusieurs sources ?"],
  quiz: [
    { q: "Quelles doivent être les caractéristiques des informations recueillies au cours d'une mission ?", o: ["Abondantes, rapides, anciennes", "Pertinentes, fiables et suffisantes", "Confidentielles, chiffrées, légales", "Verbaux, informels, partiels"], a: 1, e: "Les informations doivent être pertinentes, fiables et suffisantes pour atteindre les objectifs de la mission (Norme 14.1).", d: 0 },
    { q: "Comment accroître la fiabilité des informations recueillies ?", o: ["En ne les obtenant qu'auprès de la direction", "En les corroborant en les comparant à plusieurs sources", "En évitant les observations directes", "En se limitant aux documents papier"], a: 1, e: "Corroborer les informations en les comparant à plusieurs sources est un gage de fiabilité accrue (Norme 14.1).", d: 1 }
  ]
},
{
  num: "14.2", title: "Analyses et constats potentiels de la mission", p: 14, pages: "113-114",
  sum: "Les auditeurs internes analysent les informations pour identifier les écarts entre les critères et la situation de fait : chaque écart constitue un constat potentiel, à consigner et approfondir si nécessaire.",
  kw: ["analyses", "constats potentiels", "écart", "critères", "situation de fait"],
  u: { g: "Que les constats de mission soient issus d'analyses rigoureuses comparant les critères à la situation réelle.",
    r: ["Analyser des informations pertinentes, fiables et suffisantes pour élaborer les constats potentiels de la mission.",
        "Analyser les informations afin d'identifier les écarts entre les critères d'évaluation (Norme 13.4) et la situation actuelle de l'activité.",
        "Déterminer la situation de fait sur la base des informations et éléments probants collectés.",
        "Consigner chaque écart révélant un constat potentiel et l'analyser plus avant.",
        "Si des analyses supplémentaires sont nécessaires, adapter le programme de travail en conséquence et le faire approuver par le responsable de l'audit interne.",
        "Si aucun écart n'est relevé, fournir dans la conclusion une assurance quant à l'efficacité des processus de gouvernance, de gestion des risques et de contrôle."],
    p: "Exemples d'analyses : vérifications d'exactitude, analyses de ratios/tendances, comparaisons aux budgets et périodes antérieures, analyses comparatives internes et externes.",
    a: ["Les erreurs, irrégularités, actes illégaux et opportunités d'amélioration sont des constats potentiels courants.",
        "Les technologies (logiciels d'analyse) permettent de tester des populations entières plutôt que des échantillons."] },
  req: [
    ["Analyser des informations pertinentes, fiables et suffisantes pour élaborer les constats potentiels.", "D"],
    ["Identifier les écarts entre les critères d'évaluation et la situation actuelle de l'activité.", "D"],
    ["Déterminer la situation de fait sur la base des éléments probants collectés.", "D"],
    ["Consigner chaque écart révélant un constat potentiel et l'analyser de manière approfondie.", "D"],
    ["Adapter et faire approuver le programme de travail si des analyses supplémentaires sont nécessaires.", "D"],
    ["Fournir une assurance d'efficacité des processus dans la conclusion en l'absence d'écart.", "D"]
  ],
  impl: ["Documenter les analyses réalisées : logiciels utilisés, populations testées, méthodes d'échantillonnage.", "En cas d'écart, approfondir causes et effets et évaluer le caractère significatif (cf. Norme 14.3)."],
  ev: ["Documents de travail consignant les analyses (programmes, populations, échantillonnage).", "Documents de travail référencés avec le programme de travail et les résultats définitifs.", "Travaux de supervision de la mission."],
  check: ["Les analyses sont-elles documentées et reproductibles ?", "Les écarts critères/situation sont-ils systématiquement identifiés et consignés ?", "Le programme de travail est-il adapté et approuvé si des analyses supplémentaires sont nécessaires ?"],
  quiz: [
    { q: "Qu'est-ce qui révèle un constat potentiel de mission ?", o: ["L'opinion de la direction", "Un écart entre les critères d'évaluation et la situation de fait", "Un budget dépassé uniquement", "Une plainte d'un employé"], a: 1, e: "Un écart entre les critères et la situation de fait révèle un constat potentiel, à consigner puis analyser plus avant (Norme 14.2).", d: 0 },
    { q: "Si des analyses supplémentaires sont nécessaires, que doivent faire les auditeurs ?", o: ["Les réaliser sans formalité", "Adapter le programme de travail en conséquence et le faire approuver par le responsable de l'audit interne", "Abandonner le constat", "Attendre la prochaine mission"], a: 1, e: "Le programme de travail doit être adapté et approuvé par le responsable de l'audit interne (Norme 14.2).", d: 1 }
  ]
},
{
  num: "14.3", title: "Évaluation des constats", p: 14, pages: "115-116",
  sum: "Les auditeurs internes évaluent chaque constat potentiel pour déterminer son caractère significatif (probabilité et impact), identifient les causes racines avec la direction, et classent les constats par ordre de priorité.",
  kw: ["évaluation des constats", "significativité", "cause racine", "priorité", "risque résiduel"],
  u: { g: "Que chaque constat soit solidement fondé : cause racine, effets, caractère significatif et priorité clairement établis.",
    r: ["Évaluer chaque constat potentiel pour déterminer son caractère significatif.",
        "Collaborer avec la direction pour identifier les causes racines lorsque possible, leurs effets éventuels, et mesurer le caractère significatif.",
        "Tenir compte de la probabilité d'occurrence du risque et de son impact sur les processus de gouvernance, de gestion des risques et de contrôle.",
        "Consigner et communiquer tout risque significatif au sein du constat.",
        "Déterminer s'il y a lieu de signaler d'autres risques, selon les circonstances et méthodologies.",
        "Classer chaque constat selon un ordre de priorité fondé sur son caractère significatif, en suivant les méthodologies établies."],
    p: "La cause racine est le problème sous-jacent qui a contribué à l'écart (souvent une défaillance des maîtrises) ; elle s'identifie en posant une série de « pourquoi », en collaboration avec la direction.",
    a: ["Le risque résiduel est celui qui subsiste malgré les dispositifs de maîtrise en place.",
        "Les constats devraient être rédigés de façon concise et simple : critères, situation, cause racine, effets, priorité."] },
  req: [
    ["Évaluer chaque constat potentiel pour déterminer son caractère significatif.", "D"],
    ["Collaborer avec la direction pour identifier les causes racines, les effets et mesurer le caractère significatif.", "D"],
    ["Tenir compte de la probabilité d'occurrence et de l'impact du risque.", "D"],
    ["Consigner et communiquer les risques significatifs au sein du constat.", "D"],
    ["Déterminer s'il y a lieu de signaler d'autres risques, selon les méthodologies établies.", "D"],
    ["Classer chaque constat par ordre de priorité selon son caractère significatif, suivant les méthodologies établies.", "D"],
    ["Rédiger les constats de manière concise et simple, avec les éléments probants à l'appui.", "S"]
  ],
  impl: ["Documenter pour chaque constat : critères, situation, cause racine (si possible), effets, caractère significatif et priorité.", "Convenir d'une échelle de notation homogène (ex. criticité) dans les méthodologies."],
  ev: ["Documents de travail justifiant les critères et le classement des constats.", "Document précisant pour chaque constat : critères, situation, cause racine, effets, priorité.", "Méthodologies, modèles et lignes directrices pertinents."],
  check: ["Le caractère significatif de chaque constat est-il évalué (probabilité + impact) ?", "La cause racine est-elle recherchée en collaboration avec la direction ?", "Les constats sont-ils classés par ordre de priorité selon les méthodologies ?"],
  quiz: [
    { q: "Pour déterminer le caractère significatif d'un constat, les auditeurs doivent tenir compte :", o: ["Du coût de la mission uniquement", "De la probabilité d'occurrence du risque et de son impact", "De l'ancienneté de l'auditeur", "Du nombre de pages du rapport"], a: 1, e: "Le caractère significatif tient compte de la probabilité d'occurrence du risque et de son impact sur les processus (Norme 14.3).", d: 0 },
    { q: "Qu'est-ce que la cause racine d'un constat ?", o: ["La personne responsable de l'erreur", "Le problème sous-jacent qui a contribué à l'émergence de la situation", "Le budget de la mission", "Le nom du département audité"], a: 1, e: "La cause racine est un problème sous-jacent ou plus profond qui a contribué à l'écart ; elle s'identifie en collaboration avec la direction (Norme 14.3).", d: 1 }
  ]
},
{
  num: "14.4", title: "Recommandations et plans d'action", p: 14, pages: "117-118",
  sum: "Les auditeurs internes déterminent s'ils formulent des recommandations, exigent des plans d'action ou conviennent avec la direction des mesures pour remédier aux écarts et traiter la cause racine ; les désaccords suivent une méthodologie établie.",
  kw: ["recommandations", "plans d'action", "cause racine", "désaccord", "faisabilité"],
  u: { g: "Que chaque constat débouche sur des actions appropriées, définies avec la direction et réalistes.",
    r: ["Déterminer s'il faut formuler des recommandations, exiger des plans d'action de la direction, ou collaborer pour convenir des mesures afin de : remédier aux écarts, ramener les risques à un niveau acceptable, traiter la cause racine, renforcer l'activité.",
        "Discuter les recommandations avec la direction de l'activité examinée.",
        "En cas de désaccord sur les recommandations ou plans d'action : suivre une méthodologie établie permettant à chaque partie d'exprimer son point de vue et ses raisons, en vue de parvenir à une solution (cf. Norme 9.3)."],
    p: "Les auditeurs peuvent proposer une action corrective précise, plusieurs options, ou suggérer à la direction d'étudier elle-même les options ; plusieurs actions peuvent répondre à un même constat.",
    a: ["La mise en œuvre des actions relève de la responsabilité de la direction, pas de l'audit interne.",
        "L'évaluation de la faisabilité intègre le rapport coûts/avantages et le seuil de tolérance au risque."] },
  req: [
    ["Déterminer les mesures appropriées (recommandations, plans d'action, collaboration) pour remédier aux écarts et traiter la cause racine.", "D"],
    ["Discuter des recommandations avec la direction de l'activité examinée.", "D"],
    ["Suivre une méthodologie établie en cas de désaccord sur les recommandations et/ou plans d'action.", "D"],
    ["Partager dès que possible les constats et propositions avec la direction habilitée à procéder aux changements.", "S"],
    ["Évaluer la faisabilité et le caractère raisonnable des recommandations et plans d'action (coûts/avantages, tolérance au risque).", "S"]
  ],
  impl: ["Vérifier que la direction identifiée a l'autorité de mettre en œuvre les changements ; prévoir des modèles de documentation.", "En cas de désaccord persistant, le responsable de l'audit interne et la direction générale cherchent un consensus ; les positions peuvent être annexées au rapport."],
  ev: ["Documents de travail précisant, pour chaque constat, les recommandations et/ou plans d'action associés.", "Notes attestant des échanges avec la direction sur la faisabilité.", "Documents relatifs à la communication des résultats définitifs."],
  check: ["Des recommandations ou plans d'action sont-ils définis pour chaque constat pertinent ?", "Ont-ils été discutés avec la direction de l'activité ?", "Les désaccords sont-ils traités selon une méthodologie établie ?"],
  quiz: [
    { q: "Qui est responsable de la mise en œuvre des actions correctives après une mission ?", o: ["L'auditeur interne", "La direction", "Le Conseil", "Le comité de qualité"], a: 1, e: "Bien que l'audit collabore avec la direction, la mise en œuvre des actions relève de la responsabilité de celle-ci (Norme 14.4).", d: 1 },
    { q: "En cas de désaccord entre auditeurs et direction sur les recommandations, que doit-on faire ?", o: ["Supprimer les recommandations", "Suivre une méthodologie établie permettant à chaque partie d'exprimer son point de vue et parvenir à une solution", "Imposer la position de l'auditeur", "Reporter la publication sans limite"], a: 1, e: "Une méthodologie établie doit permettre à chaque partie d'exprimer ses vues et raisons en vue de parvenir à une solution (Norme 14.4, cf. 9.3).", d: 1 }
  ]
},
{
  num: "14.5", title: "Conclusions de la mission", p: 14, pages: "118",
  sum: "Les auditeurs internes élaborent une conclusion résumant les résultats au regard des objectifs, exprimant leur jugement professionnel sur le caractère significatif global des constats et, en assurance, sur l'efficacité des processus.",
  kw: ["conclusion", "jugement professionnel", "assurance", "efficacité", "notation"],
  u: { g: "Que chaque mission débouche sur une conclusion claire, à la hauteur de ses objectifs.",
    r: ["Élaborer une conclusion qui résume les résultats de la mission au regard de ses objectifs et de ceux de la direction.",
        "Résumer le jugement professionnel sur le caractère significatif global des constats pris dans leur ensemble.",
        "En mission d'assurance : intégrer le jugement sur l'efficacité des processus de gouvernance, de gestion des risques et/ou de contrôle, ainsi que les processus reconnus comme fonctionnant efficacement."],
    p: "Une échelle de notation peut être prévue par les méthodologies : par exemple « satisfaisant », « partiellement satisfaisant », « à améliorer », « non satisfaisant ».",
    a: ["La conclusion peut apporter du contexte sur les impacts pour l'activité et l'organisation : un constat peut être significatif pour une activité sans l'être pour l'organisation.",
        "En mission de conseil, les conclusions doivent être cohérentes avec les objectifs et le périmètre."] },
  req: [
    ["Élaborer une conclusion résumant les résultats au regard des objectifs de la mission et de la direction.", "D"],
    ["Résumer le jugement professionnel sur le caractère significatif global des constats.", "D"],
    ["Intégrer, en assurance, le jugement sur l'efficacité des processus et les processus reconnus efficaces.", "D"],
    ["Prévoir une échelle de notation dans les méthodologies (ex. satisfaisant à non satisfaisant).", "S"],
    ["Cohérence des conclusions avec les objectifs et le périmètre en mission de conseil.", "S"]
  ],
  impl: ["Formuler la conclusion à partir de l'ensemble des constats et de leur priorité, et l'expliquer avec ses raisons.", "Documenter les raisons fondant la conclusion générale."],
  ev: ["Documents de travail indiquant les raisons fondant la conclusion générale.", "Conclusion formulée dans la communication des résultats définitifs."],
  check: ["La conclusion répond-elle aux objectifs de la mission ?", "Exprime-t-elle un jugement global sur la signification des constats ?", "En assurance, couvre-t-elle l'efficacité des processus GRCS ?"],
  quiz: [
    { q: "Que doit inclure la conclusion d'une mission d'assurance ?", o: ["Uniquement la liste des anomalies", "Un jugement sur l'efficacité des processus de gouvernance, de gestion des risques et/ou de contrôle", "Les CV de l'équipe", "Le budget de la mission"], a: 1, e: "La conclusion doit intégrer le jugement sur l'efficacité des processus et mentionner les processus reconnus comme efficaces (Norme 14.5).", d: 0 },
    { q: "La conclusion de mission résume :", o: ["Les désaccords uniquement", "Le jugement professionnel sur le caractère significatif global des constats dans leur ensemble", "Le plan d'audit de l'année suivante", "Les heures travaillées"], a: 1, e: "La conclusion résume le jugement professionnel des auditeurs sur le caractère significatif global des constats (Norme 14.5).", d: 1 }
  ]
},
{
  num: "14.6", title: "Documentation relative à la mission", p: 14, pages: "119-120",
  sum: "Les auditeurs internes consignent les informations et éléments probants à l'appui des résultats, de sorte qu'un auditeur expérimenté puisse réitérer les travaux ; la documentation est examinée, approuvée par le responsable de l'audit interne et conservée selon les règles applicables.",
  kw: ["documentation", "documents de travail", "réitabilité", "conservation", "supervision"],
  u: { g: "Que les travaux de mission soient documentés de façon à pouvoir être revus, réitérés et appuyer les résultats communiqués.",
    r: ["Consigner les informations et éléments probants à l'appui des résultats de la mission.",
        "Documenter les analyses, évaluations et informations de sorte qu'un auditeur informé et prudent puisse réitérer les travaux et obtenir les mêmes résultats.",
        "Examiner la documentation au regard de son exactitude, sa pertinence et son exhaustivité (auditeurs et superviseur de mission).",
        "Faire examiner et approuver la documentation par le responsable de l'audit interne.",
        "Conserver la documentation conformément aux lois et règlements applicables et aux politiques de la fonction et de l'organisation."],
    p: "La documentation devrait préciser : période de la mission, évaluation des risques, objectifs et périmètre, programme de travail, analyses, résultats, personnes ayant effectué et supervisé les travaux, justificatifs des communications.",
    a: ["Les documents de travail contiennent les informations pertinentes, fiables et suffisantes permettant à une personne compétente d'arriver aux mêmes conclusions.",
        "La documentation est la principale source sur laquelle s'appuie la communication des résultats aux parties prenantes."] },
  req: [
    ["Consigner les informations et éléments probants à l'appui des résultats de la mission.", "D"],
    ["Documenter de sorte qu'un auditeur informé et prudent puisse réitérer les travaux et obtenir les mêmes résultats.", "D"],
    ["Examiner la documentation au regard de l'exactitude, la pertinence et l'exhaustivité.", "D"],
    ["Faire examiner et approuver la documentation de mission par le responsable de l'audit interne.", "D"],
    ["Conserver la documentation conformément aux lois et règlements et aux politiques applicables.", "D"],
    ["Faire préciser la documentation : période, évaluation des risques, objectifs/périmètre, programme, analyses, résultats, intervenants et superviseurs.", "S"]
  ],
  impl: ["Organiser les documents de travail selon la structure du programme de travail ; utiliser des modèles et systèmes d'archivage.", "Prévoir des trames de base : référence, titre, date, périmètre, source des données, méthode, auteur, revues."],
  ev: ["Documents de travail consignant le travail effectué conformément à la méthodologie établie.", "Résultats des revues des évaluations internes de la qualité confirmant le respect des politiques de documentation et de supervision."],
  check: ["Chaque constat est-il étayé par des documents de travail ?", "Un auditeur expérimenté pourrait-il réitérer les travaux à partir de la documentation ?", "La documentation est-elle revue, approuvée et conservée selon les règles ?"],
  quiz: [
    { q: "Quel critère la documentation de mission doit-elle remplir ?", o: ["Être rédigée par la direction", "Permettre à un auditeur informé et prudent de réitérer les travaux et d'obtenir les mêmes résultats", "Être inférieure à dix pages", "Être rédigée en anglais uniquement"], a: 1, e: "La documentation doit permettre à un auditeur informé et prudent (ou à une personne tout aussi compétente) de réitérer les travaux et d'obtenir les mêmes résultats (Norme 14.6).", d: 0 },
    { q: "Qui doit examiner et approuver la documentation relative à la mission ?", o: ["La direction de l'activité auditée", "Le responsable de l'audit interne", "Le régulateur", "Les auditeurs externes"], a: 1, e: "Le responsable de l'audit interne doit examiner et approuver la documentation de mission (Norme 14.6).", d: 1 }
  ]
},
{
  num: "15.1", title: "Communication des résultats définitifs de la mission", p: 15, pages: "121-122",
  sum: "Pour chaque mission, les auditeurs internes communiquent les résultats définitifs — objectifs, périmètre, constats, recommandations/plans d'action, conclusions — après examen et approbation par le responsable de l'audit interne, aux personnes à même de garantir l'attention nécessaire.",
  kw: ["résultats définitifs", "rapport", "approbation", "diffusion", "non-conformité"],
  u: { g: "Que les résultats définitifs, exacts et complets, parviennent aux bonnes personnes et déclenchent les suites appropriées.",
    r: ["Communiquer, pour chaque mission, les résultats définitifs : objectifs, périmètre, le cas échéant recommandations et/ou plans d'action, et conclusions.",
        "Inclure en assurance : les constats avec leur caractère significatif et leur priorité, l'explication des limitations de périmètre éventuelles, et une conclusion sur l'efficacité des processus.",
        "Préciser les personnes chargées de donner suite aux constats et les dates auxquelles les actions devraient être achevées.",
        "Mettre en exergue les actions déjà engagées ou menées à bien par la direction avant la diffusion.",
        "Communiquer des résultats exacts, objectifs, clairs, concis, constructifs, complets et en temps utile (cf. Norme 11.2).",
        "Faire examiner et approuver la communication des résultats par le responsable de l'audit interne avant diffusion, et communiquer aux personnes à même de garantir l'attention nécessaire (cf. Norme 11.3).",
        "En cas de non-conformité aux Normes : indiquer les Normes non respectées, les raisons et l'impact sur les constats et conclusions."],
    p: "Les résultats peuvent être diffusés en plusieurs versions adaptées au lectorat ; un rapport peut comprendre titre, contexte, reconnaissance des points forts et liste de diffusion.",
    a: ["Une déclaration de conformité aux Normes peut être intégrée au rapport ; elle n'est valable que corroborée par la supervision et le programme qualité.",
        "Les présentations orales s'accompagnent généralement d'une copie numérique ou imprimée."] },
  req: [
    ["Communiquer les résultats définitifs pour chaque mission : objectifs, périmètre, recommandations/plans d'action, conclusions.", "D"],
    ["Inclure en assurance : constats (significativité, priorité), limitations de périmètre, conclusion sur l'efficacité des processus.", "D"],
    ["Préciser les personnes chargées de donner suite et les dates d'achèvement attendues.", "D"],
    ["Mettre en exergue les actions engagées ou menées à bien avant la diffusion.", "D"],
    ["Communiquer des résultats exacts, objectifs, clairs, concis, constructifs, complets et en temps utile.", "D"],
    ["Faire examiner et approuver les résultats par le responsable de l'audit interne avant diffusion.", "D"],
    ["Communiquer les résultats aux personnes à même de garantir l'attention nécessaire.", "D"],
    ["En cas de non-conformité aux Normes, indiquer les Normes en cause, les raisons et l'impact.", "D"],
    ["Intégrer une déclaration de conformité aux Normes, corroborée par la supervision et le programme qualité.", "S"],
    ["Adapter les versions diffusées au lectorat (format, contenu, niveau de détail).", "S"]
  ],
  impl: ["Vérifier avant diffusion : concordance travaux/objectifs/périmètre/Normes, résultats étayés, communication avec la direction effectuée.", "Définir les modalités de diffusion et la liste des destinataires dans les méthodologies."],
  ev: ["Communications écrites des résultats définitifs.", "Diapositives et notes des communications orales.", "Documents confirmant l'examen et l'approbation avant diffusion.", "Documents attestant de la communication avec l'activité examinée."],
  check: ["Les résultats définitifs contiennent-ils tous les éléments requis (objectifs, périmètre, constats, conclusion, suites) ?", "Ont-ils été examinés et approuvés par le responsable de l'audit interne avant diffusion ?", "Les personnes chargées des suites et les dates sont-elles précisées ?"],
  quiz: [
    { q: "Qui doit examiner et approuver la communication des résultats définitifs avant sa diffusion ?", o: ["La direction de l'activité examinée", "Le responsable de l'audit interne", "Le Conseil", "Le régulateur"], a: 1, e: "Les résultats définitifs doivent être examinés et approuvés par le responsable de l'audit interne avant diffusion (Norme 15.1).", d: 0 },
    { q: "La communication des résultats définitifs doit préciser :", o: ["Uniquement les conclusions", "Les personnes chargées de donner suite aux constats et les dates d'achèvement attendues", "Le salaire des auditeurs", "Les convocations internes"], a: 1, e: "Elle doit préciser les personnes chargées de donner suite et les dates auxquelles les actions devraient être achevées (Norme 15.1).", d: 1 }
  ]
},
{
  num: "15.2", title: "Confirmation de la mise en œuvre des recommandations ou plans d'action", p: 15, pages: "122-123",
  sum: "Les auditeurs internes confirment, selon une méthodologie établie, que la direction a mis en œuvre les recommandations ou plans d'action : suivi de l'avancement, évaluations de suivi fondées sur les risques et actualisation d'un système de suivi.",
  kw: ["suivi", "plans d'action", "mise en œuvre", "retard", "risque accepté"],
  u: { g: "Que les engagements de la direction soient réellement mis en œuvre et suivis dans la durée.",
    r: ["Confirmer que la direction a mis en œuvre les recommandations ou ses propres plans d'action, selon une méthodologie établie : s'enquérir de l'avancement, procéder à des évaluations de suivi selon une approche fondée sur les risques, actualiser le statut dans un système de suivi.",
        "Ajuster le niveau de détail des procédures au caractère significatif des constats.",
        "Si la direction n'a pas progressé selon le calendrier : obtenir des explications, les consigner, et en discuter avec le responsable de l'audit interne.",
        "(Responsable de l'audit interne) Déterminer si, par son retard ou son inaction, la direction générale a accepté un risque dépassant le seuil de tolérance (cf. Norme 11.5)."],
    p: "Le système de suivi (tableur, base de données, logiciel) indique si les plans sont en cours ou en retard ; il est un outil de communication utile avec le Conseil et la direction générale.",
    a: ["Si la direction met en œuvre un autre plan satisfaisant, l'avancement du nouveau plan devrait être suivi jusqu'à sa réalisation complète.",
        "Des évaluations de suivi peuvent être réalisées pour les plans achevés, au cas par cas, selon la signification du risque."] },
  req: [
    ["Confirmer la mise en œuvre des recommandations ou plans d'action selon une méthodologie établie (enquête d'avancement, évaluations de suivi, système de suivi).", "D"],
    ["Actualiser le statut des actions mises en œuvre dans un système de suivi.", "D"],
    ["Tenir compte du caractère significatif des constats dans le niveau de détail des procédures de suivi.", "D"],
    ["En cas de retard : obtenir des explications de la direction, les consigner et en discuter avec le responsable de l'audit interne.", "D"],
    ["(Responsable de l'audit interne) Déterminer si la direction générale a accepté un risque dépassant le seuil de tolérance par son retard ou inaction.", "D"],
    ["Suivre l'avancement d'un plan de remplacement satisfaisant jusqu'à sa réalisation complète.", "S"]
  ],
  impl: ["Définir la périodicité des relances et les critères de déclenchement des évaluations de suivi.", "Automatiser si possible le suivi (rappels, tableaux de bord) et diffuser des rapports d'avancement au Conseil."],
  ev: ["Système de suivi régulièrement mis à jour (constats, plans d'action, avancement, confirmation de l'audit).", "Rapports sur l'état d'avancement des actions correctives préparés pour le Conseil et la direction générale."],
  check: ["Un système de suivi des plans d'action est-il tenu à jour ?", "Les retards sont-ils documentés et escaladés ?", "Les évaluations de suivi vérifient-elles que les constats sont réellement traités ?"],
  quiz: [
    { q: "Que doivent faire les auditeurs si la direction n'a pas progressé dans la mise en œuvre des actions selon le calendrier ?", o: ["Clôturer le dossier", "Obtenir des explications, les consigner et en discuter avec le responsable de l'audit interne", "Réécrire les constats", "Attendre la mission suivante"], a: 1, e: "Ils doivent obtenir des explications, les consigner et discuter du problème avec le responsable de l'audit interne (Norme 15.2).", d: 0 },
    { q: "Si le retard ou l'inaction de la direction générale équivaut à accepter un risque dépassant le seuil de tolérance, qui détermine cette situation ?", o: ["L'auditeur de la mission", "Le responsable de l'audit interne", "Le régulateur", "La direction de l'activité"], a: 1, e: "C'est le responsable de l'audit interne qui est responsable de le déterminer (Norme 15.2, cf. 11.5).", d: 1 }
  ]
}
];
