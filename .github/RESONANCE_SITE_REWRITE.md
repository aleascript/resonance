# Réécriture du site Resonance — note de travail

Cette branche sert à revoir le site Resonance en profondeur, en particulier sa **voix**, sa **posture** et la manière dont il expose la recherche.

Le problème n'est pas seulement stylistique. Le site tend parfois à présenter Resonance comme un cadre théorique déjà stabilisé, avec un ton académique, abstrait ou trop assuré. Cela ne correspond pas vraiment à la manière dont le projet avance.

Resonance est un laboratoire.

Il part de questions, propose des formes possibles, construit des expériences, observe ce qu'elles produisent, puis révise ses propres idées.

## Principe de rédaction

> La crédibilité doit venir de la précision des questions et des expériences, pas du ton académique.

Le texte devrait donc plus souvent montrer :

1. la question qui résiste ;
2. l'hypothèse ou la réponse provisoire essayée ;
3. ce qu'elle permet de construire ou d'observer ;
4. où elle casse ;
5. ce que les jeux ont effectivement appris au laboratoire.

## Voix recherchée

Favoriser :

- des phrases directes ;
- des questions fortes ;
- des postulats explicitement assumés comme tels ;
- des exemples concrets ;
- des expériences mentales ;
- des conséquences ;
- des formulations courtes quand elles portent vraiment une idée ;
- le droit de dire « nous ne savons pas encore ».

Éviter :

- les introductions académiques qui retardent l'idée ;
- les longues précautions avant de proposer quelque chose ;
- l'inflation terminologique ;
- les abstractions empilées ;
- les typologies qui n'aident pas à agir ;
- les références utilisées pour produire une impression de sérieux ;
- le ton de doctrine lorsqu'il s'agit encore d'une hypothèse.

## Test de voix

Une question simple pour chaque paragraphe :

> Est-ce qu'AleaScript pourrait naturellement dire cette phrase à voix haute en essayant de comprendre le problème ?

Si non, il faut probablement la réécrire.

## Rapport aux concepts extérieurs

Les concepts, auteurs et jeux existants peuvent être utiles pour :

- trouver un contre-exemple ;
- découvrir une expérience comparable ;
- révéler une dimension oubliée ;
- apporter un outil de pensée réellement opérant.

Ils ne doivent pas servir à :

- légitimer une intuition ;
- remplacer une question par un nom ;
- reconstruire Resonance avec le vocabulaire d'autres traditions ;
- faire passer une analyse pour la structure objective du phénomène.

Question de contrôle :

> Qu'est-ce que cette référence nous permet de faire ou de voir que nous ne pouvions pas faire ou voir avant ?

Si la réponse n'est pas claire, elle n'est probablement pas nécessaire ici.

## Manière de travailler sur cette branche

Ne pas réécrire tout le site d'un seul mouvement.

Pour chaque page :

1. identifier l'idée réellement importante ;
2. repérer ce qui vient de l'expérience et ce qui vient d'une formulation trop théorique ;
3. raccourcir ce qui peut l'être sans perdre de pensée ;
4. rendre visibles les questions, hypothèses et limites ;
5. vérifier que la page dit quelque chose d'opératoire ;
6. préserver les formulations singulières plutôt que les normaliser.

Une phrase rugueuse mais porteuse peut être préférable à une phrase élégante devenue générique.

Une bonne question peut être préférable à une fausse conclusion.

## Modus vivendi avec l'IA

> AleaScript propose des formes pour penser. L'IA les met sous contrainte.

L'IA doit aider à :

- pousser les conséquences ;
- chercher les angles morts ;
- produire des contre-exemples ;
- distinguer l'intuition originale des ajouts analytiques ;
- tester où une proposition cesse de fonctionner ;
- simplifier la rédaction sans simplifier la pensée.

Elle ne doit pas automatiquement transformer les intuitions en théorie académique.

## Première cible

Commencer par les pages qui définissent le projet et sa posture :

- page d'accueil / introduction ;
- principes ;
- axes de design ;
- champs de recherche ;
- pages qui décrivent la nature de Resonance comme laboratoire.

Les comparaisons historiques et les expérimentations pourront ensuite être revues avec cette voix stabilisée.

---

Cette note est un cadre de travail pour la branche. Elle n'est pas destinée à être publiée telle quelle sur le site.


## Architecture pilote

La première passe teste maintenant une structure plus simple :

1. **Ce que je cherche**
2. **Ce que j'essaie**
3. **Ce que j'apprends**
4. **Ce que les autres m'apprennent**
5. **Qui suis-je ?**

Les anciennes pages conceptuelles ne sont pas supprimées. Elles passent provisoirement sous **Notes de travail**.

C'est un choix important : le lecteur rencontre d'abord les questions, les expériences et les apprentissages. La taxonomie vient ensuite, si elle reste utile.

### Le « je »

La version française teste explicitement la première personne.

L'objectif n'est pas de rendre le site autobiographique. Le « je » sert à rendre visible la position depuis laquelle une proposition est faite :

