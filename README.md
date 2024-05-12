# Guide d'utilisation - YMedia

Ce guide vous aidera à lancer et à tester l'application en utilisant npm pour démarrer le serveur et l'application mobile.

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre système :

- npm (v10.3.0)
- Node.js (v18.18.0)
- Expo Go (v51.0.1) - Disponible sur le Google Play Store ou l'App Store d'Apple

## Installation

1. Clonez ce dépôt sur votre machine locale.

2. Dans le répertoire du serveur, exécutez la commande suivante pour installer les dépendances nécessaires pour le serveur :

```
npm install
```

3. Ensuite, déplacez-vous vers le répertoire de l'application mobile :

4. Dans le répertoire de l'application mobile, exécutez également la commande suivante pour installer les dépendances de l'application :

```
npm install
```

## Démarrage du serveur

1. Depuis le répertoire racine du projet, lancez le serveur en utilisant la commande suivante :

```
npm start
```

2. Le serveur devrait démarrer et être accessible à l'adresse http://localhost:5000.

## Démarrage de l'application mobile

1. Depuis le répertoire de l'application mobile, lancez l'application en utilisant la commande suivante :

```
npm start
```

2. Une fois l'application lancée, vous verrez un QR code dans la console.

3. Scannez ce QR code à l'aide de l'application Expo Go sur votre appareil mobile.

4. L'application devrait se charger dans Expo Go et vous pourrez interagir avec.

## Technologies utilisées

### Pour le serveur

- Express.js (v4.18.2)
- MongoDB

### Pour l'application mobile

- React Native (^0.73.6)
- Expo Go (v51.0.1)
