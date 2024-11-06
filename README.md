# Argent Bank

Argent Bank est une application bancaire permettant aux utilisateurs de gérer leurs comptes en ligne. Cette application est construite avec React et Vite, et utilise Redux pour la gestion de l'état.

## Installation

1. Clonez le dépôt :

```sh
git clone https://github.com/oHminod/argent-bank.git
```

2. Accédez au répertoire du projet :

```sh
cd argent-bank
```

3. Installez les dépendances :

```sh
npm install
```

## Utilisation

Pour lancer l'application en mode développement, exécutez la commande suivante :

```sh
npm run dev
```

## Scripts

- `npm run dev` : Lance l'application en mode développement.
- `npm run build` : Crée une version de production de l'application.
- `npm run lint` : Exécute ESLint pour vérifier le code.
- `npm run preview` : Lance un serveur local pour prévisualiser la version de production de l'application.

## Structure du projet

```
public/
    argentBankLogo.png
    ...
src/
    components/
        layout/
            footer.jsx
            layout.jsx
            navBar.jsx
            navMenu.jsx
    hooks/
        useUserData.jsx
    pages/
        homePage/
            components/
                ...
            homePage.jsx
        signinPage/
            signinPage.jsx
        userPage/
            components/
                ...
            userPage.jsx
        errorPage.jsx
    redux/
        actions/
            authActions.js
        reducers/
            authReducer.js
            index.js
        store/
            localStorage.js
            selectors.js
            store.js
    utils/
        data-access-layer.js
        data.js
        routes.jsx
    index.css
    main.jsx
    vite-env.d.ts
.gitignore
.nvmrc
eslint.config.js
index.html
package-lock.json
package.json
README.md
vite.config.js
```

## Dépendances principales

- Vite
- React
- React Router DOM
- React Redux
- Redux Toolkit
