## Lancer l'application

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/yahyaouiichrak/Nginx-Docker-Node.git
   cd nom-du-depot
2. Créez un fichier .env à la racine du projet avec le contenu suivant :
    PG_USER=admin
    PG_PASSWORD=secret
    PG_DB=mydb
3. Construisez et démarrez les conteneurs :
    docker-compose up --build
