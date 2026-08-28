# Resonance — prototype de refactor pédagogique du SRD

> **Document de travail.** Ce texte explore une nouvelle architecture pédagogique pour le SRD de Resonance. Il ne remplace pas encore le document publié et ne cherche pas à figer toute la terminologie théorique. Son objectif est d’abord de rendre Resonance jouable et compréhensible, puis de montrer comment il devient un framework de game design.
>
> Cette version abandonne la distinction entre « Resonance Core » et « Resonance Prismes ». Il n’y a qu’un seul framework : **Resonance**. Les Mises, le Focus, le Zoom, les Prismes, les Facteurs Cadres, la grammaire de pertinence et les autres outils décrits ici sont des concepts, propriétés ou points de variation à l’intérieur de ce framework.

## Resonance en une phrase

**Resonance est un framework de game design pour jeux de rôle dans lequel la fiction détermine ce qui entre dans la résolution et peut également déterminer comment cette résolution fonctionne.**

Il fournit en même temps une **configuration standard entièrement jouable** : il n’est donc pas nécessaire de concevoir son propre jeu pour utiliser Resonance.

On peut simplement jouer.

Ou on peut aller plus loin et faire résonner la résolution avec un monde, une culture, une cosmologie, un trope ou une perspective particulière.

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
7. **Lire la forme du résultat.**
8. **Interpréter ce résultat à partir de ce qui a été mis en jeu.**
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

Resonance utilise une feuille de personnage, mais celle-ci n’est pas organisée autour de niveaux, de classes ou de valeurs numériques à faire progresser.

Elle est essentiellement **littéraire et signifiante** : mots-clés, relations, états, objets, appartenances, convictions, symboles, blessures, serments, réputations ou autres éléments propres à l’univers de jeu.

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

## Le personnage et son espace de pertinence

La feuille décrit aussi une partie de l’**espace de pertinence** actuel du personnage : les vérités durables qui le constituent et que la fiction pourra éventuellement rendre pertinentes.

Cet espace n’est ni un niveau de puissance ni une liste de capacités activables.

Il décrit ce que le personnage est devenu : ce qu’il sait, ce qu’il croit, ce à quoi il appartient, ce qu’il aime ou déteste, ce qu’il porte, ce qu’il a subi, les liens qui l’engagent et les symboles qui ont un sens pour lui.

Un jeune guerrier peut par exemple commencer avec un espace de pertinence dominé par :

> *Clan* — *Maître* — *Devoir* — *Réputation* — *Obéissance*

Puis son histoire peut faire apparaître :

> *Compassion* — *Amour personnel* — *Doute* — *Vérité* — *Refus d’un ordre injuste*

Certaines vérités peuvent être ajoutées. D’autres disparaissent. D’autres encore se transforment :

> *Obéissance au maître* → *Doute envers le maître* → *Trahi par mon maître*

Le personnage ne gagne pas nécessairement une capacité.

> **Son espace de pertinence se transforme.**

Cette transformation est la progression du personnage dans Resonance.

Il n’existe pas de progression intrinsèque par niveaux, classes ou augmentation de caractéristiques : **le personnage évolue par les mots-clés et autres vérités signifiantes qui apparaissent, changent ou disparaissent au fil de la fiction.**

Cela ne signifie toujours pas qu’un mot-clé inscrit sur la feuille devient automatiquement une Mise.

La distinction fondamentale reste :

> **La fiction propose. Le Focus sélectionne. La Mise actualise.**

La feuille n’est qu’une mémoire structurée d’une partie de cette fiction, centrée sur le personnage.

Pour les vérités qu’elle conserve, on peut donc aussi dire :

> **La feuille propose ; le Focus sélectionne ; la Mise actualise.**

Mais une Mise peut tout aussi bien venir d’un adversaire, d’un lieu, d’un événement, d’une relation non inscrite, de l’environnement ou de toute autre vérité fictionnelle que le jeu et la table rendent pertinente.

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

Cette écriture n’a pas besoin d’être systématique. Beaucoup de conséquences restent locales à la scène ou au monde sans modifier directement le personnage.

Mais lorsqu’un changement devient durable et appartient désormais à ce que le personnage est, possède, croit, subit ou représente, la feuille peut en devenir la mémoire.

## Évoluer, c’est transformer son espace de pertinence

Dans Resonance, cette réécriture constitue la progression du personnage.

