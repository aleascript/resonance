# Resonance 0.5 — orientations, multi-Prismes et adversité sans perspective

> **Statut : clarification de conception stabilisée pour intégration au SRD 0.5.**  
> Cette note complète `resonance-0.5-draft-fr.md` et la note de stabilisation `resonance-0.5-stabilisation-fr.md`. Elle formalise quatre points liés : pourquoi la configuration standard produit deux pools, comment un même camp peut réunir plusieurs Prismes, comment leurs sorties s’agrègent, et comment traiter une adversité sans perspective propre.

---

# 1. Du Focus aux deux orientations

Une résolution commence par une **Intention** et un **Focus**.

Le Focus ne sélectionne pas seulement les vérités pertinentes. Il permet également de comprendre **dans quel sens chacune de ces vérités pèse pour la question posée**.

Une même vérité peut changer d’orientation selon le Focus.

> *Pluie battante*

peut être adverse pour :

> *Parvenons-nous à franchir le col avant la nuit ?*

mais favorable pour :

> *Parvenons-nous à semer nos poursuivants ?*

> **Une Mise est favorable ou adverse relativement au Focus et à l’Intention considérée.**

Dans la configuration standard :

- les vérités qui poussent dans le sens de l’Intention forment une orientation ;
- les vérités qui poussent contre l’Intention forment l’autre ;
- les Mises de chacune de ces orientations forment un pool.

> **Les deux pools ne représentent pas nécessairement deux personnages ou deux volontés. Ils représentent les deux sens dans lesquels la situation peut basculer pour le Focus.**

## Quand parler de camps ?

Lorsque les orientations sont portées par des personnages, groupes ou forces identifiables, **camp** reste un mot naturel et pratique.

Mais une montagne, un climat, une blessure ou une distance n’ont pas besoin d’être personnifiés pour justifier un second pool.

Le mot **orientation** explique l’architecture. Le mot **camp** reste un raccourci de table.

> **Le Focus sélectionne ce qui compte et permet de voir dans quel sens cela compte.**

La formule canonique peut rester :

> **La fiction propose. Le Focus sélectionne. La Mise actualise.**

---

# 2. Orientation et Prisme sont deux questions différentes

Deux décisions ne doivent pas être confondues :

1. **Dans quel pool cette Mise entre-t-elle ?**  
   Cela dépend de son orientation relativement au Focus.
2. **Comment cette Mise devient-elle mécaniquement lisible ?**  
   Cela dépend du Prisme de la perspective qui la porte, ou du Prisme que le jeu attribue à son actualisation.

> **L’orientation détermine de quel côté une vérité pèse. Le Prisme détermine comment cette vérité traverse l’incertitude pour devenir mécaniquement lisible.**

Un pool est donc d’abord un **regroupement sémantique de Mises orientées du même côté**. Il n’a pas besoin d’être homogène du point de vue des Prismes.

---

# 3. Un camp peut réunir plusieurs Prismes

Partager une Intention ne signifie pas partager une perspective.

Si plusieurs protagonistes contribuent à la même Intention avec des perspectives différentes, leurs Mises restent dans le même pool par orientation, mais elles sont traitées selon leurs Prismes respectifs.

Exemple : un groupe transporte le corps d’un roi jusqu’au sommet d’une montagne avant la tempête.

L’orientation favorable peut comprendre :

- trois Mises portées par un théiste ;
- deux Mises portées par un animiste ;
- une Mise portée par un mystique.

On résout chaque sous-ensemble avec son Prisme, puis on réunit les sorties au niveau de l’orientation.

> **Le camp détermine quelles contributions sont réunies. Le Prisme détermine comment chacune devient une contribution mécaniquement comparable.**

Cette règle évite d’imposer artificiellement :

- le Prisme majoritaire ;
- le Prisme d’un leader ;
- un Prisme arbitrairement choisi pour tout le groupe ;
- une moyenne ou un mélange sans sens fictionnel.

Si la fiction établit qu’une perspective domine réellement l’action collective, un jeu peut le représenter. Ce devient alors une propriété de la situation, pas une règle générale de départage.

> **Partager une Intention ne signifie pas partager une perspective.**

---

# 4. Interopérabilité entre Prismes

Dans l’état actuel de Resonance, les différents Prismes peuvent contribuer à une même résolution parce qu’ils produisent une sortie commune : les **Réussites**.

Il faut néanmoins distinguer l’observation actuelle du principe architectural plus général.

> **Lorsque plusieurs Prismes contribuent à une même résolution, leurs sorties doivent pouvoir devenir mécaniquement comparables au moment de leur agrégation.**

