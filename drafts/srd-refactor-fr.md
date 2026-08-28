# Resonance — prototype de refactor pédagogique du SRD

> **Document de travail.** Ce texte explore une nouvelle architecture pédagogique pour le SRD de Resonance. Il ne remplace pas encore le document publié et ne cherche pas à figer toute la terminologie théorique. Son objectif est d’abord de rendre Resonance jouable et compréhensible, puis de montrer comment il devient un framework de game design.
>
> Cette version abandonne la distinction entre « Resonance Core » et « Resonance Prismes ». Il n’y a qu’un seul framework : **Resonance**. Les Mises, le Focus, le Zoom, les Prismes et les Facteurs Cadres sont des concepts, propriétés ou points de variation à l’intérieur de ce framework.

## Resonance en une phrase

**Resonance est un framework de game design pour jeux de rôle dans lequel la fiction détermine ce qui entre dans la résolution et peut également déterminer comment cette résolution fonctionne.**

Il fournit en même temps une **configuration standard entièrement jouable** : il n’est donc pas nécessaire de concevoir son propre jeu pour utiliser Resonance.

On peut simplement jouer.

Ou on peut aller plus loin et faire résonner la résolution avec un monde, une culture, une cosmologie ou une perspective particulière.

---

# Complet pour jouer, ouvert pour concevoir

Resonance possède deux usages qui ne s’opposent pas.

D’un côté, il fournit assez de règles pour résoudre immédiatement une situation dans presque n’importe quel univers fictionnel.

De l’autre, ces règles sont conçues pour pouvoir être transformées lorsqu’un jeu veut exprimer quelque chose de particulier sur son monde.

La distinction utile n’est donc pas entre un moteur « Core » et des modules supplémentaires, mais entre :

- **les invariants de Resonance**, qui définissent le geste fondamental du framework ;
- **la configuration standard**, qui fournit des choix par défaut lorsque le jeu n’a aucune raison de les remplacer ;
- **les choix de design**, qu’une implémentation peut transformer pour produire une expérience particulière.

Resonance est ainsi **complet pour jouer** et **ouvert pour concevoir**.

La configuration standard n’est pas une version inférieure ou provisoire du système. C’est une implémentation de référence, volontairement simple et générique.

> **Resonance définit ce qui doit être décidé.**
>
> **La configuration standard fournit une décision par défaut.**
>
> **Un jeu Resonance peut conserver ou transformer ces décisions.**

---

# 1. Découvrir Resonance

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

## La boucle de résolution

Une résolution Resonance suit une boucle simple :

1. **Dire ce que l’on veut obtenir.**
2. **Cadrer la question et son échelle.**
3. **Rendre explicites les conséquences importantes si nécessaire.**
4. **Identifier ce qui compte pour cette question.**
5. **Écarter ce qui est hors sujet ou redondant à cette échelle.**
6. **Résoudre l’incertitude.**
7. **Lire l’orientation du résultat.**
8. **Interpréter cette orientation à partir de ce qui a été mis en jeu.**
9. **Continuer depuis le monde transformé.**

Cette boucle fait partie des invariants de Resonance.

La manière exacte de matérialiser ou de lire l’incertitude pourra varier plus tard. Pour apprendre à jouer, nous utiliserons d’abord la **configuration standard**.

## Le contrat de table vient avant la mécanique

Resonance demande régulièrement à la table de juger ce qui compte dans la fiction. Cette liberté suppose un cadre partagé.

Avant de jouer, la table devrait donc savoir au moins :

- quel monde et quel ton elle cherche à faire vivre ;
- quel degré de danger elle accepte ;
- qui arbitre en cas de désaccord sur une Mise ;
- quelles limites ou sensibilités doivent être respectées ;
- si certaines conséquences doivent toujours être annoncées avant qu’un joueur s’y expose ;
- quels outils optionnels de cohérence ou de sécurité, comme la Jauge de Destin, elle souhaite employer.

Le contrat social ne remplace pas les règles. Il donne le contexte dans lequel les jugements de pertinence et les outils de régulation peuvent fonctionner sans devenir une négociation permanente.

---

# 2. Cadrer une résolution

## L’Intention : qu’est-ce que tu essaies réellement d’obtenir ?

Le joueur commence par dire ce qu’il cherche à accomplir dans la fiction.

> *Je veux empêcher le garde d’atteindre la porte.*

L’**Intention** n’est pas une capacité, une action standardisée ou une entrée de menu.

C’est ce que le personnage cherche réellement à obtenir.

Une même Intention peut être poursuivie de nombreuses manières. Resonance ne demande pas d’abord quelle règle correspond à l’action. Il demande ce qui, dans la fiction, va réellement peser sur ce que le personnage tente de faire.

## Les conséquences importantes doivent être visibles

Le mot **enjeu** peut être utilisé dans son sens courant pour parler de ce qui risque d’être gagné, perdu ou transformé, mais il ne constitue pas un concept mécanique distinct de Resonance.

Sa fonction importante à la table est ailleurs : **les joueurs doivent pouvoir connaître les conséquences significatives auxquelles leur décision les expose lorsqu’elles ne sont pas évidentes.**

> **Joueur :** Je saute du toit pour atteindre l’autre bâtiment.
>
> **Meneur :** D’accord. À cette distance, si tu tombes, la chute peut être mortelle. Tu le fais quand même ?

La précision nécessaire dépend du contrat social de la table et du jeu utilisé.

