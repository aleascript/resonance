from pathlib import Path


def replace_once(text: str, old: str, new: str, label: str) -> str:
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{label}: expected exactly one match, found {count}")
    return text.replace(old, new, 1)


fr_path = Path("content/fr/index.md")
fr = fr_path.read_text(encoding="utf-8")

old = """**Resonance est un framework de game design pour jeux de rôles dans lequel la fiction détermine ce qui entre dans la résolution et peut également déterminer comment cette résolution fonctionne.**"""
new = old + """

Resonance pose ainsi deux questions complémentaires :

- **Qu’est-ce qui compte ici ?** La fiction détermine quelles vérités deviennent mécaniquement pertinentes dans la résolution : ce sont les **Mises**.
- **Comment cette manière d’habiter le monde transforme-t-elle l’incertitude ?** Lorsqu’une perspective mérite de devenir mécaniquement opérante, elle peut transformer la manière dont cette incertitude est lue : c’est le rôle des **Prismes**.

La première question organise ce que la résolution regarde. La seconde ouvre la possibilité que la résolution elle-même exprime une culture, une cosmologie, un trope ou une perspective.

> **Nous apprendrons d’abord à déterminer ce qui compte. Nous verrons ensuite comment une perspective peut transformer la manière dont cela se résout.**"""
fr = replace_once(fr, old, new, "FR opening")

old = """- chaque résultat **impair** ne produit pas de Réussite ;
- on compare ensuite le nombre de Réussites obtenues par les deux orientations."""
new = old + """

> **Cette lecture pair / impair constitue le Prisme standard de Resonance.** Nous l’utilisons ici comme réponse par défaut pour apprendre à jouer. Nous verrons plus loin pourquoi ce Prisme n’est ni plus « réel » ni plus fondamental qu’un autre : il constitue un **point zéro de design**, que la fiction peut conserver ou transformer."""
fr = replace_once(fr, old, new, "FR standard configuration")

old = """## Les Prismes : comment une perspective transforme l’incertitude

Resonance appelle **Prisme** :"""
new = """## Les Prismes : comment une perspective transforme l’incertitude

Vous utilisez pourtant déjà un Prisme depuis le début : le **Prisme standard**. Les pairs et les impairs ne sont pas la réalité cachée de Resonance. Ils constituaient simplement la réponse par défaut dont nous avions besoin pour apprendre la boucle de résolution sans introduire trop tôt son espace de variation.

Le moment est maintenant venu de rendre ce choix visible.

Le Prisme standard n’a pas plus d’importance conceptuelle qu’un autre Prisme. Il n’est ni la norme du réel ni le moteur auquel les autres Prismes ajouteraient des exceptions. C’est un **point zéro de design** : une lecture volontairement discrète de l’incertitude lorsque le jeu ne souhaite pas faire de la perspective un enjeu mécanique particulier.

Resonance appelle **Prisme** :"""
fr = replace_once(fr, old, new, "FR Prism introduction")

old = """### Le Prisme standard

La configuration standard possède elle aussi un Prisme."""
new = """### Le Prisme standard

Nous l’avons déjà utilisé pour apprendre à jouer."""
fr = replace_once(fr, old, new, "FR standard Prism subsection")

fr_path.write_text(fr, encoding="utf-8")

en_path = Path("content/en/index.md")
en = en_path.read_text(encoding="utf-8")

old = """**Resonance is a game design framework for role-playing games in which fiction determines what enters resolution and can also determine how that resolution works.**"""
new = old + """

Resonance therefore asks two complementary questions:

- **What matters here?** Fiction determines which truths become mechanically relevant to the resolution: these are **Bets**.
- **How does this way of inhabiting the world transform uncertainty?** When a perspective deserves to become mechanically operative, it can transform the way that uncertainty is read: this is the role of **Prisms**.

The first question organizes what the resolution looks at. The second opens the possibility that resolution itself can express a culture, cosmology, trope, or perspective.

> **We will first learn how to determine what matters. We will then see how a perspective can transform the way it is resolved.**"""
en = replace_once(en, old, new, "EN opening")

old = """- each **odd** result produces no Success;
- the number of Successes obtained by the two orientations is then compared."""
new = old + """

> **This even / odd reading is Resonance's standard Prism.** We use it here as the default answer for learning to play. Later we will see why this Prism is neither more “real” nor more fundamental than any other: it is a **design zero point** that fiction may keep or transform."""
en = replace_once(en, old, new, "EN standard configuration")

old = """## Prisms: how a perspective transforms uncertainty

Resonance calls a **Prism**:"""
new = """## Prisms: how a perspective transforms uncertainty

You have actually been using a Prism from the beginning: the **standard Prism**. Evens and odds are not the hidden reality of Resonance. They were simply the default answer we needed in order to learn the resolution loop without introducing its space of variation too early.

Now is the moment to make that choice visible.

The standard Prism has no greater conceptual importance than any other Prism. It is neither the norm of reality nor the engine to which other Prisms merely add exceptions. It is a **design zero point**: a deliberately discreet reading of uncertainty for games that do not want perspective itself to become a particular mechanical issue.

Resonance calls a **Prism**:"""
en = replace_once(en, old, new, "EN Prism introduction")

old = """### The standard Prism

The standard configuration has a Prism too."""
new = """### The standard Prism

We have already been using it to learn how to play."""
en = replace_once(en, old, new, "EN standard Prism subsection")

en_path.write_text(en, encoding="utf-8")
