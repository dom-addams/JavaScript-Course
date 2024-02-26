# Notes - Angular Overview

## TOPICS
* Angular CLI
* Components
* Modules

### What Is The Angular CLI?
The Angular CLI is a command-line interface (CLI) that allows developers to initialize, develop, scaffold, and maintain Angular applications.

It allows you to perform the following actions:

* Create a new Angular application from the ground up
* Add features to the application, such as additional components or updates to dependencies
* Run unit tests
* Run a development server with live reload after changes
* Re-build the application on change (think Webpack)
* Build the application for production

Some useful commands are:

* `ng new` to create new agular application
* `ng generate` to add new features
* `ng test` to run unit tests
* `ng serve` to serve your app and reload on changes
* `ng build` to build the application
* `ng help` to see available commands and functions

### Components
A component is a fundamental building lock of an Angular App.

It controls a patch of the screen known as the view, which is displayed to the user as HTML output in a browser.

Each component consists of the following:

* HTML template (*.html file) that defines the user interface (i.e., what is actually rendered on the page)
* A TypeScript component class (*.ts file) containing the behavior and logic of the component. 
* CSS styles (*.css file) that define the presentation and style of the component

Components are fundamental to the architecture of Angular applications. 

Components not only directly influence the view, but they can also communicate with and influence other components.

To add new features/components to an angular app, use `ng generate <schematic> <name>`. 

#### Key Words
Term | Definition
--- | ---
Component | A class with the @Component() decorator that associates it with a companion template. Together, the component class and template define a view.
Module | In general, a module collects a block of code dedicated to a single purpose
Template | Code that defines how to render a component's view. A template combines straight HTML with Angular data-binding syntax, directives, and template expressions (logical constructs).
View | The smallest grouping of display elements that can be created and destroyed together.

### Modules
The officail definition is modules help maintain organization in an application by collecting code dedicated to a common responsibility, function, or purpose.

A module consists of the following:

* Cohesive, organized set of functionality
* TypeScript
* At least one root module (AppModule)
* Generated with Angular CLI

Registering a component with a module is crucial, as it allows the component to be recognized by Angular.

A compnent needs to be included in the `declarations` list of the module.

It also needs adding to `@NgModule`, `imports` list of the module TS file.

To generate a new module, use the following syntax: `ng generate module <name>`

Modules are sets of closely-related capabilities, a way to organize applications into more focused, cohesive areas. 

When a component is registered to a module, it can be found (and used) by Angular.

> [Introduction to Modules](https://angular.io/guide/architecture-modules) from the Angular documentation

> [Feature Modules](https://angular.io/guide/feature-modules) from the Angular documentation

