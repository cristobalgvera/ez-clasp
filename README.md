# 💻 TL;DR

1. Use [this template](https://github.com/cristobalgvera/ez-clasp) by clicking the **_"Use this template"_** button over repository files.

2. Using the new created repository URL, clone it following next steps

    ```bash
    git clone https://github.com/YOUR_USER_NAME/YOUR_REPOSITORY_NAME.git
    cd YOUR_REPOSITORY_NAME

    npm install
    npm run login # And access to your Google account
    ```

3. Add your Apps Script ID inside **_.clasp.json_** file located in root in the **_scriptId_** key.

    ![Project configuration](docs/images/project-configuration.png)

4. Push your TS project on Google Apps Script using

    ```bash
    npm run deploy
    ```

## 🤔 How to push HTML or non TypeScript files?

If you need to push some other files that will not be included in transpilation process, you can put them into **_app/_** folder \*(or whatever location you want if you change **_.claspignore_** configuration)\*.

Put your assets in here, meaning some HTML or any JavaScript file you need to be pushed to Google Apps Script.

## 🍕 Extras

### 📚 Libs

Project has preloaded these libraries that will help you to have a better development experience:

- TypeScript.
- ESLint.
- Prettier.
- RollupJS.
- Babel.
- Jest.

### ❗ Ignored files

In case you want ignore certain files to be pushed, you can add them to **_.claspignore_** file. You can see in it some already ignored base directories.

_P.D.: Of course you can delete this **README** file and the **docs/** folder._

## 💼 Example projects

You can found here some practical example uses of this template in order to help you to understand better how to link it to a Google Apps Script project

- **[Project one](https://github.com/cristobalgvera/automatic-fup)** _(include connection to Firebase)_
- **[Project two](https://github.com/cristobalgvera/open-orders-update)**
- **[Project three](https://github.com/cristobalgvera/cmic-credentials)**