Resonance utilise actuellement les **Réussites** pour assurer cette comparabilité.

D’autres contrats d’interopérabilité sont concevables, mais le framework ne les formalise pas encore. La Réussite ne doit donc pas être présentée comme une sortie universelle démontrée pour toute implémentation future.

Un jeu dont les Prismes ne produisent pas de sorties directement comparables doit définir lui-même comment plusieurs perspectives peuvent coopérer dans une même orientation.

---

# 5. Quel traitement pour une adversité sans perspective propre ?

Une orientation adverse peut être composée de vérités comme :

- *paroi verticale* ;
- *froid extrême* ;
- *terrain instable* ;
- *vent violent* ;
- *fatigue accumulée* ;
- *distance à parcourir*.

Ces vérités produisent bien une opposition, mais elles ne possèdent pas nécessairement une perspective sur le monde.

Trois cas doivent être distingués, dans cet ordre.

## A. L’adversité possède sa propre logique

Avant de considérer une adversité comme neutre, demander si le monde lui donne déjà une logique mécaniquement signifiante.

Si oui, elle utilise le Prisme correspondant.

Exemples gloranthiens :

- gravir **Kerofin** peut appeler une logique théiste ;
- une opposition dans le **Monde des Esprits** peut relever de la logique de ce monde ;
- un lieu mythique, une institution magique ou une réalité cosmologique peut imposer sa propre manière d’actualiser l’incertitude.

> **Avant de considérer une adversité comme neutre, demandez si le monde lui donne déjà une logique capable de devenir mécaniquement opérante.**

## B. Mode Miroir

Le **Mode Miroir** devient un terme canonique de Resonance.

Ce n’est **pas un Prisme**. Il n’introduit aucune nouvelle logique de lecture : il détermine quel Prisme doit être appliqué à une adversité qui ne possède pas de perspective propre.

En Mode Miroir, l’adversité utilise le Prisme de la perspective depuis laquelle l’épreuve est vécue.

Cela ne signifie pas qu’une montagne « pense comme un mystique » ou qu’un climat devient théiste.

> **Le Miroir ne donne pas une vision du monde à l’obstacle. Il fait de la vision du protagoniste la manière dont l’ensemble de l’épreuve devient lisible.**

Le **dépassement de soi** reste un excellent exemple d’usage hérité de Glorantha Perspectives, mais il ne constitue pas une définition universelle.

Le choix des scènes ou des situations où le Mode Miroir s’active relève du **game design de l’implémentation**. Resonance fournit le mécanisme et son sens ; chaque jeu peut préciser sa politique d’activation.

## C. Prisme standard

Lorsque l’adversité ne possède pas de perspective propre et qu’aucun choix de design ne justifie le Mode Miroir, elle utilise par défaut le **Prisme standard**.

Dans la configuration standard :

- D6 ;
- pair = Réussite ;
- impair = aucune Réussite ;
- aucun effet supplémentaire.

Le Prisme standard représente ici un **point zéro de lecture**, non une philosophie artificiellement attribuée à l’obstacle.

Il est donc le comportement par défaut des adversités sans perspective propre.

---

# 6. Mode Miroir avec plusieurs protagonistes

Le Miroir reste simple tant qu’une perspective clairement identifiable porte l’épreuve.

## Focus individuel

Si la fiction s’intéresse à la manière dont chaque protagoniste traverse personnellement l’épreuve, chacun peut être résolu séparément.

Chaque protagoniste utilise son propre Prisme pour ses Mises, et l’adversité peut utiliser ce même Prisme en Mode Miroir.

La même montagne peut donc produire plusieurs résolutions différentes parce que la fiction regarde plusieurs expériences subjectives distinctes.

## Focus collectif, Prisme partagé

Si le groupe poursuit une Intention collective et partage le même Prisme pertinent, l’adversité peut utiliser ce Prisme commun en Mode Miroir.

## Focus collectif, Prismes multiples

Si plusieurs Prismes contribuent à la même orientation protagoniste, il n’existe plus de perspective unique à refléter.

Les contributions protagonistes sont traitées selon leurs Prismes respectifs, puis leurs sorties sont réunies.

L’adversité sans perspective propre utilise alors le **Prisme standard**.

> **Un miroir ne peut refléter une perspective unique que s’il existe une perspective unique à refléter.**

Une logique propre au monde ou à l’adversité reste prioritaire sur ce défaut.

---

# 7. Ce que nous ne généralisons pas depuis Glorantha Perspectives

La formulation historique de Glorantha Perspectives rapprochait :

- le **Miroir** du dépassement de soi ;
- l’**Agnostique / Monde médian** des enjeux mineurs ou peu émotionnels.

