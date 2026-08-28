# Resonance — prototype de refactor pédagogique du SRD

> **Document de travail.** Ce texte explore une nouvelle architecture pédagogique pour le SRD de Resonance. Il ne remplace pas encore le document publié et ne cherche pas à figer toute la terminologie théorique. Son objectif est d’abord de rendre Resonance jouable et compréhensible, puis de montrer comment il devient un framework de game design.
>
> Cette version abandonne la distinction entre « Resonance Core » et « Resonance Prismes ». Il n’y a qu’un seul framework : **Resonance**. Les Mises, les Prismes, le Focus, le Zoom et les Facteurs Cadres sont des concepts ou des points de variation à l’intérieur de ce framework.

## Resonance en une phrase

**Resonance est un framework de game design pour jeux de rôle dans lequel la fiction détermine ce qui entre dans la résolution et peut également déterminer comment cette résolution fonctionne.**

Il fournit en même temps une **configuration standard entièrement jouable** : il n’est donc pas nécessaire de concevoir son propre jeu pour utiliser Resonance.

On peut simplement jouer.

Ou on peut aller plus loin et faire résonner la résolution avec un monde, une culture, une cosmologie ou une perspective particulière.

---

# Jouer ou concevoir : deux usages du même framework

Resonance possède une double nature qui peut sembler paradoxale au premier abord.

D’un côté, il fournit assez de règles pour résoudre immédiatement une situation dans presque n’importe quel univers fictionnel.

De l’autre, ces règles sont conçues pour pouvoir être transformées lorsqu’un jeu veut exprimer quelque chose de particulier sur son monde.

La contradiction disparaît si l’on distingue deux choses :

- **les invariants de Resonance**, qui définissent le geste fondamental du framework ;
- **la configuration standard**, qui fournit des choix par défaut lorsque le jeu n’a aucune raison de les remplacer.

Resonance est donc **complet pour jouer** et **ouvert pour concevoir**.

La configuration standard n’est pas une version inférieure ou provisoire du système. C’est une implémentation de référence, volontairement simple et générique.

Un jeu conçu avec Resonance peut la conserver presque entièrement, ou remplacer certains de ses choix pour produire une expérience différente.

> **Resonance définit ce qui doit être décidé.**
>
> **La configuration standard fournit une décision par défaut.**
>
> **Un jeu Resonance peut conserver ou transformer ces décisions.**

---

# Première partie — Jouer à Resonance

## Une scène en quelques secondes

> **Meneur :** La porte de pierre commence à se refermer. Que fais-tu ?
>
> **Joueur :** Je cours pour passer avant qu’elle se ferme.
>
> **Meneur :** Très bien. Qu’est-ce qui compte ici ?
>
> **Joueur :** Je suis rapide. Et j’avais déjà commencé à courir.
>
> **Meneur :** Oui. Mais le sol est couvert de gravats.
>
> **Joueur :** Et je suis blessé à la jambe.
>
> **Meneur :** Exact. Autre chose ?
>
> *Silence.*
>
> **Meneur :** Alors voyons ce qui arrive.

Voilà le geste fondamental de Resonance.

Le monde fictionnel contient toujours plus de détails qu’une résolution ne peut en prendre en compte. La table sélectionne ceux qui comptent pour la question présente, les met en jeu, résout l’incertitude, puis utilise le résultat pour transformer la fiction.

Resonance ne commence donc pas par demander :

> *Quelle valeur de ma feuille s’applique ? Quel bonus puis-je ajouter ?*

Il commence par demander :

> **Qu’est-ce qui compte ici ?**

La règle ne cherche pas à remplacer le regard porté sur la scène.

**Elle prolonge ce regard.**

---

# La boucle de résolution

Une résolution Resonance suit une boucle simple :

1. **Dire ce que l’on veut obtenir.**
2. **Définir la question que la résolution doit trancher.**
3. **Identifier ce qui compte pour cette question.**
4. **Écarter ce qui est hors sujet ou redondant à cette échelle.**
5. **Résoudre l’incertitude.**
6. **Interpréter le résultat à partir de ce qui a été mis en jeu.**
7. **Continuer depuis le monde transformé.**

Cette boucle est l’un des invariants de Resonance.

La manière exacte de matérialiser ou de lire l’incertitude pourra varier plus tard. Pour apprendre à jouer, nous utiliserons simplement la **configuration standard**.

