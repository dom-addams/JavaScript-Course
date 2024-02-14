# Notes - Angular Libraries & Services

## TOPICS
* Dependency Injection
* Services
* NPM Dependencies

### Dependency Injection
A dependency injection is a design pattern and mechanism for creating and delivering some parts of an application (dependencies) to other parts of an application that require them.

* **Why is dependency injection important?**
	* We can create a dependency outside of the class i.e. component that directly uses it
	* It promotoes modularity
	* Helps maintain single-responsibility principle

> Dependency	In Angular == dependencies are typically services, but they also can be values, such as strings or functions.

#### The Issue of Static Data
Along with keeping the fetching of data separate from the component, there is another issue with using pre-defined static data i.e. list of countries. 

This means, the data isn't likely to be "hard-coded". Instead, the data will likely come from asynchronous sources. 

### Services
Components are responsible for one thing and one thing only: presenting data to the view.

components make up the core user interface of an application and are only concerned with what the user sees on the page and how it behaves.

Any other task can (and should) be delegated to another dependency, such as a **service**.

#### Generating a Service
The syntax of the command to create a new service is `ng generate serivce {name}`.

This command creates any necessary file and automatically registers it for use anywhere in the app.

#### Service Example -- Countries
Below is an example of a component called Countries that contains hard-corded data.

The below example codes show 1) original component with data 2) new empty service 3) Updated component + service

1) Countries component

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

2) New empty service

```
// country.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }
}
```

3) Update service.ts and component.ts

```
// country.service.ts (updated)

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries() {
    return [
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
    ];
  }
}
```

```
// countries.component.ts (updated)

import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countriesList: object[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countriesList = this.countryService.getCountries();
  }

}
```

> Services are automatically added to modules when created. (registered with the "root" injector of the application.)

> In Angular, a class with the @Injectable() decorator that encapsulates non-UI logic and code that can be reused across an application. 

> Angular distinguishes components from services to increase modularity and reusability. 

> The @Injectable() metadata allows the service class to be used with the dependency injection mechanism.


### NPM Dependencies
You can extend your applications by integrating a third-party (i.e., external) library, which can further add or modify functionality to our Angular applications.

For example, the utility "helper" methods in lodash(opens in a new tab) can simplify your code and make it easier to maintain.

The Angular CLI gives us a convenient command to add support for a third-party library to an existing application: `ng add`. 

This command uses your package manager (i.e., npm) to download the dependency and use a provided installation script to automatically further configure it in your application. 

This includes updating any necessary files and modules and even installing any other additional dependencies needed.

> CSS styling example = `ng add @ng-bootstrap/ng-bootstrap`

Angular also adds the necessary imports to the `AppModule`, update the main configuration file `angular.json` and updates the plyfills file for browser compatibility.

> **The automatic updates and configurations only work if the library includes them in the first place**

> It's possible to use `npm i` to install dependencies but in this case you'll have to manually add the package to all relevant files in the angular app

### Unit Testing Components
Out of the box, Angular comes with all the tools you need to get started on unit testing immediately.

Angular leverages both the Jasmine(opens in a new tab) testing framework, as well as the Karma(opens in a new tab) test runner tool.

When generating components via the Angular CLI, a <component name>.spec.ts file is created alongside the other component class files.

You can write unit tests to check undividual component functions and call use the angular syntax to reference them.

Below is an example file containing tests for a "posts" component:

```
// posts.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    expect(component.title).toBe("Posts");
  });
});
```

> Use the `ng test` command to run the unit tests

* [Basics of testing components](https://angular.io/guide/testing-components-basics#basics-of-testing-components) from the Angular documentation
* Testing from the official Angular [documentation](https://angular.io/guide/testing)
* [Jasmine documentation](https://jasmine.github.io/pages/docs_home.html)
* [Karma](https://karma-runner.github.io/latest/index.html) test runner