Le premier rapprochement reste un exemple utile.

Le second ne doit pas devenir une règle générique de Resonance.

La distinction conceptuelle n’est pas :

> *enjeu important = Miroir*  
> *enjeu mineur = Standard*

mais :

> **la perspective du protagoniste doit-elle aussi transformer la lecture de l’adversité ?**

Si un jeu veut que ce soit le cas dans certaines situations, il active le Mode Miroir selon sa propre politique de design.

Sinon, le Prisme standard s’applique.

---

# 8. Architecture résultante

La chaîne de responsabilités devient :

> **fiction → Intention → Focus → orientations favorables / adverses → Mises → perspectives qui les portent → Prismes applicables → incertitude → sorties mécaniques comparables → agrégation par orientation → comparaison → interprétation → fiction transformée**

Cette architecture permet de ne pas confondre :

- l’origine fictionnelle d’une Mise ;
- son orientation pour le Focus ;
- la perspective qui la porte ;
- le Prisme qui la traite ;
- le format de sortie permettant l’agrégation.

Une blessure appartient au personnage mais peut alimenter l’orientation adverse.

Une tempête n’appartient à aucun adversaire personnifié mais peut alimenter l’orientation adverse.

Une montagne sacrée peut alimenter l’orientation adverse **et** lui imposer une logique cosmologique propre.

Un obstacle neutre utilise le Prisme standard.

Un obstacle en Mode Miroir utilise le Prisme d’une perspective identifiée par le design.

Un groupe peut partager une même orientation tout en faisant contribuer plusieurs Prismes différents à son résultat collectif.

> **Les orientations appartiennent au Focus. Les Prismes appartiennent aux perspectives qui traversent ces orientations.**

---

# 9. Intégration dans le SRD

Lors de la réalisation du SRD 0.5 français :

- expliquer dans la section **Mises** qu’une Mise est orientée relativement au Focus ;
- introduire les deux pools comme les deux orientations de la question avant d’utiliser **camp** comme raccourci ;
- conserver « Mise favorable » et « Mise adverse » une fois leur relativité expliquée ;
- préciser qu’un camp collectif peut réunir plusieurs Prismes ;
- expliquer que les contributions sont traitées selon leurs Prismes puis agrégées au niveau de l’orientation ;
- préciser avec humilité que Resonance utilise **actuellement les Réussites** comme format d’interopérabilité ;
- ajouter dans la section **Prismes** le cas de l’adversité sans perspective propre ;
- présenter **Prisme propre**, **Mode Miroir**, **Prisme standard** ;
- présenter le Prisme standard comme défaut d’une adversité sans perspective ;
- présenter le Mode Miroir comme mécanisme canonique dont la politique d’activation relève du game designer ;
- préciser les trois cas du Miroir : Focus individuel, collectif à Prisme partagé, collectif multi-Prismes ;
- rappeler qu’une logique propre au monde ou au lieu reste prioritaire.

## Formulations stabilisées

> **Une Mise n’est pas favorable ou adverse en soi. Le Focus détermine dans quel sens elle compte.**

> **Les deux pools ne représentent pas toujours deux personnages. Ils représentent les deux sens dans lesquels la situation peut basculer pour le Focus.**

> **Partager une Intention ne signifie pas partager une perspective.**

> **Le camp détermine quelles contributions sont réunies. Le Prisme détermine comment chacune devient une contribution mécaniquement comparable.**

> **Lorsque plusieurs Prismes contribuent à une même résolution, leurs sorties doivent pouvoir devenir mécaniquement comparables au moment de leur agrégation.**

> **Le Miroir ne donne pas une vision du monde à l’obstacle. Il fait de la vision du protagoniste la manière dont l’ensemble de l’épreuve devient lisible.**

> **Un miroir ne peut refléter une perspective unique que s’il existe une perspective unique à refléter.**

> **Les orientations appartiennent au Focus. Les Prismes appartiennent aux perspectives qui traversent ces orientations.**

> **Avant de considérer une adversité comme neutre, demandez si le monde lui donne déjà une logique capable de devenir mécaniquement opérante.**

---

# Questions de recherche non bloquantes

Les questions suivantes ne bloquent plus la 0.5 :

- quelles politiques d’activation du **Mode Miroir** seront pertinentes selon les jeux Resonance ;
- quels autres contrats d’interopérabilité que les **Réussites** pourront être explorés dans de futures implémentations.

Le principe directeur reste :

> **Ne donnez pas artificiellement une perspective à ce qui n’en possède pas. Décidez plutôt quelle perspective, s’il en faut une, doit rendre son incertitude lisible.**