---

# 1. L’intention : qu’est-ce que tu essaies réellement d’obtenir ?

Le joueur commence par dire ce qu’il cherche à accomplir dans la fiction.

> *Je veux empêcher le garde d’atteindre la porte.*

L’intention n’est pas une capacité, une action standardisée ou une entrée de menu.

C’est ce que le personnage cherche réellement à obtenir.

Une même intention peut être poursuivie de nombreuses manières. Resonance ne demande pas d’abord quelle règle correspond à l’action. Il demande ce qui, dans la fiction, va réellement peser sur ce que le personnage tente de faire.

---

# 2. Le Focus : quelle question sommes-nous en train de résoudre ?

La table précise ensuite la question à laquelle la résolution doit répondre.

> *Est-ce que tu réussis à arrêter le garde avant qu’il donne l’alerte ?*

Cette question définit le **Focus**.

Le Focus ne décrit pas tout ce qui se passe dans la scène. Il détermine **ce que cette résolution regarde**.

Tout ce qui existe sur la feuille de personnage n’est pas pertinent.

Tout ce qui existe dans le monde n’est pas pertinent.

Même un élément important dans l’histoire peut ne pas compter pour cette résolution précise.

Le Focus agit donc comme un cadre de pertinence : il permet à la table de distinguer ce qui entre dans la résolution de ce qui reste simplement vrai dans la fiction.

---

# 3. Les Mises : ce que la fiction place dans la balance

Les éléments que la table décide de faire compter deviennent des **Mises**.

Une Mise est un élément fictionnel que la table considère comme suffisamment pertinent pour entrer dans la résolution.

Elle peut provenir :

- du personnage : expérience, capacité, état, réputation, peur, conviction ;
- de ses relations : allié, dette, rivalité, serment, amour, loyauté ;
- de la situation : position, préparation, surprise, urgence ;
- de l’environnement : pluie, obscurité, terrain, foule, incendie ;
- de l’adversité : faiblesse, avantage, discipline, nombre, connaissance ;
- du monde : coutume, tabou, statut, magie, cosmologie ou contrainte particulière.

Une Mise n’est pas un bonus abstrait collé à la feuille de personnage.

**Elle existe dans la fiction avant d’exister dans la mécanique.**

Mais tout élément vrai dans la fiction n’est pas automatiquement une Mise.

La question n’est pas :

> *Puis-je trouver une justification pour ajouter ceci ?*

La question est :

> **Est-ce que ceci compte vraiment dans la résolution que nous regardons ?**

## Une Mise peut aider ou nuire

Une Mise n’est pas nécessairement favorable au personnage qui la formule.

> *Je connais parfaitement cette forêt.*

peut jouer en sa faveur.

> *Je suis blessé à la jambe.*

peut jouer contre lui.

Dans les deux cas, la Mise rend mécaniquement présent quelque chose que la fiction considère comme important.

## Une Mise est aussi un choix de regard

La pertinence n’est pas seulement causale.

Dans une fiction, nous ne prêtons jamais la même attention à tous les détails possibles. Une scène met certaines choses en avant.

Le regard malicieux d’un vieux sage peut compter parce que le récit nous a appris à y reconnaître sa sagesse.

L’orage autour d’un duel peut compter parce qu’il donne à la confrontation une tension particulière.

L’arrivée imminente d’un ennemi peut compter parce que toute la scène est traversée par cette urgence.

La maladresse légendaire d’un personnage peut compter parce qu’elle est devenue un motif de la fiction.

**Les Mises sont les éléments que la table fait entrer dans le champ de la résolution parce qu’ils font sens ici.**

---

# 4. Pertinence et non-redondance

Un monde riche permet presque toujours de formuler plusieurs raisons très proches pour expliquer le même avantage.

> *Je suis un excellent épéiste.*
>
> *J’ai été entraîné depuis l’enfance.*
>
> *Je suis vétéran de trois guerres.*

Ces trois faits peuvent être vrais.

Ils ne constituent pourtant pas nécessairement trois Mises distinctes.

La question est :

> **À l’échelle du Focus, représentent-ils réellement plusieurs choses différentes que la résolution veut mettre en jeu ?**

Si les trois formulations disent simplement « il est très expérimenté à l’épée » dans un échange de quelques secondes, elles sont probablement redondantes.

