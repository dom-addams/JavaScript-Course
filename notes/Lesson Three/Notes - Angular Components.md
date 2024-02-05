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




























