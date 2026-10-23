# Activité 1+2
## I. Mise en place initiale
### 1- Installez Ubuntu server 26.04 et configurez l'accès distant sécurisé via SSH.
 ![](captures/cap1.PNG)
 ![](captures/cap2.PNG)
 ![](captures/cap3.PNG)
 ![](captures/cap4.PNG)
### 2- Testez l'accès SSH à la VM à partir la machine physique.  
![](captures/cap5.PNG)
### 3- Installez docker sur la VM.  
![](captures/cap6.PNG)
![](captures/cap7.PNG)
### 4- Installez Jenkins en tant que service et vérifiez son bon fonctionnement à partir de la machine physique.  
 ![](captures/cap8.PNG)
 ![](captures/cap9.PNG)
 ![](captures/cap10.PNG)
 ![](captures/cap11.PNG)
 ![](captures/cap12.PNG)
 ![](captures/cap13.PNG)
 ![](captures/cap14.PNG)
 ![](captures/cap15.PNG)
 ![](captures/cap16.PNG)
 ![](captures/cap17.PNG)
### 5- Créez un mini CV One Page (HTML5/CSS3/Javascript) dans un dossier géré avec git et fournir son lien GitHub. 
![](captures/cap18.PNG)
![](captures/cap19.PNG)
![](captures/cap20.PNG)
![](captures/cap21.PNG)
### 6- Activer les push GitHub via SSH : Ouvrez GitHub / Settings → SSH and GPG keys / Cliquez sur New SSH key / Donnez un nom à la clé / Collez votre clé publique / Enregistrez / Tester: ssh -T git@github.com, Configurer le dépôt local pour utiliser SSH. 
![](captures/cap22.PNG)
![](captures/cap23.PNG)
![](captures/cap24.PNG)
## II. Évolution du mini-CV vers DevSecOps Portfolio
### 7- Faites évoluer le mini CV en une petite application DevSecOps Portfolio comportant au minimum les sections : About / Skills / Projects / Experience / Contact.
### 8- Ajoutez une section DevSecOps Skills permettant d'afficher les technologies utilisées pendant le projet : Git / Docker / Jenkins / Kubernetes / Ansible / Terraform / Argo CD
![](captures/cap25.PNG)
### 9- Ajoutez une section Projects générée dynamiquement en JavaScript à partir d'un tableau d'objets.
![](captures/cap26.PNG)
## III. Dockerisation initiale
### 10- Créez un Dockerfile pour servir votre DevSecOps Portfolio avec Nginx.
![](captures/cap27.PNG)
![](captures/cap28.PNG)
### 11- Construisez une image Docker nommée : cv-docker
![](captures/cap29.PNG)
![](captures/cap30.PNG)
### 12- Exécutez un conteneur en exposant le Portfolio sur un port accessible et vérifiez l'accès depuis la machine physique.
![](captures/cap31.PNG)
![](captures/cap32.PNG)
### 13- Déployez le Portfolio avec Docker Compose : docker compose up -d
![](captures/cap33.PNG)
![](captures/cap34.PNG)
### 14- Publiez les modifications du projet sur GitHub via SSH.
![](captures/cap35.PNG)
## IV. Première introduction à l'automatisation
### 15- Installez Vagrant (dans la VM) et créez un premier Vagrantfile permettant de créer automatiquement une VM Ubuntu Server (vérifiez que votre VM dispose d'assez de RAM et d'espace disque).
![](captures/cap36.PNG)
![](captures/cap37.PNG)
![](captures/cap38.PNG)
![](captures/cap39.PNG)
![](captures/cap40.PNG)
![](captures/cap40.1.PNG)
### 16- Depuis la VM, connectez-vous à la VM créée par Vagrant avec : vagrant ssh
![](captures/cap41.PNG)
### 17- Modifiez le Vagrantfile pour configurer automatiquement :
![](captures/cap45.PNG)
![](captures/cap43.PNG)
![](captures/cap44.PNG)
## V. Migration du Portfolio vers Next.js
### 18- Créez une nouvelle version du DevSecOps Portfolio avec Next.js. Conservez au minimum les mêmes sections que dans la version HTML/CSS/JavaScript.
![](captures/act2.1.PNG)
![](captures/act2.2.PNG)
![](captures/act2.3.PNG)
![](captures/act2.4.PNG)
### 19- Transformez les principales parties du Portfolio en composants réutilisables : Header, About, Skills, Projects, Contact, Footer
![](captures/act2.5.PNG)
### 20- Déplacez les informations des projets et compétences dans des fichiers de données ou objets JavaScript séparés.
![](captures/act2.6.PNG)
### 21- Ajoutez une page dédiée à l'affichage d'un projet du Portfolio :
![](captures/act2.7.PNG)
![](captures/act2.8.PNG)
## VI. Premier pipeline Jenkins
### 22- Créez un premier Jenkins Pipeline capable de récupérer automatiquement le dépôt GitHub du DevSecOps Portfolio.
![](captures/act2.9.PNG)
![](captures/act2.10.PNG)
![](captures/act2.11.PNG)
![](captures/act2.13.PNG)
![](captures/act2.12.PNG)
![](captures/act2.15.PNG)
### 23- Ajoutez au pipeline une étape permettant d'installer les dépendances du projet Next.js.
### 24- Ajoutez au pipeline une étape permettant de construire automatiquement l'application Next.js.
![](captures/act2.16.PNG)
![](captures/act2.17.PNG)
![](captures/act2.18.PNG)
![](captures/act2.19.PNG)
![](captures/act2.20.PNG)