Dans une résolution plus vaste, elles pourraient au contraire devenir distinctes si elles interviennent réellement dans des dimensions différentes de la situation.

La non-redondance n’est donc pas une règle comptable.

Elle dépend de ce que la résolution regarde.

> **Le Focus détermine ce qui est pertinent. Son échelle détermine aussi à partir de quand deux vérités deviennent réellement distinctes.**

---

# 5. Le Zoom : à quelle échelle regardons-nous la fiction ?

Resonance peut résoudre un instant, une séquence ou un ensemble beaucoup plus vaste sans changer de logique fondamentale.

Le **Zoom** décrit cette échelle.

## Zoom Action

Le Focus porte sur un geste ou un moment précis.

> *Passer la porte avant qu’elle se referme.*

L’espace des Mises est naturellement restreint. Plusieurs formulations d’un même avantage tendent à être redondantes parce que la résolution observe un instant étroit.

## Zoom Séquence

Le Focus porte sur une succession cohérente d’actions.

> *Traverser les toits et semer les gardes avant d’atteindre le temple.*

Des Mises qui auraient été redondantes dans une action ponctuelle peuvent devenir distinctes parce qu’elles concernent différentes étapes de la séquence : endurance, connaissance du quartier, aide d’un complice, pluie qui rend les tuiles glissantes, peur d’être reconnu.

## Zoom Script

Le Focus couvre un ensemble encore plus large : voyage, enquête, campagne militaire, négociation prolongée, projet complexe.

> *Faire parvenir une caravane jusqu’à la cité assiégée.*

Le personnage ou le groupe peut raisonnablement mobiliser plusieurs dimensions différentes : relations, logistique, réputation, savoir, endurance, richesse, protection politique, préparation ou sacrifices.

Ce ne sont pas « plus de bonus parce que le conflit est plus long ».

**Ce sont davantage de dimensions réellement différentes parce que la question posée est plus vaste.**

Le Zoom permet ainsi de contrôler le rythme sans inventer un sous-système pour chaque type de scène.

---

# 6. Clore les Mises

La table n’a pas besoin de trouver tout ce qui pourrait théoriquement compter.

Dans un univers riche, cette recherche n’aurait pas de fin.

Le critère est plus simple :

> **Quand personne ne voit immédiatement quelque chose d’autre qui compte et qui ne répète pas ce qui a déjà été posé, on résout.**

Une Mise ne devrait pas être le résultat d’une fouille exhaustive de la feuille de personnage.

**Une Mise se remarque.**

Le rite de table peut rester extrêmement léger :

> **Qu’est-ce qui compte ici ?**
>
> **Autre chose ?**
>
> *Silence.*
>
> **Alors voyons ce qui arrive.**

La conversation sert à rendre la situation suffisamment claire pour être résolue, pas à maximiser un pool.

---

# 7. Résoudre : la configuration standard

La configuration standard de Resonance permet de jouer immédiatement avec des dés à six faces.

Pour chaque camp :

- chaque Mise retenue apporte **un D6** à son pool ;
- chaque résultat **pair** compte comme une **Réussite** ;
- chaque résultat **impair** ne produit pas de Réussite ;
- on compare ensuite le nombre de Réussites obtenues par les camps.

L’écart donne l’orientation de la résolution :

- **égalité** : statu quo ;
- **1 Réussite d’écart** : victoire ou défaite ;
- **2 Réussites d’écart ou plus** : exploit ou fiasco.

Cette procédure suffit à trancher une incertitude.

Elle n’est pourtant pas une loi intangible de Resonance.

C’est la réponse par défaut du framework à une question qui devra toujours recevoir une réponse :

> **Comment ce qui a été mis en jeu rencontre-t-il l’incertitude ?**

Pour le moment, il suffit de lancer les dés.

Nous verrons plus loin pourquoi un jeu peut souhaiter donner une autre réponse.

---

# 8. Interpréter : les Mises reviennent dans la fiction

Les Mises ne servent pas seulement à construire le pool avant le jet.

**Elles fournissent aussi la matière de l’interprétation après le jet.**

Lorsque le résultat est connu, la table possède déjà :

- l’intention ;
- le Focus ;
- ce qui comptait dans la fiction ;
- l’orientation donnée par la résolution.