Un personnage n’accumule pas des niveaux ou des classes pour devenir une version quantitativement supérieure de lui-même.

**Il est vivant. Il évolue, progresse, change et se transforme parce que les vérités capables de peser pour lui changent.**

Le jeune guerrier précédemment défini par *Clan*, *Maître*, *Devoir*, *Réputation* et *Obéissance* peut rencontrer des situations qui font apparaître *Compassion*, *Amour*, *Doute* ou *Refus d’un ordre injuste*.

Il peut apprendre quelque chose et gagner un mot-clé. Il peut perdre un statut, un objet, une relation ou une conviction. Un mot-clé peut être reformulé parce que sa signification a changé.

Cette évolution peut représenter une augmentation de compétence lorsque la fiction le justifie, mais elle n’est pas réductible à une montée en puissance.

Devenir roi, être banni, tomber amoureux, perdre la foi, acquérir une dette, être marqué par le Chaos, gagner une réputation ou rompre avec son clan sont tous des changements mécaniquement importants s’ils modifient les vérités disponibles au personnage.

> **Progresser, dans Resonance, c’est transformer ce qui peut compter.**

Une conséquence passée peut ainsi devenir une future Mise si un nouveau Focus la rend pertinente.

La progression n’est donc pas extérieure à la boucle de résolution : elle en est l’une des formes de persistance.

Cela crée une continuité simple :

> **la fiction nourrit la feuille → la feuille conserve une partie de l’espace de pertinence → le Focus actualise certaines vérités en Mises → la résolution transforme la fiction → certaines transformations réécrivent l’espace de pertinence.**

On peut résumer la double fonction des Mises ainsi :

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

Resonance ne prévoit pas de progression par niveaux, classes ou augmentation chiffrée : l’évolution du personnage passe par la transformation de ses vérités signifiantes. Une implémentation peut organiser cette transformation à son rythme et avec ses propres procédures, mais elle reste attachée à ce que la fiction fait réellement devenir vrai du personnage.

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
- les relations entre plusieurs pools ;
- les supports utilisés ;
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

## Concevoir un Prisme

Un Prisme n’est pas d’abord un gimmick de dés.

Le point de départ est l’expérience fictionnelle, cognitive ou ontologique que le jeu veut rendre sensible.

### 1. Partir d’une relation au monde

Avant de choisir une mécanique, demandez ce qui caractérise réellement la perspective : accumulation, transcendance, intervention, équilibre, sacrifice, contamination, réciprocité, prédiction, symbiose, déterminisme, hasard ou toute autre logique propre au monde.

> **Quelle logique du réel doit devenir perceptible quand le joueur résout une incertitude ?**

### 2. Demander ce que le joueur doit ressentir ou remarquer

Un bon Prisme ne représente pas seulement une idée.

Il influence ce que le joueur espère, craint, surveille ou recherche au moment du tirage.

Le test peut se formuler ainsi :

> **Est-ce que jouer ce Prisme pousse le joueur à regarder le monde comme son personnage ?**

### 3. Traduire cette relation en opération mécanique

Une fois la logique identifiée, choisissez seulement ensuite ce qui peut la rendre sensible :

- pairs ou impairs ;
- sommes ;
- motifs ;
- annulations ;
- relances ;
- changement de taille de dés ;
- cartes, couleurs ou symboles ;
- interactions entre pools ;
- modifications de l’adversité ;
- ou une autre manière de matérialiser l’incertitude.

Le support vient après le sens qu’il doit produire.

### 4. Décider quelle forme de résultat le Prisme doit produire

Si plusieurs Prismes doivent participer à une même opposition, une sortie commune comme les Réussites peut être souhaitable.

Mais ce n’est pas une obligation universelle.

Un jeu léger peut parfaitement employer un Prisme produisant un résultat autonome si cela sert mieux l’expérience recherchée.

### 5. Vérifier que la mécanique n’est pas seulement décorée par le lore

Un Prisme n’est pas « les 6 explosent parce que c’est amusant ».

Les 6 explosent si cette propriété exprime quelque chose de la réalité vécue par le personnage et produit l’expérience recherchée à la table.

Un test utile consiste à retirer mentalement le thème : si la mécanique pourrait être reskinnée arbitrairement sans perdre quoi que ce soit de son fonctionnement ou de sa sensation, le lien entre Prisme et fiction mérite probablement d’être renforcé.