> « Je distingue ceci parce que cela m'aide à concevoir aujourd'hui »

plutôt que :

> « Resonance distingue ceci »

La seconde formulation donne facilement à un outil provisoire l'apparence d'une catégorie objective.

### Statut de cette passe

Cette branche est un **prototype éditorial**.

La version française est volontairement en avance sur la version anglaise. La page `about` existe dans les deux langues pour que la navigation partagée reste valide, mais les grandes pages anglaises n'ont pas encore été migrées vers cette nouvelle voix.

Avant d'étendre la réécriture, il faut relire cette première tranche et répondre notamment à ces questions :

- Est-ce que le « je » sonne juste ou devient-il envahissant ?
- Est-ce que la nouvelle navigation donne envie d'entrer dans la recherche ?
- Est-ce que les questions sont plus claires sans être simplifiées ?
- Quelles formulations restent encore trop écrites « par l'IA » ?
- Qu'est-ce qui mérite réellement de survivre des anciennes catégories ?


## Plan de réorganisation — direction suivante

La première passe en « Ce que je… » a été utile comme prototype, mais elle pousse trop loin la première personne et recentre inutilement la navigation sur l'auteur.

La direction suivante est plus simple :

### Questionner

Les questions vivantes du projet.

Pas de « champs de recherche » à protéger. Une question peut en croiser plusieurs autres, changer de formulation, disparaître ou revenir.

Cette entrée doit pouvoir accueillir une intuition neuve sans commencer par décider dans quelle catégorie théorique elle appartient.

### Essayer

Les jeux, frameworks, prototypes, scénarios et procédures construits pour mettre une réponse possible à l'épreuve.

Le risque à éviter : devenir un portfolio de productions.

Chaque essai doit rester relié à ce qui l'a déclenché, à ce qu'il a effectivement produit et à ce qu'il a déplacé.

### Apprendre

Ce qui paraît avoir suffisamment résisté pour être conservé provisoirement.

Cela remplace l'idée de « principes » trop facilement reçus comme une doctrine.

Cette partie peut contenir plusieurs natures d'apprentissage :
- des observations robustes ;
- des distinctions utiles ;
- des outils de pensée ;
- les **axes de design**.

Les axes sont à préserver : leur intérêt n'est pas de classer Resonance, mais de mettre des mots sur des phénomènes proches et pourtant différents.

Axes actuels :
- cognitif ;
- diégétique ;
- perspectiviste ;
- ontologique.

Un **axe sotériologique** est désormais un candidat sérieux, notamment à partir de Glorantha Perspectives : certaines mécaniques ne portent pas seulement une ontologie (« qu'est-ce que le réel ? »), mais une voie de libération ou de dépassement de la condition ordinaire (« comment sortir de la manière ordinaire d'habiter ce réel ? »).

Le cas de la Pensée draconique et de l'Illumination montre déjà que cet axe ne se confond pas avec l'ontologique. Il doit toutefois rester une hypothèse à formuler et tester avant intégration.

### Les autres

Les jeux, auteurs et travaux qui déplacent les questions de Resonance.

Cette entrée n'est pas une quatrième étape du processus ni une galerie d'influences.

Elle sert à sortir du laboratoire : voir ce qui a déjà été essayé, trouver des contre-exemples, découvrir une autre réponse, ou constater qu'une intuition supposée originale ne l'est pas.

Le critère de présence reste opératoire : **qu'est-ce que ce cas change dans une question de Resonance ?**

## Une navigation, pas une méthode

Ces quatre entrées ne décrivent pas un pipeline.

Il ne faut surtout pas raconter :

> Questionner → Essayer → Apprendre → Les autres

comme une méthode linéaire.

Dans la pratique :
- un essai fait naître une nouvelle question ;
- un apprentissage peut être remis en cause par un essai ;
- un autre jeu peut reformuler une question ;
- une question peut rester longtemps sans essai ;
- un axe peut apparaître parce qu'il devient nécessaire de distinguer deux phénomènes jusque-là confondus.

La navigation doit permettre d'entrer dans ce mouvement, pas le normaliser.

## Accueil

L'accueil doit rester court.

Il doit :
- dire ce qu'est Resonance ;
- donner quelques problèmes concrets qui donnent envie d'entrer ;
- expliquer en quelques lignes qui est AleaScript et depuis quelle position le site est écrit ;
- présenter les quatre portes d'entrée ;
- montrer les jeux comme expériences, sans reconstruire toute la théorie.

Pas de page « Qui suis-je ? » nécessaire à ce stade.

La collaboration avec l'IA relève du processus de travail interne ; elle n'a pas besoin d'être mise en avant sur le site public.

## Notes et archives

Les pages conceptuelles existantes ne doivent pas être forcées immédiatement dans la nouvelle structure.

Certaines peuvent devenir des apprentissages.
D'autres peuvent rester des notes.
Certaines pourront fusionner, être raccourcies ou disparaître.

L'architecture doit rester assez légère pour que le coût d'une future réorganisation soit faible.