Dans un jeu où la létalité, les blessures graves, la perte irréversible d’un lien ou d’une ressource importante sont possibles, le meneur devrait avertir les joueurs lorsque leur personnage s’expose à ce type de conséquence sans que le risque soit déjà évident dans la fiction.

Le but n’est pas d’annoncer tout ce qui pourrait arriver.

Il s’agit de permettre au joueur de prendre une décision éclairée **depuis la situation de son personnage**.

## Le Focus : quelle question et à quelle échelle ?

La table précise ensuite la question à laquelle la résolution doit répondre.

> *Est-ce que tu réussis à arrêter le garde avant qu’il donne l’alerte ?*

Cette question définit le **Focus**.

Le Focus ne décrit pas tout ce qui se passe dans la scène. Il détermine **ce que cette résolution regarde**.

Tout ce qui existe sur la feuille de personnage n’est pas forcément pertinent.

Tout ce qui existe dans le monde n’est pas forcément pertinent.

Même un élément important dans l’histoire peut ne pas compter pour cette résolution précise.

Le Focus possède également une **échelle**. Resonance appelle cette propriété le **Zoom**.

Autrement dit :

> **Le Focus dit ce que nous résolvons.**
>
> **Le Zoom dit à quelle échelle nous le résolvons.**

Les deux ne sont pas indépendants. Choisir le Focus, c’est aussi choisir la largeur de la question que l’on pose à la fiction.

### Zoom Action

Le Focus porte sur un geste ou un moment précis.

> *Passer la porte avant qu’elle se referme.*

L’espace des Mises est naturellement restreint. Plusieurs formulations d’un même avantage tendent à être redondantes parce que la résolution observe un instant étroit.

### Zoom Séquence

Le Focus porte sur une succession cohérente d’actions.

> *Traverser les toits et semer les gardes avant d’atteindre le temple.*

Des éléments qui auraient été redondants dans une action ponctuelle peuvent devenir distincts parce qu’ils concernent différentes dimensions ou étapes de la séquence : endurance, connaissance du quartier, aide d’un complice, pluie qui rend les tuiles glissantes, peur d’être reconnu.

### Zoom Script

Le Focus couvre un ensemble encore plus large : voyage, enquête, campagne militaire, négociation prolongée, projet complexe.

> *Faire parvenir une caravane jusqu’à la cité assiégée.*

Le personnage ou le groupe peut raisonnablement mobiliser plusieurs dimensions différentes : relations, logistique, réputation, savoir, endurance, richesse, protection politique, préparation ou sacrifices.

Ce ne sont pas « plus de bonus parce que le conflit est plus long ».

**Ce sont davantage de dimensions réellement différentes parce que la question posée est plus vaste.**

Le Zoom permet ainsi de contrôler le rythme sans inventer un sous-système pour chaque type de scène.

---

# 3. Mettre la fiction dans la balance

## La feuille de personnage : une mémoire de la fiction

Resonance peut utiliser une feuille de personnage.

Mais cette feuille n’a pas besoin d’être organisée autour de valeurs numériques à optimiser.

Elle peut être essentiellement **littéraire et signifiante** : mots-clés, relations, états, objets, appartenances, convictions, symboles, blessures, serments, réputations ou autres éléments propres à l’univers de jeu.

Par exemple, une feuille pourrait porter des éléments comme :

- *Vétéran de la guerre du Nord* ;
- *Serment envers la Maison Rouge* ;
- *Jambe blessée* ;
- un symbole religieux ;
- le nom d’un allié ou d’un rival ;
- une Rune, un titre, une dette ou une marque que le jeu considère comme signifiante.

La feuille est donc l’une des mémoires persistantes de ce qui est vrai au sujet du personnage.

Elle n’est ni la seule source de Mises, ni un catalogue de bonus automatiques.

> **Lire sa feuille ne consiste pas à chercher ce qui rapporte un dé.**
>
> **Cela consiste à se rappeler qui est le personnage et ce qui est vrai de lui.**

Le monde, la scène, les autres personnages et tout ce qui a déjà été établi dans la fiction restent tout aussi importants.

Cette distinction est essentielle : un mot-clé écrit sur la feuille peut être parfaitement vrai sans être pertinent dans le Focus présent.

Inversement, une vérité décisive de la scène peut devenir une Mise alors qu’elle n’a jamais été inscrite sur aucune feuille.

## Les Mises

Les éléments que la table fait compter deviennent des **Mises**.

> **Une Mise est une vérité fictionnelle que le jeu et la table rendent pertinente pour le Focus présent.**

Une Mise existe dans la fiction avant d’exister dans la mécanique.

Elle peut provenir, entre autres :

- du personnage ou de sa feuille : expérience, capacité, état, réputation, peur, conviction ;
- de ses relations : allié, dette, rivalité, serment, amour, loyauté ;
- de la situation : position, préparation, surprise, urgence ;
- de l’environnement : pluie, obscurité, terrain, foule, incendie ;
- de l’adversité : faiblesse, avantage, discipline, nombre, connaissance ;
- du monde : coutume, tabou, statut, magie, cosmologie ou contrainte particulière ;
- de tout autre élément que le jeu et la situation rendent réellement significatif.

Cette liste n’est pas exhaustive.

Une Mise n’est donc pas un bonus abstrait attaché au personnage.

Mais tout élément vrai dans la fiction n’est pas automatiquement une Mise.

La question n’est pas :

> *Puis-je trouver une justification pour ajouter ceci ?*

La question est :

> **Est-ce que ceci compte vraiment dans la résolution que nous regardons ?**

## Une Mise peut aider ou nuire

Une Mise n’est pas nécessairement favorable au personnage qui la formule.