> **La mécanique n’est pas décorée par le lore : elle en devient une opération.**

### 6. Vérifier son coût cognitif

Un Prisme peut être étrange sans devenir opaque.

L’objectif n’est pas de déplacer l’attention depuis des modificateurs complexes vers une autre forme de manipulation technique tout aussi envahissante.

Le Prisme devrait idéalement rendre sa perspective plus sensible qu’il ne rend sa procédure encombrante.

### Quelques exemples pour ouvrir l’espace

Quelques exemples suffisent ici pour montrer que les Prismes peuvent varier radicalement. Une galerie plus large est proposée dans l’**Atelier de Prismes** en fin de document.

- **Prophétie :** le joueur annonce avant le tirage le nombre exact de Réussites qu’il pense obtenir. La résolution transforme la prédiction elle-même en engagement.
- **Symbiose :** une Réussite n’existe que lorsqu’un dé trouve un écho exact dans le pool adverse. On ne gagne pas en écrasant l’autre, mais en entrant en résonance avec lui.
- **Tisserand :** les Mises font piocher des cartes et les motifs de la main produisent le résultat. Le support change parce que la relation au hasard a changé.
- **Synergie :** certaines Réussites n’existent qu’à travers des correspondances entre alliés. La réussite devient une propriété du groupe plutôt que de l’individu.

Ces exemples ne constituent pas des recettes officielles à reprendre telles quelles.

Ils montrent seulement que l’espace de design ne se réduit pas à changer la probabilité d’obtenir une Réussite sur un D6.

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
- des conséquences accumulées dans la fiction.

Ces catégories peuvent elles-mêmes contenir d’autres catégories, mots-clés ou symboles.

La grammaire ressemble donc moins à une liste fermée qu’à une **cartographie sémantique** : des familles de sens qui permettent à la table de retrouver les vérités que le jeu veut rendre particulièrement visibles.

Deux jeux peuvent utiliser exactement le même Prisme et produire malgré tout des expériences très différentes parce qu’ils n’apprennent pas à la table à regarder les mêmes choses.

Inversement, deux personnages d’un même jeu peuvent partager une situation mais ne pas y rendre pertinentes les mêmes vérités.

La conception d’un jeu Resonance ne consiste donc pas seulement à écrire une procédure aléatoire.

Elle consiste à décider **ce que le jeu apprend aux joueurs à remarquer**.

Le choix des familles de Mises que le design rend naturellement visibles est ainsi l’un des principaux moyens de favoriser un type d’immersion plutôt qu’un autre.

La feuille de personnage peut devenir l’une des interfaces de cette grammaire : sa structure, ses mots-clés et ses symboles montrent au joueur quelles dimensions de son personnage méritent d’être regardées, sans garantir qu’elles seront pertinentes dans chaque Focus.

## Trope et pertinence

Un jeu peut produire un genre non seulement en donnant une structure mécanique à certaines actions ou situations, mais aussi en donnant une importance particulière aux **raisons** qui peuvent peser dans la fiction.

Les jeux Powered by the Apocalypse constituent un point de comparaison utile, à condition de ne pas transformer cette comparaison en opposition caricaturale.

De nombreux PbtA font émerger leur genre en donnant une structure mécanique privilégiée à certains déclencheurs fictionnels, conséquences, Playbooks ou archétypes.

Resonance peut agir à un autre niveau : il peut laisser l’espace des actions largement ouvert tout en orientant les familles de vérités que le jeu apprend à considérer comme significatives.

Le joueur n’a donc pas nécessairement besoin d’accomplir une forme d’action prédéfinie pour produire le trope.

Le trope peut émerger parce que le jeu lui apprend **quoi regarder, quelles relations reconnaître et quelles raisons laisser peser** dans ses propres actions.

Cela permet notamment de jouer un trope de manière moins archétypale : deux personnages peuvent appartenir au même genre sans être enfermés dans la même forme de comportement, parce que le trope agit comme une écologie de pertinence plutôt que comme un catalogue d’actions attendues.

Cette différence n’implique pas que Resonance soit « plus libre » en toute circonstance qu’un PbtA.

Elle indique simplement un levier de design différent : **orienter ce qui compte sans nécessairement prescrire ce que le personnage doit tenter.**

## Concevoir l’évolution du personnage

