# Notes - Angular Components

## TOPICS
* Templates
* Lifecycle
* Hierarchy
* Events
* Navigation

## Component Class
A component is a *Class* of components for an angular app.

To support and influence what users see as HTML output, the logic for all these features is defined right in the component class.

The main responsibility of the component class is to support and interact directly with the view.

An example of a "Photos" component class in `component.ts` is:

```
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
```

The component class contains a @Component decorator. 

A decorator is a feature that provides a way to add annotations and meta-programming syntax for class declarations. 

Angular needs this metadata so that it knows how to build that particular component.

The class takes specific properties, which are:

* `selector` -- The identifying name for the component, which can be used in an HTML template
* `templateUrl` -- The path of the HTML template file associated with component
* `styleUrls` -- The path(s) for the file(s) containing CSS stylesheets that the component can use

Angular attempts to automatically populate these values when generating components via the CLI.

The rest of the `component.ts` file contains an exported PhotosComponent class, with two methods

* `constructor()`, which is used primarily for dependency injection and initializing variables.
* `ngOnInit()`, which is called after the component has initialized. 

> The `ngOnInit()` method is a lifecycle method used to handle additional initialization tasks. 

### Components and Templates
#### Data in the Component Class
As we saw, the component class contains data for its HTML template to use. 

Consider the following Student component class:

```
// students.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  name: string = "Taylor";
  grade: number = 12;

  constructor() { }

  ngOnInit(): void {
  }

}
```

In the above example, there are two properties:

* `name`, which points to a `string` with the value `"Taylor"`
* `grade`, which points to a `number` with the value `12`

#### Interpolation
Interpolation is used to get the data from a component class.

Consider the following line: `<p>{{ name }} is a student in grade {{ grade }}.</p>`

Imagine this is part of a Component called `StudentComponent`, Angular first evaluates the data properties of the `{{ }}` syntax and then converts them to strings before rendering everything.

The result would look like this: `Taylor is a student in grade 12.`

As such, we can say that the name and grade properties are bound (i.e., through data binding) to the component class.

Along with being able to display text defined in between HTML tags, double curly braces (i.e., {{ }}) interpolation can be used to place text inside the tags themselves.

An example is `<img src="{{ imageUrl }}">` where it is doing a look up of a string path but returns an image when redered.

Interpolation can also be used to resolve expressions such as: `<p>10 minus 2 is {{ 10 - 2 }}.</p>`

Angular can also interpolate data from invoked functions.

```
getCourseGrade(): string {
	return "A+";
}

<p>The student's grade in this course: {{ getCourseGrade() }}</p>

The student's grade in this course: A+ 
```

> Data binding	== A process that allows apps to display data values to a user and respond to user actions (such as clicks, touches, and keystrokes). 

> Interpolation == A form of property data binding in which a template expression between double-curly braces renders as text.

### The Component Lifecycle
Every Angular component goes through a cycle: from the moment it is created and mounted to the document object model (DOM), all the way to the moment it is unmounted and ultimately destroyed. 

This is what is referred to as the component lifecycle.

At times, a component may need to invoke a function or apply some custom logic at certain points of its lifecycle. 

For example, consider an online bookstore that renders a list of available books to purchase when users visit the main page. 

As that component is mounted to the DOM, it must fetch the list of available books from the server.

We know that the component class is a great spot to put data and logic. 

To make sure that the custom code and logic are called at the right moments we leverage the component's lifecycle methods.

These predefined methods in the component class allow us to run any code or logic during any particular stage of the component's lifecycle:

* `ngOnChanges()`
* `ngOnInit()`
* `ngDoCheck()`
* `ngAfterContentInit()`
* `ngAfterContentChecked()`
* `ngAfterViewInit()`
* `ngAfterViewChecked()`
* `ngOnDestroy()`

These methods are called automatically during specific points in time of the lifecycle (e.g., `ngOninit()` during initialization).

You won't need to use leverage lifecycle methods in every single Angular application that you build. 

But using certain methods is considered standard in the industry and can greatly benefit your application's functionality.