> *Je connais parfaitement cette forêt.*

pourrait jouer en sa faveur.

> *Je suis blessé à la jambe.*

pourrait jouer contre lui.

Mais leur pertinence dépend toujours du Focus **et du jeu que la table cherche à faire vivre**.

Une blessure peut être centrale dans un jeu où la vulnérabilité physique est constamment mise en avant, et rester en arrière-plan dans un autre jeu qui s’intéresse davantage au drame politique ou aux relations.

Une Mise n’est donc pas « objectivement importante » dans l’absolu.

Elle devient importante ici, dans ce jeu, pour cette résolution.

## Une Mise est aussi un choix de regard

La pertinence n’est pas seulement causale.

Dans une fiction, nous ne prêtons jamais la même attention à tous les détails possibles. Le jeu, la scène et la table mettent certaines choses en avant.

Le regard malicieux d’un vieux sage peut compter parce que le récit nous a appris à y reconnaître sa sagesse.

L’orage autour d’un duel peut compter parce que ce jeu donne une importance particulière aux signes du monde.

L’arrivée imminente d’un ennemi peut compter parce que toute la scène est traversée par cette urgence.

La maladresse légendaire d’un personnage peut compter parce qu’elle est devenue un motif de la fiction.

Les joueurs, meneur compris, ne font donc pas que constater passivement ce qui serait causalement important.

**Ils choisissent aussi ce que cette fiction mérite de regarder maintenant.**

Cette sélection n’est pas arbitraire : elle est guidée par le monde, le genre, les tropes, les règles du jeu et ce que la table a appris à considérer comme significatif.

## Pertinence et non-redondance

Un monde riche permet presque toujours de formuler plusieurs raisons très proches pour expliquer le même avantage.

> *Je suis un excellent épéiste.*
>
> *J’ai été entraîné depuis l’enfance.*
>
> *Je suis vétéran de trois guerres.*

Ces trois faits peuvent être vrais.

Ils ne constituent pourtant pas nécessairement trois Mises distinctes.

La question est :

> **À l’échelle de ce Focus, représentent-ils réellement plusieurs choses différentes que la résolution veut mettre en jeu ?**

Si les trois formulations disent simplement « il est très expérimenté à l’épée » dans un échange de quelques secondes, elles sont probablement redondantes.

Dans une résolution plus vaste, elles pourraient au contraire devenir distinctes si elles interviennent réellement dans des dimensions différentes de la situation.

La non-redondance n’est donc pas une règle comptable.

Elle dépend du Focus et de son Zoom.

> **Le Focus détermine ce qui est pertinent. Son Zoom détermine aussi à partir de quand deux vérités deviennent réellement distinctes.**

## Clore les Mises

La table n’a pas besoin de trouver tout ce qui pourrait théoriquement compter.

Dans un univers riche, cette recherche n’aurait pas de fin.

Le critère est plus simple :

> **Quand personne ne voit immédiatement quelque chose d’autre qui compte et qui ne répète pas ce qui a déjà été posé, on résout.**

Une Mise ne devrait pas être le résultat d’une fouille exhaustive de la feuille de personnage, du lore ou de la scène.

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

## Opposition et contre-Mises

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

Les contre-Mises sont donc une forme de **contrepoids organique** produit par l’exploration de la fiction, pas une obligation mathématique de rendre tous les pools égaux.

---

# 4. Résoudre et interpréter

## La configuration standard

La configuration standard de Resonance permet de jouer immédiatement avec des dés à six faces.

Pour chaque camp :

- chaque Mise retenue apporte **un D6** à son pool ;
- chaque résultat **pair** compte comme une **Réussite** ;
- chaque résultat **impair** ne produit pas de Réussite ;
- on compare ensuite le nombre de Réussites obtenues par les camps.

Cette première opération transforme l’incertitude en un signal mécanique comparable : un nombre de Réussites.

## L’échelle standard de résultat

La comparaison des Réussites produit ensuite une orientation.

### Égalité : Statu quo ou surenchère

Si les deux camps obtiennent le même nombre de Réussites, aucun camp ne s’impose clairement.

Le résultat standard est un **Statu quo**.

Selon la fiction, il peut être raconté comme un maintien réel de la situation, un **Oui, mais…** ou un **Non, mais…**.

Si un camp refuse d’en rester là, la configuration standard permet également une **surenchère**.

La surenchère évite de recommencer tout le cycle de sélection des Mises :

- on conserve les Mises déjà présentes ;
- chaque camp ajoute une nouvelle Mise représentant sa **volonté d’en finir** ;
- on résout de nouveau avec ces pools augmentés.

La surenchère rend donc mécaniquement présent le fait que les camps choisissent de pousser plus loin une confrontation qui aurait pu s’arrêter sur un équilibre.

Un jeu conçu avec Resonance peut toutefois choisir une autre philosophie de l’égalité : imposer le Statu quo, privilégier une interprétation en « mais », définir un coût particulier ou employer une autre procédure.

> **Resonance exige qu’une implémentation sache ce que signifie l’égalité ; la configuration standard fournit une réponse par défaut.**

### Différence positive : Victoire / Défaite

Si un camp obtient plus de Réussites que l’autre, il obtient une **Victoire** et l’autre camp subit une **Défaite**.

Pour l’Intention du camp gagnant, cela se lit généralement comme **Oui**.

Pour l’Intention du camp perdant, cela se lit généralement comme **Non**.

### Domination du résultat

Une résolution est **dominée** lorsque les deux conditions suivantes sont réunies :