Puisque l’évolution passe par les mots-clés et autres vérités persistantes, concevoir la progression d’un jeu Resonance ne consiste pas à dessiner une courbe de niveaux.

Le game designer doit plutôt décider :

- quelles familles de vérités peuvent apparaître sur la feuille ;
- comment une expérience peut en créer une nouvelle ;
- quand une vérité peut être reformulée, remplacée ou supprimée ;
- qui possède l’autorité pour écrire ces transformations ;
- quels changements nécessitent une résolution, une conséquence particulière ou simplement un événement fictionnel établi ;
- comment le jeu rend visibles les transformations importantes sans transformer chaque scène en procédure de progression.

Cette progression peut être lente ou rapide, dramatique ou discrète, mais elle reste qualitative.

> **La grammaire de pertinence définit le langage possible de l’évolution.**
>
> **L’histoire du personnage écrit progressivement son espace de pertinence dans ce langage.**

Deux personnages ayant commencé avec des feuilles similaires peuvent ainsi diverger fortement sans qu’aucun d’eux soit « de niveau supérieur » à l’autre.

Le design de progression devient donc un design de **transformation du regard et de l’identité**, autant qu’un design de compétence.

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
- sa manière de faire évoluer les personnages ;
- ses outils de cohérence ou de régulation ;
- ses manières d’interpréter les conséquences.

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
13. **Comment les mots-clés du personnage peuvent-ils apparaître, se transformer et disparaître ?**
14. **Quels mécanismes maintiennent la cohérence lorsque la table interprète librement la pertinence ?**
15. **Quels garde-fous empêchent la recherche de Mises de redevenir une optimisation mécanique ?**

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

# 8. Resonance en pratique : deux bornes de l’espace de design

Un framework devient réellement intéressant lorsqu’il peut sortir de sa propre page.

Les deux premières études de cas de Resonance occupent volontairement des positions très différentes.

**Glorantha Perspectives** teste la profondeur : un univers dense, plusieurs cosmologies, des relations différentes au réel et une forte continuité entre lore et mécanique.

**Resonance: Scooby-Doo** teste la compression : un trope immédiatement identifiable, une création de personnage en quelques mots-clés, des Prismes très caractérisés et une infrastructure minimale.

Les deux ensemble montrent que Resonance n’est ni réservé aux univers encyclopédiques, ni limité aux jeux narratifs légers.

Ils donnent deux bornes utiles de son espace de design.

## Glorantha Perspectives — le test de profondeur

**Glorantha Perspectives** constitue la première implémentation complète de référence.

Dans cette implémentation, les Prismes sont appelés **visions du monde**, afin de reprendre un vocabulaire propre à Glorantha.

Il s’agit du même concept de design : seul le vocabulaire de l’implémentation change.

Glorantha est particulièrement adapté à Resonance parce que ses différentes cosmologies ne sont pas de simples opinions décoratives ajoutées au-dessus d’une physique mécanique unique.

La manière d’habiter le monde peut changer la manière dont ce monde devient mécaniquement accessible.

### Théisme

Les nombres pairs sont des Réussites.

Les 6 peuvent produire des effets extraordinaires et redonner une possibilité à certains résultats normalement échoués.

**La foi transforme la signification de l’échec.**

### Animisme

Les nombres pairs sont des Réussites.

Des motifs parmi les dés normalement échoués peuvent devenir significatifs.

**Le monde reste peuplé de relations et de présences même dans ce qui semblait ne rien produire.**

### Logique

Les dés ne sont plus lus comme des succès indépendants.

Leurs valeurs sont agrégées selon une règle de calcul.

**L’incertitude devient calcul.**

### Mysticisme

Certains résultats peuvent annuler les Réussites apparentes d’un adversaire.

**La victoire matérielle peut devenir secondaire face à une réalité plus profonde.**

### Pensée draconique

Les Mises utilisent des D8 et des motifs particuliers peuvent faire apparaître des choix entre accomplissement matériel et transformation spirituelle.

**Le résultat lui-même fait émerger la tension entre Wyrm et Utuma.**

### L’influence lunaire, l’Illumination et les Quêtes héroïques

Glorantha Perspectives pousse aussi Resonance au-delà d’une simple liste de cinq Prismes.

La Lune Rouge peut modifier la manière dont certains Prismes sont vécus.

L’Illumination peut devenir une transformation réellement vécue par le joueur dans la mécanique.

