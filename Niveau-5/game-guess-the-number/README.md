# Projet "Jeu : Devine le nombre !"

## Objectif
Génère un nombre aléatoire que l'utilisateur doit deviner en envoyant le formulaire.
Si l'utilisateur a tapé un nombre plus grand que celui à deviner, remplacer le texte de la notification par "C'est moins !". La notification doit devenir rouge (en lui donnant la classe `alert-danger`).
Si l'utilisateur a tapé un nombre plus petit que celui à deviner, remplacer le texte de la notification par "C'est plus !". La notification doit devenir rouge (en lui donnant la classe `alert-danger`).
Si l'utilisateur a trouvé le bon nombre, remplacer le texte de la notification par "C'est gagné ! Le nombre a deviné était bien {nombre à deviner}". La notification doit devenir rouge (en lui donnant la classe `alert-success`). 5 secondes plus tard, modifie le nombre que l'utilisateur doit deviner et remplacer le texte de la notification par "Devine le nombre (compris entre 0 et 1000) !". La notification doit devenir bleue (en lui donnant la classe `alert-info`).

## Aller plus loin
- Au bout de 5 tentatives râtées, affiche à l'utilisateur quel était le nombre à deviner. 5 secondes plus tard, modifie le nombre à deviner et invite l'utilisateur à le deviner
- Affiche à l'utilisateur le nombre de bonnes et de mauvaises réponses qu'il a données.