1. l’écart est **strictement supérieur à 1 Réussite** ;
2. le camp gagnant obtient **strictement plus du double** des Réussites du camp perdant.

Exemples :

- `2–0` → résultat dominé ;
- `3–1` → résultat dominé ;
- `4–2` → Victoire / Défaite simples ;
- `5–2` → résultat dominé ;
- `6–3` → Victoire / Défaite simples.

Cette règle évite qu’un grand nombre de Mises rende mécaniquement les résultats extrêmes plus fréquents simplement parce que les pools sont plus grands.

La domination exprime donc une **asymétrie forte du résultat**, pas seulement un grand écart absolu.

Elle ouvre la possibilité d’une interprétation amplifiée :

- le camp gagnant peut obtenir un **Exploit**, lu comme **Oui, et…** ;
- le camp perdant peut subir un **Fiasco**, lu comme **Non, et…**.

Ces deux qualifications ne sont pas automatiquement symétriques.

Une réussite spectaculaire pour un camp ne transforme pas nécessairement l’échec de l’autre en catastrophe. Inversement, une Défaite peut avoir des conséquences particulièrement graves pour un personnage sans que le vainqueur accomplisse pour autant quelque chose d’extraordinaire au-delà de sa propre Intention.

**Exploit et Fiasco qualifient donc les conséquences fictionnelles de chaque côté ; la domination mécanique indique seulement qu’une amplification est disponible.**

La manière exacte dont une implémentation attribue cette amplification pourra être challengée et précisée lors des prochains tests du framework.

## Interpréter : les Mises reviennent dans la fiction

Les Mises ne servent pas seulement à construire le pool avant le jet.

**Elles fournissent aussi la matière de l’interprétation après le jet.**

Lorsque le résultat est connu, la table possède déjà :

- l’Intention ;
- le Focus et son Zoom ;
- les conséquences importantes éventuellement annoncées ;
- ce qui comptait dans la fiction ;
- l’orientation donnée par la résolution.

Il ne reste donc pas à inventer une conséquence arbitraire à partir d’un nombre abstrait.

La résolution a déjà préparé les éléments avec lesquels raconter ce qui arrive.

Imaginons une traversée de montagne où les Mises sont :

- *la pluie battante* ;
- *la peur de voir arriver les poursuivants* ;
- *l’expérience des cols du personnage* ;
- *la confiance de son compagnon*.

Si le personnage obtient une Défaite, plusieurs interprétations sont immédiatement disponibles.

La pluie peut rendre le passage impraticable.

L’urgence peut provoquer une mauvaise décision.

L’expérience peut éviter que l’échec n’entraîne une conséquence plus grave.

Le compagnon peut rester en arrière pour permettre aux autres de continuer.

Les dés déterminent une orientation.

**Les Mises donnent à la table la matière avec laquelle cette orientation devient fiction.**

Les mots **Oui**, **Non**, **Et** et **Mais** sont seulement un vocabulaire pratique pour aider à formuler cette orientation. Ils ne constituent pas une mécanique propre à Resonance.

Ce qui devient plus spécifique à Resonance est la manière dont l’interprétation peut **réécrire les vérités persistantes de la fiction**.

## Quand la résolution écrit sur la feuille

Une conséquence durable peut ajouter, transformer ou supprimer un élément de la feuille de personnage lorsque la fiction le justifie.

Par exemple :

- *Jambe blessée* peut apparaître après une chute grave ;
- *Confiance du compagnon* peut devenir *Méfiance du compagnon* ;
- un serment peut être brisé ou remplacé ;
- une réputation peut être gagnée ;
- un objet, un symbole ou une marque peut être perdu ;
- un **Et** ou un **Mais** peut faire apparaître une nouvelle vérité qui persistera au-delà de la scène.

La feuille ne sert donc pas seulement à rappeler ce qui pouvait compter avant le jet.

**Elle peut aussi conserver ce que la résolution a changé.**

Cela crée une continuité simple :

> **la fiction nourrit la feuille → la feuille rappelle la fiction → certaines vérités deviennent des Mises → la résolution transforme la fiction → certaines transformations reviennent sur la feuille.**

Cette écriture n’a pas besoin d’être systématique. Beaucoup de conséquences restent locales à la scène ou au monde sans modifier directement le personnage.

Mais lorsqu’un changement devient durable et appartient désormais à ce que le personnage est, possède, croit, subit ou représente, la feuille peut en devenir la mémoire.

On peut donc résumer la double fonction des Mises ainsi :

> **Avant la résolution, les Mises construisent l’incertitude.**
>
> **Après la résolution, les Mises nourrissent son interprétation.**

Le résultat retourne alors dans la fiction et transforme le monde depuis lequel la prochaine résolution commencera.

> **Fiction / feuille → Intention → Focus / Zoom → Mises → résolution → orientation → interprétation → fiction / feuille transformées**

---

# 5. Ce qui maintient la cohérence

À première lecture, Resonance peut sembler offrir une liberté dangereuse : si presque n’importe quelle vérité fictionnelle peut devenir une Mise, pourquoi la table ne pourrait-elle pas simplement tout invoquer, tout justifier et faire grossir les pools sans limite ?

La réponse n’est pas un unique mécanisme d’équilibrage.

Resonance repose sur **plusieurs niveaux de cadrage et de cohérence qui agissent à des endroits différents**.

On peut les voir comme plusieurs fonctions complémentaires :