Il ne reste donc pas à inventer une conséquence à partir d’un nombre abstrait.

La résolution a déjà préparé les éléments avec lesquels raconter ce qui arrive.

Imaginons une traversée de montagne où les Mises sont :

- *la pluie battante* ;
- *la peur de voir arriver les poursuivants* ;
- *l’expérience des cols du personnage* ;
- *la confiance de son compagnon*.

Si le personnage obtient une Défaite, plusieurs interprétations sont immédiatement disponibles.

La pluie peut rendre le passage impraticable.

L’urgence peut provoquer une mauvaise décision.

L’expérience peut empêcher que l’échec ne devienne un fiasco plus grave.

Le compagnon peut rester en arrière pour permettre aux autres de continuer.

Les dés déterminent une orientation.

**Les Mises donnent à la table la matière avec laquelle cette orientation devient fiction.**

On peut donc résumer leur double fonction ainsi :

> **Avant la résolution, les Mises construisent l’incertitude.**
>
> **Après la résolution, les Mises nourrissent son interprétation.**

Le résultat retourne alors dans la fiction et transforme le monde depuis lequel la prochaine résolution commencera.

> **Fiction → Focus → Mises → résolution → interprétation → fiction transformée**

---

# Mises et enjeux

Les **enjeux** désignent ce qui peut être gagné, perdu ou modifié par la résolution.

Ils relèvent du vocabulaire courant de la table et n’ont pas nécessairement besoin de devenir un concept mécanique capitalisé de Resonance.

> **Enjeu :** traverser la rivière avant l’arrivée des gardes.
>
> **Mises :** connaître la rivière, affronter un courant particulièrement fort, transporter un compagnon blessé, voir la nuit tomber.

L’enjeu dit **ce que la résolution décide**.

Les Mises disent **ce que la fiction place dans la balance pour la décider**.

---

# Opposition et contre-Mises

Une Mise peut naturellement faire apparaître une vérité favorable à l’autre camp.

> **Joueur :** Je suis déjà entre lui et la porte.
>
> **Meneur :** Il connaît parfaitement cette caserne.
>
> **Joueur :** Justement, il doit me contourner dans ce couloir étroit.
>
> **Meneur :** Mais deux soldats arrivent derrière toi.

Cette conversation n’est pas une négociation de bonus.

Elle fait apparaître progressivement les différents éléments que la fiction rend pertinents.

C’est aussi pourquoi les oppositions peuvent tendre à s’équilibrer organiquement : regarder une situation de plus près révèle souvent des éléments nouveaux pour plusieurs camps.

Cela ne signifie pas que chaque opposition doit être équilibrée.

Un avantage fictionnel réel doit rester un avantage fictionnel réel.

Les éventuels outils de régulation globale — comme une jauge de Destin — répondent à une autre question : celle de l’économie du jeu et du contrat de table. Ils seront présentés séparément des règles fondamentales de pertinence.

---

# Le Facteur Cadre : ce qui borne la résolution

Le Focus sélectionne ce qui compte, mais il ne peut pas abolir les contraintes fondamentales de la situation.

Un **Facteur Cadre** exprime une limite suffisamment forte pour modifier l’espace même des intentions ou des Mises recevables.

Par exemple :

- la violence est impossible dans un sanctuaire ;
- une audience royale obéit à un protocole strict ;
- une gravité extrême interdit certains gestes ;
- la présence du Chaos altère ce qui peut être considéré comme stable ;
- un interdit culturel rend certaines actions impensables ou lourdes de conséquences.

Un Facteur Cadre n’est donc pas simplement « une difficulté de plus ».

Il dit quelque chose sur **le cadre dans lequel la résolution peut avoir lieu**.

La frontière exacte entre Facteur Cadre, recevabilité des Mises et règles particulières d’un jeu devra être précisée dans la partie consacrée au game design.

---

# Deuxième partie — Faire varier Resonance

Jusqu’ici, nous avons joué avec la configuration standard.

Cela suffit pour utiliser Resonance dans un univers quelconque.

Mais le framework a été conçu pour une autre possibilité : lorsqu’un monde possède une logique suffisamment forte, **la mécanique peut cesser d’être neutre et commencer à l’exprimer**.

C’est ici que Resonance devient explicitement un outil de game design.

---

# Invariants et choix de design