Les Quêtes héroïques peuvent aller jusqu’à permettre aux personnages de chercher, découvrir ou créer une nouvelle manière de comprendre le réel.

La mécanique ne se contente alors plus d’illustrer le lore.

**Elle permet au joueur de penser à travers lui.**

Glorantha Perspectives montre notamment comment :

- une grammaire de pertinence peut venir d’un univers particulièrement dense ;
- plusieurs Prismes peuvent rendre opérantes des relations différentes au réel ;
- des Facteurs Cadres peuvent traduire des vérités cosmologiques, sociales ou culturelles ;
- une économie comme la Jauge de Destin peut servir de filet de sécurité à la table ;
- le lore peut devenir une matière de jeu plutôt qu’un corpus consulté à côté des règles.

> **Le système ne se contente pas de décrire le monde. Il fait vivre au joueur le monde à travers sa propre logique.**

## Resonance: Scooby-Doo — le test de compression

À l’autre extrême, **Resonance: Scooby-Doo** est un jeu léger conçu rapidement pour voir jusqu’où le framework peut être comprimé sans perdre son idée centrale.

Ici, il n’y a pas besoin d’un univers métaphysique profond.

Le matériau de game design est un trope extrêmement lisible : une bande de jeunes, un van, un monstre probablement truqué, des personnages caricaturaux mais immédiatement jouables, une enquête absurde et une poursuite qui tourne au chaos.

### Une création de personnage par mots-clés

Les joueurs choisissent un archétype, parcourent quelques mots-clés suggérés, gardent ceux qui les font rire, rayent ceux qui ne leur plaisent pas et en inventent d’autres.

Quelques exemples :

- **Le Beau Gosse au plan foireux** : autorité naturelle, obsession des pièges complexes, « séparons-nous en deux groupes », confiance disproportionnée dans ses idées ;
- **L’Intello** : scepticisme absolu, encyclopédie sur pattes, myopie sévère, déduction implacable ;
- **La Belle Nunuche** : danger-prone, cri perçant, sac à main improbable, capacité à découvrir des choses importantes par accident ;
- **Le Duo Maladroit** : faim, peur, fuite, langage partagé et capacité presque surnaturelle à produire du chaos.

Même le **Van** possède une petite feuille commune : peinture psychédélique, moteur capricieux, réserve secrète de snacks, équipement douteux ou toute autre vérité capable de revenir dans la fiction.

Cette création illustre directement la feuille littéraire de Resonance : les mots-clés ne définissent pas ce que le personnage a le droit de faire, ils donnent au joueur une matière facilement mémorisable qui pourra devenir pertinente.

### Le trope comme grammaire de pertinence

Scooby-Doo montre aussi comment un jeu peut produire un trope sans imposer à chaque personnage une liste d’actions standardisées.

Le jeu rend naturellement visibles :

- la peur ;
- l’appétit ;
- les indices ;
- les plans trop compliqués ;
- les séparations du groupe ;
- les coïncidences absurdes ;
- le masque derrière le monstre ;
- les relations et gimmicks propres à chaque membre de l’équipe.

Les joueurs restent libres de tenter ce qu’ils veulent, mais le jeu leur apprend rapidement quelles raisons appartiennent à ce type de fiction.

### Des Prismes très différents pour un jeu très simple

Scooby-Doo montre surtout qu’un Prisme n’a pas besoin d’une architecture lourde pour être fortement caractérisé.

#### Le Duo Maladroit : tirage sans opposition

Sammy et Scooby ne jouent même pas nécessairement contre un pool adverse.

Ils rassemblent chacun les Mises qui comptent — peur, faim, complicité, environnement — puis lancent chacun leur propre pool.

On compte normalement les résultats pairs de Sammy et ceux de Scooby, puis on additionne leurs Réussites.

Mais leur lien possède une traduction mécanique supplémentaire : **chaque paire croisée de résultats impairs identiques entre leurs deux tirages produit une Réussite supplémentaire au total.**

Un `3` de Sammy ne résonne donc pas avec un autre `3` de Sammy. Il faut qu’un `3` apparaisse aussi dans le tirage de Scooby. De même pour les `1` ou les `5`.

Ils restent deux personnages avec deux pools distincts, mais leur maladresse devient plus efficace lorsqu’ils sont ensemble.

