// Domaine II : Éthique et professionnalisme — contenu pédagogique original (reformulations fidèles).
// Obligation : D = DOIT (exigence impérative), S = DEVRAIT (pratique privilégiée), M = PEUT (optionnel).

export const principles = [];

export const standards = [
{
  num: "1.1", title: "Honnêteté et courage professionnel", p: 1, pages: "17-18",
  sum: "Les auditeurs internes accomplissent leur travail avec honnêteté et courage : ils communiquent de façon sincère, précise et respectueuse, ne dissimulent aucun fait matériel et osent dire les choses même face à des situations difficiles.",
  kw: ["honnêteté", "courage professionnel", "sincérité", "communication", "faits matériels"],
  u: {
    g: "Que les travaux et communications de l'audit interne reposent sur la vérité, exprimée avec sincérité et courage, même lorsque cela est inconfortable.",
    r: ["Être sincère, précis, clair, ouvert et respectueux dans toutes les communications professionnelles, y compris en cas de désaccord.",
        "Ne jamais faire de déclarations fausses ou trompeuses, ni dissimuler ou omettre des constatations ou informations pertinentes.",
        "Révéler tous les faits matériels connus qui pourraient affecter la capacité de l'organisation à décider en connaissance de cause."],
    p: "Face à un dilemme, l'auditeur exprime son point de vue avec tact mais sans diluer le message ; il en discute avec son superviseur lorsque la situation est délicate. Le responsable de l'audit interne crée un environnement où chacun peut communiquer des résultats légitimes, favorables ou non.",
    a: ["Le silence ou l'omission d'un constat est un manquement, au même titre qu'une déclaration fausse.",
        "Le courage professionnel se développe : formation éthique, mentorat, supervision et études de cas."]
  },
  req: [
    ["Accomplir leur travail avec honnêteté et courage professionnel.", "D"],
    ["Être sincères, précis, clairs, ouverts et respectueux dans toutes leurs relations et communications professionnelles, même en cas de scepticisme ou d'opposition.", "D"],
    ["Ne pas faire de déclarations fausses, trompeuses ou mensongères, ni dissimuler ou omettre des constatations ou informations pertinentes.", "D"],
    ["Révéler tous les faits matériels connus qui, s'ils n'étaient pas révélés, pourraient affecter la capacité de l'organisation à prendre des décisions éclairées.", "D"],
    ["Faire preuve de courage professionnel en communiquant avec sincérité et en prenant les mesures appropriées, même face à des dilemmes ou situations difficiles.", "D"],
    ["(Responsable de l'audit interne) Veiller à ce que les auditeurs travaillent dans un environnement leur permettant de communiquer des résultats légitimes et fondés sur des éléments probants, favorables ou non.", "D"],
    ["Renforcer la compréhension de l'honnêteté et du courage professionnel via une formation continue sur l'éthique.", "S"],
    ["Discuter avec leur superviseur des situations mettant en cause leur honnêteté ou leur courage professionnel.", "S"],
    ["(Responsable de l'audit interne) Mettre à disposition des formations et des études de cas impliquant des choix éthiques.", "S"],
    ["(Superviseur) Fournir des conseils lors de l'approbation des programmes de travail ou de la revue des documents de travail face à des situations menaçant l'honnêteté.", "M"]
  ],
  impl: ["Sensibiliser via la formation continue à l'éthique ; privilégier l'apprentissage sur le terrain, le mentorat et la supervision pour développer le tact et la communication respectueuse.", "Encadrer par une supervision adéquate des missions et des examens périodiques de la performance ; solliciter le retour des parties prenantes sur l'honnêteté et le courage démontrés."],
  ev: ["Plan de formation comprenant des formations à l'éthique et attestations de participation.", "Évaluations de performance visant l'honnêteté et le courage professionnel.", "Retours des principales parties prenantes sur l'honnêteté et le courage des auditeurs."],
  check: ["Les auditeurs internes communiquent-ils leurs résultats avec honnêteté, même lorsqu'ils sont défavorables ?", "Les communications professionnelles sont-elles sincères, précises, claires et respectueuses ?", "Les faits matériels connus sont-ils systématiquement révélés aux décideurs ?"],
  quiz: [
    { q: "Un auditeur découvre un fait matériel qui pourrait changer une décision de l'organisation, mais le management estime qu'il n'est « pas utile » de le mentionner. Que doit-il faire ?", o: ["Le taire car le management tranche", "Le révéler, car les faits matériels doivent être révélés", "L'inclure seulement dans les documents de travail internes", "Attendre la prochaine mission"], a: 1, e: "Les auditeurs doivent révéler tous les faits matériels dont ils ont connaissance et qui pourraient affecter la capacité de l'organisation à prendre des décisions éclairées (Norme 1.1).", d: 1 },
    { q: "Qui doit veiller à ce que les auditeurs évoluent dans un environnement où ils peuvent communiquer des résultats légitimes, favorables ou non ?", o: ["Le comité de direction opérationnel", "Le responsable de l'audit interne", "Le conseil uniquement", "Le superviseur de la mission seul"], a: 1, e: "C'est une exigence du responsable de l'audit interne selon la Norme 1.1.", d: 0 }
  ]
},
{
  num: "1.2", title: "Attentes éthiques de l'organisation", p: 2, pages: "18-19",
  sum: "Les auditeurs internes comprennent, respectent et promeuvent les attentes éthiques de leur organisation ; ils reconnaissent les comportements contraires et les signalent selon les politiques applicables.",
  kw: ["éthique", "culture", "code de conduite", "signalement", "conseil"],
  u: {
    g: "Que l'audit interne contribue à une culture fondée sur l'éthique et réagisse aux comportements contraires aux attentes de l'organisation.",
    r: ["Comprendre, respecter et satisfaire les attentes éthiques légitimes de l'organisation, et y contribuer.",
        "Savoir reconnaître les comportements contraires à ces attentes et encourager une culture fondée sur l'éthique.",
        "Signaler tout comportement non conforme conformément aux politiques et procédures applicables."],
    p: "Les attentes éthiques sont généralement formalisées dans un code d'éthique ou de conduite. À chaque mission, l'auditeur tient compte des risques liés à l'éthique ; en cas de découverte d'un comportement inapproprié, il suit la méthodologie établie par le responsable de l'audit interne.",
    a: ["Si la direction générale contrevient aux attentes éthiques, le responsable de l'audit interne devrait le signaler au Conseil.",
        "Si la préoccupation implique le président du Conseil, elle devrait être portée devant l'ensemble du Conseil, avec suivi des mesures prises."]
  },
  req: [
    ["Comprendre et respecter les attentes légitimes et éthiques de l'organisation, y satisfaire, y contribuer et savoir reconnaître les comportements contraires.", "D"],
    ["Encourager et promouvoir une culture fondée sur l'éthique au sein de l'organisation.", "D"],
    ["Signaler toute préoccupation relative à un comportement contraire aux attentes éthiques, conformément aux politiques et procédures applicables.", "D"],
    ["(Responsable de l'audit interne) Définir une méthodologie de traitement des questions d'éthique et en discuter avec le Conseil et la direction générale.", "S"],
    ["Tenir compte, à chaque mission, des risques et dispositifs de maîtrise liés à l'éthique.", "S"],
    ["(Responsable de l'audit interne) Signaler au Conseil toute violation des attentes éthiques par un membre de la direction générale ; porter à l'ensemble du Conseil les préoccupations impliquant le président du Conseil.", "S"],
    ["Assurer le suivi des problèmes éthiques impliquant le Conseil ou la direction générale et vérifier que des mesures appropriées ont été prises.", "S"]
  ],
  impl: ["S'appuyer sur le code d'éthique / de conduite et les politiques de l'organisation ; prévoir dans le plan d'audit interne des évaluations des risques liés à l'éthique.", "Convenir avec le Conseil et la direction générale des critères et processus de traitement et de communication des questions d'éthique, y compris l'escalade des cas non résolus."],
  ev: ["Attestations signées de compréhension et d'engagement des auditeurs envers les règles éthiques.", "Plan d'audit, programmes et documents de travail montrant la prise en compte des risques éthiques.", "Documentation des questions d'éthique communiquées au Conseil, à la direction générale ou aux régulateurs."],
  check: ["Les auditeurs connaissent-ils le code d'éthique / de conduite de l'organisation ?", "Une méthodologie de signalement des questions d'éthique est-elle définie et connue ?", "Les risques liés à l'éthique sont-ils pris en compte dans les missions ?"],
  quiz: [
    { q: "Un auditeur identifie un comportement de la direction générale contraire au code de conduite. Que devrait faire le responsable de l'audit interne ?", o: ["Rien, ce n'est pas du ressort de l'audit", "Le signaler au Conseil", "Le signaler au directeur financier", "Le publier en interne"], a: 1, e: "Il devrait signaler cette violation au Conseil (Norme 1.2). Si la préoccupation implique le président du Conseil, elle devrait être portée devant l'ensemble du Conseil.", d: 1 },
    { q: "Que doivent faire les auditeurs internes s'ils identifient un comportement contraire aux attentes éthiques de l'organisation ?", o: ["Le signaler conformément aux politiques et procédures applicables", "Le traiter eux-mêmes sans en rendre compte", "Le consigner uniquement dans les documents de travail", "Démissionner"], a: 0, e: "C'est une exigence impérative (doit) de la Norme 1.2.", d: 0 }
  ]
},
{
  num: "1.3", title: "Aspects légaux et comportements éthiques", p: 3, pages: "19-20",
  sum: "Les auditeurs internes ne participent à aucune activité illégale ou déshonorante, respectent les lois et règlements applicables et signalent les violations aux autorités compétentes.",
  kw: ["légalité", "réglementation", "comportement déshonorant", "signalement", "violations"],
  u: {
    g: "Que les auditeurs internes se comportent légalement et de manière honorable, et contribuent à traiter les violations légales ou réglementaires identifiées.",
    r: ["Ne pas s'engager dans une activité illégale ou déshonorante pour l'organisation ou la profession, ou qui pourrait leur nuire.",
        "Comprendre et respecter les lois et règlements applicables, y compris faire les signalements nécessaires.",
        "Signaler les violations identifiées aux personnes ou entités ayant autorité pour agir, conformément aux lois, règlements et politiques."],
    p: "Le document liste des comportements déshonorants : mensonge, tromperie, intimidation, divulgation non autorisée d'informations confidentielles, falsification de rapports, affirmation de conformité aux Normes sans pouvoir la démontrer, refus d'assumer ses erreurs.",
    a: ["Si les politiques internes sont insuffisantes face à une situation, le responsable de l'audit interne peut définir une méthodologie spécifique de traitement des violations.",
        "Une supervision adéquate des auditeurs et de leur comportement devrait être établie."]
  },
  req: [
    ["Ne pas s'engager ou prendre part à une activité illégale ou déshonorante pour l'organisation ou la profession, ou qui pourrait leur nuire.", "D"],
    ["Comprendre et respecter les lois et/ou règlements applicables au secteur et aux domaines d'activité de l'organisation, y compris faire des signalements si nécessaire.", "D"],
    ["Signaler les violations légales ou réglementaires identifiées aux personnes ou entités habilitées à prendre les mesures appropriées, conformément aux lois, règlements et politiques.", "D"],
    ["(Responsable de l'audit interne) Établir une méthodologie garantissant une supervision adéquate des auditeurs et le respect des Normes et des valeurs éthiques.", "S"],
    ["(Responsable de l'audit interne) Concevoir, si les politiques sont insuffisantes, une méthodologie précisant les actions attendues face à une violation de la loi ou de la réglementation.", "M"]
  ],
  impl: ["Diffuser les exemples de comportements déshonorants (mensonge, tromperie, intimidation, divulgation non autorisée, rapports falsifiés, conformité affirmée sans preuve, refus d'assumer ses erreurs).", "Documenter les échanges avec les superviseurs ou le conseiller juridique concernant des actions illégales ou non professionnelles."],
  ev: ["Justificatifs de formations sur la législation, la réglementation et le comportement éthique.", "Méthodologies de traitement des comportements illégaux ou indignes.", "Validation de l'examen des documents de travail et communication des résultats, le cas échéant."],
  check: ["Les auditeurs connaissent-ils les lois et règlements applicables à l'organisation ?", "Une méthodologie de traitement et de signalement des violations est-elle en place ?", "Les comportements déshonorants sont-ils explicitement couverts par les politiques internes ?"],
  quiz: [
    { q: "Parmi ces comportements, lequel est explicitement qualifié de déshonorant pour un auditeur interne ?", o: ["Refuser une invitation au restaurant de l'activité auditée", "Affirmer que la fonction agit en conformité avec les Normes sans pouvoir le démontrer", "Demander une prolongation de délai", "Recommander une formation supplémentaire"], a: 1, e: "La Norme 1.3 cite notamment l'affirmation de conformité aux Normes sans être en mesure de la démontrer comme comportement déshonorant.", d: 1 },
    { q: "En cas de violation légale ou réglementaire identifiée, à qui les auditeurs doivent-ils signaler l'incident ?", o: ["À leurs collègues de l'équipe d'audit", "Aux personnes ou entités ayant autorité pour prendre les mesures appropriées", "À la presse", "À personne, sauf avis contraire"], a: 1, e: "La Norme 1.3 exige de signaler aux personnes ou entités qui ont l'autorité de prendre les mesures appropriées, conformément aux lois, règlements et politiques.", d: 0 }
  ]
},
{
  num: "2.1", title: "Objectivité individuelle", p: 2, pages: "20-22",
  sum: "Les auditeurs internes maintiennent en toutes circonstances un état d'esprit impartial et non biaisé, et savent reconnaître et gérer leurs biais potentiels.",
  kw: ["objectivité", "biais", "impartialité", "jugement professionnel", "conflit d'intérêts"],
  u: {
    g: "Que les jugements professionnels des auditeurs reposent sur une évaluation équilibrée de tous les éléments pertinents, sans compromis ni influence indue.",
    r: ["Veiller à leur objectivité professionnelle en toutes circonstances : état d'esprit impartial et jugements fondés sur une évaluation équilibrée des éléments pertinents.",
        "Être conscients des biais potentiels et savoir comment les gérer."],
    p: "Exemples de biais à connaître : biais d'auto-évaluation (manque de recul critique sur son propre travail), biais de familiarité (suppositions fondées sur des expériences passées), préjugé inconscient (interprétation erronée liée à des idées préconçues).",
    a: ["L'objectivité ne doit jamais être subordonnée au jugement d'autres personnes.",
        "La formation et les politiques de la fonction aident à reconnaître les scénarios qui menacent l'objectivité."]
  },
  req: [
    ["Veiller à leur objectivité professionnelle en toutes circonstances : état d'esprit impartial et non biaisé, jugements fondés sur une évaluation équilibrée de tous les éléments pertinents.", "D"],
    ["Être conscients des biais potentiels et savoir comment les gérer.", "D"],
    ["Prendre conscience de la manière dont des situations, pratiques et relations peuvent affecter leur capacité à rester objectifs.", "S"],
    ["Tenir compte de la propension humaine à interpréter l'information de façon erronée ou à se baser sur des présupposés.", "S"]
  ],
  impl: ["S'appuyer sur les Normes, les politiques et la formation pour adopter une approche systématique de collecte et d'évaluation des informations.", "Sensibiliser aux biais courants : auto-évaluation, familiarité, préjugé inconscient."],
  ev: ["Charte d'audit interne mentionnant l'obligation de rester objectif.", "Politiques et procédures liées à l'objectivité ; attestations de formations.", "Déclarations de conflits d'intérêts ou d'atteintes potentielles à l'objectivité."],
  check: ["Les auditeurs sont-ils capables d'identifier leurs biais potentiels ?", "Une sensibilisation/formations sur l'objectivité est-elle organisée ?", "Les déclarations d'atteintes potentielles à l'objectivité sont-elles recueillies ?"],
  quiz: [
    { q: "Faire des suppositions sur une activité parce qu'on l'a auditée plusieurs fois par le passé correspond à quel biais ?", o: ["Biais d'auto-évaluation", "Biais de familiarité", "Préjugé inconscient", "Biais d'ancrage"], a: 1, e: "Le biais de familiarité consiste à faire des suppositions sur la base d'expériences passées, ce qui peut compromettre le scepticisme professionnel (Norme 2.1).", d: 1 },
    { q: "L'objectivité individuelle impose-t-elle de subordonner son jugement professionnel à celui de la direction ?", o: ["Oui, si la direction est experte", "Oui, si le Conseil l'exige", "Non, jamais", "Uniquement en mission de conseil"], a: 2, e: "L'objectivité signifie que les auditeurs effectuent leur travail sans compromis et ne subordonnent pas leur jugement professionnel à celui d'autres personnes (Norme 2.1).", d: 0 }
  ]
},
{
  num: "2.2", title: "Garantir l'objectivité", p: 2, pages: "22-25",
  sum: "Les auditeurs internes reconnaissent et atténuent les atteintes à l'objectivité — réelles, potentielles ou perçues : cadeaux, conflits d'intérêts, influences indues, et notamment l'audit d'activités dont ils étaient récemment responsables.",
  kw: ["atteinte à l'objectivité", "cadeaux", "conflit d'intérêts", "12 mois", "rémunération"],
  u: {
    g: "Que les missions d'audit soient menées par des personnes à l'abri des conflits d'intérêts et des influences qui pourraient fausser leurs constats — dans les faits comme en apparence.",
    r: ["Savoir reconnaître et éviter ou atténuer les atteintes à l'objectivité réelles, potentielles ou perçues.",
        "N'accepter aucune proposition matérielle ou immatérielle (cadeau, récompense, faveur) pouvant compromettre ou risquer de compromettre l'objectivité.",
        "Éviter les conflits d'intérêts et ne pas être indûment influencé par ses propres intérêts ou ceux d'autrui (direction générale, autorités, environnement politique).",
        "S'abstenir d'auditer des activités dont ils étaient auparavant responsables : l'objectivité est présumée altérée pour une assurance sur une activité dont ils avaient la responsabilité au cours des 12 mois précédents."],
    p: "Si l'audit interne audite une zone où il avait auparavant fourni du conseil, le responsable de l'audit interne vérifie que ce conseil n'altère pas l'objectivité et alloue les ressources en conséquence. Les missions d'assurance sur des fonctions dont le responsable de l'audit interne a la responsabilité doivent être supervisées par une partie indépendante extérieure à la fonction.",
    a: ["La politique sur les cadeaux la plus restrictive (fonction ou organisation) devrait être suivie.",
        "Les systèmes de rémunération liés aux constats formulés ou aux avis de l'activité auditée peuvent compromettre l'objectivité : des précautions sont nécessaires."]
  },
  req: [
    ["Savoir reconnaître et éviter ou atténuer les atteintes à l'objectivité réelles, potentielles ou perçues.", "D"],
    ["N'accepter aucune proposition, matérielle ou immatérielle (cadeau, récompense, faveur), qui peut compromettre ou risquer de compromettre leur objectivité.", "D"],
    ["Éviter les conflits d'intérêts et ne pas être indûment influencés par leurs propres intérêts ou ceux d'autres personnes, y compris la direction générale ou des autorités.", "D"],
    ["S'abstenir d'auditer des activités spécifiques dont ils étaient auparavant responsables (objectivité présumée altérée pour une activité responsable au cours des 12 mois précédents).", "D"],
    ["(Assurance après conseil) Vérifier, par le responsable de l'audit interne, que le conseil antérieur n'altère pas l'objectivité et allouer les ressources en conséquence ; superviser par une partie indépendante extérieure les missions d'assurance sur les fonctions dont le responsable de l'audit interne a la responsabilité.", "D"],
    ["(Conseil sur activités dont ils avaient auparavant des responsabilités) Faire preuve de transparence avec le demandeur avant d'accepter la mission.", "D"],
    ["(Responsable de l'audit interne) Établir des méthodologies pour remédier aux atteintes à l'objectivité ; les auditeurs doivent en discuter et prendre les mesures appropriées.", "D"],
    ["Suivre la politique la plus restrictive en matière de cadeaux, récompenses et faveurs.", "S"],
    ["Prendre des précautions contre les manquements d'objectivité issus de la conception des évaluations de performance et des modalités de rémunération, primes et incitations.", "S"],
    ["En planification de mission, échanger avec les auditeurs pour identifier toute atteinte réelle ou potentielle à l'objectivité, y compris celles déjà signalées.", "S"],
    ["Veiller à ce que les auditeurs réalisant et supervisant chaque mission soient indépendants de l'activité examinée.", "S"]
  ],
  impl: ["Documenter dans les méthodologies : réception de cadeaux, identification des situations d'atteinte, conduite à tenir en cas de manquement.", "En cas d'atteinte inévitable : la signaler et l'atténuer conformément à la Norme 2.3 (réaffectation, replanification, ajustement du périmètre, externalisation)."],
  ev: ["Politiques et procédures d'identification des manquements et mesures de protection.", "Déclarations des auditeurs sur leur situation au regard de l'objectivité.", "Plan de rémunération ; procès-verbaux du Conseil sur les atteintes à l'objectivité ; plans alternatifs lorsque des atteintes étaient inévitables."],
  check: ["Une méthodologie de gestion des atteintes à l'objectivité existe-t-elle ?", "Les affectations évitent-elles d'auditer des activités dont les auditeurs étaient responsables (règle des 12 mois) ?", "La politique cadeaux/faveurs est-elle définie, connue et la plus restrictive suivie ?"],
  quiz: [
    { q: "Un auditeur a dirigé la paie jusqu'en janvier. En juillet de la même année, on lui propose d'auditer le processus de paie. Que doit-on faire ?", o: ["C'est acceptable, 6 mois suffisent", "Refuser : l'objectivité est présumée altérée pendant 12 mois après la responsabilité", "Accepter avec une simple note", "Accepter si le superviseur relève son travail"], a: 1, e: "L'objectivité d'un auditeur est présumée altérée lorsqu'il réalise des services d'assurance pour une activité dont il a eu la responsabilité au cours des 12 mois précédents (Norme 2.2).", d: 1 },
    { q: "Qui doit superviser une mission d'assurance portant sur une fonction dont le responsable de l'audit interne a la responsabilité ?", o: ["Le responsable de l'audit interne lui-même", "Son adjoint au sein de la fonction", "Une partie indépendante extérieure à la fonction d'audit interne", "La direction de l'activité auditée"], a: 2, e: "Ces missions doivent être supervisées par une partie indépendante extérieure à la fonction d'audit interne (Norme 2.2).", d: 2 }
  ]
},
{
  num: "2.3", title: "Signalement des atteintes à l'objectivité", p: 2, pages: "25-26",
  sum: "Lorsque l'objectivité est compromise, dans les faits ou en apparence, le manquement est communiqué sans délai aux parties appropriées et des mesures sont décidées ; si l'objectivité du responsable de l'audit interne est en cause, le Conseil en est informé.",
  kw: ["signalement", "atteinte", "atténuation", "conseil", "communication sans délai"],
  u: {
    g: "Que toute atteinte à l'objectivité soit révélée rapidement et traitée de manière à préserver la fiabilité des résultats de la mission.",
    r: ["Communiquer sans délai les détails du manquement aux parties appropriées lorsque l'objectivité est compromise, dans les faits ou en apparence.",
        "Informer le responsable de l'audit interne (ou un superviseur désigné) de toute situation susceptible d'affecter leur objectivité.",
        "(Responsable de l'audit interne) Se concerter avec la direction de l'activité, le Conseil et/ou la direction générale et décider des mesures si un manquement affecte l'objectivité d'un auditeur.",
        "(Manquement découvert après la mission) Discuter avec les parties concernées et décider des mesures pour remédier à la situation (cf. Norme 11.4).",
        "(Responsable de l'audit interne) Faire part au Conseil de toute atteinte, réelle ou perçue, à sa propre objectivité (cf. Norme 7.1)."],
    p: "Options possibles de traitement : réaffectation de l'auditeur concerné, replanification de la mission, ajustement du périmètre, ou externalisation de la mission ou de sa supervision.",
    a: ["Une atteinte « en apparence » seule peut suffire à déclencher le signalement et une documentation de la discussion et de la décision.",
        "Le signalement et la remédiation sont généralement définis dans les méthodologies de la fonction."]
  },
  req: [
    ["Communiquer sans délai les détails du manquement aux parties appropriées si l'objectivité est compromise, dans les faits ou en apparence.", "D"],
    ["Faire part au responsable de l'audit interne ou à un superviseur désigné de toute situation susceptible d'affecter leur objectivité.", "D"],
    ["(Responsable de l'audit interne) Se concerter avec la direction de l'activité examinée, le Conseil et/ou la direction générale et décider des mesures à prendre.", "D"],
    ["(Manquement découvert après mission) Discuter de la préoccupation avec la direction de l'activité, le Conseil, la direction générale et/ou les parties prenantes concernées et décider des mesures.", "D"],
    ["(Responsable de l'audit interne) Faire part au Conseil si son propre objectivité est compromise en fait ou en apparence.", "D"],
    ["Envisager, si l'atteinte est inévitable : réaffectation, replanification, ajustement du périmètre ou externalisation.", "M"],
    ["Documenter la discussion et la décision prise lorsqu'une préoccupation ne porte que sur l'apparence d'une atteinte.", "M"]
  ],
  impl: ["Définir dans les méthodologies le processus de communication et de remédiation des manquements, en accord avec le Conseil et la direction générale.", "Consigner les déclarations d'atteinte (ou de non-atteinte) et les mesures d'atténuation approuvées."],
  ev: ["Méthodologies relatives à la communication des atteintes à l'objectivité.", "Déclarations écrites d'atteinte ou de non-atteinte à l'objectivité.", "Documentation de la réponse apportée et/ou de l'approbation des mesures d'atténuation."],
  check: ["Le processus de signalement des atteintes à l'objectivité est-il documenté et connu ?", "Les atteintes sont-elles traitées sans délai avec les parties appropriées ?", "Le Conseil est-il informé si l'objectivité du responsable de l'audit interne est en cause ?"],
  quiz: [
    { q: "L'objectivité du responsable de l'audit interne est compromise en apparence. Que doit-il faire ?", o: ["Gérer la situation en interne sans formalité", "En faire part au Conseil", "Attendre l'évaluation externe de la qualité", "Notifier la direction de l'activité auditée uniquement"], a: 1, e: "Il doit en faire part au Conseil (Norme 2.3, cf. aussi Norme 7.1).", d: 1 },
    { q: "Parmi ces options, laquelle n'est PAS mentionnée par la Norme 2.3 pour gérer une atteinte inévitable ?", o: ["Réaffecter l'auditeur concerné", "Externaliser la mission ou sa supervision", "Ajuster le périmètre de la mission", "Supprimer le constat concerné"], a: 3, e: "Supprimer un constat n'est jamais une option ; les options citées sont la réaffectation, la replanification, l'ajustement du périmètre et l'externalisation.", d: 1 }
  ]
},
{
  num: "3.1", title: "Compétence", p: 3, pages: "26-28",
  sum: "Les auditeurs internes possèdent ou acquièrent les savoirs, savoir-faire et aptitudes nécessaires à leurs responsabilités, connaissent les Normes, et ne fournissent que des services pour lesquels ils sont compétents.",
  kw: ["compétence", "savoir-faire", "certification", "CIA", "inventaire des compétences"],
  u: {
    g: "Que chaque mission soit réalisée par des personnes disposant des compétences adaptées à leur poste et à leur niveau d'expérience.",
    r: ["Posséder ou acquérir les compétences nécessaires (connaissances, savoir-faire, aptitudes) adaptées à leur poste et à leurs responsabilités.",
        "Posséder ou développer leur connaissance des Normes internationales d'audit interne de l'IIA.",
        "Ne fournir que des services pour lesquels ils sont compétents ou en mesure de développer les compétences nécessaires.",
        "Se former en permanence et mettre en pratique les compétences nécessaires.",
        "(Responsable de l'audit interne) S'assurer que la fonction possède collectivement les compétences requises par sa charte, ou les obtenir."],
    p: "Compétences à développer : communication et collaboration, gouvernance/risques/contrôle, fonctions de l'entreprise (finance, IT), risques omniprésents comme la fraude, analyse de données, contexte légal et sectoriel, supervision et leadership.",
    a: ["Si une compétence manque, la fonction peut recourir à un prestataire externe indépendant.",
        "Le responsable de l'audit interne devrait tenir un inventaire des compétences et identifier les besoins de formation ou de recrutement."]
  },
  req: [
    ["Posséder ou acquérir les compétences nécessaires pour exercer leurs responsabilités, adaptées à leur poste et à leur niveau d'expérience.", "D"],
    ["Posséder ou développer leur connaissance des Normes internationales d'audit interne de l'IIA.", "D"],
    ["Ne fournir que des services pour lesquels ils sont compétents ou en mesure de développer les compétences nécessaires.", "D"],
    ["Se former en permanence et mettre en pratique les compétences nécessaires à l'exercice de leurs responsabilités.", "D"],
    ["(Responsable de l'audit interne) S'assurer que la fonction possède collectivement les compétences pour réaliser les services décrits dans sa charte, ou obtenir les compétences nécessaires.", "D"],
    ["Développer des compétences en communication, gouvernance/risques/contrôle, fonctions de l'entreprise, fraude, analyse de données, contextes, législation, tendances et supervision.", "S"],
    ["(Responsable de l'audit interne) Tenir un inventaire des compétences, analyser les écarts et budgéter la formation.", "S"],
    ["Obtenir des certifications professionnelles adéquates, telles que le CIA (Certified Internal Auditor).", "M"],
    ["Recourir à un prestataire externe indépendant lorsque la fonction ne possède pas les compétences requises.", "M"]
  ],
  impl: ["Évaluer les compétences individuelles et collectives au regard des services prévus ; identifier les écarts et y répondre (formation, mentorat, recrutement, prestataires).", "Encourager la curiosité intellectuelle et la préparation aux qualifications professionnelles ; s'appuyer sur les compétences des autres prestataires d'assurance si nécessaire."],
  ev: ["Documentations des certifications, études, expérience et qualifications des auditeurs.", "Auto-évaluations de compétences et programmes de développement professionnel.", "Analyse des écarts entre compétences requises pour le plan d'audit et ressources disponibles."],
  check: ["Un inventaire des compétences de la fonction existe-t-il et est-il actualisé ?", "La connaissance des Normes est-elle maintenue au sein de l'équipe ?", "Les compétences manquantes sont-elles identifiées et comblées (formation ou prestataire externe) ?"],
  quiz: [
    { q: "Un auditeur est sollicité pour une mission d'audit informatique alors qu'il n'a aucune compétence en la matière. Que doit-il faire ?", o: ["Accepter, l'expérience viendra", "Refuser définitivement", "N'accepter que s'il est en mesure de développer les compétences nécessaires (ou s'appuyer sur un expert)", "Accepter et suivre le plan sans adaptation"], a: 2, e: "Les auditeurs ne doivent fournir que des services pour lesquels ils sont compétents ou en mesure de développer les compétences nécessaires (Norme 3.1).", d: 0 },
    { q: "Qui est responsable de s'assurer que la fonction dispose collectivement des compétences requises par sa charte ?", o: ["Le Conseil", "Le responsable de l'audit interne", "Les ressources humaines", "Chaque auditeur individuellement"], a: 1, e: "Le responsable de l'audit interne doit s'en assurer ou obtenir les compétences nécessaires (Norme 3.1).", d: 0 }
  ]
},
{
  num: "3.2", title: "Formation professionnelle continue", p: 3, pages: "28-29",
  sum: "Les auditeurs internes entretiennent et développent en permanence leurs compétences par une formation théorique et pratique continue ; les titulaires de certifications respectent les exigences de formation continue qui s'y attachent.",
  kw: ["formation continue", "FPC", "développement professionnel", "éthique", "certifications"],
  u: {
    g: "Que les compétences des auditeurs restent à jour pour améliorer l'efficacité et la qualité des services d'audit interne.",
    r: ["Entretenir et développer en permanence leurs compétences pour améliorer l'efficacité et la qualité des services.",
        "Suivre une formation professionnelle théorique et pratique en continu.",
        "Les auditeurs titulaires de certifications d'audit interne doivent se conformer aux politiques de formation continue et aux exigences de leurs certifications."],
    p: "La formation continue peut inclure auto-formation, apprentissage sur le terrain, missions variées, mentorat, retours des superviseurs, cursus payants ou gratuits, revues professionnelles, webinaires et conférences.",
    a: ["L'IIA exige des titulaires de ses certifications une formation portant sur l'éthique ; l'ensemble des auditeurs devrait se former régulièrement à l'éthique.",
        "Le responsable de l'audit interne devrait prévoir un plan et un budget de formation pour ses équipes."]
  },
  req: [
    ["Entretenir et développer en permanence leurs compétences pour améliorer l'efficacité et la qualité des services d'audit interne.", "D"],
    ["Suivre une formation professionnelle théorique et pratique en continu.", "D"],
    ["(Titulaires de certifications) Se conformer aux politiques de formation professionnelle continue et aux exigences applicables à leurs certifications.", "D"],
    ["Chercher activement à connaître les tendances, bonnes pratiques et risques émergents affectant l'organisation et la profession.", "S"],
    ["Élaborer un plan et un calendrier de formation continue, incluant une formation régulière à l'éthique.", "S"],
    ["(Responsable de l'audit interne) Budgéter et prévoir la formation, et équilibrer les plans entre développement de la fonction et progression personnelle.", "S"]
  ],
  impl: ["Combiner auto-formation, formation sur le terrain, affectations variées, mentorat et retours de supervision.", "Suivre les obligations des organismes de certification (ex. heures minimales par période) sous peine de perdre le droit de se prévaloir de la certification."],
  ev: ["Plans documentés de participation à des formations et conférences professionnelles.", "Attestations de formation continue et certificats obtenus.", "Examens des performances et plans de développement professionnel."],
  check: ["Un plan de formation continue est-il établi et budgété ?", "La formation à l'éthique est-elle régulièrement dispensée ?", "Les obligations de formation des certifications (ex. CIA) sont-elles suivies ?"],
  quiz: [
    { q: "L'IIA exige-t-il des titulaires de ses certifications une formation spécifique sur un thème particulier ?", o: ["Non, seule la quantité d'heures compte", "Oui, une formation portant sur l'éthique", "Oui, uniquement en informatique", "Uniquement pour les nouveaux certifiés"], a: 1, e: "L'IIA exige des titulaires de ses certifications une formation ayant trait à l'éthique (Norme 3.2).", d: 1 },
    { q: "Qui devrait budgéter et prévoir la formation des équipes d'audit interne ?", o: ["Le Conseil", "La direction financière", "Le responsable de l'audit interne", "Chaque auditeur pour lui-même"], a: 2, e: "La compétence de la fonction relève de la responsabilité du responsable de l'audit interne, qui devrait budgéter et prévoir la formation (Norme 3.2).", d: 0 }
  ]
},
{
  num: "4.1", title: "Conformité aux Normes internationales d'audit interne", p: 4, pages: "30-31",
  sum: "Les auditeurs internes planifient et réalisent leurs services conformément aux Normes ; les méthodologies de la fonction les reflètent, et toute incapacité à respecter une exigence est documentée et communiquée avec les mesures alternatives.",
  kw: ["conformité", "Normes", "méthodologies", "non-conformité", "mesures alternatives"],
  u: {
    g: "Que la pratique de l'audit interne soit alignée sur les Normes, et que les écarts éventuels soient transparents et motivés.",
    r: ["Planifier et réaliser les services d'audit interne conformément aux Normes.",
        "Établir, documenter et maintenir des méthodologies conformes aux Normes ; les observer lors de la planification, de la réalisation et de la communication des résultats.",
        "Si d'autres organismes faisant autorité imposent des exigences utilisées conjointement avec les Normes, les citer le cas échéant.",
        "Si la législation ou la réglementation interdit de se conformer à certaines dispositions : respecter toutes les autres et communiquer de manière appropriée.",
        "En cas d'incapacité à respecter une exigence, le responsable de l'audit interne doit documenter et communiquer la situation, les mesures alternatives, leur impact et leurs raisons."],
    p: "Le responsable de l'audit interne examine les Normes à chaque modification et met à jour les méthodologies en conséquence. En cas de divergence entre Normes et autres référentiels, les exigences les plus strictes peuvent s'appliquer.",
    a: ["La conformité s'apprécie au niveau du principe : des mesures alternatives peuvent permettre de respecter l'esprit d'une norme même si une exigence précise ne peut être satisfaite.",
        "Les exigences de communication d'une non-conformité figurent dans les Normes 8.3, 12.1 et 15.1."]
  },
  req: [
    ["Planifier et réaliser les services d'audit interne conformément aux Normes internationales d'audit interne.", "D"],
    ["Établir, documenter et maintenir des méthodologies conformes aux Normes, et les observer lors de la planification, de la réalisation et de la communication des résultats.", "D"],
    ["Citer, le cas échéant, les exigences d'autres organismes faisant autorité utilisées conjointement avec les Normes.", "D"],
    ["Respecter toutes les autres dispositions et communiquer de manière appropriée lorsque la législation interdit de se conformer à certaines dispositions des Normes.", "D"],
    ["(Responsable de l'audit interne) Documenter et communiquer toute incapacité à se conformer à une exigence : situation, mesures alternatives, impact et raisons.", "D"],
    ["Examiner les Normes lorsqu'elles sont modifiées et mettre à jour les méthodologies en conséquence.", "S"],
    ["(Responsable de l'audit interne ou superviseur) S'assurer que les programmes de travail et la réalisation des missions sont conformes aux exigences des Normes.", "S"]
  ],
  impl: ["Documenter les méthodologies avec leur date de dernière mise à jour et, le cas échéant, les références aux normes visées.", "En cas de manquement lors d'une mission, en discuter avec le responsable de l'audit interne ou un superviseur, qui fournira les directives de signalement."],
  ev: ["Documentation des méthodologies et date de leur dernière mise à jour.", "Signalement des non-conformités dans le rapport définitif et les communications au Conseil et à la direction générale.", "Résultats du programme d'assurance et d'amélioration de la qualité."],
  check: ["Les méthodologies reflètent-elles la version en vigueur des Normes ?", "Les écarts de conformité sont-ils documentés (situation, alternatives, impact, raisons) ?", "La conformité est-elle vérifiée via le programme qualité ?"],
  quiz: [
    { q: "Une exigence des Normes ne peut pas être respectée en raison d'une contrainte sectorielle. Que doit faire le responsable de l'audit interne ?", o: ["Cesser les missions concernées", "Documenter et communiquer la situation, les mesures alternatives, leur impact et les raisons", "Modifier la norme concernée", "Ignorer l'écart s'il est minoré"], a: 1, e: "Il doit le documenter et le communiquer en décrivant la situation, les mesures alternatives prises, leur impact et les raisons qui les sous-tendent (Norme 4.1).", d: 1 },
    { q: "Que doivent faire les auditeurs lorsqu'une loi interdit de se conformer à une disposition des Normes ?", o: ["Ignorer la loi", "Cesser toute mission d'audit", "Respecter toutes les autres dispositions et procéder à une communication appropriée", "Demander une dérogation au Conseil"], a: 2, e: "Ils sont tenus de respecter toutes les autres dispositions et de procéder à une communication appropriée (Norme 4.1).", d: 1 }
  ]
},
{
  num: "4.2", title: "Conscience professionnelle", p: 4, pages: "32-33",
  sum: "Les auditeurs internes évaluent la nature, le contexte et les services attendus : objectifs de l'organisation, intérêts des parties prenantes, processus de gouvernance/risques/contrôle, rapport coût-bénéfice, étendue des travaux, matérialité des risques et outils adaptés.",
  kw: ["conscience professionnelle", "diligence", "coût-bénéfice", "matérialité", "contexte"],
  u: {
    g: "Que les services d'audit soient planifiés et réalisés avec la diligence, le jugement et le scepticisme d'un auditeur prudent et compétent.",
    r: ["Évaluer la nature, le contexte et les services exigés, notamment : stratégie et objectifs de l'organisation ; intérêts des bénéficiaires et parties prenantes ; adéquation et efficacité des processus de gouvernance, gestion des risques et contrôle ; rapport coût/bénéfice ; étendue des travaux et délais ; complexité, matérialité et importance des risques ; probabilité d'erreurs significatives, de fraude et de non-conformité ; techniques, outils et technologies adéquats."],
    p: "La matérialité est relative : un risque peut être significatif pour une mission sans l'être pour l'organisation. L'auditeur met en balance les coûts et les bénéfices des services et maximise la valeur ajoutée de l'investissement dans l'audit interne.",
    a: ["La conscience professionnelle n'exige pas d'être infaillible, mais une planification approfondie et un jugement contextuel.",
        "Les intérêts des parties prenantes incluent leurs attentes (loyauté, sécurité) et leurs expositions à des risques sous-jacents."]
  },
  req: [
    ["Évaluer la nature, le contexte et les services exigés, notamment la stratégie et les objectifs de l'organisation, les intérêts des bénéficiaires et des autres parties prenantes, et l'adéquation et l'efficacité des processus de gouvernance, de gestion des risques et de contrôle.", "D"],
    ["Évaluer le rapport coût/bénéfice des services à réaliser, l'étendue des travaux et les délais nécessaires.", "D"],
    ["Évaluer la complexité relative, la matérialité ou l'importance des risques pour l'activité examinée.", "D"],
    ["Évaluer la probabilité d'erreurs significatives, de fraude, de non-conformité et d'autres risques compromettant les objectifs, les opérations ou les ressources.", "D"],
    ["Utiliser des techniques, des outils et des technologies adéquats.", "D"],
    ["Commencer par comprendre la charte et le plan d'audit interne et les facteurs de choix des missions.", "S"],
    ["Mettre en balance les coûts et les bénéfices et maximiser la valeur ajoutée des services d'audit interne.", "S"]
  ],
  impl: ["Documenter la prise en compte de la stratégie, des objectifs, des risques (dont fraude et non-conformité) et du rapport coût/bénéfice dans les notes de planification.", "Envisager l'outillage (analyse de données, logiciels) pour l'efficience de l'examen et de l'évaluation."],
  ev: ["Notes de planification documentant stratégie, objectifs et évaluations des risques.", "Notes de réunions sur les coûts, bénéfices, étendue et délais des services.", "Retours des parties prenantes et résultats des évaluations qualité."],
  check: ["La nature, le contexte et les risques de chaque mission sont-ils évalués avant les travaux ?", "Le rapport coût/bénéfice des services est-il pris en compte ?", "Les outils et techniques utilisés sont-ils adaptés aux objectifs de la mission ?"],
  quiz: [
    { q: "Un risque jugé non significatif pour l'organisation peut-il être significatif dans le cadre d'une mission précise ?", o: ["Non, la matérialité est globale", "Oui, la matérialité s'apprécie dans le contexte de la mission", "Uniquement en mission de conseil", "Uniquement si le Conseil le décide"], a: 1, e: "La complexité, la matérialité et l'importance des risques sont relatives et s'apprécient dans le contexte spécifique de la mission (Norme 4.2).", d: 1 },
    { q: "Les dispositifs de maîtrise d'une activité étant mal conçus, auditer leur efficacité coûterait plus que les bénéfices attendus. Quelle attitude traduit la conscience professionnelle ?", o: ["Auditer entièrement malgré le coût", "Abandonner la mission", "Mettre en balance les coûts et les bénéfices pour calibrer les travaux", "Supprimer le risque du plan"], a: 2, e: "La conscience professionnelle exige de mettre en balance les coûts des services au regard des bénéfices qui peuvent en découler (Norme 4.2).", d: 2 }
  ]
},
{
  num: "4.3", title: "Scepticisme professionnel", p: 4, pages: "33-34",
  sum: "Les auditeurs internes cultivent leur curiosité, évaluent de façon critique la fiabilité de l'information, signalent les incohérences et recherchent des éléments probants supplémentaires lorsque nécessaire.",
  kw: ["scepticisme", "esprit critique", "fiabilité", "éléments probants", "curiosité"],
  u: {
    g: "Que les jugements reposent sur des faits et des raisonnements logiques, et non sur la confiance ou la croyance.",
    r: ["Faire preuve de scepticisme professionnel lors de la planification et de la réalisation des services d'audit interne.",
        "Cultiver une attitude reflétant un esprit de curiosité.",
        "Évaluer de manière critique la fiabilité de l'information.",
        "Se montrer direct et honnête lorsqu'ils soulèvent des inquiétudes ou demandent des précisions sur des informations incohérentes.",
        "Chercher des éléments probants supplémentaires pour statuer sur des informations potentiellement incomplètes, incohérentes, fausses ou trompeuses."],
    p: "Le scepticisme consiste à douter de la validité des allégations et à valider les déclarations du management plutôt que de s'y fier. L'information doit être pertinente, fiable et suffisante ; sinon, des analyses complémentaires sont nécessaires.",
    a: ["L'examen des documents de travail et des communications par le superviseur apporte une validation supplémentaire.",
        "Des ateliers et formations aident à développer cette compétence et à se défaire des préjugés."]
  },
  req: [
    ["Faire preuve de scepticisme professionnel lors de la planification et la réalisation des services d'audit interne.", "D"],
    ["Cultiver une attitude reflétant un esprit de curiosité.", "D"],
    ["Évaluer de manière critique la fiabilité de l'information.", "D"],
    ["Se montrer directs et honnêtes lorsqu'ils soulèvent des inquiétudes et demandent des précisions sur des informations incohérentes.", "D"],
    ["Chercher à obtenir davantage d'éléments probants pour formuler un jugement sur des informations potentiellement incomplètes, incohérentes, fausses ou trompeuses.", "D"],
    ["Vérifier si les informations recueillies sont pertinentes, fiables et suffisantes ; approfondir si nécessaire.", "S"],
    ["(Responsable de l'audit interne) Aider les auditeurs à renforcer leur scepticisme professionnel (ateliers, formations).", "S"]
  ],
  impl: ["Documenter comment les informations recueillies ont été évaluées et validées au cours de la mission.", "Faire examiner et signer/parapher les documents de travail par le superviseur de la mission."],
  ev: ["Documents attestant de formations sur le scepticisme professionnel (avec présence).", "Documents de travail détaillant l'évaluation et la validation des informations recueillies.", "Preuves du traitement des informations fausses ou trompeuses dans l'élaboration des constats."],
  check: ["Les informations sont-elles évaluées de manière critique avant d'être utilisées ?", "Les incohérences sont-elles systématiquement approfondies ?", "La validation par le superviseur est-elle documentée ?"],
  quiz: [
    { q: "Sur quoi le scepticisme professionnel fonde-t-il les jugements de l'auditeur ?", o: ["Sur la confiance dans le management", "Sur des faits, des informations et des raisonnements logiques", "Sur les habitudes du secteur", "Sur les priorités du Conseil"], a: 1, e: "Le scepticisme professionnel permet de formuler des jugements objectifs fondés sur des faits, des informations et des raisonnements logiques, plutôt que sur la confiance ou la croyance (Norme 4.3).", d: 0 },
    { q: "Des informations incohérentes sont recueillies pendant une mission. Quelle est l'attitude attendue ?", o: ["Retenir la version la plus favorable", "Chercher des éléments probants supplémentaires pour statuer", "Écarter ces informations sans les mentionner", "Terminer la mission et noter la réserve dans le rapport uniquement"], a: 1, e: "L'auditeur doit demander des précisions de façon directe et honnête et rechercher des éléments probants supplémentaires (Norme 4.3).", d: 0 }
  ]
},
{
  num: "5.1", title: "Utilisation de l'information", p: 5, pages: "35",
  sum: "Les auditeurs internes utilisent l'information conformément aux politiques, procédures, lois et règlements applicables, jamais pour un bénéfice personnel ni au détriment des objectifs éthiques et légitimes de l'organisation.",
  kw: ["utilisation de l'information", "confidentialité", "bénéfice personnel", "politiques", "sécurité numérique"],
  u: {
    g: "Que les informations auxquelles les auditeurs ont accès soient utilisées de manière appropriée, sans détournement ni préjudice pour l'organisation.",
    r: ["Suivre les politiques et procédures applicables ainsi que la législation et la réglementation en vigueur lorsqu'ils utilisent des informations.",
        "Ne pas utiliser l'information pour en retirer un bénéfice personnel, ni d'une manière qui contreviendrait ou porterait préjudice aux objectifs éthiques et légitimes de l'organisation."],
    p: "L'accès illimité à l'information s'accompagne d'une responsabilité : connaître les règles couvrant tout le cycle de vie des données (accès, recueil, transfert, stockage, destruction), y compris celles applicables aux informations de tiers.",
    a: ["Exemples de détournement : utiliser ou divulguer des informations financières ou stratégiques pour influencer des transactions boursières ou concevoir un produit concurrent.",
        "Pour les données sensibles ou personnelles : appliquer des mesures adaptées (mots de passe, chiffrement)."]
  },
  req: [
    ["Suivre les politiques et procédures applicables, ainsi que la législation et la réglementation en vigueur, lorsqu'ils utilisent des informations.", "D"],
    ["Ne pas utiliser les informations pour en retirer un bénéfice personnel, ni d'une manière qui contreviendrait ou porterait préjudice aux objectifs éthiques et légitimes de l'organisation.", "D"],
    ["Connaître et respecter les politiques applicables aux informations des tiers auxquelles ils peuvent avoir accès.", "S"],
    ["(Responsable de l'audit interne) Discuter avec les auditeurs des attentes relatives au bon usage de l'information ; exiger le cas échéant une attestation signée.", "S"],
    ["Appliquer des mesures adaptées de sécurité numérique (contrôles par mot de passe, chiffrement) pour les données sensibles et à caractère personnel.", "S"]
  ],
  impl: ["Couvrir tout le cycle de l'information : accès, recueil, transfert, stockage, destruction.", "Informer les auditeurs des conséquences d'un usage inapproprié : atteintes à la réputation, amendes réglementaires."],
  ev: ["Contrôles des accès et de l'utilisation de l'information efficaces.", "Documentation des politiques, procédures et formations sur le bon usage de l'information.", "Attestations signées de compréhension des exigences applicables."],
  check: ["Les règles d'utilisation de l'information sont-elles documentées et connues des auditeurs ?", "Des mesures de sécurité numérique protègent-elles les données sensibles ?", "Un engagement (attestation) sur le bon usage de l'information est-il recueilli ?"],
  quiz: [
    { q: "Utiliser une information financière interne obtenue lors d'une mission pour des transactions boursières est :", o: ["Autorisé si l'auditeur agit en son nom propre", "Un exemple de détournement d'information interdit par la Norme 5.1", "Autorisé après la publication des résultats", "Interdit seulement pour les cadres"], a: 1, e: "C'est l'un des exemples de détournement d'information cités par la Norme 5.1 : utiliser, vendre ou divulguer des informations pour influencer des décisions d'achat ou de vente d'actions.", d: 0 },
    { q: "Quel type de mesures devrait être appliqué aux données sensibles et à caractère personnel traitées par la fonction d'audit interne ?", o: ["Aucune, l'accès illimité suffit", "Des mesures de sécurité numérique adaptées (mots de passe, chiffrement)", "Uniquement des sauvegardes", "Un marquage papier des dossiers"], a: 1, e: "La fonction devrait appliquer des mesures adaptées de sécurité numérique telles que des contrôles par mot de passe et des mécanismes de chiffrement (Norme 5.1).", d: 1 }
  ]
},
{
  num: "5.2", title: "Protection de l'information", p: 5, pages: "36-37",
  sum: "Les auditeurs internes protègent la confidentialité, la vie privée et la propriété de l'information recueillie, respectent les règles applicables et ne divulguent pas d'informations confidentielles à des parties non habilitées, sauf obligation légale ou professionnelle.",
  kw: ["protection", "confidentialité", "vie privée", "divulgation", "conservation"],
  u: {
    g: "Que l'information recueillie pendant les missions reste protégée contre tout accès ou divulgation non autorisés.",
    r: ["Être conscients de leurs responsabilités en matière de protection de l'information et démontrer qu'ils respectent la confidentialité, la vie privée et la propriété de l'information recueillie.",
        "Comprendre et respecter la législation, la réglementation, les politiques et procédures relatives à la confidentialité, à la sécurité de l'information et à la protection de la vie privée.",
        "Tenir compte de : la garde, la conservation et la destruction des documents de mission ; la mise à disposition à des parties internes et externes ; le traitement des accès aux informations confidentielles lorsqu'elles ne sont plus nécessaires.",
        "Ne pas divulguer d'informations confidentielles à des parties non habilitées, à moins qu'une responsabilité légale ou professionnelle ne les y oblige.",
        "Gérer le risque de divulgation involontaire ou de compromission de la confidentialité.",
        "(Responsable de l'audit interne) S'assurer que la fonction et les personnes collaborant avec elle adhèrent aux mêmes exigences de protection."],
    p: "Protection concrète : chiffrement, protection par mot de passe, contrôle des envois de courriels, restrictions d'usage des réseaux sociaux et d'accès physique ; retrait des habilitations dès que l'accès n'est plus nécessaire.",
    a: ["Faire appel au conseiller juridique pour comprendre les protections légales (ex. secret professionnel de l'avocat).",
        "Évaluer et valider périodiquement les besoins d'accès des auditeurs et le bon fonctionnement des contrôles d'accès."]
  },
  req: [
    ["Être conscients de leurs responsabilités en matière de protection de l'information et démontrer qu'ils respectent la confidentialité, la vie privée et la propriété de l'information recueillie.", "D"],
    ["Comprendre et respecter la législation et la réglementation ainsi que les politiques et procédures applicables à la confidentialité, la sécurité de l'information et la protection de la vie privée.", "D"],
    ["Tenir compte de la garde, conservation et destruction des documents de mission, de leur mise à disposition à des parties internes et externes, et du traitement des accès lorsque les informations ne sont plus nécessaires.", "D"],
    ["Ne pas divulguer d'informations confidentielles à des parties non habilitées, sauf obligation légale ou professionnelle.", "D"],
    ["Gérer le risque qu'une information soit divulguée ou sa confidentialité compromise par inadvertance.", "D"],
    ["(Responsable de l'audit interne) S'assurer que la fonction et les personnes collaborant avec elle adhèrent aux mêmes exigences de protection.", "D"],
    ["Faire appel à un conseiller juridique pour comprendre l'impact des exigences et protections légales.", "S"],
    ["Évaluer et valider périodiquement les besoins d'accès des auditeurs et l'efficacité des contrôles d'accès.", "S"],
    ["Retirer les habilitations et traiter les documents imprimés lorsque les auditeurs n'ont plus besoin d'y accéder.", "S"]
  ],
  impl: ["Encadrer la sécurité et l'accès physiques et logiques ainsi que la conservation et la suppression des données.", "Soumettre à autorisation les informations commerciales diffusées à l'extérieur lorsque les politiques l'exigent."],
  ev: ["Documents attestant de l'application des méthodologies en vigueur.", "Dispositifs limitant les accès et réduisant les risques de contournement des contrôles.", "Accords de confidentialité ou de non-divulgation signés ; preuves d'autorisation de publication et de diffusion."],
  check: ["Les règles de conservation, destruction et diffusion des documents de mission sont-elles définies ?", "Les accès aux informations confidentielles sont-ils gérés et retirés lorsque nécessaire ?", "Des accords de confidentialité couvrent-ils la fonction et ses collaborateurs ?"],
  quiz: [
    { q: "Un auditeur peut-il divulguer une information confidentielle à une partie non habilitée ?", o: ["Oui, avec l'accord de sa hiérarchie", "Non, sauf si une responsabilité légale ou professionnelle l'y oblige", "Oui, si l'information est ancienne", "Oui, en mission de conseil"], a: 1, e: "Les auditeurs ne doivent pas divulguer d'informations confidentielles à des parties non habilitées, à moins qu'une responsabilité légale ou professionnelle ne les y oblige (Norme 5.2).", d: 0 },
    { q: "Que devrait faire le responsable de l'audit interne concernant les accès à l'information ?", o: ["Les accorder une fois pour toutes", "Les évaluer et valider périodiquement, et vérifier l'efficacité des contrôles d'accès", "Les déléguer à l'IT sans suivi", "Les limiter à lui-même"], a: 1, e: "Il devrait évaluer et valider périodiquement les besoins d'accès et vérifier que les contrôles d'accès fonctionnent efficacement (Norme 5.2).", d: 1 }
  ]
}
];