1. **Le contrat social** définit la manière dont la table accepte de jouer ensemble et l’autorité confiée aux différents participants.
2. **Le jeu et sa grammaire de pertinence** indiquent dans quelles familles de sens la table est invitée à regarder.
3. **Les Facteurs Cadres** ferment certaines possibilités : ils disent ce qui est ou n’est pas recevable dans le monde ou la situation.
4. **Le Focus et son Zoom** déterminent ce que la résolution regarde ici et maintenant.
5. **La pertinence et la non-redondance** déterminent ce qui peut réellement devenir une Mise distincte.
6. **L’opposition et les contre-Mises** font apparaître les contrepoids que la fiction porte déjà en elle.
7. **La Jauge de Destin**, lorsqu’elle est utilisée, garde une trace mécanique des déséquilibres qui subsistent entre les oppositions.

Ces niveaux ne font pas tous le même travail et ne doivent pas être confondus.

Ensemble, ils expliquent pourquoi Resonance n’est pas « chacun ajoute ce qu’il veut jusqu’à gagner ».

## Le Facteur Cadre : ce qui ferme l’espace des possibles

Le Focus sélectionne ce qui compte, mais il ne peut pas abolir les contraintes fondamentales du monde ou de la situation.

Un **Facteur Cadre** exprime une proposition suffisamment forte pour modifier l’espace même des Intentions, des moyens possibles ou des Mises recevables.

Il peut agir à plusieurs niveaux.

### Facteur Cadre du monde

Certaines limites appartiennent à l’univers lui-même.

> *Le voyage dans le temps n’existe pas dans ce monde.*

Ce n’est pas une action très difficile. C’est une action qui n’appartient pas à l’espace normal des possibles.

### Facteur Cadre structurel

Certaines réalités rendent un moyen inadéquat à l’Intention, quelle que soit la qualité de la justification.

> *On ne tue pas un dragon avec un cure-dent simplement en accumulant des Mises pertinentes.*

Le problème n’est pas la taille du pool. Le moyen proposé ne permet pas d’ouvrir cette résolution sous cette forme.

### Facteur Cadre local

D’autres limites sont produites par la situation présente.

> *Cette réception exige une tenue formelle. En short, tu n’entres pas par la porte principale : ce n’est pas négociable par un simple jet.*

Le personnage peut changer de plan, trouver une autre entrée, se procurer une tenue, invoquer un statut particulier ou transformer la situation.

Le Facteur Cadre ne bloque donc pas nécessairement le jeu.

**Il oblige la fiction à changer avant que certaines Intentions ou certains moyens deviennent recevables.**

Un Facteur Cadre n’est ainsi ni une difficulté supplémentaire ni une famille de Mises.

> **Le Facteur Cadre ferme des possibilités.**

## La grammaire de pertinence : ce que le jeu apprend à remarquer

La grammaire de pertinence fait presque le mouvement inverse.

Elle ne ferme pas l’espace des possibles : elle indique **où le jeu invite l’attention à se porter pour découvrir des vérités susceptibles de devenir des Mises**.

Elle peut prendre la forme de familles sémantiques imbriquées.

Par exemple :

> **Relations**
> → serments, dettes, amours, rivalités
> → personnes ou liens concrets du personnage
> → vérités actuellement pertinentes
> → Mises possibles.

Ou encore :

> **Identité culturelle**
> → appartenance, coutumes, tabous, valeurs, symboles
> → mots-clés particuliers du personnage et de son monde
> → éléments que le Focus peut rendre pertinents.

Une feuille de personnage peut matérialiser une partie de cette grammaire en proposant des familles, des mots-clés ou des symboles propres au jeu.

Mais la grammaire reste plus large que la feuille : elle existe également dans le lore, les personnages non joueurs, les institutions, les lieux, la magie, les tropes et les conventions de genre.

Elle n’est pas une liste exhaustive de Mises autorisées.

**C’est une organisation du regard.**

> **Le Facteur Cadre ferme des possibilités.**
>
> **La grammaire de pertinence ouvre des champs d’attention.**

## Arbitrer une Mise

La table partage la responsabilité de faire apparaître ce qui compte, mais elle doit savoir comment trancher lorsqu’elle n’est pas d’accord.

Le jeu devrait préciser son mode d’arbitrage.

Dans une configuration classique :

- les joueurs proposent les éléments qu’ils voient comme pertinents ;
- le meneur fait vivre l’adversité et le monde ;
- la table confronte ces propositions au Focus, au Zoom, aux Facteurs Cadres et à la grammaire du jeu ;
- le meneur tranche en dernier recours si le contrat de table lui confie cette responsabilité.

Cette validation ne devrait pas reposer sur le seul goût personnel du meneur.

**Le bon arbitre n’est pas celui qui décide ce qui l’arrange. C’est celui qui maintient la cohérence du monde, du jeu et du Focus partagé.**

## La Jauge de Destin : un filet de sécurité économique

Les oppositions n’ont pas besoin d’être équilibrées une par une.

Un personnage réellement avantagé dans la fiction doit pouvoir bénéficier de cet avantage.

Pour les tables qui souhaitent néanmoins garder une trace des déséquilibres successifs, Resonance peut utiliser une **Jauge de Destin** commune au groupe.

Elle peut être matérialisée par :

- des dés **bleus** en faveur des protagonistes ;
- des dés **rouges** en faveur de l’adversité.

Avant le tirage, si les pools sont déséquilibrés, la différence alimente la Jauge en faveur du camp actuellement désavantagé.

Exemple :

> Les protagonistes possèdent 5 Mises et l’adversité 3.
>
> L’opposition reste **5 contre 3**.
>
> La Jauge reçoit **2 dés rouges**.