La règle les pousse donc mécaniquement à reproduire leur trope le plus naturel : **Sammy et Scooby ont intérêt à rester côte à côte.**

Le résultat décrit directement **l’ampleur du chaos qu’ils produisent**.

Plus ils obtiennent de Réussites, plus leur fuite peut devenir spectaculairement efficace malgré eux : renverser une étagère, révéler un passage secret, faire tomber le monstre dans son propre piège ou détruire sa cachette.

Ce cas est important pour Resonance parce qu’il montre un **Prisme à résultat autonome**.

Il n’existe pas ici de nécessité théorique à forcer chaque implémentation dans la chaîne « deux pools → Réussites comparables → opposition ».

La légèreté du jeu rend cette exception non seulement acceptable, mais naturelle.

#### L’Intello : la logique la plus classique

L’Intello utilise au contraire une opposition beaucoup plus proche de la configuration standard.

Elle cherche des indices, confronte des hypothèses au monde et obtient une résolution lisible de manière presque rationnelle.

Le contraste avec les autres personnages fait partie de son identité.

#### Le Beau Gosse : le décalage

Son Prisme fait résonner ses plans de travers.

Un plan peut fonctionner exactement comme prévu mais sur la mauvaise cible ; un échec apparent peut déclencher par accident le mécanisme qui capture réellement le monstre.

Le Prisme ne cherche pas seulement à déterminer « réussit-il ? ».

Il transforme la manière dont le monde répond à sa confiance dans ses propres plans.

Ce Prisme reste toutefois à rechallenger. Le trope du Beau Gosse ne consiste pas seulement à produire des plans qui tournent de travers : il devrait aussi trouver **un intérêt mécanique à séparer le groupe**. Le présent refactor ne cherche pas encore à figer la règle qui produira cette incitation.

#### La Belle Nunuche : l’accident significatif

Elle peut chercher des motifs agréables, des suites ou des correspondances particulières plutôt que simplement maximiser des Réussites.

Un motif peut déclencher un « Oops » scénaristique : elle s’appuie sur une bibliothèque et ouvre le passage secret, appuie sur le mauvais bouton et coupe le champ de force, ou attire involontairement l’attention du monstre au moment parfait.

Le jeu lui apprend donc à rechercher une forme particulière de hasard cohérente avec son trope.

### Pourquoi cette implémentation compte

Scooby-Doo n’a pas la profondeur ontologique de Glorantha Perspectives.

Et c’est précisément pour cela qu’il est important.

Il démontre que Resonance peut fonctionner lorsque :

- le lore tient en quelques paragraphes ;
- la création de personnage prend quelques minutes ;
- les mots-clés sont volontairement comiques ;
- les Prismes peuvent être asymétriques ;
- certains résultats sont autonomes ;
- la fidélité recherchée porte davantage sur le rythme et le trope que sur une cosmologie complexe.

Glorantha teste jusqu’où Resonance peut **descendre dans la profondeur d’un monde**.

Scooby-Doo teste jusqu’où il peut **remonter vers la simplicité sans devenir générique**.

Ensemble, ils montrent que l’espace entre les deux est largement ouvert.

---

# 9. Atelier de Prismes

Cette section n’est **pas** une liste de règles recommandées ni un catalogue de Prismes « officiels » à intégrer tels quels dans un jeu.

C’est un **atelier de game design**.

Les propositions qui suivent sont volontairement expérimentales. Certaines sont élégantes, d’autres excessives, certaines demanderont des tests statistiques ou ergonomiques, et plusieurs peuvent se révéler mauvaises dans un jeu concret.

Leur fonction est différente : **explorer ce que Resonance permet de penser lorsqu’on prend au sérieux l’idée qu’une relation au monde peut transformer la résolution elle-même.**

Le bon usage de cet atelier n’est donc pas :

> *Quel Prisme vais-je copier ?*

mais :

> **Qu’est-ce que cet exemple m’apprend sur l’espace de design ?**

## Transformer la relation à la prédiction et aux probabilités

### Le Prisme de la Prophétie — l’Engagement

Avant de lancer, le joueur annonce le nombre exact de Réussites qu’il pense obtenir.

Tomber exactement juste produit un résultat exceptionnel ; manquer la prédiction transforme l’épreuve en échec ou en conséquence forte selon le jeu.

L’intérêt n’est pas seulement probabiliste.

