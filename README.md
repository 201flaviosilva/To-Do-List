# To-Do-List

## Description

My goal with this project is to learn how to use multiple FE technologies together, while using it I develop a simple application like a to do list

## MVP

- [x]  Login/sign up/guest mode system;
- [ ]  Create a new task;
- [ ]  Search the list;
- [ ]  Remove:
     - [ ] Individually;
     - [ ] All;
     - [ ] Completed;
     - [ ] Repeated;
- [ ] Save in local Storage;
- [ ] Favorites;
- [ ] Individual changes:
     - [ ] Mark as completed;
     - [ ] Mark as favorite;
     - [ ] Change the title/name of the task;

## Used Technologies

- [x]  [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
- [x]  [![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
- [x]  [![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
- [x]  [![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
- [x]  [![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
- [x]  [![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main)
- [ ]  [![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)[![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/)
- [ ]  [![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)](https://www.cypress.io/)
- [ ]  [![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)
- [ ]  [![Electron](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white)](https://www.electronjs.org/)
- [x]  ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
    - [x]  Issues;
    - [x]  Pull Requests;
    - [x]  Projects;
    - [ ]  Wiki;
    - [x]  Milestones;
    - [x]  ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)


## Make it run

### Clone and change directory

Clone the project and move it into the project folder:

```sh
git clone https://github.com/201flaviosilva/To-Do-List.git
cd To-Do-List
```

### Install the dependencies

To install the node dependencies, you need to have [node and npm](https://nodejs.org) installed in you machine.

```sh
npm i
```

### Start the app

To make the app running and open a browser window just run:

```sh
npm start
```

## Available Commands

| Command            | Description                                                                     |
| ------------------ | ------------------------------------------------------------------------------- |
| `npm run clear`    | Delete the `build` and `out` and `dist` folder                                  |
| `npm i`            | Install project dependencies                                                    |
| `npm start`        | Start project and open web server running project                               |
| `npm run build`    | Builds code bundle with production settings (minification, uglification, etc..) |
| `npm run preview`  | Start a local development server with Vite and preview the application          |
| `npm run lint`     | Fix code styles and some problems                                               |
| `npm run analyze`  | Builds the project and analyzes the size code bundle                            |
| `npm run depcheck` | Prints the not used dependencies                                                |
| `npm run bump`     | Updates the package version and creates a new tag on github                     |
