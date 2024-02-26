# Notes - Angular Data

## TOPICS
* Observable
* HTTP Client
* Forms
* Form Validation

### Observables
Most of the time Angular works Synchronously but in real-world cases, it often needs to work Asynchronously.

Developers use an asynchronous approach when fetching data from servers. This way, the application continues running normally while waiting for the data.

The core principle behind observables is that they return a "stream" of data. 

Then the code can subscribe to this stream and get notified of everything happening in that event so it can react and take whatever action(s) it needs. 

The illustrations below shows the process of an observable:

![ILLUSTRATION](https://video.udacity-data.com/topher/2021/February/602db873_screen-shot-2021-02-17-at-4.44.17-pm/screen-shot-2021-02-17-at-4.44.17-pm.png)

A summary of the core principles is:

1. Observable returns a "stream" of data
2. Code subscribes to the observable
3. The app takes any action required accordingly

### The RxJS Library
Angular provides an implementation of observables via the `Observable` class in the [RxJS Library](https://rxjs-dev.firebaseapp.com/guide/overview). (AKS Reactive Extensions for JavaScript).

### The HTTP Client
Angular offers a built-in HTTP client to make requests to get data from a server.

Through Angular's HTTP client, we can make requests using [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), allowing us to create, read, update, and delete data as we need in our applications.

### Importing the `HttpClientModule`
To use the HTTP Client in Agular, we need to import the HTTP Client Module first.

1. `import HttpClientModule from @angular/common/http`
2. `import HttpClien from @angular/common/http`

Both of these should be imported to AooNidyke ti gaub access to HTTP client and be able to make requests.

#### Examples
* Importing the HttpClientModule:

```
// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/components.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

* Creating the HTTP Service:

```
// http.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<[]> {
    return this.http.get<[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
```

> . In this example, for the URL, we use the "comments" resource of [JSONPlaceholder](https://jsonplaceholder.typicode.com/), which is a free REST API that returns a list of comments.

### Subscribing to a Return Value
To get a component in Agular to subscribe to a stream, we add `.subscribe()` to the Class Constructor.

#### Example
* Configuring the Component Class:

```
// comments.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-users',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getComments().subscribe(data => {
      this.comments = data;
    });
  }
}
```

In this example we first import `HttpService` and injected it into our `constructor()`. 

We also create a property, comments, to store any incoming data.

Inside the ngOnInit() lifecycle method, we invoke the getComments() method we had created in the service earlier.

However, since it returns a stream of data, we use the subscribe() method to subscribe to it.

We then set the result to the component class's comments property.

> [HttpClient](https://angular.io/api/common/http/HttpClient) in the official Angular documentation
> [Get data from a server](https://angular.io/tutorial/toh-pt6#get-data-from-a-server) from the official Angular documentation
> [JSONPlaceholder](https://jsonplaceholder.typicode.com/), a free REST API for testing and prototyping
> [3 Methods for Reading Local JSON Files in Angular](https://www.techiediaries.com/angular-local-json-files/)


### Forms and User Input
#### User Input
User input comes in different forms from payments details to logging in or performing a search query.

After hitting the "submit" button, the data you entered is then sent to a server via an API call, or stored locally on the client-side (e.g., [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) or [sessionStorage](https://developer.mozilla.org/en-us/docs/Web/API/Window/sessionStorage)). 

To facilitate and process the input from users, web applications take advantage of forms.

#### HTML Forms
Traditional websites use HTML [form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) elements.

These contain a `<form>` element whuch nested input elements such as `<input>`, `<select>`, and `<textarea>`.

Angular offers a convenient way to track and validate the entire form's state: through **two-way binding**.

By binding the value of a form input to a property in the component class, we can share user input data from view to the component class and in the opposite direction: from the component class to the view.

Since data is synced and can be shared in both directions, this allows us to both read and write data simultaneously.

### The `FormsModule`
The generally most common way to use the `FormsModule` is with the following three steps:

1. Import the `FormsModule` from `@angular/forms`
2. Create properties in the component class through which user input will be bound.
3. Create the form elements in the component's HTML template, each leveraging the `ngModel` attribute directive.

### Examples:
* Adding the `FormsModule`

```
// app-module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBlogComponent } from './create-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

* Configuring the Component Class

```
// create-blog.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  title: string = '';
  blogContent: string = '';
  public: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Your submit logic here (e.g., making an API call that sends form data)
  }

}
```

* Control Inputs with ngModel

