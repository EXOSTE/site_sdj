# 🚀 Guide d'Installation WordPress pour SDJ

## Étape 1 : Préparation XAMPP

### 1.1 Démarrer XAMPP
1. Ouvrir **XAMPP Control Panel**
2. Cliquer sur **Start** pour **Apache**
3. Cliquer sur **Start** pour **MySQL**
4. Les deux doivent afficher un fond vert

### 1.2 Créer la base de données
1. Ouvrir votre navigateur
2. Aller sur `http://localhost/phpmyadmin`
3. Cliquer sur **"Nouvelle base de données"** (colonne gauche)
4. Nom : `sdj_wordpress`
5. Interclassement : `utf8mb4_unicode_ci`
6. Cliquer sur **"Créer"**

---

## Étape 2 : Installer WordPress

### 2.1 Télécharger WordPress
1. Aller sur https://fr.wordpress.org/download/
2. Cliquer sur **"Télécharger WordPress"**
3. Télécharger le fichier .zip

### 2.2 Extraire dans XAMPP
1. Ouvrir le fichier ZIP téléchargé
2. Extraire le dossier `wordpress` dans `C:\xampp\htdocs\`
3. **Renommer** le dossier `wordpress` en `sdj`

Vous devriez avoir : `C:\xampp\htdocs\sdj\`

### 2.3 Lancer l'installation
1. Ouvrir votre navigateur
2. Aller sur `http://localhost/sdj`
3. Sélectionner **Français**
4. Cliquer sur **"C'est parti !"**

### 2.4 Configuration de la base de données
Remplir les champs :
- **Nom de la base** : `sdj_wordpress`
- **Identifiant** : `root`
- **Mot de passe** : *(laisser vide)*
- **Adresse de la base** : `localhost`
- **Préfixe des tables** : `wp_`

Cliquer sur **"Envoyer"** puis **"Lancer l'installation"**

### 2.5 Informations du site
- **Titre du site** : Le Silence Des Justes
- **Identifiant** : admin (ou votre choix)
- **Mot de passe** : *(créer un mot de passe fort)*
- **Email** : contact@lesilencedesjustes.fr
- **Visibilité** : Cocher pour l'instant (on décochera en production)

Cliquer sur **"Installer WordPress"**

---

## Étape 3 : Accéder à WordPress

- **Site** : http://localhost/sdj
- **Administration** : http://localhost/sdj/wp-admin

---

## ✅ Prochaine étape

Une fois WordPress installé, revenez me voir et dites-moi **"WordPress installé"** pour que je vous guide sur :
1. Installation du thème Astra
2. Installation d'Elementor
3. Installation des plugins
4. Configuration multilingue avec Polylang
