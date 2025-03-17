# To Do List

This project is a practice project that was built in accordance with the ODIN Project To Do List assignment to practice working with modular programming, factory functions, DOM Manipulation and extended practice with objects and arrays.

**Check out the Assignment guidelines for this project:**

https://www.theodinproject.com/lessons/node-path-javascript-todo-list


## Getting Started

Before getting started make sure you have the latest version of npm installed.

I recommend downloading Node Version Manager (NVM) first and then downloading Node.

For quick and easy instructions on how to download nvm and set up node: https://www.theodinproject.com/lessons/foundations-installing-node-js

Next fork a copy of this repository to your github account and clone a local copy using the command

```
git clone git@github.com:@your-github-username/@your-forked-copy.git
```

and download the following dependencies:

### Webpack

Download Webpack locally with

```
npm install --save-dev webpack webpack-cli
```

and download the following:

**Webpack Local Server**

```
npm install --save-dev webpack-dev-server
```

**HTML Plugin**

```
npm install --save-dev html-webpack-plugin
```

**HTML Loader**

```
npm install --save-dev html-loader
```

**CSS Loader**

```
npm install --save-dev style-loader css-loader
```

For a more detailed guide on installing and working with Webpack see : https://webpack.js.org/guides/installation/

## Local Server
After sucessfully cloning the repository, in order to launch the program locally you will need to run the webpack server using the command

```
npm run serve
```

and then the program will load at http://localhost:8080/

## Known problems or tasks to complete

- [x] Updating CSS for better UX
- [x] Add Additional button that sorts projects by date "today", "Scheduled"
- [x] Optional feature : radio button check pushes the task to a seperate array - completed tasks -> With an option to view completed tasks, and to uncheck the radio and send it back to it's project.