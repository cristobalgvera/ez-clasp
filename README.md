# 💻 EZ CLASP

This project is a bootstrap to start a new [Google Apps Script](https://developers.google.com/apps-script) project or attach it to an existing one.

Gives you out of the box a well defined develop flow for your GAS project.

## ❓ How to

### 🥇 First use

1. Use [this template](https://github.com/cristobalgvera/ez-clasp) by clicking the **_"Use this template"_** button over repository files.

   You can use `npx degit` form instead:

   ```bash
   npx degit cristobalgvera/ez-clasp YOUR_REPOSITORY_NAME
   ```

2. Using the new created repository URL, clone it following next steps

   If you used the `template` form:

   ```bash
   git clone https://github.com/YOUR_USER_NAME/YOUR_REPOSITORY_NAME.git
   cd YOUR_REPOSITORY_NAME

   npm install
   npm run clasp:login # And access to your Google account
   ```

   If you used `npx degit` form:

   ```bash
   cd YOUR_REPOSITORY_NAME

   git init
   npm install
   npm run clasp:login # And access to your Google account
   ```

3. **If you DO NOT have an existing project**, run `npm run clasp:create` to create a new project. CLASP cli will prompt some project types, you should select one of them.

   After you run this script, inside the created `.clasp.json` file, I strongly recommend you to change attribute `rootDir` to `.`. This way you can share and move your project without any issues. This is a Google CLASP CLI trouble.

4. **If you have an existing project**, add your Apps Script ID inside [`.clasp.json`](./.clasp.json) in the **_scriptId_** key.

   ![Project configuration](assets/images/project-configuration.png)

5. Push your TypeScript project to Google Apps Script using

   ```bash
   npm run deploy
   ```

   The **first time** you execute this command, CLASP cli will ask you to overwrite manifest file [`appsscript.json`](./appsscript.json) of the project, insert `y` key and press `enter`.

   This file contains configuration required by Google to manage permissions and access to your project.

### 🤔 How to push HTML or non TypeScript files?

If you need to push some other files that will not be included in transpilation process, you can put them into [`app/`](./app) folder \*(or whatever location you want if you change [`.claspignore`](./.claspignore) configuration)\*.

Put your assets in here, meaning some HTML or any JavaScript file you need to be pushed to Google Apps Script.

⚠️ **Google Apps Script only allows you to push files with the extension `**.html`or`**.js`**. If you need to add files as `**.css`, see Google Apps Script [HTML best practices page](https://developers.google.com/apps-script/guides/html/best-practices).

### 🗂 How to add Google services, advanced Google services or external libraries?

When you add a Google service _(Gmail, Google Sheets, etc)_ which require some kind of permissions, e.g. permissions to read your email or write in a spreadsheet, you will need to add those specific permissions (OAuthScopes) in the file called [`appscript.json`](./appsscript.json), in `oauthScope` array as a string. List of OAuthScopes can be found in this [link](https://developers.google.com/identity/protocols/oauth2/scopes).

Similarly, when you need to use and advanced service, like Drive _(the old version)_, or a third party library, you will need to add those _(with the required format)_ in [`appscript.json`](./appsscript.json) file, in the dependencies object, below each attribute array. See the required structure in this [link](http://json.schemastore.org/appsscript)

## 🍕 Extras

### 📚 Libs

Project has preloaded these libraries that will help you to have a better development experience:

- **TypeScript** _(Development)_.
- **ESLint** + **Prettier** _(Format and linting)_.
- **Babel** + **Rollup** _(Building)_.
- **Husky** + **Lint-Staged** _(Commit)_.
- **Jest** _(Testing)_.

#### 🐾 Husky + Lint-Staged

In order to improve commitment flow when working with teams, template has a pre configured Husky implementation. The followed flow is:

- Fix **ESLint** issues if possible.
- Fix **Prettier** issues if possible.
- Run **Tests**.
- **Build** the code.

All tasks but build run only for the staged changes.

### ❗ Ignored files

In case you want ignore certain files to be pushed, you can add them to [`.claspignore`](./.claspignore) file. You can see in it some already ignored base directories.

_P.D.: Of course you can delete this **README** file and the [`assets/`](./assets) folder._

## 💼 Example projects

You can found here some practical example uses of this template in order to help you to understand better how to link it to a Google Apps Script project

- **[Project one](https://github.com/cristobalgvera/automatic-fup)** _(include connection to Firebase)_
- **[Project two](https://github.com/cristobalgvera/open-orders-update)**
- **[Project three](https://github.com/cristobalgvera/cmic-credentials)**
