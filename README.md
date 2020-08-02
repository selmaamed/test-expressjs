**Express JS, Technical Test**
-

Ce test a pour but de valider principalement votre niveau en Javascript et Git, ainsi que votre capacité à comprendre et à maintenir du code source dans un projet IT.

Nous allons évaluer vos compétences techniques et votre capacité à trouver des solutions aux obstacles rencontrés.

Vous avez 7 jours, pour rendre votre travail à partir de la réception du mail vous invitant à réaliser les tâches demandées.

**Enoncé**
-

Nous avons mis à votre disposition un projet squeulette avec le framework Express JS : https://gitlab.com/silaksolutions/test-expressjs.git

Nous souhaitons développer des web services pour l'accés aux données de contacts et effectuer des traitements dessus. Un contact est définit par un : ***id, last_name, first_name, email, gender, ip_address***


Le projet est écrit en ES6 et contient les fichiers suivant:

  - **.env**

    *Fichier permettant de déclarer des variables d'envirronnement.*

  - **.gitignore**

    Pour éviter de pousser les fichiers non souhaités sur la branch Git.


  - **contacts.json**

    Liste de contact avec certaines informations Nom, prénom, email ..Etc.

  - **index**

    Le point d'entrée de l'application Express.

  - **routes**

    Définition des routes HTTP (API REST) + la logique métier de l'application.



**Test du squlette**

lancer les commandes :

    npm install  ou  yarn install

    npm start ou yarn start

par défaut l'application se lance sur le port 3000  si aucun port n'est spécifié dans le fichier **.env**

Ouvrez votre navigateur sur (vous devez avoir la page de desciption du test):

    http://localhost:4000

Ou en ligne de commande:

    curl http://localhost:4000



**Travail à réaliser**
-

  ***Prérequis*** :  *Avoir installé Node js >= 10 et Git sur votr PC.*


  1) Créer un compte Gitlab (si pas encore créé) et cloner le projet sur votre machine.

  2) Créer une branche sous le format : ***`prénom_nom`*** en miniscules.

  3) mettez à jour la valeur de la clé "author" dans le fichier package.json avec votre  ***`Prénom`*** et ***`Nom`***

  4) Mettez à jour votre dépôt distant sur Gitlab.

        *Attention: ne tavaillez que sur votre branche Git.*

  5) Ecrire un web service accessible depuis la route ***`/contacts`*** qui renvoit tous les contacts.

  6) Ecrire un web service accessible depuis la route ***`/contacts/{email}`***  qui renvoit le contact ayant comme adresse mail, le paramètre: ***`email`***

  7) Ecrire un web service accessible depuis la route ***`/contacts/?gender={gender}`*** qui renvoit les contacts du même genre (Male ou Female), suivant le query parameter: ***`gender`***

  8) Ecrire un web service accessible depuis la route  ***`/contacts/count`*** qui renvoit le nombre de contacts dans le fichier contacts.json

  9) Ecrire des tests unitaires avec mocha ou autre outil de votre choix, pour tester toutes les api routes.

  10) Créer une page HTML acessible via la route ***`/home`***
  qui affiche:  **Super, j'ai terminé mon Test !**


  11) Mettre à jour votre code source sur votre branche distante GitLab (que vous avez créé au début du projet).

        *Conseil : N'attendez pas le dernier moment pour pousser votre code, en cas d'anomalies vous aurez au moins une chance que votre soit évalué. Essayer de pousser votre code à chaque étape réalisée.*


**Obligations**

- Ne pas passer à l'étape  **`i`** qu'après avoir réalisé l'étape **`i-1`**.
- Nous nous attendons un code clair, lisible et commenté si nécessaire.
- Tout code source non poussé sur GitLab durant les 7 jours ne sera pas pris en considération.

**Astuces**

  Pour accèder à la liste de contacts, utiliser l'objet Request de l'application Express.


**Bonus**

Réecrivez votre code source en utilisant Babel js pour la transpilation ES6 en Javascript : https://babeljs.io

  *Attention: Créez une branche dédiée à cette version du projet.*


Comment soumettre mon travail ?
-

Archivez votre projet sous format zip ou autre et l'envoyer à l'adresse suivante: *technicaltests@silaksolutions.com*


Questions
-

Vous pouvez poser vos questions durant les 7 jours à l'adresse
*yidoughi@silaksolutions.com* ou *kbousbissi@silaksolutions.com*

























