# **_Unit Testing With Jasmine_**

## Goals:
* Unit Testing and Test Driven Development
	* Testing paradigm
	* Important of testing
	* Best practices for testing

* Configuring Jasmine to work with Node.Js and endpoint testing
	* Configuring Jasmine
	* Endpoint testing

* Writing & Running Tests including asynchronous testing and setup & teardown best practices
	* Writing suites and specs
	* Setup and teardown

### Why Use Jasmine?
* Automated Testing
	* Tests are run when code is integrated
	* Alerts you when refactored code affects other code
	* Helps find issues early 
	* Encourages simple, modular, easy-to-maintain code
	* Most commonly tests are Unit Test
	* Allows testing of individual pieces of code
	* Check if operation is correct or approriate error is returned

* Approaches
	* Behvaior Driven Development (BDD) -- Tests focus on user behavior
	* Test Driven Development (TDD) -- Tests focus on code results

> [What is Test Driven Development?](https://www.agilealliance.org/glossary/tdd/#q=~(infinite~false~filters~(postType~(~'page~'post~'aa_book~'aa_event_session~'aa_experience_report~'aa_glossary~'aa_research_paper~'aa_video)~tags~(~'tdd))~searchTerm~'~sort~false~sortDirection~'asc~page~1))


### Expert Approach to Testing
* Start with the simplest tests to identify any major failures early on
* Add tests for more complex situation and edge cases
* Test for graceful error handling
* Add more tests as needed

### Test Design Best Practices
* Test file structure and file names should match the app.
* Describe and name the tests to be easy to read and maintain.
* Design app features with pseudo code to inform tests.
* Pseudo code provides an overview of the application complexity and finds the easiest pieces of the test to write, build, refactor, and reiterate.

### DRY (Don't Repeat Yourself)
* Write short tests that allow you to pinpoint why the test is failing.
	* Try writing short, uncomplicated tests to check an object with data
	* It should pass and test each value in the object.
	* Try the test again with an object with data that should fail

### Tests should be reliable
* Tests should only fail when there are bugs in the tested code.
* Avoid conflicts with other tests.
* Call the correct objects for each test. The wrong objects may have the wrong input and create an error.
* Import the correct file for the test to avoid errors.

> [Unit Tests, How to Write Testable Code and Why it Matters](https://www.toptal.com/qa/how-to-write-testable-code-and-why-it-matters).


### Best Practices For File Naming
When creating files for tests, a best practice is to name the `.ts` file the same as the `.j`s file to be tested with `Spec` appended to the end. 

The more tests needed to be run, the more test files will need to be created. 

Follow this best practice to keep track of the test file that contains the tests for each .js file.

> [jasmine-spec-reporter TypeScript support documentation](https://github.com/bcaudan/jasmine-spec-reporter/tree/master/examples/typescript)

### Writing Unit Tests 
Jasmine uses Suites and Specs

* **Spec:** an individual test
* **Suite:** a collection of similar tests related to one function
* Tests should cover ***all*** intended behaviors.
* Error handling should also be tested

#### Basic Test Types include:
* Comparisons
* Turthiness
* Matchers

#### Jasmine Syntax
Use the **describe** keyword followed by a short description of what the suite is testing and one or more specs.

A best practice is to start a sentence with “it” and then complete the sentence with the description of what the suite is testing.

Example:

```
describe(“suite description”, () => {
    it(“describes the spec”, () => {
        const myVar = true;
        expect(myVar).toBe(true);
    });
}); 
```

### Test Types

#### Comparisons
* Comparison can compare strings, numbers, objects, or arrays
* `.toEqual(expected value)` checks if the tested value is equal to the expected value
* `.toBe(expected reference)` checks if tested object is the same object

#### Truthiness
* `.toBeTruthy()` passes when
	* The expectation has any non-zero value
	* The expectation evaluates to `true`
* `.toBeFalsy()` passes when the value is:
	* `0`
	* `''` (an empty string)
	* `undefined`
	* `null`
	* `NaN`
* If you just need the Boolean value of `false`, use `.toEqual()`

#### Numerical Matchers
* `.toBeCloseTo(expected value, precision)`
	* Passes if a value is within a specified precision of the expected value
	* Precision is optional and is represented the number of decimal points to check (defaults to 2)
* `.toBeGreaterThan(expected value)`
* `.toBeLessThan(expected value)`
* `.toBeGreaterThanOrEqual(expected value)`
* `.toBeLessThanOrEqual(expected value)`

#### Negating Other Matchers
* In JavaScript, use the `!` to negate
* In TypeScript, use `not`
* In Jasmine, use `.not`

#### Exceptions
* `.toThrow(expected value)`
* `.toThrowError(expected value, expected message)` Expected value and expected message are optional

### Other Matchers
* `.toContain(expected value)`
* `.toMatch(expected value)`
* `.toBeDefined()`
* `.toBeUndefined()`
* `.toBeNull()`
* `.toBeNan()`
* [Custom matchers](https://jasmine.github.io/tutorials/custom_matcher)

### Key Words
Term | Definition
--- | ---
Comparison Test | A type of test that compares strings, numbers, objects, or arrays
Numerical Matchers Test | A test of numerical values within a specified range of the expected value
Spec | An individual test
Suite | A group of related tests
Truthiness | When a conditional proves to be truth-like such as the boolean true or a condition being `true`, or a value not equal to `0`, `NaN`, `undefined`, `null`, or empty.

> Jasmine's full [documentation](https://jasmine.github.io/api/3.6/matchers.html) for working with matches.

> `toBe` only compares the values for primitive types. For a non-primitive array, it checks to see if they are the same item in memory.

### Testing Asynchronous Code
The key to testing async code is letting Jasmine know when it’s ready to be tested.

* Using **async/await** syntax makes testing easier
	* Jasmine syntax mimics JavaScript syntax
	* Add **async** before the asynchronous function call
	* Add **await** before the return
	* Testing occurs after the return

* Using promise syntax with Jasmine
	* **Promise** values are included in the **return** statement
	* Test is run in the `.then()` statement that is chained to the return value

* Testing promise resolution and rejection with [ES6 Promise Matchers Library](https://www.npmjs.com/package/jasmine-es6-promise-matchers)
	* `.toBeResolved()` tests if a promise is resolved and will return true if the promise is resolved
	* `.toBeRejected()` tests if a promise is rejected and will return true if the promise is rejected
	* `.toBeRejectedWith(expected value)` tests if the expected error is returned

### Endpoint Testing
#### Defining an Endpoint
An **endpoint** is the **URL** of the **REST API** with the method that gets, adds to, or modifies the data of an API in some way.

![DIAGRAM](https://video.udacity-data.com/topher/2021/March/603fa832_fsjs-c1-l3-endpoint/fsjs-c1-l3-endpoint.jpg)

#### Benefits of Endpoint Testing
* Confirms that the server is working.
* Confirms that endpoints are configured properly.
* More efficient than manual testing.

#### Adding a Framework for Endpoint Testing
Endpoint testing is not native to Jasmine and requires a third-party framework, like [Supertest](https://www.npmjs.com/package/supertest) to test the status of responses from servers.

> The below sample code shows how to configure SuperTest

```
// Install supertest dep
npm i supertest

// Add type definition
npm i --save-dev @types/supertest

// Import to indexSpec.ts file
import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async (done) => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
        done();
    }
)});

// Run tests
npm run test (assuming command is "jasmine")
```


### Setup and Teardown
#### Setup and Teardown of Suites
These Jasmine features allow you to

* Connect to a database before a test
* Connect to a different database for specific tests
* Run only a specific test
* Skip one or more tests

`beforeEach` and `afterEach`

* `beforeEach` takes a callback function where we can tell the test to perform a task before each test is run.
* `afterEach` is used if there is a task to be run after each test is complete.

Example: ```javascript describe("", () => { beforeEach(function() { foo = 1; });```

```
  it("", () => {
    expect(foo).toEqual(1);
    foo += 1;
  });

  it("", () => {
    expect(foo).toEqual(2);
  });
});
```

> `beforeEach` runs **before** each test
> `afterEach` runs **after** each test

`beforeAll` and `afterAll`

* To perform an operation once before all the specs in a suite, use beforeAll
* To perform an operation once after all the specs in a suite, use afterAll.

> `beforeAll` runs **before** the tests 
> `afterAll` runs **after** the tests

#### Handling More Than One Suite
Jasmine gives us the ability to use set up and teardown for more than just one suite. 

Whatever action is performed as setup or teardown for the parent suite, all sub-suites will also have access to the repeated or one-time setup or teardown.

Example: 

```javascript 
describe("A spec", function() { 
	beforeEach(function() { foo = 0; 
});
```

```
  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  describe("nested inside a second describe", function() {
    var bar;

    it("can reference both scopes as needed", function() {
      expect(foo).toEqual(bar);
    });
  });
});
```

![SUITES](https://video.udacity-data.com/topher/2021/March/603fadb8_fsjs-c1-l3-beforeall-and-after-all-muliple/fsjs-c1-l3-beforeall-and-after-all-muliple.jpg)

#### Skipping or Specifying Tests
To skip a test or suite, add x in front of describe or it. 

This can be helpful to avoid a time-consuming test.

To focus on one test or suite, add f in front of describe or it. 

This reduces clutter in the terminal.

Example:

```javascript 
xdescribe("A spec", function() { 
	it("is just a function, so it can contain any code", ()=> { expect(foo).toEqual(1); }); 
});
```

```
fdescribe("A spec", function() {
    it("is just a function, so it can contain any code", ()=> {
        expect(foo).toEqual(1);
    });
});
```

### Extra
* Suites are set up to organize the tests with one parent suite and 2 child suites.
* There are an object and an array providing data to be used within the child suites.
* `beforeAll();` can be used to run some code before the specs run, and any log statements show up before the specs.

* `afterAll();` allows functionality to be added after all of the specs in a suite have run. Log statements will show after the specs.
* `beforeEach();` and `afterEach();` will run before or after each one of the individual specs.
* `fdescribe` and `fit` allows jasmine to focus on one specific suite, skipping the others
* `xdescribe` and `xit` allows Jasmine to skip a specific suite or test, running all others.


### The Testing Pyramid
* **UI Testing:** Does the user interface work as expected?
* **End to End Testing:** Does the application work as expected?
* **Integration Testing:** Do services integrate as expected?
* **Unit Testing:** Does the code run as expected?

![PYRAMID](https://video.udacity-data.com/topher/2021/March/60401ce6_fsjs-c1-l3-testing-pyramid/fsjs-c1-l3-testing-pyramid.jpg)

#### Jasmine and Testing:
Jasmine works well with Unit Testing and Integration Testing. 

The difference between Unit Testing and Integration Testing is the use of third-party integration. 

An example would be function that creates an endpoint. This requires a Unit Test

However, if the use case requires testing of the response from the endpoint and requires a third-party tool to do so, this becomes an integration test.

Jasmine can be used for End-to-End Testing with a tool call Selenium to emulate user interactions.

For UI Testing, Jasmine is not helpful.

> [Microservice Testing: Unit Tests.](https://medium.com/@nathankpeck/microservice-testing-unit-tests-d795194fe14e)

