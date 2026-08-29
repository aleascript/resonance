# Resonance 0.5 — décisions stabilisées avant intégration

> **Statut : référence de stabilisation pour la réalisation de la 0.5.**  
> Cette note clôt les principaux arbitrages du chantier de conception mené dans `resonance-0.5-draft-fr.md` et `resonance-0.5-orientations-prismes-fr.md`. En cas de contradiction avec une formulation encore exploratoire du draft principal, **la présente note fait foi pour la passe d’intégration dans le SRD français**.
>
> La 0.5 reste travaillée en français en premier. La synchronisation anglaise viendra après stabilisation du SRD français.

---

# 1. Deux orientations, deux pools

Une Mise n’est pas favorable ou adverse en soi. Son orientation dépend du **Focus** et de l’**Intention** considérée.

> **Une Mise est favorable ou adverse relativement au Focus et à l’Intention considérée.**

Dans la configuration standard :

- les Mises qui poussent dans le sens de l’Intention forment une orientation ;
- celles qui poussent contre l’Intention forment l’autre ;
- ces deux orientations deviennent les deux pools ;
- **camp** reste un raccourci pratique lorsque des personnages, groupes ou forces identifiables portent ces orientations.

> **Les deux pools ne représentent pas toujours deux personnages. Ils représentent les deux sens dans lesquels la situation peut basculer pour le Focus.**

Le Focus sélectionne donc ce qui compte **et permet de voir dans quel sens cela compte**.

---

# 2. Un camp collectif peut réunir plusieurs Prismes

Partager une Intention ne signifie pas partager une perspective.

Un même camp ou une même orientation peut donc réunir des Mises portées par plusieurs perspectives et actualisées par plusieurs Prismes.

Dans ce cas :

1. les Mises restent réunies par leur orientation commune ;
2. elles sont traitées par sous-ensembles cohérents selon les Prismes des perspectives qui les portent ;
3. les sorties obtenues sont réunies au niveau de l’orientation.

> **Le camp détermine quelles contributions sont réunies. Le Prisme détermine comment chacune devient une contribution mécaniquement comparable.**

Dans l’état actuel de Resonance, les **Réussites** constituent le format de sortie commun permettant cette interopérabilité.

Cette observation doit être formulée avec prudence :

> **Lorsque plusieurs Prismes contribuent à une même résolution, leurs sorties doivent pouvoir devenir mécaniquement comparables au moment de leur agrégation. Resonance utilise actuellement les Réussites pour assurer cette comparabilité. D’autres contrats d’interopérabilité sont concevables, mais le framework ne les formalise pas encore.**

Il ne faut donc pas transformer prématurément la Réussite en sortie universelle obligatoire pour toute implémentation future de Resonance.

---

# 3. Adversité sans perspective : Prisme propre, Mode Miroir, Prisme standard

L’orientation et le Prisme répondent à deux questions distinctes :

> **L’orientation détermine de quel côté une vérité pèse. Le Prisme détermine comment cette vérité traverse l’incertitude pour devenir mécaniquement lisible.**

Lorsqu’une adversité n’est portée par aucune perspective propre, l’ordre de lecture recommandé est désormais le suivant.

## A. L’adversité possède sa propre logique

Avant de la considérer comme neutre, demander si le monde, le lieu, l’entité ou la situation lui donne déjà une logique mécaniquement opérante.

Si oui, elle utilise le Prisme correspondant.

## B. Mode Miroir

Le **Mode Miroir** devient un terme canonique de Resonance.

Ce n’est **pas un Prisme**. C’est une règle d’attribution : une adversité sans perspective propre est résolue avec le Prisme de la perspective depuis laquelle l’épreuve est vécue.

> **Le Miroir ne donne pas une vision du monde à l’obstacle. Il fait de la vision du protagoniste la manière dont l’ensemble de l’épreuve devient lisible.**

Le dépassement de soi reste un excellent exemple d’usage, mais **ne devient pas la définition universelle du Miroir**.

Le choix des situations où le Mode Miroir s’active relève du **game design de l’implémentation**. Resonance fournit le mécanisme et son sens ; chaque jeu peut préciser sa politique d’activation.

### Plusieurs protagonistes

- **Focus individuel** : chaque protagoniste peut rencontrer une résolution miroir correspondant à son propre Prisme ;
- **Focus collectif, Prisme partagé** : l’adversité peut refléter ce Prisme commun ;
- **Focus collectif, plusieurs Prismes** : il n’existe plus de perspective unique à refléter ; les protagonistes utilisent leurs Prismes respectifs et l’adversité abstraite utilise le **Prisme standard**.