#### ngOnInit
The `ngOnInit()` lifecycle method is called during the `OnInit` event, which occurs during the initializing phase of a component. 

It is one of the most common lifecycle methods you'll see and use, and is only called once during a component's lifecycle.

During this particular stage of the component lifecycle, Angular has already initialized all data-bound properties, meaning that we can use and manipulate that data as we choose.

Consider the following component, `Countries` as an example of `ngOnInit()`

```
// countries.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countryList: object[] = [];

  constructor() { }

  ngOnInit(): void {
    this.countryList = [
      {
        name: 'Spain',
        population: 46754778
      },
      {
        name: 'New Zealand',
        population: 4822233    
      },
      {
        name: 'United States of America',
        population: 331002651    
      }
    ]
  }

}
```

### Directives
The main responsibility for directives is to manipulate the DOM. 

There are three kinds of directives in Angular

* **Components** are directives with a template
* **Structural directive** manipulate the DOM by adding or removing DOM elements
* **Attribute directives** modify the appearance or behavior of a DOM element

One of the most useful Directives is `ngFor` which allow iterating over a list or collection.


Below is an example for interating over a list of countries.

```
// countries.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countryList: object[] = [];

  constructor() { }

  ngOnInit(): void {
    this.countryList = [
      {
        name: 'Spain',
        population: 46754778
      },
      {
        name: 'New Zealand',
        population: 4822233    
      },
      {
        name: 'United States of America',
        population: 331002651    
      }
    ]
  }

}
```

```
<!-- countries.component.html -->

<ul>
  <li *ngFor="let country of countryList">
    {{ country.name }} has {{ country.population }} people.
  </li>
</ul>
```

The `ngFor` is used in the component.html file to perform iterations of arrays in the components.ts file.

#### Conditional Rendering with ngIf
Another common structural directive you'll see and use is the `ngIf` directive.

This allows you to conditionally show or hide elements in the DOM based on a given expression.

An easier way to describe it is if Angular evaluates the expression as true, the DOM element will be added to the DOM.

Below is an example for a Blob component:

```
// blogs.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  title: string = 'My Favorite Blogs';

  constructor() { }

  ngOnInit(): void {
  }

}
```

```
<!-- blogs.component.html -->

<p *ngIf="title === 'My Favorite Blogs'">
  This is a list of my favorite blogs!
</p>
```

### Attribute Directives
Along with structural directives, we can also leverage attribute directives to help manipulate the DOM.

The attribute directive's main responsibility is to modify the behavior or appearance of a DOM element.

`ngStyle` is an attribute directive that updates styles for the containing HTML element:

```
// header.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Header';

}
<!-- header.component.html -->

<p [ngStyle]="{'font-size': title === 'Header' ? '48px' : '12px' }">This is the header.</p>
```

The above example component leverages the `ngStyle` directive to conditionally apply styles directly to the paragraph element.

#### Key Words

Term | Definition
:---: | ---
Attribute directive | Attribute directives modify behavior and appearance of page elements.
Directive | A class that can modify the structure of the DOM or modify attributes in the DOM and component data model. <br > <br /> A directive class definition is immediately preceded by a @Directive() decorator that supplies metadata.
Structural directive | Structural directives modify the structure of the DOM.


### The Component Hierarchy
We know that each component is responsible for "one thing," and should work with each other in such a way to serve the overall function of the application.

In Angular, the architecture of an application can be represented by a hierarchy, or tree of nested components:

![HIERACHY](https://video.udacity-data.com/topher/2021/February/602d87ca_screen-shot-2021-02-17-at-1.16.48-pm/screen-shot-2021-02-17-at-1.16.48-pm.png)

Each component serves either as "parent" component, a "child" component -- or even both a parent component and child component simultaneously.

A visual example of an app and it's components is a messaging application.

It may contain a: header component, a sidebar navigation component, a component to display all messages, and a form component for typing and submitting new messages.

Put together, these components are all nested under a parent messaging component.

![Message Compnent](https://video.udacity-data.com/topher/2021/February/602fd7e5_fsjs-c3-l2-messaging/fsjs-c3-l2-messaging.jpg)

Nested components help make up the overall architecture of an application.

By logically defining these component-component relationships, we can more easily manage data flow throughout the application, and structure our application in a predictable manner.

### Sending Data to a Child Component
#### Rendering Other Components
Below is an example of the `selector` identifier in a component class.

```
// src/app/photos/photos.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```

In the example component class above, the Photos component class is given a selector value of 'app-photos'.

This value allows it to be identified in a template and triggers its instantiation.

We can simply create a tag in a template with the name 'app-photos', and the entire component will be rendered right there in the view.

If the `Photos` component was a child of an `App` component with a sibling called `Header`, to get Angular to reder both "child" components, we configure it in the `App` component's templates.

```
<!-- app.component.html -->
<app-header></app-header>
<app-photos></app-photos>
```

Afterwards, Angular will take care of the rest and render the contents of each component's HTML template where you place them.

### Passing Data From Parent to Child:
Angular gives us a useful tool to facilitate passing data from a parent component to its child component. 

By leveraging the `@Input` decorator in the child component class, we can get it ready to receive data from its parent.

#### Key Words

Term | Definition
--- | ---
Input | When defining a directive, the @Input() decorator on a directive property makes that property available as a target of a property binding.
Property binding | Property binding in Angular helps you set values for properties of HTML elements or directives.

### Event Binding
Event binding allows us to listen for and respond to such user actions. 

We detect when something has occurred on a target DOM element, and in response, we can invoke certain function.

With event binding, we can send information from the template to its corresponding component class.

Example: `<button (click)="onClick()">Click me!</button>`

The block of code that says `(click)="onClick()"` shows standard event binding syntax in Angular, which is made of two parts:

* The **target event** name in parentheses to the left of the equal sign (i.e., `click`)
* The **template statement** on the right of the equal sign, which is the method `onClick()` called in the component class whenever the target event occurs.

This fits into a component like the below code:

```
// click.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.scss']
})
export class ClickComponent implements OnInit {

  clickAmount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.clickAmount += 1;
  }

}
```

When Angular detects a click event on the button, it invokes the onClick() method defined in the component class above.

### Sending Data to a Parent Component
`@Output` Allows Us to Pass Data from the Child Component to the Parent Component.

Consider a component, BooksList, that renders a list of individual BookItem components.

Each BookItem component in the view also includes a button that allows users to mark that particular book as their "favorite."

To notify the parents of certain actions that occur in its child component we can leverage the `@Output` decorator as well as the `EvenEmitter` class to do just that.

```
// book-item.component.ts

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book;
  @Output() marked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
```

```
<!-- book-item.component.html -->
<p>{{ book.title }}</p>
<button (click)="marked.emit(book)">Mark as favorite</button>
```

When a click occurs, marked (i.e., the EventEmitter object that we just created) calls its emit() method to emit the event, along with any value that we pass in (the book object, in this case).

### Output Property Binding
Similar to the event binding, we can bind an event handler method from the parent `BooksList` component to the output property of its child component.

```
<!-- books-list-component.html -->
<h1>List of available books</h1>
<app-book-item *ngFor="let book of bookList" [book]="book" (marked)="markAsFavorite(book)"></app-book-item>
```

In the above template, we "capture" the event emitted from the child component on the `marked` output property. 

This way, when the user clicks the button, the `BooksList` component invokes its `markAsFavorite()` method:

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  bookList: object[] = [];

  constructor() { }

  ngOnInit(): void {
    this.bookList = [
      {
        id: 1,
        title: 'Pride and Prejudice',
      },
      {
        id: 2,
        title: 'The Great Gatsby',
      },
      {
        id: 3,
        title: 'The Catcher in the Rye',
      }
    ]
  }

  markAsFavorite(book: any): void {
    console.log(`${book.title} has been added to favorites.`);
  }
}
```

`@Output()` marks a property in a child component class as a "doorway" that allows data to flow from the child component to its parent component.

### Navigation
#### Single-Page Application (SPA)
One of the main benefits of using Angular is its ability to create a single-page application. 

Previously, to navigate from one page on a web application to another, we'd have to request the page directly from the server. Once we got the response back, only then would the browser load the new page.

In a single-page application, there is just a single backend route rendering HTML (i.e., in Angular, it is `src/index.html`).

This means that the entire page isn't reloaded every time the user clicks on a hyperlink. 

Rather, after the Angular application is initialized (and `index.html` is retrieved), navigation between views in an application is all handled on the client-side (i.e., the front end).

#### The Angular Router
The Angular Router enables navigation in an application by interpreting a change in the URL as an instruction to change the view. 

Angular provides this in the @angular/router package, giving us the ability to easily navigate between different components.

> Enabling and using Angular Routing can be done at a later stage using the [AppRoutingModule](https://angular.io/tutorial/toh-pt5#add-the-approutingmodule)

#### The App Routing Module
When setting up routing via the Angular CLI, the Angular CLI automatically generated an `AppRoutingModule` (see `src/app/app-routing.module.ts`) for us. 

Conveniently, it also added the `AppRoutingModule` to the main `AppModule`, making it ready for immediate use.

Within the AppRoutingModule, the forRoot() method is invoked on the imported RouterModule. 

Under the hood, this helps create all the directives, the given routes, and the Router service itself. 

It allows us to perform any navigational tasks we need and even extends the ability of our components to handle navigation logic. 

> `forRoot()` accepts a single routes parameter, which needs configuring in order to set up routing properly.

#### Configuring the Angular Router
In order to map a component to a particular path, most of the work involves configuring `routes`, which is an array of `Route` objects. 

Each object in the array defines a route in the application, as well as the component that responds to that route.

For example, consider a web application that shows information about the libraries in your local county. Its routes may look something like this:

```
// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LibrariesComponent } from './components/pages/libraries/libraries.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'libraries/:id', component: LibrariesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Each object in the routes array represents a route definition. At the very least, each object contains:

* `path` property, which points to the desired URL path
* `component` property, which tells Angular which component to show when the user visits the path

### Rendering Components with `router-outlet`
Recall that one of the tools that the `RouterModule's` `forRoot()` method returns is a set of directives that we can use in our components. 

One of these is the `router-outlet`, which can be used as a placeholder (that Angular will dynamically fill in) for all the routed components in the `AppRoutingModule`.

We place the router-outlet into the top-level AppComponent's template:

```
<!-- app.component.html -->
<app-header></app-header>
<router-outlet></router-outlet>
```

In the above example, the `AppComponent` template first renders `app-header`, which is a typical header component.

Rendered below it is the `router-outlet` directive, which serves as a place where all components defined in the `AppRoutingModule` will be rendered.

### Creating a Nav Bar
In order to make anchor tags (`<a>`) work properly in the browser, we must add the proper route to the `routerLink` directive. 

```
<!-- navigation.component.html -->

<h1>Library Directory</h1>

<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/contact">Contact us</a>
</nav>
```

Since we are building a single-page application, using `routerLink` (versus `href`) allows us to navigate to other components without reloading the page. 

Note that unlike the `path` property of the `Route` objects we saw previously, there is a preceding `/` that we use before the component name in the value for `routerLink`.

### Dynamic Routing
We saw a route object defined in the App Routing Module that points to a dynamically-generated path:

```
// app-routing-module.ts

const routes: Routes = [  
  { path: '', component: HomeComponent },  
  { path: 'contact', component: ContactComponent },  
  { path: 'libraries/:id', component: LibrariesComponent },  
];  
```

With the above snippet, the user would access the library whose `id` is `8` when visiting `http://localhost:4200/libraries/8`

However, how can we dynamically generate links to these views? The answer is with simple interpolation:

```
// libraries.component.html  
<a routerLink="libraries/{{ library.id }}"> More Details </a>  
```

Since we'd expect to have access to the `library` object's `id` property, we can interpolate that as into the value of `routerLink`. 

The link will be dynamically generated for us, allowing your users to see more information about that particular object. 

#### Key Terms

Term | Definition
--- | ---
Router | A tool that configures and implements navigation among states and views within an Angular app.
Router outlet | A directive that acts as a placeholder in a routing component's template. <br > <br /> Angular dynamically renders the template based on the current router state.