Tous les éléments rencontrés jusqu’ici n’ont pas le même statut.

Certains constituent le geste même de Resonance :

- partir d’une intention fictionnelle ;
- définir un Focus ;
- sélectionner ce qui compte ;
- éviter les redondances à l’échelle choisie ;
- confronter ces éléments à une forme d’incertitude ;
- interpréter le résultat à partir de la fiction mise en jeu ;
- repartir du monde transformé.

D’autres éléments appartiennent à la configuration standard et peuvent être remplacés :

- utiliser des D6 ;
- associer une Mise à un dé ;
- lire les nombres pairs comme des Réussites ;
- employer cette échelle précise de résultats ;
- représenter toutes les Mises de la même manière.

Un jeu Resonance est donc libre de conserver les choix standards qui lui conviennent et de transformer ceux qui ont quelque chose à exprimer.

La variation n’est pas un ajout extérieur au framework.

**Elle fait partie de sa conception.**

---

# Les Prismes : comment une perspective fait répondre le monde

La configuration standard utilise une lecture volontairement simple de l’incertitude.

Mais certains jeux peuvent vouloir que cette lecture elle-même porte du sens.

Resonance appelle **Prisme** la logique par laquelle une perspective sur le monde transforme l’incertitude en résultat.

Un Prisme ne consiste donc pas simplement à « compter les dés autrement ».

Il peut modifier :

- les résultats qui comptent ;
- les motifs qui deviennent significatifs ;
- les dés qui peuvent être relancés ou transformés ;
- les résultats qui s’annulent ;
- le prix d’une réussite ou d’une transgression ;
- la manière dont l’incertitude produit une conséquence.

Le mécanisme concret n’est que l’expression d’une idée plus fondamentale :

> **Que signifie l’incertitude depuis cette manière d’habiter le monde ?**

## Le Prisme standard

La configuration standard de Resonance possède elle aussi un Prisme, même s’il cherche précisément à rester discret.

Le **Prisme standard** traite chaque D6 de manière identique : pair, il produit une Réussite ; impair, il n’en produit pas.

Il ne prétend pas représenter la « vraie » structure du hasard.

Il fournit simplement la lecture qui ajoute le moins de présupposés particuliers lorsque le jeu ne souhaite pas faire de la perspective un enjeu mécanique.

C’est un **point zéro de design**, pas une norme à laquelle les autres Prismes devraient ressembler.

## Quand créer un autre Prisme ?

Un autre Prisme devient pertinent lorsque modifier la résolution permet au joueur de ressentir quelque chose qu’une description seule transmettrait moins bien.

Par exemple, un jeu pourrait vouloir que :

- la faveur divine transforme certains échecs ;
- les esprits rendent des motifs ou des répétitions significatifs ;
- une discipline logique agrège les résultats plutôt qu’elle ne les compte ;
- une voie mystique puisse annuler une victoire apparemment acquise ;
- une pensée cyclique ou draconique fasse émerger des formes plutôt que des succès indépendants.

La bonne question de design n’est donc pas :

> *Quelle mécanique originale puis-je inventer ?*

mais :

> **Quelle relation au monde mérite réellement de transformer la manière dont l’incertitude est vécue ?**

---

# Les supports peuvent eux aussi résonner

Une Mise n’a pas besoin d’être représentée par un D6 identique à toutes les autres.

Un jeu peut utiliser :

- des dés de tailles différentes ;
- des couleurs ayant une signification fictionnelle ;
- des cartes ;
- des jetons ;
- des perles ;
- des objets particuliers ;
- ou tout autre support dont la manipulation sert l’expérience recherchée.

Changer de support n’est toutefois pas intéressant en soi.

Le support devient pertinent lorsqu’il prolonge quelque chose que le personnage ou le monde fait déjà ressentir.

Un dé rouge peut signifier la colère si sa présence et ses effets rendent réellement cette colère perceptible à la table.

Un ensemble de pierres ou de perles peut être plus approprié qu’un dé si le jeu veut matérialiser une relation aux esprits, à une mémoire ou à une dette.

L’objectif reste le même :

**réduire la distance entre ce que le joueur manipule et ce que son personnage vit.**

---

# Concevoir la pertinence

Les Prismes ne sont qu’un des points de design de Resonance.

Un jeu doit également décider quelles vérités fictionnelles ont tendance à devenir visibles, importantes ou recevables comme Mises.

