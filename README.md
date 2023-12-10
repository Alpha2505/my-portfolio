# MyPortfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

##Note - To publish the project to GitHub pages 

Option 1

$ npm i angular-cli-ghpages --save-dev
$ ng build --prod --base-href "https://GithubUserName.github.io/GithubRepoName/"
$ npx angular-cli-ghpages --dir=dist/Project-name


Option 2

$ git checkout -b gh-pages
$ git push origin gh-pages
$ npm install -g angular-cli-ghpages
$ ng build --prod --base-href `https://[username].github.io/[repo]/`
$ ngh --dir=dist/[project-name]`
