// Domaine III : Gouvernance de la fonction d'audit interne — contenu pédagogique original.
// cond = « conditions indispensables » (Conseil / direction générale), spécifiques à ce domaine.

export const principles = [];

export const standards = [
{
  num: "6.1", title: "Mandat d'audit interne", p: 6, pages: "40-42",
  sum: "Le responsable de l'audit interne aide le Conseil et la direction générale à définir le mandat de la fonction (autorité, rôle, responsabilités, périmètre, services) et le consigne dans la charte approuvée par le Conseil.",
  kw: ["mandat", "autorité", "périmètre", "charte", "conseil"],
  cond: ["Conseil : définir l'autorité, le rôle et les responsabilités ; approuver la charte intégrant le mandat, le périmètre et la nature des services.", "Direction générale : exprimer ses attentes et soutenir le mandat dans toute l'organisation."],
  u: {
    g: "Que la fonction d'audit interne dispose d'un mandat clair, approuvé par le Conseil, lui conférant l'autorité d'exercer sa Mission.",
    r: ["Fournir au Conseil et à la direction générale les informations nécessaires pour établir le mandat d'audit interne.",
        "Reporter dans la charte les prescriptions légales ou réglementaires lorsque le mandat est partiellement ou totalement prescrit par les lois ou règlements.",
        "Se coordonner avec les autres prestataires d'assurance, internes et externes, pour définir le périmètre et la nature des services.",
        "Consigner le mandat, ou y faire référence, dans la charte d'audit interne approuvée par le Conseil.",
        "Déterminer périodiquement si des changements de situation justifient de rediscuter le mandat avec le Conseil et la direction générale, et évaluer si l'autorité, le rôle et les responsabilités restent adaptés."],
    p: "Points clés à expliquer : autorité (rattachement direct au Conseil, accès libre et illimité), rôle (services d'assurance et de conseil, rôles hors audit le cas échéant), responsabilités, périmètre (tous les domaines de l'organisation) et nature des services.",
    a: ["Le mandat devrait être revu au moins une fois par an, et lors de changements majeurs (acquisition, refonte des Normes, nouveaux dirigeants, nouvelles lois).",
        "La coordination avec les autres prestataires d'assurance aide à préciser un mandat adéquat (cf. Norme 9.5)."]
  },
  req: [
    ["Fournir au Conseil et à la direction générale les informations nécessaires pour établir le mandat d'audit interne.", "D"],
    ["Reporter dans la charte les prescriptions des lois ou règlements lorsque le mandat est prescrit par ceux-ci.", "D"],
    ["Se coordonner avec les autres prestataires d'assurance, internes comme externes, pour aider à définir le périmètre et la nature des services.", "D"],
    ["Consigner le mandat, ou y faire référence, dans la charte d'audit interne approuvée par le Conseil.", "D"],
    ["Déterminer périodiquement si des changements nécessitent de s'entretenir avec le Conseil et la direction générale au sujet du mandat, et évaluer si l'autorité, le rôle et les responsabilités restent adaptés.", "D"],
    ["Échanger avec le Conseil et la direction générale sur l'autorité, les rôles, les responsabilités, le périmètre et les services d'audit interne.", "S"],
    ["Prendre officiellement en compte, au moins une fois par an, les changements susceptibles d'affecter le mandat.", "S"]
  ],
  impl: ["Partager sa connaissance des Normes, des lois et des pratiques de référence pour expliquer les caractéristiques d'une fonction efficace.", "Recommander au Conseil le type de contribution des autres fonctions à l'exercice du mandat."],
  ev: ["Procès-verbaux des réunions du Conseil sur le mandat et l'approbation de la charte.", "Procès-verbaux des réunions ayant approuvé les modifications de la charte."],
  check: ["Le mandat est-il consigné dans une charte approuvée par le Conseil ?", "Le périmètre et la nature des services sont-ils clairement définis ?", "Le mandat est-il réexaminé périodiquement (au moins une fois par an) ?"],
  quiz: [
    { q: "Qui approuve la charte d'audit interne intégrant le mandat ?", o: ["La direction générale", "Le Conseil", "Le comité de direction", "Les ressources humaines"], a: 1, e: "Le responsable de l'audit interne consigne le mandat dans la charte approuvée par le Conseil (Normes 6.1 et 6.2).", d: 0 },
    { q: "À quelle fréquence minimale le responsable de l'audit interne devrait-il prendre officiellement en compte les changements affectant le mandat ?", o: ["Tous les trois ans", "Deux fois par mois", "Au moins une fois par an", "Uniquement après une acquisition"], a: 2, e: "Bien que les changements puissent survenir à tout moment, il devrait les prendre officiellement en compte au moins une fois par an (Norme 6.1).", d: 1 }
  ]
},
{
  num: "6.2", title: "Charte d'audit interne", p: 6, pages: "43-44",
  sum: "Le responsable de l'audit interne élabore et tient à jour une charte précisant au minimum la Mission, l'engagement envers les Normes, le mandat (périmètre, services, attentes de soutien) et le positionnement de la fonction ; la charte est approuvée par le Conseil.",
  kw: ["charte", "rattachement", "accès illimité", "qualité", "approbation"],
  cond: ["Conseil : échanger sur les sujets à inclure, approuver la charte et la réexaminer avec le responsable de l'audit interne.", "Direction générale : communiquer ses attentes à intégrer dans la charte."],
  u: {
    g: "Que la charte formalise l'autorité, le positionnement et les engagements de la fonction, et qu'elle soit approuvée et entretenue par le Conseil.",
    r: ["Élaborer et tenir à jour une charte d'audit interne spécifiant au minimum : la Mission de l'audit interne ; l'engagement à respecter les Normes ; le mandat (périmètre, nature des services, responsabilités et attentes de soutien de la direction générale) ; le positionnement et les rattachements hiérarchiques au sein de l'organisation.",
        "Discuter le projet de charte avec le Conseil et la direction générale pour confirmer qu'elle reflète leur compréhension et leurs attentes."],
    p: "Sujets complémentaires à considérer : protection de l'objectivité et de l'indépendance, accès illimité (données, documents, personnes, biens), communication avec le Conseil et la direction générale, processus d'audit et traitement des différends, assurance qualité, approbations particulières.",
    a: ["La charte devrait décrire les rattachements : approbation des ressources humaines et des budgets, des dépenses du responsable de l'audit interne, examen de sa performance.",
        "Une pratique de référence consiste à examiner la charte périodiquement et à la mettre à jour si nécessaire."]
  },
  req: [
    ["Élaborer et tenir à jour une charte spécifiant au minimum la Mission, l'engagement envers les Normes, le mandat (périmètre, nature des services, responsabilités et attentes de soutien) et le positionnement/rattachements hiérarchiques.", "D"],
    ["Discuter du projet de charte avec le Conseil et la direction générale pour confirmer qu'elle reflète leur compréhension et leurs attentes.", "D"],
    ["Décrire les rattachements : approbation des RH et des budgets, des dépenses du responsable de l'audit interne, examen de sa performance.", "S"],
    ["Adapter la charte aux spécificités de l'organisation, au-delà des modèles existants.", "S"],
    ["Convenir avec le Conseil de la fréquence d'examen des dispositions de la charte et la mettre à jour si nécessaire.", "S"],
    ["Prendre en considération dans la charte : protection de l'objectivité/indépendance, accès illimité, communication, processus d'audit, assurance et amélioration de la qualité, approbations.", "S"]
  ],
  impl: ["Présenter généralement le projet définitif lors d'une réunion du Conseil, à des fins de discussion et d'approbation.", "Mentionner le texte légal lorsque le type de rattachement est fixé par la loi ou la réglementation."],
  ev: ["Charte approuvée avec date d'approbation.", "Procès-verbaux du Conseil sur l'approbation et le réexamen périodique de la charte."],
  check: ["La charte couvre-t-elle tous les éléments minimaux requis ?", "Elle a-t-elle été approuvée par le Conseil et datée ?", "Est-elle réexaminée périodiquement avec le Conseil ?"],
  quiz: [
    { q: "Parmi ces éléments, lequel doit figurer au minimum dans la charte d'audit interne ?", o: ["Le planning détaillé des missions de l'année", "La Mission de l'audit interne et l'engagement à respecter les Normes", "Les CV des auditeurs", "Le code source des outils d'audit"], a: 1, e: "La charte doit spécifier au minimum la Mission, l'engagement envers les Normes, le mandat et le positionnement/rattachements (Norme 6.2).", d: 0 },
    { q: "Que devrait décrire la charte concernant les rattachements hiérarchiques ?", o: ["Rien, c'est confidentiel", "L'approbation des RH et budgets, des dépenses du responsable de l'audit interne et l'examen de sa performance", "Uniquement le nom du dirigeant", "Les adresses des sites audités"], a: 1, e: "La charte devrait décrire ces processus de rattachement (Norme 6.2).", d: 1 }
  ]
},
{
  num: "6.3", title: "Soutien apporté par le Conseil et la direction générale", p: 6, pages: "45-46",
  sum: "Le responsable de l'audit interne fournit au Conseil et à la direction générale les informations nécessaires pour qu'ils soutiennent activement la fonction : rattachement au niveau suffisant, accès illimité, communication directe et régulière, approbation du plan et du budget.",
  kw: ["soutien", "huis clos", "accès illimité", "budget", "reconnaissance"],
  cond: ["Conseil : soutenir la Mission, garantir l'accès illimité, communiquer directement et régulièrement, manifester son soutien (rattachement, approbation charte/plan/budget, réunions privées).", "Direction générale : promouvoir la reconnaissance de la fonction et collaborer pour l'accès illimité."],
  u: {
    g: "Que la fonction d'audit interne bénéficie du soutien actif du Conseil et de la direction générale pour accomplir sa Mission.",
    r: ["Fournir au Conseil et à la direction générale les informations dont ils ont besoin pour apporter leur soutien et promouvoir la reconnaissance de la fonction.",
        "Coordonner avec la direction générale ses échanges avec le Conseil pour permettre à celui-ci de remplir ses obligations."],
    p: "Pratiques attendues : réunions du responsable de l'audit interne avec le Conseil sans la direction générale (au moins une fois par an, idéalement chaque trimestre), échanges réguliers sur l'avancement des travaux, approbation du budget et du plan de ressources.",
    a: ["Une pratique de référence rattache hiérarchiquement le responsable de l'audit interne au directeur général ou à son équivalent.",
        "Le responsable de l'audit interne informe généralement la direction générale des sujets traités en privé, sauf inapproprié (ex. inconduite d'un membre de la direction)."]
  },
  req: [
    ["Fournir au Conseil et à la direction générale les informations nécessaires pour soutenir la fonction et promouvoir sa reconnaissance dans l'organisation.", "D"],
    ["Coordonner avec la direction générale ses échanges avec le Conseil afin de permettre à ce dernier de remplir ses obligations.", "D"],
    ["Se réunir avec le Conseil sans la présence de la direction au moins une fois par an (idéalement chaque trimestre).", "S"],
    ["Convenir avec le Conseil de la nature et du niveau de détail des informations à transmettre.", "S"],
    ["Informrer généralement la direction générale des sujets traités en privé avec le Conseil, sauf inapproprié.", "S"],
    ["Collaborer avec la direction générale pour comprendre les exigences de communication du Conseil et éviter redondances et contradictions.", "S"]
  ],
  impl: ["Obtenir l'approbation du Conseil du budget et du plan de développement des ressources, preuve que la fonction dispose des moyens de son plan.", "Tenir des échanges réguliers entre les réunions officielles pour tenir le Conseil informé."],
  ev: ["Procès-verbaux des réunions examinant et approuvant le plan, le budget et le plan de ressources.", "Documentation des échanges sur le droit d'accès illimité.", "Matrice des informations à transmettre au Conseil et à la direction générale, avec fréquences."],
  check: ["Des réunions privées avec le Conseil ont-elles lieu au moins une fois par an ?", "Le plan et le budget sont-ils approuvés par le Conseil ?", "L'accès illimité aux données, documents, personnes et biens est-il garanti et documenté ?"],
  quiz: [
    { q: "À quelle fréquence le responsable de l'audit interne devrait-il se réunir avec le Conseil sans la présence de la direction ?", o: ["Jamais", "Au moins une fois par an, idéalement chaque trimestre", "Uniquement en cas de crise", "Tous les cinq ans"], a: 1, e: "Au moins une fois par an, voire une fois par trimestre selon les meilleures pratiques de gouvernance (Norme 6.3).", d: 0 },
    { q: "Qui approuve le budget d'audit interne et le plan de développement des ressources ?", o: ["La direction de l'activité auditée", "Le Conseil", "Le contrôleur de gestion", "Le prestataire externe"], a: 1, e: "L'approbation par le Conseil du budget et du plan de développement des ressources démontre que la fonction dispose des ressources nécessaires (Norme 6.3).", d: 0 }
  ]
},
{
  num: "7.1", title: "Indépendance au sein de l'organisation", p: 7, pages: "47-50",
  sum: "Le responsable de l'audit interne confirme au Conseil, au moins une fois par an, l'indépendance de la fonction, formalise les rattachements dans la charte, traite les rôles hors audit avec des mesures de protection et signale toute atteinte.",
  kw: ["indépendance", "rattachement", "ingérence", "rôles hors audit", "mesures de protection"],
  cond: ["Conseil : rattachement direct, autorité de nomination/révocation, avis sur performance et rémunération, réunions privées, position hiérarchique suffisante, absence d'ingérence.", "Direction générale : placer la fonction à un niveau sans ingérence, reconnaître le rattachement direct au Conseil, soutenir les mesures de protection."],
  u: {
    g: "Que la fonction d'audit interne puisse exercer ses responsabilités sans biais ni ingérence, grâce à son rattachement au Conseil et à une position hiérarchique suffisante.",
    r: ["Confirmer au Conseil, au moins une fois par an, l'indépendance de la fonction au sein de l'organisation, en faisant part des incidents et des mesures de protection.",
        "Formaliser dans la charte les rattachements et la position de la fonction au sein de l'organisation, tels qu'établis par le Conseil.",
        "Échanger avec le Conseil et la direction générale sur tout rôle ou responsabilité (actuel ou futur) susceptible de compromettre l'indépendance, et suggérer des mesures de protection.",
        "Si des responsabilités hors audit sont assumées : en préciser le détail, la nature et les protections dans la charte ; prévoir des processus d'assurance compensatoires si ces domaines sont audités.",
        "Si des responsabilités hors audit sont confiées à titre provisoire : faire réaliser les missions d'assurance par un tiers indépendant pendant la durée du mandat et les 12 mois qui suivent, et établir un plan de transfert au management.",
        "Consigner les caractéristiques de la structure de gouvernance qui ne garantissent pas l'indépendance, et les mesures de protection possibles."],
    p: "Exemples d'atteintes à l'indépendance : impossibilité de communiquer directement avec le Conseil, restriction du périmètre ou de l'accès par la direction générale, pressions pour modifier des constats, budget réduit au point d'empêcher l'exercice du mandat, audit d'un domaine dont le responsable de l'audit interne est responsable.",
    a: ["Un rattachement fonctionnel au Conseil et un rattachement hiérarchique au directeur général (ou équivalent) sont une pratique de référence.",
        "Avant l'embauche du responsable de l'audit interne, le Conseil devrait participer au recrutement et à la nomination."]
  },
  req: [
    ["Confirmer au Conseil, au moins une fois par an, l'indépendance de la fonction au sein de l'organisation, en signalant les incidents et les mesures de protection mises en place.", "D"],
    ["Formaliser dans la charte les rattachements et la position de la fonction au sein de l'organisation, tels qu'établis par le Conseil.", "D"],
    ["Échanger avec le Conseil et la direction générale sur tout rôle et responsabilité susceptible de compromettre l'indépendance, et suggérer des mesures de protection.", "D"],
    ["Préciser dans la charte le détail, la nature et les mesures de protection de toute responsabilité hors du champ de l'audit interne.", "D"],
    ["Prévoir des processus d'assurance compensatoires (ex. prestataire externe objectif rendant compte au Conseil) si des domaines hors audit du responsable de l'audit interne sont audités.", "D"],
    ["Faire réaliser par un tiers indépendant les missions d'assurance sur des responsabilités provisoires du responsable de l'audit interne, pendant le mandat et les 12 mois suivants, et établir un plan de transfert.", "D"],
    ["Consigner les caractéristiques de la structure de gouvernance ne garantissant pas l'indépendance, et toute mesure de protection possible.", "D"],
    ["Rattacher le responsable de l'audit interne fonctionnellement au Conseil et, en pratique, hiérarchiquement au directeur général ou à un dirigeant avec garanties équivalentes.", "S"],
    ["Évaluer si son indépendance est menacée en tenant compte de ses rattachements, rôles et responsabilités ; remédier aux situations perçues à tort comme des atteintes.", "S"],
    ["Déterminer les parties à informer d'une entrave selon sa nature, son impact et les attentes des parties prenantes.", "S"]
  ],
  impl: ["Discuter avec le Conseil et la direction générale de l'appropriation du délai de 12 mois pour l'assurance par un tiers après un mandat provisoire.", "En cas d'atteinte découverte au terme d'une mission pouvant compromettre la fiabilité des résultats, en discuter avec les parties et décider des mesures (cf. Normes 2.3 et 11.4)."],
  ev: ["Charte formalisant les rattachements de la fonction.", "Procès-verbaux attestant des échanges sur l'indépendance et de la confirmation annuelle au Conseil.", "Documents liés aux services d'assurance confiés à d'autres prestataires pour garantir l'indépendance."],
  check: ["L'indépendance est-elle confirmée au Conseil au moins une fois par an ?", "Les rattachements sont-ils formalisés dans la charte ?", "Des mesures de protection couvrent-elles les rôles hors audit du responsable de l'audit interne ?"],
  quiz: [
    { q: "À quelle fréquence le responsable de l'audit interne doit-il confirmer au Conseil l'indépendance de la fonction ?", o: ["Une fois tous les cinq ans", "Au moins une fois par an", "À chaque mission", "Uniquement lors de l'évaluation externe"], a: 1, e: "Il doit confirmer l'indépendance au Conseil au moins une fois par an, en faisant part des incidents et des mesures de protection (Norme 7.1).", d: 0 },
    { q: "Le responsable de l'audit interne se voit confier provisoirement la gestion des risques. Que faut-il mettre en place ?", o: ["Rien si c'est temporaire", "Des missions d'assurance réalisées par un tiers indépendant pendant le mandat provisoire et les 12 mois suivants", "Une simple déclaration d'indépendance", "La suspension du plan d'audit"], a: 1, e: "Un tiers indépendant doit réaliser les missions d'assurance y afférentes pendant la durée du mandat provisoire et durant les 12 mois qui suivent, avec un plan de transfert au management (Norme 7.1).", d: 2 }
  ]
},
{
  num: "7.2", title: "Qualifications du responsable de l'audit interne", p: 7, pages: "51-52",
  sum: "Le responsable de l'audit interne aide le Conseil à comprendre les qualifications et compétences indispensables à son poste, et maintient et développe les siennes pour répondre aux attentes du Conseil.",
  kw: ["qualifications", "compétences", "description de poste", "CIA", "plan de succession"],
  cond: ["Conseil : approuver les rôles et responsabilités, préciser les qualifications requises, nommer un responsable de l'audit interne qualifié.", "Direction générale : définir les qualifications requises et permettre nomination, développement et rémunération selon les processus RH."],
  u: {
    g: "Que le responsable de l'audit interne possède les qualifications et compétences nécessaires pour gérer efficacement la fonction et en garantir la qualité.",
    r: ["Aider le Conseil à comprendre les qualifications et compétences indispensables au responsable de l'audit interne, en fournissant des exemples courants et de référence.",
        "Mettre à jour et développer les qualifications et compétences nécessaires pour s'acquitter des rôles et responsabilités attendus par le Conseil."],
    p: "Qualifications typiques : connaissance approfondie des Normes et pratiques de référence, expérience de mise en place et de gestion d'une fonction, titre de CIA ou équivalent, expérience à un poste à responsabilités et dans le secteur d'activité.",
    a: ["Un candidat peut être retenu pour d'autres qualités, à compléter par les compétences de l'équipe et l'expérience acquise sur le terrain.",
        "Un plan de succession du responsable de l'audit interne devrait être mis en place et partagé avec le Conseil et la direction générale."]
  },
  req: [
    ["Aider le Conseil à comprendre les qualifications et compétences indispensables au poste, en informant et en fournissant des exemples de qualifications courantes et de référence.", "D"],
    ["Mettre à jour et développer les qualifications et compétences nécessaires pour s'acquitter des rôles et responsabilités attendus par le Conseil.", "D"],
    ["S'appuyer sur une liste généralement récapitulée dans une description de poste : connaissance des Normes, expérience de gestion d'une fonction, CIA ou titre équivalent, expérience de responsabilité et du secteur.", "S"],
    ["Travailler en étroite collaboration avec les membres expérimentés et d'autres professionnels si l'expérience sectorielle fait défaut.", "S"],
    ["Poursuivre la formation professionnelle continue, l'adhésion à des associations et les certifications professionnelles.", "S"]
  ],
  impl: ["Faire examiner et approuver la description du poste par le Conseil pour s'assurer qu'elle reflète les qualifications attendues.", "Établir un plan de succession cohérent avec ceux de l'organisation, partagé avec le Conseil et la direction générale."],
  ev: ["Approbation par le Conseil de la description de poste et/ou de la nomination.", "Plan de formation professionnelle du responsable de l'audit interne et preuve de mise en œuvre.", "Documents attestant des échanges sur le plan de succession."],
  check: ["Les qualifications requises sont-elles formalisées dans une description de poste ?", "Un plan de développement professionnel du responsable de l'audit interne existe-t-il ?", "Un plan de succession est-il prévu et partagé ?"],
  quiz: [
    { q: "Quel titre professionnel est cité par la Norme 7.2 comme référence pour le responsable de l'audit interne ?", o: ["CPA", "CIA (Certified Internal Auditor)", "PMP", "CFA"], a: 1, e: "La Norme cite le titre d'Auditeur interne certifié (Certified Internal Auditor, CIA) ou d'autres formations et certifications pertinentes.", d: 0 },
    { q: "Que devrait-on mettre en place concernant le remplacement éventuel du responsable de l'audit interne ?", o: ["Rien, le Conseil recrutera le moment venu", "Un plan de succession partagé avec le Conseil et la direction générale", "Une fusion avec le contrôle interne", "Une externalisation systématique"], a: 1, e: "Un plan de succession devrait être mis en place pour identifier des candidats internes ou externes, et son contenu partagé avec le Conseil et la direction générale (Norme 7.2).", d: 1 }
  ]
},
{
  num: "8.1", title: "Relation avec le Conseil", p: 8, pages: "53-54",
  sum: "Le responsable de l'audit interne fournit au Conseil les informations nécessaires à sa surveillance : plan et budget, changements affectant mandat ou charte, atteintes à l'indépendance, résultats des services et du programme qualité.",
  kw: ["conseil", "surveillance", "communication", "désaccord", "attentes"],
  cond: ["Conseil : communiquer avec le responsable de l'audit interne, partager ses vues sur stratégies/risques, exprimer ses attentes (fréquence, critères, processus).", "Direction générale : partager ses vues, aider le Conseil à comprendre l'efficacité des processus, collaborer sur le processus d'escalade."],
  u: {
    g: "Que le Conseil reçoive, en temps utile, les informations dont il a besoin pour exercer son rôle de surveillance de la fonction d'audit interne.",
    r: ["Fournir au Conseil les informations nécessaires à son rôle de surveillance, demandées ou jugées utiles.",
        "Rendre compte au Conseil et à la direction générale sur : le plan et le budget (et leurs modifications significatives) ; les changements impactant mandat ou charte ; les atteintes potentielles à l'indépendance ; les résultats des services (conclusions, évaluations, conseils, suivi) ; les résultats du programme d'évaluation et d'amélioration de la qualité.",
        "En cas de désaccord avec la direction générale ou d'autres parties sur le périmètre, les constats ou d'autres aspects : exposer au Conseil les faits et circonstances lui permettant d'envisager d'intervenir."],
    p: "Maintenir un dialogue par des rapports écrits ou oraux, présentations, réunions officielles (souvent trimestrielles) et échanges informels. Consigner les attentes du Conseil dans les méthodologies.",
    a: ["Définir avec le Conseil des critères de caractère significatif des risques à lui porter (seuil de tolérance).",
        "La communication ne doit pas se limiter au risque financier : initiatives stratégiques, cybersécurité, santé-sécurité, durabilité, continuité, réputation."]
  },
  req: [
    ["Fournir au Conseil les informations nécessaires pour exercer son rôle de surveillance.", "D"],
    ["Rendre compte au Conseil et à la direction générale sur le plan et le budget et leurs modifications significatives.", "D"],
    ["Rendre compte des changements susceptibles d'impacter le mandat ou la charte.", "D"],
    ["Rendre compte des atteintes potentielles à l'indépendance.", "D"],
    ["Rendre compte des résultats des services d'audit interne, notamment conclusions, problématiques, évaluations, conseils et suivi.", "D"],
    ["Rendre compte des résultats du programme d'évaluation et d'amélioration de la qualité.", "D"],
    ["En cas de désaccord empêchant la fonction d'exercer ses responsabilités, exposer au Conseil les faits et circonstances permettant d'envisager une intervention.", "D"],
    ["Confirmer périodiquement au Conseil que la fréquence, la nature et le contenu des communications correspondent à ses attentes.", "S"],
    ["Définir avec le Conseil des critères de caractère significatif des problématiques à porter à sa connaissance, et le processus associé.", "S"]
  ],
  impl: ["Utiliser plusieurs modes de communication : rapports écrits/oraux, présentations, réunions officielles ou informelles.", "Consulter le point de vue du Conseil sur les stratégies, objectifs et risques pour définir les priorités de l'audit interne."],
  ev: ["Ordres du jour et procès-verbaux des réunions du Conseil précisant la nature, les sujets et la fréquence des échanges.", "Présentations et communications du responsable de l'audit interne aux membres du Conseil.", "Liste des critères d'identification des problématiques à porter à l'attention du Conseil."],
  check: ["Les attentes du Conseil en matière de communication sont-elles documentées ?", "Les cinq thèmes de reporting (plan/budget, changements, indépendance, résultats, qualité) sont-ils couverts ?", "Un processus d'escalade des désaccords existe-t-il ?"],
  quiz: [
    { q: "Parmi ces sujets, lequel n'est PAS un thème de reporting obligatoire au Conseil selon la Norme 8.1 ?", o: ["Le plan et le budget de l'audit interne", "Les atteintes potentielles à l'indépendance", "Les résultats du programme qualité", "La rémunération individuelle de chaque auditeur"], a: 3, e: "La rémunération individuelle des auditeurs ne fait pas partie des thèmes listés : plan/budget, changements du mandat ou de la charte, indépendance, résultats des services et du programme qualité.", d: 1 },
    { q: "Le responsable de l'audit interne est en désaccord avec la direction générale sur des constats. Que doit-il faire ?", o: ["Modifier les constats pour trouver un accord", "Exposer au Conseil les faits et circonstances permettant d'envisager d'intervenir", "Arrêter la communication des résultats", "Suivre systématiquement la position de la direction"], a: 1, e: "Il doit exposer au Conseil les faits et circonstances qui permettront au Conseil d'envisager, dans son rôle de surveillance, s'il doit intervenir (Norme 8.1).", d: 1 }
  ]
},
{
  num: "8.2", title: "Ressources", p: 8, pages: "55-56",
  sum: "Le responsable de l'audit interne détermine si la fonction dispose de ressources suffisantes pour remplir son mandat et exécuter le plan ; sinon, il informe le Conseil des conséquences et propose une stratégie.",
  kw: ["ressources", "effectifs", "compétences", "analyse des écarts", "stratégie"],
  cond: ["Conseil : se concerter avec la direction générale pour fournir des ressources suffisantes, échanger au moins une fois par an sur leur suffisance, chercher des solutions.", "Direction générale : fournir des ressources suffisantes et se concerter sur les insuffisances et solutions."],
  u: {
    g: "Que l'écart entre les ressources disponibles et celles nécessaires au mandat et au plan d'audit soit mesuré, communiqué et traité.",
    r: ["Déterminer si la fonction dispose de ressources suffisantes pour remplir son mandat et exécuter le plan d'audit interne.",
        "En cas de ressources insuffisantes, informer le Conseil des conséquences potentielles et proposer une stratégie pour pallier les lacunes."],
    p: "Procéder à une analyse des écarts entre ressources disponibles et nécessaires ; prévoir un plan de développement des ressources (budget complémentaire, options de dotation en personnel, technologies), éventuellement avec une analyse coûts-avantages présentée au Conseil.",
    a: ["La question des ressources devrait être abordée au moins une fois par an, souvent chaque trimestre.",
        "Les options incluent l'externalisation, l'invitation d'autres auditeurs, et les technologies améliorant efficience et efficacité."]
  },
  req: [
    ["Déterminer si la fonction dispose de ressources suffisantes pour remplir son mandat et exécuter le plan d'audit interne.", "D"],
    ["En cas de ressources insuffisantes, informer le Conseil des conséquences potentielles et proposer une stratégie pour pallier les lacunes.", "D"],
    ["Procéder à une analyse des écarts entre ressources disponibles et nécessaires.", "S"],
    ["Prévoir un plan de développement des ressources, éventuellement assorti d'une demande de budget complémentaire, tenant compte des options de dotation et des technologies.", "S"],
    ["Aborder la question des ressources avec le Conseil au moins une fois par an (pratique fréquente : chaque trimestre).", "S"]
  ],
  impl: ["Inclure une analyse coûts-avantages des différentes approches de dotation (interne, externalisation, technologies) à présenter au Conseil.", "Examiner avec le Conseil les options pour couvrir le champ attendu de la fonction."],
  ev: ["Échanges et procès-verbaux sur l'adéquation des ressources d'audit interne.", "Plans de développement des ressources et demandes de budget.", "Documents relatifs aux analyses des écarts entre plan d'audit et ressources disponibles."],
  check: ["Une analyse des écarts de ressources a-t-elle été réalisée ?", "Les insuffisances et leurs conséquences sont-elles communiquées au Conseil ?", "Une stratégie de remédiation (effectifs, compétences, technologies) est-elle proposée ?"],
  quiz: [
    { q: "Que doit faire le responsable de l'audit interne lorsque les ressources sont insuffisantes pour exécuter le plan ?", o: ["Réduire le plan sans en informer personne", "Informer le Conseil des conséquences potentielles et proposer une stratégie", "Attendre le prochain cycle budgétaire", "Demander aux auditeurs de travailler bénévolement"], a: 1, e: "Il doit informer le Conseil des conséquences potentielles et proposer une stratégie pour pallier les lacunes (Norme 8.2).", d: 0 },
    { q: "L'adéquation des ressources (effectifs et compétences) doit être échangée avec le Conseil au minimum :", o: ["Une fois tous les cinq ans", "Une fois par an", "À chaque mission", "Uniquement sur demande du Conseil"], a: 1, e: "Au moins une fois par an, à l'occasion de la présentation du plan d'audit interne ; une discussion trimestrielle est une pratique fréquente (Norme 8.2).", d: 1 }
  ]
},
{
  num: "8.3", title: "Qualité", p: 8, pages: "56-57",
  sum: "Le responsable de l'audit interne conçoit, déploie et tient à jour un programme d'assurance et d'amélioration de la qualité couvrant tous les aspects de la fonction, avec des évaluations internes et externes, et en communique les résultats au Conseil et à la direction générale.",
  kw: ["qualité", "programme d'assurance", "évaluations", "indicateurs", "conformité"],
  cond: ["Conseil : échanger sur le programme qualité, approuver au moins une fois par an les objectifs de performance, évaluer l'efficacité de la fonction.", "Direction générale : exposer son point de vue sur les objectifs et procéder avec le Conseil à l'évaluation annuelle."],
  u: {
    g: "Que la qualité de la fonction — conformité aux Normes et atteinte des objectifs de performance — soit évaluée en continu et communiquée.",
    r: ["Concevoir, déployer et tenir à jour un programme d'assurance et d'amélioration de la qualité portant sur tous les aspects de la fonction, incluant évaluations externes (Norme 8.4) et internes (Norme 12.1).",
        "Informer le Conseil et la direction générale des résultats de l'évaluation interne au moins une fois par an, et de l'évaluation externe dès sa réalisation.",
        "Communiquer sur : la conformité aux Normes et l'atteinte des objectifs de performance ; la conformité aux lois/règlements applicables ; les mesures pour remédier aux lacunes et les opportunités d'amélioration."],
    p: "L'évaluation de la qualité peut porter sur : la contribution aux processus de gouvernance/risques/contrôle, la productivité des auditeurs, la conformité légale, la rentabilité des processus, la robustesse des relations avec les parties prenantes.",
    a: ["Les mesures de remédiation des lacunes devraient être convenues avec le Conseil, avec suivi de leur avancement.",
        "Le programme qualité est la preuve de la conformité de la fonction aux Normes (cf. application du Domaine III)."]
  },
  req: [
    ["Concevoir, déployer et tenir à jour un programme d'assurance et d'amélioration de la qualité portant sur tous les aspects de la fonction d'audit interne.", "D"],
    ["Inclure dans ce programme des évaluations externes (Norme 8.4) et des évaluations internes (Norme 12.1).", "D"],
    ["Informer le Conseil et la direction générale des résultats de l'évaluation interne de la qualité au moins une fois par an.", "D"],
    ["Communiquer les résultats de l'évaluation externe de la qualité dès sa réalisation.", "D"],
    ["Préciser dans ces communications : la conformité aux Normes et l'atteinte des objectifs de performance, la conformité légale applicable, et les mesures/remédiations et opportunités d'amélioration.", "D"],
    ["Communiquer le périmètre, la fréquence et les résultats des évaluations, les mesures convenues et l'état d'avancement des mesures convenues avec le Conseil.", "S"]
  ],
  impl: ["Faire porter l'évaluation sur la contribution aux processus de gouvernance, risques et contrôle, la productivité, la conformité légale, la rentabilité, la relation avec les parties prenantes et d'autres indicateurs (cf. Norme 12.2).", "Suivre l'avancement des plans d'action issus des évaluations."],
  ev: ["Procès-verbaux des réunions du Conseil sur le programme qualité.", "Présentations des résultats des évaluations et de l'avancement des plans d'action.", "Documents de travail attestant de la réalisation des activités prévues au programme."],
  check: ["Un programme d'assurance et d'amélioration de la qualité existe-t-il et couvre-t-il tous les aspects de la fonction ?", "Les résultats des évaluations sont-ils communiqués au Conseil (interne : annuel ; externe : dès réalisation) ?", "Les plans d'action qualité sont-ils suivis ?"],
  quiz: [
    { q: "À quelle fréquence les résultats de l'évaluation INTERNE de la qualité doivent-ils être communiqués au Conseil et à la direction générale ?", o: ["Tous les cinq ans", "Au moins une fois par an", "Chaque mois", "Uniquement après une évaluation externe"], a: 1, e: "Au moins une fois par an ; les résultats de l'évaluation externe, eux, sont communiqués dès sa réalisation (Norme 8.3).", d: 1 },
    { q: "Le programme d'assurance et d'amélioration de la qualité comprend :", o: ["Uniquement des enquêtes de satisfaction", "Des évaluations externes et des évaluations internes", "Uniquement l'évaluation externe quinquennale", "Un audit financier annuel"], a: 1, e: "Il inclut deux types d'évaluations : externes (Norme 8.4) et internes (Norme 12.1) (Norme 8.3).", d: 0 }
  ]
},
{
  num: "8.4", title: "Évaluation externe de la qualité", p: 8, pages: "58-60",
  sum: "Une évaluation externe de la qualité est réalisée au moins une fois tous les cinq ans par un évaluateur qualifié et indépendant (ou sous forme d'auto-évaluation suivie d'une validation indépendante), selon un plan discuté avec le Conseil.",
  kw: ["évaluation externe", "cinq ans", "indépendance de l'évaluateur", "CIA", "auto-évaluation"],
  cond: ["Conseil : échanger sur les modalités, déterminer périmètre et fréquence, examiner et approuver le plan, recevoir directement les résultats, approuver les plans d'action et leur calendrier.", "Direction générale : déterminer périmètre et fréquence avec le Conseil, examiner les résultats et convenir des plans d'action."],
  u: {
    g: "Que la conformité de la fonction aux Normes soit périodiquement validée par un regard externe qualifié et indépendant.",
    r: ["Élaborer un plan d'évaluation externe de la qualité et échanger avec le Conseil à ce sujet.",
        "Faire réaliser l'évaluation externe au moins une fois tous les cinq ans par un évaluateur ou une équipe qualifié(e) et indépendant(e).",
        "L'évaluation externe peut prendre la forme d'une auto-évaluation suivie d'une validation indépendante.",
        "S'assurer qu'au moins une personne de l'équipe d'évaluation détient un titre de CIA en cours de validité."],
    p: "L'évaluation devrait examiner : la conformité aux Normes, le mandat/charte/stratégie/méthodologies/plan, la conformité légale, les indicateurs de performance, les compétences, l'intégration dans la gouvernance, la contribution aux processus et la réponse aux attentes des parties prenantes.",
    a: ["Ne sont pas indépendants : les collaborateurs d'autres fonctions de l'organisation, ceux d'une organisation apparentée, et les évaluations réciproques entre deux organisations.",
        "Les évaluations entre au moins trois pairs peuvent être considérées comme indépendantes."]
  },
  req: [
    ["Élaborer un plan d'évaluation externe de la qualité de la fonction et échanger avec le Conseil à ce sujet.", "D"],
    ["Faire réaliser l'évaluation externe au moins une fois tous les cinq ans par un évaluateur ou une équipe d'évaluation qualifié(e) et indépendant(e).", "D"],
    ["Permettre la forme d'auto-évaluation suivie d'une validation indépendante.", "D"],
    ["S'assurer, lors de la sélection, qu'au moins une personne de l'équipe détient un titre de CIA en cours de validité.", "D"],
    ["Tenir compte des atteintes potentielles à l'indépendance des évaluateurs liées aux relations passées, présentes ou futures avec l'organisation.", "S"],
    ["Faire porter l'évaluation sur la conformité aux Normes, le mandat, la charte, la stratégie, les méthodologies, les processus, l'évaluation des risques et le plan d'audit interne.", "S"],
    ["Envisager d'accroître la fréquence ou d'élargir le périmètre en cas de changements significatifs (dirigeants, méthodologies, fusion, rotation) ou d'exigences réglementaires.", "S"]
  ],
  impl: ["Vérifier les qualifications de l'équipe : savoir-faire sur les Normes, expérience de responsable de l'audit interne, expérience sectorielle, expérience d'évaluations externes, formations reconnues par l'IIA, attestation d'absence de conflit d'intérêts.", "Pour l'auto-évaluation avec validation : processus interne exhaustif et documenté, validation par un évaluateur externe qualifié, analyses comparatives et entretiens avec les parties prenantes."],
  ev: ["Procès-verbal de la réunion du Conseil approuvant le plan d'évaluation externe.", "Rapport officiel d'évaluation externe rédigé et validé par un évaluateur qualifié et indépendant.", "Présentations des résultats à l'intention du Conseil et plans d'action."],
  check: ["Une évaluation externe a-t-elle lieu au moins tous les cinq ans ?", "L'indépendance et les qualifications de l'évaluateur sont-elles vérifiées (dont au moins un CIA) ?", "Le plan d'évaluation est-il approuvé par le Conseil et les résultats suivis par des plans d'action ?"],
  quiz: [
    { q: "À quelle fréquence minimale l'évaluation externe de la qualité doit-elle être réalisée ?", o: ["Chaque année", "Tous les trois ans", "Au moins une fois tous les cinq ans", "Une seule fois"], a: 2, e: "L'évaluation externe doit être réalisée au moins une fois tous les cinq ans par un évaluateur ou une équipe qualifié(e) et indépendant(e) (Norme 8.4).", d: 0 },
    { q: "Parmi ces situations, laquelle est considérée comme indépendante aux fins d'une évaluation externe ?", o: ["Un collaborateur d'une autre fonction de l'organisation", "Une évaluation réciproque entre deux organisations", "Un collaborateur de la maison mère", "Une évaluation entre au moins trois pairs du même secteur"], a: 3, e: "Les évaluations réciproques entre deux organisations ne sont pas indépendantes ; celles entre au moins trois pairs peuvent l'être (Norme 8.4).", d: 2 }
  ]
}
];