Cette **grammaire de pertinence** peut venir :

- des cultures du monde ;
- de la magie ;
- des relations sociales ;
- des institutions ;
- des états du personnage ;
- des motifs du genre ;
- de la progression ;
- des Facteurs Cadres ;
- des conséquences accumulées dans la fiction.

Deux jeux peuvent donc utiliser exactement le même Prisme et produire malgré tout des expériences très différentes parce qu’ils n’apprennent pas à la table à regarder les mêmes choses.

Inversement, deux personnages d’un même jeu peuvent partager une situation mais ne pas y rendre pertinentes les mêmes vérités.

La conception d’un jeu Resonance ne consiste donc pas seulement à écrire une procédure aléatoire.

Elle consiste à décider **ce que le jeu apprend aux joueurs à remarquer**.

---

# Trois niveaux à ne pas confondre

Cette architecture permet de distinguer clairement trois objets.

## Resonance

Le framework.

Il fournit la grammaire générale de résolution, ses concepts et ses points de variation.

## La configuration standard

Une implémentation de référence entièrement jouable.

Elle permet d’utiliser Resonance immédiatement sans travail préalable de game design.

On peut donc jouer avec Resonance sans avoir écrit un « jeu Resonance » particulier.

## Un jeu conçu avec Resonance

Une implémentation qui choisit ce qu’elle conserve et ce qu’elle transforme pour produire une expérience propre à son univers.

Elle peut définir :

- sa grammaire de pertinence ;
- ses Prismes ;
- ses Facteurs Cadres ;
- ses supports ;
- ses économies de jeu ;
- sa progression ;
- ses outils de régulation ;
- ses manières d’interpréter les conséquences.

**Glorantha Perspectives** constitue un exemple de cette troisième catégorie.

---

# Troisième partie — Concevoir un jeu avec Resonance

Cette partie du SRD devra transformer les concepts précédents en méthode de design.

Une première grille pourrait demander au concepteur :

1. **Qu’est-ce que ce monde apprend aux joueurs à remarquer ?**
2. **Quelles vérités peuvent devenir des Mises ?**
3. **Qu’est-ce qui rend deux Mises distinctes ou redondantes ?**
4. **Quels Facteurs Cadres bornent réellement l’action ?**
5. **La configuration standard suffit-elle à exprimer ce monde ?**
6. **Si non, quelle perspective mérite un Prisme particulier ?**
7. **Que doit faire ce Prisme ressentir plutôt que simplement simuler ?**
8. **Un autre support que le D6 rendrait-il cette expérience plus directe ?**
9. **Quelles conséquences doivent retourner durablement dans la fiction ?**
10. **Quels garde-fous empêchent la recherche de Mises de redevenir une optimisation mécanique ?**

L’objectif n’est pas de modifier Resonance pour le plaisir d’ajouter des règles.

Chaque variation devrait pouvoir répondre à une question simple :

> **Qu’est-ce que cette règle permet au joueur de percevoir, de comprendre ou de ressentir du monde ?**

---

# Quatrième partie — Pourquoi Resonance fonctionne ainsi

Les notions théoriques viennent ici, une fois l’expérience de jeu comprise.

Elles ne constituent pas des prérequis pour jouer.

Elles servent à décrire différents aspects du même framework.

## Cognitif : où porte l’attention du joueur ?

Resonance peut être décrit comme **cognitif** parce que son opération centrale consiste moins à calculer une valeur de personnage qu’à porter un jugement de pertinence sur une situation fictionnelle.

Le joueur observe la scène, se souvient de ce que son personnage sait et a vécu, prête attention aux relations, à l’environnement et aux circonstances, puis identifie ce qui compte.

La charge technique peut ainsi rester faible alors que la fiction demeure riche.

Le terme « cognitif » décrit donc avant tout **l’interface mentale entre le joueur, son personnage et le monde**.

L’objectif n’est pas l’absence de réflexion.

C’est de diriger cette réflexion vers la fiction plutôt que vers la manipulation d’un modèle abstrait.

## Diégétique : d’où viennent les éléments mécaniques ?

Resonance peut être décrit comme **diégétique** lorsque les éléments manipulés par la règle restent attachés à des éléments qui possèdent déjà un sens dans la fiction.