```
<!-- create-blog.component.html -->

<h1>Create a blog post</h1>

<form (ngSubmit)="onSubmit()">
  <label>Blog title</label>
  <input type="text" name="title" [(ngModel)]="title">

  <label>Blog content</label>
  <textarea name="blogContent" [(ngModel)]="blogContent"></textarea>

  <label>Post blog publicly?</label>
  <input type="checkbox" [(ngModel)]="public" (change)="public = !public">

  <button type="submit">Submit</button>
</form>
```

> There are two [form options](https://angular.io/guide/reactive-forms). Template-driven forms && Reactive Forms

> Two-way binding by using the NgModel directive allows you to display a data property and update that property when the user makes changes.

* [Listening for form submissions](https://angular.io/api/forms/NgForm#listening-for-form-submission) from the official Angular documentation
* [ngModel](https://angular.io/api/forms/NgModel) from the official Angular documentation
* [FormsModule](https://angular.io/api/forms/FormsModule) from the official Angular documentation
* [Two-way binding](https://angular.io/guide/two-way-binding) from the official Angular documentation
* [Building a template-driven form](https://angular.io/guide/forms) from the official Angular documentation


### Form Validation
* What is Form Validation?

The process of checking form data for accuracy and completeness is what's known as form validation.

By validating form data, we can control and improve the integrity of the data that we collect.

### Validating Template-Driven Forms
To validate the values of input fields in the form, we use Angular's built-in validators, which are attributes we place directly on form elements. 

Some common validators you might use include:

* `required`, which requires that the input value is non-empty
* `minlength`, which requires that the length of the input value is greater than or equal to the provided length
* `maxlength`, which requires that the length of the input value is less than or equal to the provided length

> For a full list of validators, check out [Validators](https://angular.io/api/forms/Validators) in the Angular documentation.

### Examples
* Template for `CreateBlogComponent`

```
<!-- create-blog.component.html -->

<h1>Create a blog post</h1>

<form (ngSubmit)="onSubmit()">
  <label>Blog title</label>
  <input type="text" name="title" required minlength="6" [(ngModel)]="title">

  <label>Blog content</label>
  <textarea name="blogContent" [(ngModel)]="blogContent"></textarea>

  <label>Post blog publicly?</label>
  <input type="checkbox" [(ngModel)]="public" (change)="public = !public">

  <button type="submit">Submit</button>
</form>
```

In the above snippet, we check that the value for the title input meets two conditions to be considered valid:

* It must be required for submission, as designated by the required validator
* It must contain 6 or more characters, as designated by the minLength validator

### Error Messages
One of the ways that web applications let the user know that form data is inaccurate or incomplete is through error messages. 

These error messages aren't typically visible by default, only visible when the user supplies invalid form data. 

Below is an example for how to show errors upon invalid input:

```
<!-- create-blog.component.html --> (updated)

<form (ngSubmit)="onSubmit()">
  <label>Blog title</label>
  <input 
    type="text" 
    name="title" 
    required 
    minlength="6" 
    [(ngModel)]="title" 
    #blogTitle="ngModel">

  <label>Blog content</label>
  <textarea name="blogContent" [(ngModel)]="blogContent"></textarea>

  <label>Post blog publicly?</label>
  <input type="checkbox" [(ngModel)]="public" (change)="public = !public">

  <button type="submit">Submit</button>
</form>

<div *ngIf="blogTitle.invalid && blogTitle.dirty">
  <div *ngIf="blogTitle.errors.required">
    Please provide a title for your blog post.
  </div>
  <div *ngIf="blogTitle.errors.minlength">
    The title of the blog must contain at least 6 characters.
  </div>
</div>
```

> Implementing error messages when handling invalid form data is made possible by the ngIf structural directive. 
> It is through this directive that conditional rendering is possible.

### Disabling the Submit Button
Along with rendering error messages, we can also let the user know that their input isn't ready for submission by disabling form submission altogether.

```
<!-- create-blog.component.html --> (updated)

<form #form="ngForm" (ngSubmit)="onSubmit()">
  <label>Blog title</label>
  <input 
    type="text" 
    name="title" 
    required 
    minlength="6" 
    [(ngModel)]="title" 
    #blogTitle="ngModel">

  <label>Blog content</label>
  <textarea name="blogContent" [(ngModel)]="blogContent"></textarea>

  <label>Post blog publicly?</label>
  <input type="checkbox" [(ngModel)]="public" (change)="public = !public">

  <button type="submit" [disabled]="form.invalid">Submit</button>
</form>

<div *ngIf="blogTitle.invalid && blogTitle.dirty">
  <div *ngIf="blogTitle.errors.required">
    Please provide a title for your blog post.
  </div>
  <div *ngIf="blogTitle.errors.minlength">
    The title of the blog must contain at least 6 characters.
  </div>
</div>
```