Le joueur peut être amené à **réduire volontairement le nombre de Mises** qu’il engage pour rendre sa propre prophétie plus crédible.

Le jeu transforme ainsi la connaissance supposée du futur en comportement présent.

**Diégèses possibles :** oracle, prescience, mage temporel, calculateur capable de s’engager sur une prédiction.

### Le Prisme de l’Équilibre — la Dualité

Le joueur divise ses Mises en deux ensembles distincts, par exemple des dés blancs et noirs.

La qualité du résultat dépend moins de la somme brute que de la proximité entre les deux ensembles : l’équilibre devient mécaniquement désirable.

Un résultat peut être d’autant plus pur que les deux forces restent proches.

**Diégèses possibles :** philosophie du juste milieu, forces élémentaires complémentaires, discipline fondée sur le Yin et le Yang, équilibre entre deux natures du personnage.

## Transformer la relation à l’adversité

### Le Prisme de la Symbiose — le Mimétisme

Un dé du joueur ne devient une Réussite que s’il affiche exactement la même valeur qu’un dé de l’adversité.

On ne gagne donc pas en produisant simplement davantage de succès indépendants.

On gagne en trouvant **une forme de correspondance avec ce à quoi l’on fait face**.

**Diégèses possibles :** télépathie, diplomatie absolue, assimilation alien, hacking neuronal, magie fondée sur l’accord ou la copie.

### Le Prisme du Parasite — la Corruption

Certains résultats faibles du joueur lui permettent de prendre, déplacer ou échanger des éléments du pool adverse.

La force du personnage vient alors littéralement de ce qu’il vole à l’autre.

**Diégèses possibles :** nécromancie, corruption, malédiction, organisme parasite, pouvoir qui se nourrit de la vigueur ennemie.

Ce type de Prisme montre qu’un effet peut toucher la **relation entre pools**, pas seulement la lecture interne d’un dé.

## Transformer la nature du support

### Le Prisme du Tisserand — les Cartes

Chaque Mise permet de piocher une carte plutôt que de lancer un dé.

Des combinaisons — paires, suites, familles ou couleurs — produisent des Réussites ou des informations supplémentaires.

La couleur majoritaire pourrait par exemple orienter la nature de la conséquence : blessure, dette, révélation, relation ou autre dimension définie par le jeu.

**Diégèses possibles :** manipulateur du destin, illusionniste, culture lisant le réel comme une trame, magie divinatoire.

Le Tisserand pose une question utile : **quand le support lui-même devient-il une partie de la perspective ?**

### Le Prisme de l’Ascension — dés variables

Les Mises peuvent justifier des dés de tailles différentes.

Un exploit pourrait dépendre non seulement de valeurs élevées mais de la capacité à faire apparaître une progression entre plusieurs tailles de dés, par exemple une suite construite avec D4, D6, D8 ou D12.

Le personnage ne cherche alors pas seulement à « faire haut » : il cherche à produire une forme de dépassement.

**Diégèses possibles :** mutation, transformation permanente, héros brisant ses limites, entité dont la puissance change de forme plutôt que d’augmenter simplement.

## Transformer la relation à la solitude

### Les Prismes de l’Isolement — la Singularité

Ici, la présence d’alliés réduit la puissance du personnage ou brouille sa manière d’agir.

#### La Dilution

Pour chaque allié directement impliqué dans la scène, le personnage doit perdre un dé, neutraliser une Réussite ou subir une autre forme de dilution définie par le jeu.

#### L’Éveil du Vide

À l’inverse, lorsqu’il agit totalement seul, certains échecs peuvent être relancés, devenir des Réussites ou annuler des Réussites adverses.

**Diégèses possibles :**

- le Berserker maudit qui doit retenir sa rage lorsqu’un allié se trouve à portée ;
- l’Assassin de l’Ombre dont la magie exige le silence d’aucune autre âme ;
- le Gardien du Secret dont le pouvoir cesse de fonctionner lorsqu’un témoin est présent.

Ces propositions montrent qu’un Prisme peut modeler **la composition même de la scène que le joueur préfère rechercher**.

## Transformer la relation au groupe

### Les Prismes de la Synergie — la Gestalt

Ici, la réussite ne peut pas être entièrement individuelle.

#### La Résonance Croisée

Les dés pairs ordinaires ne suffisent plus.

Une Réussite n’existe que lorsqu’un dé du personnage trouve exactement la même valeur dans le tirage d’un allié.