Une blessure, un serment, le vent, une réputation ou une relation ne sont pas d’abord des modificateurs.

Ils existent dans le monde fictionnel, puis deviennent mécaniquement présents parce qu’ils comptent.

Cette continuité peut également concerner les supports employés : couleurs, dés, cartes, objets ou autres formes matérielles peuvent prolonger une signification déjà vécue dans la fiction.

> **Le diégétique concerne la continuité entre ce qui existe dans le monde et ce que la règle manipule.**

## Perspectiviste : qui regarde le réel ?

Le perspectivisme ajoute une possibilité supplémentaire.

Un design diégétique peut donner un poids mécanique à ce qui existe dans la fiction tout en conservant une même procédure pour tous les personnages.

Un design perspectiviste accepte qu’une même réalité puisse produire une résolution différente selon la manière dont elle est vécue, comprise ou habitée.

Le point de vue n’est alors plus seulement un élément raconté.

**Il devient lui-même mécaniquement opérant.**

C’est notamment ce que permettent les Prismes lorsqu’ils sont liés à des manières différentes d’entrer en relation avec le monde.

> **Diégétique : ce qui existe dans la fiction peut devenir mécanique.**
>
> **Perspectiviste : la manière de vivre cette fiction peut transformer la mécanique.**

## Ontologique : quel réel la mécanique affirme-t-elle ?

Le terme **ontologique** doit être employé avec davantage de prudence.

Il devient pertinent lorsqu’un jeu ne se contente pas de représenter plusieurs interprétations subjectives d’une même réalité supposée neutre, mais considère que ces différentes relations au réel correspondent effectivement à des manières différentes pour le monde d’exister ou d’agir.

Dans ce cas, la mécanique ne dit plus seulement :

> *ce personnage comprend le monde ainsi.*

Elle peut aller jusqu’à dire :

> **dans cette relation au réel, le monde fonctionne effectivement ainsi.**

Cette distinction est particulièrement importante pour des univers où plusieurs cosmologies ou modes d’existence sont simultanément vrais sans pouvoir être réduits à un unique modèle mécanique sous-jacent.

On peut donc avoir :

- un jeu diégétique sans perspectivisme ;
- un jeu perspectiviste sans engagement ontologique fort ;
- un jeu dans lequel perspective et ontologie deviennent profondément liées.

Cette partie théorique devra encore être affinée afin de ne pas utiliser ces termes comme de simples labels philosophiques.

---

# Proposition d’architecture pour le SRD

À partir de cette nouvelle lecture, le SRD pourrait suivre la progression suivante :

1. **Jouer à Resonance**
   - scène d’ouverture ;
   - Intention ;
   - Focus ;
   - Mises ;
   - pertinence et non-redondance ;
   - Zoom ;
   - configuration standard ;
   - interprétation ;
   - opposition.

2. **Maîtriser la table**
   - recevabilité des Mises ;
   - rôle du meneur et responsabilité partagée ;
   - Facteurs Cadres ;
   - surenchère ;
   - Jauge de Destin ;
   - contrat social ;
   - exemples complets Action / Séquence / Script.

3. **Faire varier Resonance**
   - invariants et choix standards ;
   - Prisme standard ;
   - création et usage des Prismes ;
   - confrontation de perspectives différentes ;
   - supports alternatifs ;
   - autres formes d’incertitude.

4. **Concevoir un jeu avec Resonance**
   - grammaire de pertinence ;
   - cultures, relations et progression ;
   - Facteurs Cadres comme outils de design ;
   - économies de jeu ;
   - construction d’un Prisme depuis une expérience fictionnelle ;
   - tests et critères de design.

5. **Comprendre Resonance**
   - interface cognitive ;
   - game design diégétique ;
   - perspectivisme ;
   - ontologie mécanique ;
   - limites et domaines d’application.

6. **Études de cas**
   - Glorantha Perspectives ;
   - autres implémentations et prototypes.

L’ordre recherché reste :

> **expérience concrète → pratique → variation → design → théorie**

La théorie vient expliquer une expérience que le lecteur a déjà comprise au lieu d’être le prix d’entrée du document.

Et la distinction fondamentale du framework devient plus simple :

> **On peut jouer à Resonance tel quel.**
>
> **On peut aussi concevoir avec Resonance pour que le monde transforme les règles qui le font vivre.**
