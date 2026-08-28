---
layout: default
title: Resonance: Scooby-Doo
lang: fr
permalink: /fr/scooby-doo/
---

# Resonance: Scooby-Doo

**Resonance: Scooby-Doo** est une implémentation légère de Resonance conçue comme un test de compression du framework.

Là où **Glorantha Perspectives** explore jusqu’où Resonance peut descendre dans la profondeur d’un univers, Scooby-Doo explore l’autre extrême : combien de règles, de lore et de préparation peut-on retirer tout en conservant une expérience fortement caractérisée ?

Ce document contient l’implémentation jouable complète : création de personnage, Prismes, conseils de maîtrise et un scénario prêt à jouer.

Il suppose connus les principes généraux de [Resonance](https://aleascript.github.io/resonance/fr/) : Intention, Focus, Zoom, Mises, pertinence et interprétation fictionnelle.

> **Le but n’est pas de simuler Scooby-Doo.**  
> **Le but est de faire en sorte que jouer efficacement pousse naturellement la table à produire du Scooby-Doo.**

---

# 1. Le monde en quelques lignes

Vous êtes une bande de copains de fac en vacances d’été.

Vous avez retapé un vieux van et vous sillonnez les routes des États-Unis en écoutant de la musique, en mangeant n’importe quoi et en vous arrêtant dans des endroits où personne de raisonnable ne s’arrêterait.

Invariablement, vous tombez sur :

- un motel abandonné ;
- un parc d’attractions fermé ;
- une mine hantée ;
- un musée désert ;
- un shérif dépassé ;
- un notable beaucoup trop serviable ;
- un monstre fluorescent qui semble surnaturel mais porte probablement un masque en caoutchouc.

Le ton est celui d’une enquête cartoonesque.

La peur existe, mais elle est drôle.

Le danger existe, mais il ne cherche pas à tuer les personnages.

Les coïncidences sont acceptables lorsqu’elles sont amusantes et cohérentes avec le trope.

Les plans compliqués finissent presque toujours de travers.

Et pourtant, d’une manière ou d’une autre, le groupe résout le mystère.

---

# 2. Créer les personnages

Chaque joueur choisit un archétype.

Les listes suivantes ne sont pas des capacités fermées. Ce sont des **vérités fictionnelles** destinées à rendre immédiatement visible l’espace de pertinence du personnage.

Gardez les mots-clés qui vous amusent, rayez ceux qui ne vous plaisent pas et ajoutez-en quelques-uns.

Le personnage est prêt dès que la table comprend qui il est.

## Le Beau Gosse au plan foireux

*Le leader autoproclamé. Charismatique, sûr de lui et toujours prêt à résoudre un problème simple avec une machine de Rube Goldberg.*

### Mots-clés possibles

- Mâchoire carrée ;
- sourire ultra-brite ;
- sûr de lui ;
- autorité naturelle ;
- ancien chef scout ;
- QI inversement proportionnel à sa beauté ;
- obsédé par les pièges complexes ;
- « Séparons-nous en deux groupes » ;
- permis de conduire ;
- confiance absolue dans son propre plan.

### Liens possibles

- secrètement amoureux de la Belle Nunuche ;
- persuadé que l’Intello admire ses plans ;
- considère le Duo Maladroit comme un risque logistique permanent ;
- se regarde un peu trop dans le rétroviseur du Van.

## La Belle Nunuche

*Celle qui attire les ennuis comme un aimant et découvre régulièrement des choses essentielles sans comprendre comment.*

### Mots-clés possibles

- garde-robe toujours impeccable ;
- naïveté rafraîchissante ;
- cri perçant ;
- danger-prone ;
- sac à main improbable ;
- maquillage tactique ;
- ceinture noire de shopping ;
- crochetage à l’épingle à cheveux ;
- capacité mystérieuse à se trouver exactement au mauvais endroit.

### Liens possibles

- flirte avec le monstre sans s’en rendre compte ;
- traite l’Intello comme sa meilleure amie même lorsqu’elle ne l’écoute pas ;
- trouve les plans du Beau Gosse « super intelligents » ;
- apporte toujours quelque chose d’inattendu au Duo Maladroit.

## L’Intello

*Le cerveau du groupe. Sceptique, méthodique et probablement la seule personne qui pense qu’un indice est plus intéressant qu’un sandwich.*

### Mots-clés possibles

- myopie sévère ;
- « Mes lunettes ! » ;
- pull à col roulé ;
- scepticisme absolu ;
- sarcasme ;
- encyclopédie sur pattes ;
- déduction implacable ;
- jargon scientifique incompréhensible ;
- rampe par terre pour examiner une trace ;
- trouve toujours l’interrupteur caché.

### Liens possibles

- secrètement amoureuse du Beau Gosse ;
- désespérée par le niveau intellectuel du groupe ;
- protège malgré elle le Duo Maladroit ;
- seule personne à savoir réparer approximativement le Van.

## Le Duo Maladroit — deux joueurs

*Les poltrons magnifiques. Ils pensent surtout à manger et à fuir. C’est souvent ce qui sauve tout le monde.*

Le Duo est joué par **deux joueurs distincts**.

### Le Mec à l’ouest

Mots-clés possibles :

- toujours perché ;
- métabolisme aberrant ;
- froussard olympique ;
- « Même pas en rêve » ;
- ventre sur pattes ;
- appétit de destruction ;
- jambes étonnamment rapides quand quelque chose grogne derrière lui.

### L’Animal de compagnie

Il peut être un chien parlant, mais aussi un raton-laveur, un iguane géant ou toute autre créature avec laquelle la table accepte de vivre pendant deux heures.

Mots-clés possibles :

- mimiques humaines ;
- trouillard de compétition ;
- corruption facile contre une friandise ;
- flair pour les ennuis ;
- capacité à se déguiser en serveur en trois secondes ;
- compréhension approximative du langage humain.

### Lien partagé

Ils sont inséparables.

Ils possèdent leur propre langage, partagent leur nourriture, se cachent ensemble et deviennent paradoxalement plus efficaces lorsqu’ils paniquent côte à côte.

Cette relation est directement inscrite dans leur Prisme.

---

# 3. Le cinquième membre : le Van

Le Van possède une petite feuille commune créée par toute la table.

Choisissez ou inventez quelques vérités dans chaque famille.

## Son allure

- peinture psychédélique ;
- rouille dissimulée sous des autocollants ;
- phare droit qui clignote tout seul ;
- rideaux douteux ;
- nom ridicule peint sur le côté.

## Son fonctionnement

- moteur qui tousse quand tout le monde panique ;
- tombe en panne au milieu de nulle part ;
- démarre au quart de tour, mais seulement lorsqu’on n’est pas pressé ;
- frein à main inquiétant ;
- radio qui capte une seule station.

## Son aménagement

- réserve secrète de snacks ;
- matelas douteux ;
- sono disproportionnée ;
- laboratoire improvisé de l’Intello ;
- matériel inutile qui deviendra probablement essentiel à la fin.

Le Van n’est pas une simple décoration.

Ses vérités peuvent devenir des Mises, provoquer des problèmes, fournir des solutions ou déterminer pourquoi le groupe se retrouve précisément devant le motel hanté dont le scénario avait besoin.

---

# 4. La grammaire de pertinence

Scooby-Doo ne demande pas une encyclopédie de lore.

Son identité vient surtout de ce que le jeu apprend à la table à remarquer.

Les vérités suivantes ont naturellement tendance à devenir pertinentes :

- la peur ;
- la faim ;
- les snacks ;
- les indices ;
- les déguisements ;
- les passages secrets ;
- les plans trop compliqués ;
- les séparations du groupe ;
- les coïncidences absurdes ;
- les machines défectueuses ;
- les relations entre les membres de l’équipe ;
- les gimmicks personnels ;
- les traces de trucage ;
- le mobile économique derrière le « surnaturel » ;
- le masque derrière le monstre.

Cette liste n’interdit rien d’autre.

Elle indique simplement **où ce jeu aime regarder**.

---

# 5. Les règles communes

Resonance: Scooby-Doo conserve la boucle générale de Resonance.

1. Le joueur annonce son **Intention**.
2. La table précise le **Focus** et son **Zoom** si nécessaire.
3. Les vérités réellement pertinentes deviennent des **Mises**.
4. Chaque Mise fournit normalement **un D6**.
5. Le personnage résout selon son **Prisme**.
6. Le résultat est interprété à partir de la scène et des Mises.

## La règle que tout le monde peut retenir

> **Un résultat pair est une Réussite.**  
> **Un résultat impair n’est normalement pas une Réussite.**

Cette règle fournit le langage commun du jeu, même lorsque certains Prismes ajoutent des motifs, déplacent l’interprétation ou produisent un résultat autonome.

## La table ne cherche pas des bonus

Les mots-clés de la feuille sont des rappels de fiction, pas des boutons à activer.

Le meneur peut présenter le jeu ainsi :

> « Dites-moi ce que vous faites et ce qui compte vraiment dans la scène. Chaque vérité pertinente devient une Mise. Les nombres pairs sont des Réussites. Mais le monde ne répond pas de la même manière à chacun de vous. Jouez vos personnages à fond ; les Prismes feront le reste. »

## Contrat de ton

Dans cette implémentation :

- les personnages ne meurent pas à cause d’un mauvais tirage ;
- le monstre cherche à effrayer, capturer, enfermer, séparer ou ridiculiser ;
- un échec doit créer du mouvement plutôt qu’arrêter l’enquête ;
- les conséquences peuvent être absurdes sans devenir arbitraires ;
- le meneur tranche rapidement les questions de pertinence pour préserver le rythme.

---

# 6. Les Prismes

Chaque archétype possède une manière particulière de transformer l’incertitude.

Ces Prismes sont volontairement asymétriques.

Le but n’est pas qu’ils soient identiques en puissance abstraite, mais qu’ils poussent chaque joueur à rechercher un comportement différent et reconnaissable.

## Le Duo Maladroit — la Résonance croisée

Le Duo ne joue pas nécessairement contre un pool adverse.

Chacun des deux joueurs rassemble **son propre pool de Mises** et lance séparément.

### Réussites normales

Chaque résultat pair obtenu par l’un ou l’autre membre du Duo produit normalement une Réussite.

Additionnez ensuite les Réussites des deux pools.

### Paires croisées d’impairs

Leur maladresse devient une ressource lorsqu’elle résonne entre eux.

Pour chaque valeur impaire `1`, `3` ou `5`, comparez les deux pools.

Chaque paire constituée d’un dé de chaque personnage montrant **la même valeur impaire** produit **une Réussite supplémentaire**.

Un même dé ne peut appartenir qu’à une seule paire croisée.

Autrement dit, pour chaque valeur impaire, le nombre de Réussites supplémentaires est égal au plus petit nombre d’occurrences de cette valeur dans les deux pools.

Exemple :

- Sammy obtient `3, 3, 4, 5` ;
- Scooby obtient `3, 2, 5, 5`.

Les résultats pairs donnent déjà deux Réussites : `4` et `2`.

Les pools contiennent aussi :

- un `3` croisé → +1 Réussite ;
- un `5` croisé → +1 Réussite.

Total : **4 Réussites**.

Les deux `3` de Sammy ne valent donc pas une Réussite entre eux. La résonance doit traverser les deux personnages.

> **Ils sont mécaniquement meilleurs lorsqu’ils paniquent ensemble.**

### Lire le résultat

Le nombre de Réussites mesure surtout **l’ampleur du chaos utile** produit par leur action.

Une faible réussite peut simplement leur permettre de s’échapper.

Une forte réussite peut les faire traverser une cuisine sur un chariot, renverser une étagère, révéler un passage secret, faire tomber le monstre dans son propre piège et terminer leur course avec un sandwich intact.

Le résultat peut être autonome : il n’a pas besoin d’un pool adverse pour avoir du sens.

## L’Intello — la Logique

L’Intello utilise la forme de résolution la plus proche de la configuration standard.

Elle rassemble ses Mises.

Le meneur rassemble les Mises de l’adversité ou de l’obstacle.

Les deux pools sont lancés : les pairs sont des Réussites et les totaux sont comparés.

Son Prisme est volontairement sobre.

Elle vit dans un monde où :

- un indice doit avoir une cause ;
- une hypothèse doit résister aux faits ;
- une porte secrète possède probablement un mécanisme ;
- un fantôme fluorescent a très certainement acheté sa peinture quelque part.

Une Victoire produit une découverte rationnelle.

Une Défaite ne doit pas bloquer l’enquête : elle peut lui faire perdre ses lunettes, suivre une fausse piste, se couvrir de suie ou obtenir l’indice avec une complication.

> **Elle est la personne qui essaie de jouer à un jeu de détective rationnel au milieu d’un dessin animé.**

## Le Beau Gosse — le Décalage

Le Beau Gosse fait généralement un tirage opposé classique : pairs, Réussites, comparaison.

Mais son résultat résonne **de travers**.

### S’il gagne

Son plan fonctionne exactement comme prévu… mais sur la mauvaise cible, au mauvais moment ou d’une manière qui produit un nouveau problème.

Le filet capture le Duo Maladroit.

La cage tombe parfaitement, mais le monstre se trouvait déjà derrière lui.

La porte se verrouille comme prévu, avec toute l’équipe du mauvais côté.

### S’il perd

Son plan s’effondre lamentablement… et cette catastrophe provoque accidentellement l’effet dont le groupe avait réellement besoin.

La poulie casse et assomme le monstre.

Le ventilateur géant arrache le décor et révèle le passage secret.

Le piège se déclenche trop tôt, fait fuir le fantôme et lui arrache un morceau de masque.

### Interprétation

Le tirage ne répond donc pas seulement à « le plan fonctionne-t-il ? ».

Il répond à :

> **Comment le monde transforme-t-il la confiance du Beau Gosse dans son propre plan ?**

Ce Prisme est volontairement le plus expérimental de cette implémentation. La tendance du Beau Gosse à **séparer le groupe** reste principalement portée par ses mots-clés et la grammaire de pertinence plutôt que par une incitation mécanique aussi forte que celle du Duo Maladroit.

## La Belle Nunuche — l’Accident significatif

La Belle Nunuche peut utiliser des dés d’une couleur distincte si la table en possède. Ce n’est pas obligatoire, mais cela rend ses motifs immédiatement visibles.

Elle peut compter les pairs comme des Réussites normales lorsqu’une opposition le demande.

Son Prisme ajoute surtout deux manières de produire un événement particulier.

### Le Charme involontaire

Lorsque le monstre possède un pool adverse, regardez son résultat le plus élevé.

Si au moins un dé de la Belle Nunuche montre exactement la même valeur, elle produit un moment de **Charme involontaire**.

Le monstre est distrait, déstabilisé, attendri ou momentanément incapable de poursuivre son action normalement.

Elle peut laisser tomber son miroir ; le monstre le ramasse.

Elle peut reconnaître sous le masque un détail familier et créer un blanc gênant.

Elle peut simplement lui parler comme s’il était une personne parfaitement ordinaire au moment où tout le monde hurle.

Ce motif ne remplace pas nécessairement le résultat principal. Il ajoute un événement fictionnel que le meneur doit intégrer.

### Le « Oops » scénaristique

La Belle Nunuche cherche les **jolis motifs**.

Si son tirage contient une suite d’au moins trois valeurs consécutives — par exemple `2-3-4` ou `3-4-5` — ou au moins trois dés identiques, elle déclenche un **Oops**.

Le Oops fait basculer la scène de manière notable et accidentelle.

Elle s’adosse à une bibliothèque pour refaire son lacet et ouvre le passage secret.

Elle appuie sur le bouton rouge en cherchant la lumière et désactive le mécanisme du monstre.

Elle trébuche sur un tapis et révèle la trappe que l’Intello cherchait depuis dix minutes.

Le Oops peut survenir que le tirage principal soit victorieux ou non.

### Et si rien de spécial n’apparaît ?

Elle subit simplement l’orientation normale du tirage.

Dans le ton du jeu, une Défaite ne signifie toutefois pas violence grave ou mort.

Elle peut :

- se casser un ongle ;
- être séparée du groupe ;
- perdre son sac ;
- tomber dans une trappe ;
- se retrouver enfermée dans une pièce VIP avec des petits fours ;
- attirer le monstre ailleurs.

---

# 7. Conseils au meneur

## Faites avancer l’enquête

Un échec ne doit pas rendre le mystère insoluble.

Il change la manière dont l’information est obtenue, son coût ou la situation dans laquelle le groupe la découvre.

L’Intello peut échouer à examiner une chaudière, perdre ses lunettes et tomber exactement sur le ticket de pressing qui trahit le coupable.

Le Duo peut fuir dans la mauvaise direction et traverser par accident la pièce où se trouve la peinture phosphorescente.

## Tranchez vite les Mises

Le principal risque de ralentissement est de transformer la conversation de pertinence en négociation de bonus.

Dans un jeu de deux heures, le bon rythme est :

> **« Oui, ça compte. »**  
> **« Non, pas pour ce Focus. »**  
> **« C’est déjà contenu dans cette autre Mise. »**  
> **« Excellent. Prends le dé. »**

Favorisez les propositions qui :

- sont immédiatement lisibles dans la fiction ;
- renforcent le trope ;
- font rire la table ;
- créent de nouvelles possibilités d’interprétation.

## Faites résonner les mots-clés contre les personnages

Une vérité n’est pas toujours favorable.

*Myopie sévère* peut expliquer pourquoi l’Intello rate quelque chose.

*Moteur capricieux* peut provoquer l’arrêt du Van devant le motel.

*Obsédé par les pièges complexes* peut devenir exactement la raison pour laquelle le plan du Beau Gosse demande quinze minutes de préparation et six objets absurdes.

## Coupez quand le trope a fait son travail

Une poursuite est drôle tant qu’elle escalade.

Une enquête est intéressante tant que les joueurs découvrent quelque chose.

Un piège est amusant tant qu’il menace encore de fonctionner.

Lorsque la scène a produit son moment, passez à la suivante.

---

# 8. Scénario : Le Mystère du Motel de la Dernière Frite

Ce scénario est prévu pour une partie d’environ **deux heures**, création des personnages comprise.

## Le pitch

C’est la nuit.

Il pleut à verse.

Le Van tombe en panne sur une route abandonnée. Utilisez immédiatement l’un de ses mots-clés : fumée noire, moteur capricieux, jauge d’essence douteuse ou toute autre vérité choisie par la table.

Le seul bâtiment éclairé à des kilomètres est le **Bates Burger & Motel**, un relais routier des années 1950 qui semble avoir raté plusieurs décennies de modernisation.

Le vieux gérant, **Monsieur Grossi**, accueille le groupe en tremblant :

> « Fuyez… Le fantôme du Cuisinier Fou est de retour ! Il hante les cuisines avec sa spatule fluorescente ! »

Évidemment, personne ne fuit réellement.

## Le monstre

### Le Fantôme du Cuisinier Fou

Un spectre couvert de graisse luisante, coiffé d’une toque en lambeaux et armé d’une spatule phosphorescente.

Il hurle des recettes terrifiantes.

Il semble traverser les murs.

Il apparaît à un étage et disparaît immédiatement à un autre.

Il sent vaguement la peinture fraîche.

## La vérité

Le Fantôme est en réalité **Monsieur Zellani**, promoteur immobilier local.

Sous le motel se trouve une ancienne cave de contrebande datant de la Prohibition, contenant une collection d’alcools rares qui vaut une fortune.

Zellani veut effrayer Monsieur Grossi afin de lui racheter le motel pour presque rien.

Ses apparitions reposent sur :

- un costume ;
- de la peinture phosphorescente ;
- un réseau de monte-plats et de passages techniques ;
- quelques effets sonores ;
- la certitude que personne de sensé ne viendra vérifier ce qui se passe ici.

Il n’avait pas prévu le Van.

## Les trois Clés

Pour résoudre le mystère, le groupe doit faire apparaître trois familles d’informations.

Les joueurs n’ont pas besoin de les découvrir dans un ordre précis ni aux endroits prévus.

### Clé 1 — le Mobile

Quelqu’un cherche à faire fuir Grossi parce que le terrain ou le bâtiment possède une valeur cachée.

Indices possibles :

- documents d’achat agressifs signés par Zellani ;
- vieux plan mentionnant une cave condamnée ;
- bouteilles anciennes découvertes derrière un mur ;
- registre de livraison datant de la Prohibition ;
- Grossi se souvenant soudain que son grand-père parlait d’un « sous-sol qu’on ne devait jamais ouvrir ».

### Clé 2 — le Trucage

Le fantôme utilise un dispositif matériel.

Indices possibles :

- peinture phosphorescente ;
- traces de graisse mécanique ;
- plan du réseau de monte-plats ;
- fil nylon ;
- haut-parleur caché ;
- morceau de costume accroché à une trappe.

### Clé 3 — le Coupable

Les indices doivent finalement désigner Zellani.

Indices possibles :

- ticket de pressing ;
- facture de peinture ;
- bouton de costume ;
- empreinte de chaussure ;
- contrat immobilier ;
- voix enregistrée reconnaissable ;
- monogramme absurdement évident.

Lorsque les trois Clés sont suffisamment établies, inutile de prolonger artificiellement l’enquête.

Passez au piège final.

---

# 9. Les trois actes

## Acte 1 — Le premier contact

Le groupe s’installe au diner pendant que le Van refroidit.

Monsieur Grossi sert des burgers froids et raconte l’histoire du Cuisinier Fou.

Puis les lumières grésillent.

La porte du réfrigérateur s’ouvre toute seule.

Le Fantôme du Cuisinier Fou surgit en hurlant une recette impossible.

### Moments à rechercher

- Le Duo Maladroit tente de fuir **avec son repas** : excellent moment pour son tirage autonome.
- Le Beau Gosse annonce immédiatement une stratégie disproportionnée.
- L’Intello remarque que quelque chose dans l’apparition n’est pas cohérent.
- La Belle Nunuche peut provoquer un premier Charme involontaire ou un Oops.

Le fantôme disparaît par un monte-plats ou un passage technique avant d’être attrapé.

Laissez au moins un petit indice derrière lui.

## Acte 2 — L’exploration du motel

Le Beau Gosse possède maintenant une excellente raison de dire :

> **« Séparons-nous en deux groupes. »**

Ne résistez pas au trope.

Alternez rapidement entre les sous-groupes.

### La chambre 13

La Belle Nunuche trouve une chambre condamnée dotée d’un immense miroir et d’un porte-manteau branlant.

Le fantôme apparaît.

Un Oops peut faire pivoter le mur et révéler le réseau de monte-plats : **Clé du Trucage**.

Sinon, la même information peut être découverte plus directement, mais avec une complication.

### La chaufferie

L’Intello examine la tuyauterie et les mécanismes du bâtiment.

Elle peut trouver :

- de la peinture phosphorescente ;
- une poulie récente ;
- un ticket de pressing au nom de Zellani ;
- un morceau de tissu du costume.

Même une Défaite doit lui donner matière à raisonner, quitte à la couvrir de suie ou à lui faire perdre ses lunettes.

### La cuisine et la réserve

Le Duo Maladroit cherche évidemment à manger.

Une poursuite peut les conduire derrière une étagère mobile jusqu’à une pièce condamnée contenant de vieilles bouteilles ou un accès à la cave.

Ils peuvent ainsi découvrir la **Clé du Mobile** complètement par accident.

Une grosse Réussite de Résonance croisée devrait produire une chaîne d’événements ridicules mais extrêmement efficace.

### Le bureau de Grossi

Si les joueurs cherchent une piste plus rationnelle, ils peuvent trouver les offres d’achat répétées de Zellani et un vieux plan du motel.

Cette scène permet de fournir n’importe quelle Clé encore manquante sans forcer une solution unique.

## Acte 3 — Le Grand Piège

Une fois les trois Clés réunies, le groupe sait que le Fantôme est humain et qu’il faut le capturer.

C’est le moment du Beau Gosse.

Il élabore un plan utilisant autant d’éléments absurdes de la fiction que possible :

- chariots à bagages ;
- sauce tomate ;
- ventilateur géant ;
- corde à linge ;
- cloche du diner ;
- porte du congélateur ;
- matériel trouvé dans le Van.

Transformez ces vérités en Mises lorsqu’elles comptent réellement pour le Focus.

Puis lancez.

### Si le Beau Gosse gagne

Le piège fonctionne… sur la mauvaise cible.

Le Duo se retrouve dans le filet.

La cage enferme l’Intello.

Le monstre échappe au dispositif exactement comme il l’avait prévu.

Mais le mouvement de la scène doit ouvrir la possibilité d’un second rebond.

### S’il perd

Le piège s’effondre.

La sauce se renverse.

Le ventilateur part dans le mauvais sens.

Le chariot percute la porte du frigo.

Et le Fantôme finit assommé, ficelé ou coincé exactement là où personne ne l’avait prévu.

Le Beau Gosse peut alors expliquer que tout faisait évidemment partie du plan.

---

# 10. L’épilogue

Le groupe arrache le masque.

> **« Monsieur Zellani ?! »**

Zellani explique son plan avec beaucoup trop de détails.

Puis vient la phrase obligatoire :

> « Et j’aurais réussi si vous n’étiez pas là, vous et ce satané chien ! »

Monsieur Grossi remercie le groupe.

Le Van redémarre mystérieusement sans qu’on sache vraiment pourquoi.

Quelqu’un propose de s’arrêter manger à la prochaine station-service.

Le meneur sait déjà qu’elle sera probablement hantée.

---

# 11. Timeline recommandée

## Création des personnages et du Van — 15 à 20 minutes

La lecture des archétypes doit être immédiate.

Laissez les joueurs :

- garder ou rayer les mots-clés ;
- en inventer un ou deux ;
- définir rapidement leurs liens ;
- créer ensemble le Van.

Cette phase sert aussi de brise-glace.

## Présentation des règles — environ 5 minutes

Expliquez seulement :

- la fiction vient d’abord ;
- ce qui compte devient une Mise ;
- une Mise donne normalement un D6 ;
- les pairs sont des Réussites ;
- chaque archétype possède un twist particulier ;
- le meneur arbitre rapidement la pertinence ;
- personne ne va mourir dans une poursuite avec un fantôme en plastique.

Le reste peut être découvert en jouant.

## Acte 1 — 20 à 30 minutes

Arrivée, exposition, burger, première apparition et première poursuite.

## Acte 2 — 45 à 60 minutes

Cœur de l’enquête.

Alternez les groupes rapidement et distribuez les trois Clés dès que les actions des joueurs les justifient.

Lorsque les trois sont établies, coupez court.

## Acte 3 — 20 à 30 minutes

Plan impossible, tirages, retournements, capture et révélation.

---

# 12. Ce que cette implémentation teste

Resonance: Scooby-Doo est volontairement petit.

Il montre qu’une implémentation Resonance peut fonctionner avec :

- quelques paragraphes de lore ;
- des feuilles presque entièrement constituées de mots-clés ;
- une grammaire de pertinence fondée sur un trope plutôt que sur une cosmologie ;
- des Prismes asymétriques ;
- plusieurs manières de lire les mêmes D6 ;
- un Prisme à résultat autonome ;
- une préparation minimale ;
- une partie complète en une soirée courte.

Le contraste avec Glorantha Perspectives est volontaire.

> **Glorantha teste la profondeur.**  
> **Scooby-Doo teste la compression.**

Entre les deux, l’espace de design de Resonance reste ouvert.