Le groupe devient mécaniquement la condition de possibilité du succès.

#### Le Réseau

La taille du pool peut rester fixe, mais chaque allié présent permet de transformer une catégorie d’échec en Réussite, de modifier une parité ou d’ouvrir un motif supplémentaire.

**Diégèses possibles :**

- conscience collective ;
- jumeaux télépathes ;
- intelligences artificielles en réseau ;
- phalange militaire où chacun dépend du bouclier de son voisin ;
- chœur magique nécessitant une harmonisation réelle.

## Transformer la collaboration en dépendance toxique

### Les Prismes Parasitaires — la Dépendance

La collaboration existe, mais elle est asymétrique : un personnage gagne parce qu’il retire quelque chose aux autres.

#### Le Drain

Le personnage obtient des Réussites automatiques ou des dés supplémentaires en les prenant physiquement dans les pools de ses alliés.

#### Le Bouclier humain

Certains résultats protègent le personnage de sa propre Défaite mais détruisent en échange la meilleure Réussite d’un allié proche.

Sans allié disponible, le même résultat peut se retourner contre lui.

**Diégèses possibles :**

- vampire psychique ;
- nécromancien ;
- chef toxique qui s’approprie la réussite de ses subordonnés ;
- noble arrogant dont le statut protège toujours sa personne au prix de ceux qui le servent.

Ici, le Prisme ne simule pas simplement une personnalité désagréable.

Il fait ressentir mécaniquement **la structure relationnelle toxique** que le personnage impose au groupe.

## Ce que cet atelier cherche à montrer

Ces prototypes ne prétendent pas être équilibrés entre eux.

Ils ne sont même pas obligés d’être compatibles dans un même jeu.

Ils montrent plusieurs directions possibles :

- transformer la probabilité ;
- transformer ce que le joueur cherche dans un tirage ;
- transformer la relation à l’adversité ;
- transformer la relation aux alliés ;
- transformer la composition souhaitable d’une scène ;
- transformer le support ;
- transformer la forme même du résultat.

Scooby-Doo ajoute désormais une autre direction : **un Prisme peut parfois produire un résultat autonome sans pool adverse si cette structure sert mieux le jeu.**

L’Atelier ne définit donc pas les limites de Resonance.

Il aide à les chercher.

---

# Chantiers encore ouverts

Cette version cherche désormais à contenir l’ensemble de la matière qui devrait survivre dans le futur SRD cible, mais plusieurs points restent à challenger avant de remplacer le document publié :

- tester statistiquement la condition de domination avec différentes tailles de pools et différents Prismes ;
- challenger de nouveau la manière dont Exploit et Fiasco sont attribués à partir d’un résultat dominé ;
- challenger les différentes philosophies possibles de l’égalité et confirmer la place de la surenchère standard ;
- préciser le statut exact de l’échelle standard de résultat : invariant ou choix de design fortement recommandé ;
- utiliser Scooby-Doo et d’autres études de cas pour comprendre les Prismes à résultat autonome plutôt que d’en fixer prématurément une théorie générale ;
- rechallenger le Prisme du Beau Gosse dans Scooby-Doo afin que sa mécanique l’incite organiquement à séparer le groupe, sans figer cette solution dans le refactor actuel ;
- préciser les conventions d’autorité possibles autour de la Jauge de Destin sans transformer son usage en automatisme ;
- tester la distinction pédagogique entre Facteurs Cadres, grammaire de pertinence et règles spécifiques d’une implémentation ;
- affiner les termes cognitif, diégétique, perspectiviste et ontologique ;
- ajouter des exemples complets de résolution aux Zooms Action, Séquence et Script ;
- relire et tester les prototypes de l’Atelier de Prismes comme objets de game design, sans chercher à les normaliser artificiellement ;
- tester la lisibilité du document auprès de lecteurs qui ne connaissent pas les versions précédentes de Resonance.

La progression recherchée est désormais :

> **découvrir → cadrer → remarquer → mettre en jeu → résoudre → interpréter → maintenir la cohérence → faire varier → concevoir → comprendre → observer des implémentations → explorer l’espace de design**

Et la proposition fondamentale du framework reste simple :

> **On peut jouer à Resonance tel quel.**
>
> **On peut aussi concevoir avec Resonance pour que le monde transforme les règles qui le font vivre.**