Plus tard :

> Les protagonistes possèdent 2 Mises et l’adversité 5.
>
> La Jauge devrait recevoir **3 dés bleus**.
>
> Un dé bleu et un dé rouge s’annulent d’abord ; s’il restait 1 dé rouge, la Jauge contient donc ensuite 2 dés bleus.

La Jauge ne corrige donc pas immédiatement chaque déséquilibre.

**Elle conserve la mémoire mécanique de la manière dont la fiction a penché.**

Les dés disponibles peuvent être dépensés plus tard selon l’autorité convenue dans le contrat de table.

Dans une configuration où le meneur contrôle l’adversité, il peut par exemple puiser dans les dés rouges lorsqu’il souhaite renforcer une opposition future. Il n’est pas obligé de les dépenser à l’obstacle suivant, ni de les utiliser systématiquement dès qu’ils sont disponibles.

Le point important n’est pas de déclencher automatiquement une compensation.

La Jauge rend visible une réserve dont l’usage est **connu et accepté par la table**.

Ce dispositif est particulièrement utile pour une table qui ne se connaît pas encore ou qui souhaite un filet de sécurité explicite.

Une table qui a construit suffisamment de confiance peut décider de ne pas l’utiliser.

---

# 6. Faire varier et concevoir Resonance

Jusqu’ici, nous avons joué avec la configuration standard.

Cela suffit pour utiliser Resonance dans un univers quelconque.

Mais le framework a été conçu pour une autre possibilité : lorsqu’un monde possède une logique suffisamment forte, **la mécanique peut cesser d’être générique et commencer à l’exprimer**.

## Invariants et choix de design

Certains éléments constituent le geste même de Resonance :

- partir d’une Intention fictionnelle ;
- définir un Focus et son Zoom ;
- rendre visibles les conséquences importantes lorsque le contrat de table le demande ;
- sélectionner ce qui compte ;
- éviter les redondances à l’échelle choisie ;
- confronter les Mises à une forme d’incertitude ;
- produire une forme de résultat exploitable par la fiction ;
- interpréter ce résultat à partir de la fiction mise en jeu ;
- repartir du monde transformé.

D’autres éléments appartiennent à la configuration standard et peuvent être remplacés ou transformés :

- utiliser des D6 ;
- associer une Mise à un dé ;
- lire les nombres pairs comme des Réussites ;
- opposer deux pools ;
- utiliser exactement la même représentation physique pour toutes les Mises ;
- employer cette échelle particulière de résultats ;
- employer cette règle de surenchère ;
- utiliser ou non la Jauge de Destin.

Un jeu Resonance est donc libre de conserver les choix standards qui lui conviennent et de transformer ceux qui ont quelque chose à exprimer.

La variation n’est pas un ajout extérieur au framework.

**Elle fait partie de sa conception.**

## Une chaîne standard de responsabilités

Dans la configuration standard — et dans les implémentations qui opposent des camps — on peut séparer les opérations ainsi :

> **Mises → support d’incertitude → Prisme → signaux mécaniques → échelle de résultat → interprétation → fiction transformée**

Dans la configuration standard :

> **Mises → D6 → pair / impair → Réussites → comparaison → interprétation par les Mises**

Cette séparation est utile parce qu’elle évite de demander à une seule mécanique de tout faire.

Le **Prisme** transforme ici l’incertitude en signaux mécaniques.

L’**échelle de résultat** compare ensuite ces signaux pour produire une orientation.

L’**interprétation** transforme enfin cette orientation en fiction à partir des Mises et de la situation.

Cette chaîne décrit la configuration de référence, pas une obligation universelle imposée à toutes les implémentations de Resonance.

Certaines implémentations légères peuvent employer un Prisme dont le résultat est plus autonome, sans pool adverse ni étape de comparaison identique. Ces cas seront plus utiles à comprendre à partir d’études de cas concrètes qu’en essayant de les théoriser prématurément ici.

## Les Prismes : comment une perspective transforme l’incertitude

Resonance appelle **Prisme** la logique par laquelle une perspective sur le monde transforme l’incertitude en un résultat mécaniquement exploitable par le jeu.

Dans les implémentations à pools opposés, cela signifie souvent produire des **Réussites** ou d’autres signaux comparables.

Un Prisme ne consiste donc pas simplement à « compter les dés autrement » pour produire une variation esthétique.

Il peut notamment modifier :

- les résultats qui comptent ;
- les motifs qui deviennent significatifs ;
- les dés qui peuvent être relancés ou transformés ;
- les résultats qui s’annulent ;
- les coûts ou transgressions attachés à certains résultats ;
- la manière dont les événements aléatoires deviennent des Réussites ou d’autres informations utilisables par la résolution.

Le mécanisme concret est l’expression d’une question plus fondamentale :

> **Que signifie l’incertitude depuis cette manière d’habiter le monde ?**

### Le Prisme standard

La configuration standard possède elle aussi un Prisme, même s’il cherche précisément à rester discret.

Le **Prisme standard** traite chaque D6 de manière identique : pair, il produit une Réussite ; impair, il n’en produit pas.

Il ne prétend pas représenter la « vraie » structure du hasard.

Il fournit simplement la lecture qui ajoute le moins de présupposés particuliers lorsque le jeu ne souhaite pas faire de la perspective un enjeu mécanique.

C’est un **point zéro de design**, pas une norme à laquelle les autres Prismes devraient ressembler.

### Des sorties communes pour des perspectives différentes

