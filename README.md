# meteor-react-starter
This project aims to create a starter pack for Meteor and React users.

# Environment Setup
## 1. Set up Visual Studio Code for Mac
[Download for Mac, stable build.](https://code.visualstudio.com)

Visual Studio Code Recommended Extensions
- vscode-icons by Roberto Huertas
- vscode-pandoc by DougFinke [(link)](http://pandoc.org/installing.html)
- ESLint by Dirk Baeumer [(link)](http://eslint.org/docs/user-guide/getting-started)

```bash
## ESLint
## Run the following in project folder
$ npm install eslint --save-dev
## Set up config file
$ ./node_modules/.bin/eslint --init
? How would you like to configure ESLint? Use a popular style guide
? Which style guide do you want to follow? Airbnb
? Do you use React? Yes
? What format do you want your config file to be in? JSON
```

Set up Visual Studio Code Debug [(link)](https://code.visualstudio.com/docs/editor/debugging)

## 2. Set up iTerm for Mac
[Download for Mac, stable release.](https://www.iterm2.com/index.html)

## 3. Set up nodeJS for Mac
[Download for Mac, recommended for most users.](https://nodejs.org/en)

## 4. Meteor Setup
Installation Guide by Meteor [(link)](https://www.meteor.com/install)

Run the following in your terminal or iTerm.
```bash
## Install Meteor
$ curl https://install.meteor.com/ | sh
```

# Project Setup

```bash
## Create Meteor project
$ meteor create social-schedule-chat --full
$ cd social-schedule-chat
$ meteor npm install

## Install and Setup ESLint for Meteor
$ meteor npm install --save-dev babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-meteor eslint-plugin-react eslint-plugin-jsx-a11y eslint-import-resolver-meteor eslint

## Install React and remove Blaze
$ meteor npm install --save react react-dom
$ meteor remove blaze-html-templates
$ meteor add static-html

## Required to use data from a collection inside a React component
$ meteor npm install --save react-addons-pure-render-mixin
$ meteor add react-meteor-data

## Install React Router
$ meteor npm install --save react-router

## Updates class in element
$ meteor npm install --save classnames

## Switch to native Javascript
$ meteor npm install --save bcrypt

## Adds React Login Component
$ meteor add alt:react-accounts-ui accounts-password accounts-facebook

## Install and save all packages
$ npm install --save

## Run your server
$ meteor
```

Additional installations
- ESLint with Meteor [(link)](https://github.com/dferber90/eslint-plugin-meteor)
- iOS simulator (Mac only) [(prerequisite)](http://guide.meteor.com/mobile.html#installing-prerequisites) [(link)](https://www.meteor.com/tutorials/react/running-on-mobile)
- Android simulator [(prerequisite)](http://guide.meteor.com/mobile.html#installing-prerequisites) [(link)](https://www.meteor.com/tutorials/react/running-on-mobile)

```bash
## Install and run iOS simulator on Mac
$ meteor install-sdk ios
$ meteor add-platform ios
$ meteor run ios
## OR, iOS device
$ meteor run ios-device

## Install and run Android simulator
$ meteor install-sdk android
$ meteor add-platform android
$ meteor run android
## OR, Android device
$ meteor run android-device

## Remove insecure, disable client side database changes
$ meteor remove insecure

## Remove auto publish, disable auto-sync of all data to all client
$ meteor remove autopublish
```

For all installations, remember to stop your server with CTRL+C, before installing them. Remember to run the server after installation.

>To view problems in Visual Studio Code, use the following (Shift+CMD+M). You will be able to look out for syntax and errors.