> **Un miroir ne peut refléter une perspective unique que s’il existe une perspective unique à refléter.**

## C. Prisme standard

Le **Prisme standard** est le comportement par défaut d’une adversité sans perspective propre lorsque ni le monde ni le design ne justifient un autre traitement.

Dans la configuration standard :

- D6 ;
- pair = Réussite ;
- impair = aucune Réussite ;
- aucun effet supplémentaire.

Il constitue un **point zéro de lecture**, et non une philosophie artificiellement attribuée à l’adversité.

---

# 4. Mises incarnées : outil canonique optionnel

Les **Mises incarnées ne font plus partie de la configuration standard obligatoire de Resonance**.

Elles deviennent un **outil canonique optionnel de design diégétique**.

Un jeu Resonance peut décider de les intégrer par design. Lorsqu’un jeu ne tranche pas lui-même, une table peut également choisir de les employer ou non dans son contrat social.

Cette décision reconnaît une conséquence importante : si l’incarnation possède un effet mécanique connu, les participants peuvent naturellement apprendre à la rechercher. Ce comportement n’est pas nécessairement un détournement de la règle ; il devient une composante du gameplay choisi.

> **Une Mise incarnée ne s’active pas nécessairement comme une ressource abstraite : elle se reconnaît dans le geste de jeu. Mais si la règle est utilisée, son existence peut naturellement devenir une compétence de table.**

## Règle lorsqu’elle est activée

1. la Mise doit d’abord être pertinente et non redondante pour le Focus ;
2. son incarnation doit rendre immédiatement intelligible la vérité fictionnelle qu’elle exprime ;
3. **la Mise reste dans son pool** et est traitée normalement par son Prisme ;
4. son incarnation apporte **1 Réussite supplémentaire** à son orientation ;
5. au maximum **une Mise incarnée par orientation et par résolution** ;
6. le meneur peut incarner une Mise de l’adversité selon les mêmes règles.

Cette formulation est importante : retirer le dé d’une Mise incarnée pourrait modifier artificiellement le comportement d’un Prisme fondé sur une somme, des doubles, des motifs, des explosions ou d’autres relations entre dés.

> **L’incarnation ajoute une Réussite sans modifier la manière dont le Prisme traite le pool.**

La résolution reste globale : on ne cherche pas à établir après coup quelle Mise précise « a réussi » dans le tirage.

## Pourquoi la règle reste optionnelle

Si les deux orientations incarnent systématiquement une Mise, les Réussites supplémentaires tendent souvent à se neutraliser et l’incarnation peut devenir un rituel mécanique sans différence décisive suffisante.

Ce n’est pas nécessairement un défaut pour un jeu qui cherche précisément une pratique rituelle, performative ou fortement incarnée. Mais Resonance ne doit pas imposer cette esthétique à toutes les implémentations.

Une table qui constate que l’incarnation est devenue un automatisme sans valeur fictionnelle peut simplement jouer sans cette règle.

---

# 5. Synchronisation du temps et résonance du dispositif de table

La synchronisation du temps relève de **deux niveaux complémentaires**.

## Principe général

> **Le dispositif réel de la table peut parfois entrer en résonance avec une propriété de la fiction.**

Cette possibilité est générale, mais elle n’est pas le centre de Resonance. Elle a émergé tardivement en poussant le principe fiction → pertinence → mécanique et doit rester présentée comme une ouverture avancée du framework.

La 0.5 développe seulement deux familles canoniques :

- les Mises incarnées, optionnelles ;
- la synchronisation temporelle.

Le SRD ne doit pas devenir un catalogue de gestes immersifs, de supports ou de gimmicks.

## Facteurs Cadres

Un **Facteur Cadre** est l’un des mécanismes permettant à la fiction d’imposer ou d’autoriser une correspondance entre propriété fictionnelle et procédure réelle de table.

La synchronisation temporelle n’est cependant pas réductible aux seuls Facteurs Cadres : une hésitation devenue pertinente ou un Roi qui s’impatiente peuvent émerger directement de l’évolution de la scène.

## Temps accumulé : garde-fous

Le temps de réflexion des joueurs reste sans conséquence par défaut.

Le temps accumulé ne peut devenir fictionnel que si quelque chose dans la scène **attend, évolue ou réagit réellement** pendant la délibération.

> **On ne sanctionne pas la délibération. On laisse le monde continuer lorsqu’il avait une raison de continuer.**

Lorsque son évolution n’est pas déjà évidente, son effet devrait normalement devenir perceptible dans la fiction avant de devenir mécanique.

