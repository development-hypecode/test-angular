# Test Angular

#### Instructions

Le projet est inialisé avec juste la récupération d'une liste de films via le service 
`MoviesService`. Il n'y actuellement que l'affichage 20 premiers titres films 
récupérées par ce service qui est appelé dans le composant `AppComponent`.


Voici les fonctionnalités demandées à faire sur l'affichage d'une liste de films : 

__1__ - Afficher la jaquette, le titre et la durée en heures et minutes (ex : 1h30) pour chaque film. Lors du passage de la 
souris sur un film, afficher aussi le réalisateur, les acteurs et l'année de sortie du film. 

>__Méthode récommandée__ : Créer un composant Angular `MovieComponent` dans `SharedModule` qui s'occupera uniquement 
de ces fontionnalités pour un film ainsi que le template et style nécessaire

2 – Ajouter 2 boutons, "Suivant" et "Précédent", permettant le chargement de la suite de contenus

>__Méthode récommandée__ : aucunes

3 - Permettre la sélection/désélection de films lors du clic et afficher les titres 
sélectionnés dans l'élément `.selected-movie` en bas de page (ne pas afficher cette 
partie quand il n'y a aucun film sélectionné), ainsi qu'en surbrillance dans la 
liste principale.

>__Méthode recommandée__ : Créer un service afin de gérer les fonctions nécessaire
(ajout/suppression/récupération de la liste de films choisis).

**_Ces points sont indépendants et peuvent être fait dans le désordre._**


#### Les buts de ce test

Le but de l'exercice est principalement d'évaluer les compétences en Angular du candidat 
et d'avoir un échange sur les choix effectués et/ou difficultés lors de l'entretien technique.


#### Livraison

Il sera demandé de créer un fork de ce projet et de faire un pull request des modifications effectuées avant la venu du candidat en entretien. 







## Project Technical Infos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