Lorsque plusieurs Prismes doivent coexister dans une même opposition, le jeu gagne à définir une interface commune.

Dans les implémentations actuelles à pools opposés, cette interface est généralement la **Réussite** : chaque Prisme peut produire ses Réussites selon sa propre logique, puis l’échelle de résultat peut comparer les camps.

Cela permet à des personnages qui n’habitent pas le monde de la même manière de participer à une même résolution sans réduire leurs perspectives à une mécanique identique.

Cette sortie commune est un contrat d’interopérabilité pour les jeux qui en ont besoin.

**Elle ne constitue ni la définition philosophique du Prisme, ni une obligation pour toutes les implémentations de Resonance.**

### Quand créer un autre Prisme ?

Un autre Prisme devient pertinent lorsque modifier la résolution permet au joueur de ressentir quelque chose qu’une description seule transmettrait moins bien.

Par exemple, un jeu pourrait vouloir que :

- la faveur divine transforme certains échecs ;
- les esprits rendent des motifs ou des répétitions significatifs ;
- une discipline logique agrège les résultats plutôt qu’elle ne les compte ;
- une voie mystique puisse annuler une réussite apparemment acquise ;
- une pensée cyclique ou draconique fasse émerger des formes plutôt que des succès indépendants.

La bonne question de design n’est donc pas :

> *Quelle mécanique originale puis-je inventer ?*

mais :

> **Quelle relation au monde mérite réellement de transformer la manière dont l’incertitude est vécue ?**

## Les supports peuvent eux aussi résonner

Une Mise n’a pas besoin d’être représentée par un D6 identique à toutes les autres.

Un jeu peut utiliser :

- des dés de tailles différentes ;
- des couleurs ayant une signification fictionnelle ;
- des cartes ;
- des jetons ;
- des pièces ;
- des pierres ou des perles ;
- des objets particuliers ;
- ou tout autre support dont la manipulation sert l’expérience recherchée.

Changer de support n’est toutefois pas intéressant en soi.

Le support devient pertinent lorsqu’il prolonge quelque chose que le personnage ou le monde fait déjà ressentir.

Un dé rouge peut signifier la colère si sa présence et ses effets rendent réellement cette colère perceptible à la table.

Un ensemble de pierres peut être plus approprié qu’un dé si le jeu veut matérialiser une relation aux esprits, à une mémoire ou à une dette.

L’objectif reste le même :

**réduire la distance entre ce que le joueur manipule et ce que son personnage vit.**

## Concevoir la pertinence

Les Prismes ne sont qu’un des points de design de Resonance.

Un jeu doit également décider quelles familles de vérités fictionnelles il souhaite rendre visibles et naturellement disponibles à l’attention de la table.

Cette **grammaire de pertinence** peut être organisée à partir :

- des cultures du monde ;
- de la magie ;
- des relations sociales ;
- des institutions ;
- des états du personnage ;
- des motifs du genre ;
- des tropes que le jeu veut mettre en avant ;
- de la progression ;
- des conséquences accumulées dans la fiction.

Ces catégories peuvent elles-mêmes contenir d’autres catégories, mots-clés ou symboles.

La grammaire ressemble donc moins à une liste fermée qu’à une **cartographie sémantique** : des familles de sens qui permettent à la table de retrouver les vérités que le jeu veut rendre particulièrement visibles.

Deux jeux peuvent utiliser exactement le même Prisme et produire malgré tout des expériences très différentes parce qu’ils n’apprennent pas à la table à regarder les mêmes choses.

Inversement, deux personnages d’un même jeu peuvent partager une situation mais ne pas y rendre pertinentes les mêmes vérités.

La conception d’un jeu Resonance ne consiste donc pas seulement à écrire une procédure aléatoire.

Elle consiste à décider **ce que le jeu apprend aux joueurs à remarquer**.

Le choix des familles de Mises que le design rend naturellement visibles est ainsi l’un des principaux moyens de favoriser un type d’immersion plutôt qu’un autre.

La feuille de personnage peut devenir l’une des interfaces de cette grammaire : sa structure, ses mots-clés et ses symboles montrent au joueur quelles dimensions de son personnage méritent d’être regardées, sans garantir qu’elles seront pertinentes dans chaque Focus.

## Trois niveaux à ne pas confondre

### Resonance

Le framework.

Il fournit la grammaire générale de résolution, ses concepts et ses points de variation.

### La configuration standard

Une implémentation de référence entièrement jouable.

Elle permet d’utiliser Resonance immédiatement sans travail préalable de game design.

### Un jeu conçu avec Resonance

Une implémentation qui choisit ce qu’elle conserve et ce qu’elle transforme pour produire une expérience propre à son univers.

Elle peut définir notamment :

- sa grammaire de pertinence ;
- la forme de ses feuilles et de ses mémoires fictionnelles ;
- ses Prismes ;
- ses Facteurs Cadres ;
- ses supports ;
- ses économies de jeu ;
- sa progression ;
- ses outils de cohérence ou de régulation ;
- ses manières d’interpréter les conséquences.

**Glorantha Perspectives** constitue un exemple de cette troisième catégorie.

## Une grille de conception

Une première grille pour concevoir un jeu avec Resonance pourrait demander :