Le temps peut alors :

- faire apparaître une nouvelle Mise ;
- transformer une Mise existante ;
- changer le Cadre ;
- ou, si la situation change qualitativement, **transformer le Focus**.

---

# 6. Zoom, Focus collectif et non-redondance

Le choix d’un Focus individuel ou collectif ne doit pas servir à ajuster artificiellement la difficulté.

> **Le Zoom ne règle pas la difficulté. Il détermine quelles différences la fiction souhaite encore distinguer.**

Exemple : une expédition traverse une montagne abrupte.

Si chaque personnage est résolu individuellement, le froid, l’avalanche ou la corniche peuvent redevenir pertinents pour chacun parce que la fiction regarde plusieurs expériences distinctes.

Si le Focus devient collectif :

> **Le groupe parvient-il à traverser la montagne ?**

alors *Froid glacial* est une seule dimension de cette situation collective. Il n’a pas à être dupliqué artificiellement une fois par personnage.

> **Une Mise ne compte pas une fois par personnage. Elle compte une fois par dimension pertinente au Focus.**

La non-redondance continue de s’appliquer aux Mises favorables comme adverses.

Un groupe peut réellement bénéficier de plusieurs compétences, ressources ou perspectives différentes. Inversement, l’échelle collective peut faire apparaître des vérités adverses propres au groupe : protéger un blessé, avancer au rythme du moins expérimenté, franchir une corniche un par un, coordonner plusieurs personnes, etc.

Changer de Zoom change donc la **question**, pas seulement la taille des pools.

---

# 7. Le cadrage engage la table

Resonance doit distinguer clairement l’arbitrage fictionnel de l’arbitraire.

Une possibilité fermée par le monde, l’histoire, le scénario, une conséquence précédente ou un Facteur Cadre doit être fermée **avant** la résolution.

Inversement, si la table accepte réellement un Focus, ses issues doivent être admissibles.

> **Ce qui est fermé par la fiction doit être fermé avant le jet. Ce qui est réellement mis en résolution doit pouvoir arriver.**

Autrement dit :

> **Le cadrage engage la table.**

Si un Dragon ne peut pas encore être tué dans la fiction, la table ne doit pas accepter un Focus « Le tuons-nous ? » pour rétrograder ensuite une Victoire en simple égratignure.

Elle doit cadrer honnêtement ce qui reste ouvert : survivre, atteindre une faiblesse, le repousser, accomplir une étape nécessaire, etc.

Lorsque tuer le Dragon devient réellement possible et que ce Focus est accepté, la résolution doit pouvoir produire cette issue.

Cette règle complète le principe déjà validé :

> **Une résolution ne demande pas aux dés ce que la fiction sait déjà. Elle les fait intervenir là où la fiction reste ouverte.**

Resonance ne promet pas une difficulté numérique objective indépendante de tout arbitrage. Il peut en revanche rendre cet arbitrage **traçable** : Focus, Mises, Facteurs Cadres et conséquences importantes sont rendus visibles avant que l’incertitude tranche.

---

# 8. Matérialisation des Réussites : pas de procédure canonique ajoutée

La 0.5 ne fixe pas de procédure universelle pour matérialiser physiquement les Réussites à la table.

Dés mis de côté, objets, jetons, compteur numérique ou zone particulière de table peuvent être utiles selon les implémentations, mais cela relève de l’ergonomie et du support choisi.

Le SRD doit seulement préserver les besoins mécaniques réels des Prismes : lorsqu’un autre Prisme ou une interaction a encore besoin du tirage complet, celui-ci doit rester lisible jusqu’à la fin de cette interaction.

La Mise incarnée n’exige pas qu’un participant « attribue » physiquement une Réussite à un autre : une fois l’incarnation reconnue, sa Réussite supplémentaire appartient simplement au résultat de l’orientation.

---

# 9. État des questions après stabilisation

Les principaux arbitrages de la 0.5 sont maintenant considérés comme suffisamment stabilisés pour passer à la réalisation du SRD français.

Restent des **questions de recherche ou d’implémentation**, mais elles ne bloquent plus la 0.5 :

- quelles politiques précises d’activation du **Mode Miroir** seront choisies par les différents jeux Resonance ;
- quels autres contrats d’interopérabilité que les **Réussites** pourraient être explorés dans de futures implémentations ;
- quelles autres formes de résonance du dispositif de table pourraient émerger sans devenir un objectif central du framework.

Le critère directeur reste :

> **Le monde ne doit pas décorer la règle. La règle doit permettre à quelque chose du monde de devenir perceptible dans le geste de jeu.**