1. **Qu’est-ce que ce monde ou ce genre apprend aux joueurs à remarquer ?**
2. **Quelles familles de vérités doivent être particulièrement visibles pour produire l’immersion recherchée ?**
3. **Comment la feuille de personnage, le lore ou d’autres supports rendent-ils ces vérités mémorables sans les transformer en bonus automatiques ?**
4. **Qu’est-ce qui rend deux Mises distinctes ou redondantes ?**
5. **Quels Facteurs Cadres ferment réellement certaines possibilités ?**
6. **Quelles conséquences doivent être explicites avant qu’un joueur s’y expose ?**
7. **La configuration standard suffit-elle à exprimer ce monde ?**
8. **Si non, quelle perspective mérite un Prisme particulier ?**
9. **Que doit faire ce Prisme ressentir plutôt que simplement simuler ?**
10. **Le jeu a-t-il besoin de pools opposés et d’une sortie commune, ou d’une autre forme de résultat ?**
11. **Un autre support que le D6 rendrait-il cette expérience plus directe ?**
12. **Quelles conséquences doivent retourner durablement dans la fiction ou sur la feuille ?**
13. **Quels mécanismes maintiennent la cohérence lorsque la table interprète librement la pertinence ?**
14. **Quels garde-fous empêchent la recherche de Mises de redevenir une optimisation mécanique ?**

L’objectif n’est pas de modifier Resonance pour le plaisir d’ajouter des règles.

Chaque variation devrait pouvoir répondre à une question simple :

> **Qu’est-ce que cette règle permet au joueur de percevoir, de comprendre ou de ressentir du monde ?**

---

# 7. Comprendre Resonance

Les notions théoriques viennent ici, une fois l’expérience de jeu comprise.

Elles ne constituent pas des prérequis pour jouer.

Elles servent à décrire différents aspects du même framework.

## Cognitif : où porte l’attention du joueur ?

Resonance peut être décrit comme **cognitif** parce que son opération centrale consiste moins à calculer une valeur de personnage qu’à porter un jugement de pertinence sur une situation fictionnelle.

Le joueur observe la scène, se souvient de ce que son personnage sait et a vécu, relit éventuellement les mots-clés ou symboles de sa feuille, prête attention aux relations, à l’environnement et aux circonstances, puis identifie ce qui compte.

La charge technique peut ainsi rester faible alors que la fiction demeure riche.

Le terme « cognitif » décrit donc avant tout **l’interface mentale entre le joueur, son personnage et le monde**.

L’objectif n’est pas l’absence de réflexion.

C’est de diriger cette réflexion vers la fiction plutôt que vers la manipulation d’un modèle abstrait.

## Diégétique : d’où viennent les éléments mécaniques ?

Resonance peut être décrit comme **diégétique** lorsque les éléments manipulés par la règle restent attachés à des éléments qui possèdent déjà un sens dans la fiction.

Une blessure, un serment, le vent, une réputation ou une relation ne sont pas d’abord des modificateurs.

Ils existent dans le monde fictionnel, puis deviennent mécaniquement présents parce qu’ils comptent.

La feuille littéraire peut prolonger cette continuité : elle ne convertit pas nécessairement le personnage en valeurs abstraites, elle conserve sous une forme manipulable des vérités qui ont déjà un sens dans le monde.

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

# 8. Implémentations et études de cas

Le framework peut être étudié à travers des implémentations complètes ou des prototypes plus ciblés.

## Glorantha Perspectives

**Glorantha Perspectives** constitue la première implémentation complète de référence.

Elle montre notamment comment :

- une grammaire de pertinence peut venir d’un univers particulièrement dense ;
- plusieurs Prismes peuvent rendre opérantes des relations différentes au réel ;
- des Facteurs Cadres peuvent traduire des vérités cosmologiques, sociales ou culturelles ;
- une économie comme la Jauge de Destin peut servir de filet de sécurité à la table ;
- le lore peut devenir une matière de jeu plutôt qu’un corpus consulté à côté des règles.

D’autres implémentations permettront de vérifier quelles parties du framework sont réellement invariantes et lesquelles appartiennent seulement aux premiers cas explorés.

Les études de cas pourront aussi montrer des usages volontairement plus légers ou atypiques de Resonance, notamment des Prismes à résultat autonome qui ne passent pas par une opposition de pools standard.

---

# Chantiers encore ouverts

Cette version clarifie l’architecture pédagogique, mais plusieurs points méritent encore une passe dédiée avant de remplacer le SRD publié :

- tester statistiquement la condition de domination avec différentes tailles de pools et différents Prismes ;
- challenger de nouveau la manière dont Exploit et Fiasco sont attribués à partir d’un résultat dominé ;
- challenger les différentes philosophies possibles de l’égalité et confirmer la place de la surenchère standard ;
- préciser le statut exact de l’échelle standard de résultat : invariant ou choix de design fortement recommandé ;
- documenter par des études de cas les Prismes à résultat autonome plutôt que d’en fixer prématurément une théorie générale ;
- préciser les conventions d’autorité possibles autour de la Jauge de Destin sans transformer son usage en automatisme ;
- tester la distinction pédagogique entre Facteurs Cadres, grammaire de pertinence et règles spécifiques d’une implémentation ;
- affiner les termes cognitif, diégétique, perspectiviste et ontologique ;
- ajouter des exemples complets de résolution aux Zooms Action, Séquence et Script ;
- tester la lisibilité du document auprès de lecteurs qui ne connaissent pas les versions précédentes de Resonance.

La progression recherchée est désormais :

> **découvrir → cadrer → remarquer → mettre en jeu → résoudre → interpréter → maintenir la cohérence → faire varier → concevoir → comprendre**

Et la proposition fondamentale du framework reste simple :

> **On peut jouer à Resonance tel quel.**
>
> **On peut aussi concevoir avec Resonance pour que le monde transforme les règles qui le font vivre.**