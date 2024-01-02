# _Developing with TypeScript_

## Goals:
* How to get started with TypeScript
* How to write Typescript using basic type definitions, interfaces, classes, and asynchronous code
* Using type definitions with third-party modules
* Best practices for using TypeScript
* Migrating code from JavaScript to TypeScript

## Lessons:
* TypeScript Fundamentals
	* What is TypeScript?
	* Getting Started

* Writing TypeScript
	* The basics
	* Advanced TypeScript

* Professional Environments
	* Type Definitions
	* Best Practices
	* Migrating to TypeScript

## Why TypeScript is Important
### What is Typing?
Typing exists in most languages. 

It adds an attribute to the thing being typed that has rules on how it can be used. 

It prevents coder errors like trying to pass in a string to a function using arithmetic operators.

Types are applied to:

* variables
* function parameters
* function returns
* object values

### JavaScript is Weakly-Typed.
This means that types are assigned by the interpreter based on the data.

It makes an educated guess when the code's intention is ambiguous. 

This can lead to unintended results.

Example: `undefined 2 + '2' = '22'`

### TypeScript Adds Typing to JavaScript
In short, TypeScript is a static and strong typed superset of JavaScript. 

When we're done with our TypeScript code, it compiles to JavaScript.

TypeScript may not be needed if you have a lot of code quality measures in place. 

Still, with how easy it is to learn and implement, it's generally worth it to reduce coder errors.

TypeScript offers the developer the ability to state their intentions clearly.

> Compile = Convert code from one language to another language with a different level of abstraction. Ex. Java to Machine Code.

### Installing and Using TypeScript
TypeScript can be installed locally or globally.

To install locally, use the `npm i` and for global, install following official [documentation](https://www.typescriptlang.org/download)

`npm i typescript --save-dev // save to devDependencies`

> `"build": "npm tsc"` is a build script that uses "node package executor" to run typescript

Dependencies in package.json the have an @ at the start are called "type definitions".

They are used when the "types" of these functions aren't known.

Definitions get created the these functions and installed just like a node module.

Most node modules have definitions but if no definition is available, your code will run but show a warning.

To use TypeScript, you need to add a script to your package.json file to compile TypeScript to JavaScript.

This is generally called your "build" script but could be named anything.

`
"scripts": {
    "build": "npx tsc"
  },
`

The command `npx tsc` in a project will transpile TypeScript to JavaScript. 

To execute your "build" script use the following command: `npm run build`

### Configuring TypeScript
`tsconfig.json` can also be named `jsconfig.json`.

To install the config file, run: `npx tsc --init`.

always check your compiler options to note what you are transpiling to as well as your output directory. 

Common output directory names include `dist`, `build`, `prod`, and `server`.

This config file is also where you can tell TypeScript how strict it should be while checking your code and what to ignore. 

If you're moving a project to TypeScript, you can gracefully integrate TS by working with the settings in its config file.

### ES6 Modules
When using TypeScript for applications, you can also easily utilize the ES6 module system vs CommonJS.

Destructuring should only be used when you are exporting the functions individually. 

If choosing to use export default, you must import the entire default as a module.

**Import Example:**

For importing modules, use the following syntax

```
// Rename the module
import 'name' from 'module';

// Use destructuring to pull in specific functions when they are exported individually
import {function, function} from 'module';
```

**Export Example:**

For exporting modules, use the following syntax

```
// Export an individual function or other type of object in code
export const myFunction = () => {};

// Export a single item at the end
export default object;

// Export a list of objects
export default {object1, object2};
```

### tsconfig.json Config File

**Helpful configurations to note:**

```
{
  "compilerOptions": {
    "target": "es5",                          
    "module": "commonjs",                     
    "lib": ["ES2018", "DOM"], 
    "outDir": "./build",                        
    "strict": true,                           
    "noImplicitAny": true,                 
  },
  "exclude": ["node_modules", "tests"]
}
```

The original config file will show many more options available than what is above. 

The application may require additional settings to be configured, but these are typically the main settings to start with.

* `target` - sets what version of JS TypeScript will be transpiled to.
* `module` - sets what module system will be used when transpiling. Node.js uses the common.js module system by default
* `lib` - is used to say what libraries your code is using. In this case, ES2018 and the DOM API
* `outDir` - where you want your src code to output to. Often named build, prod, or server (when using it serverside)
* `strict` - enable strict typing
* `noImplicitAny` - disallow the "any" type (covered in TypeScript Basics)
* `exclude` - directories to exclude in compiling

> Read about ES6 modules [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

### TypeScript Basics
TypeScript offers two types of typing:

Implicit Typing and Explicit Typing.

#### Implicit Typing
TypeScript will automatically assume types of objects if the object is not typed. 

It is best practice to allow TypeScript to type immutable variables and simple functions implicitly.

`const myNum = 3; // TypeScript implicitly types myNum as a number based on the variable`

Implicit Typing is a best practice when the app is self-contained.

Meaning that it does not depend on other applications or APIs or variables are immutable.

![IMPLICIT](https://video.udacity-data.com/topher/2021/March/603f9e26_fsjs-c1-l2-implicit-typing/fsjs-c1-l2-implicit-typing.jpg)

#### Explicit Typing
The developer does explicit typing. The developer explicitly applies a type to the object.

`let myVar: number = 3; // myVar has been explicitly typed as a number`

![EXPLICIT](https://video.udacity-data.com/topher/2021/March/603fa213_fsjs-c1-l2-explicit-typing/fsjs-c1-l2-explicit-typing.jpg)

#### Basic Types
`string` - used for string types, textual data

`
let studentName:string;
studentName = 'Dae Lee'
`

`number` - used for number types including integers and decimals

`
let studentAge: number;
studentAge = 10;
`

`boolean` - used for `true`/`false` types

`
let studentEnriched: boolean;
studentEnriched = true;
`

#### Union Types
Used in scenarios where data could be more than one type.

Often used with **null** and **undefined** subtypes.

- **null:** a variable is not declared yet
- **undefined:** a variable is declared but not defined

Examples:

`
let studentPhone: (number | string);
studentPhone = '(555) 555 - 5555';
studentPhone = 5555555555;
`

`null` - used when an object or variable is intentionally `null`, typically only functionally found in union types

```
const getCapitals = (str:string):string[] | null => {
  const capitals = str.match(/[A-Z]/);
  return capitals;
}

console.log(getCapitals('something'));
// returns null
console.log(getCapitals('Something'));
// returns ['S']
```

`undefined` - used when a variable has yet to be defined

```
const myFunc = (student: string | undefined) => {
  if ( student === undefined ){
    // do something
  } 
};
```

#### Odd Scenario
You can assign variables to type `null` or `udefined` but typically you wouldn't do this.

`let myNum1: ull = null;`

`let myNum2: undefined = undefined;`

In this scenario, instead of null, you could not define/create the variable.

And instead of undefined, you could leave off the type and allow TypeScript to implicitly interpret the type.

### More Basic Types
* VOID
	* Used as a return type when the function returns nothing
	* Can be passed as a parameter type making the param undefined

```
const myFunc = (student: string): void => {
  console.log(student);
};
```

* NEVER
	* Used as a return type when the function will never return anything
	* Used with functions that throw errors or infinite loops

```
const myError = (err: string): never => {
  throw new Error(err); 
}

const neverEndingLoop = (): never => {
	while (true) {}
}
```

Other scenarios can be times when you're unsure of what type of data the value with hold.

In these scenarios you can use `any` and `unknown`.

* ANY
	* Used when the type of the item being typed can be anything
	* Should be avoided as it avoid any form of typing for data
	* Recommended to set `noImplicitAny` as disabled

```
const myFunc = (student: any): any => {
  // do something
};
```

```
let myVal1: any = 'cat';
let myVal2: unknown = 'dog';
let myVal3: string = 'mouse';

const myFunc = (val: string) => { };
const myFunc = (val: any) => { };
```

* UNKNWON
	* Used when the type of the thing being typed is unknown. 
	* Used heavily for type assertion

```
const myFunc = (student: unknown): string => {
  // do something
}
```

#### What if we don't know the type?
In scenarios where any of the following are true, you can tell TypeScript to assign the required type.

* Variables are assigned dynamically
* Not sure of content type
* Must be a specific type to work

### Type Aseesrtions
* Similar to **typecasting** in other languages
* Doesn't affect value in JavaScript - only allows passsing of "unknown" type into a function
* Has two syntaxes
	* *as keyword*
	* *angle bracket notation*

As keyword: (value followed by "as type")
`const myVar = (req.query.param as unknown) as string;`

Using angle bracket notation: (place "type" in angle brackets followed by the value)
`const myVar = <string>(<unknown>req.query.param);`

Type Assertions are used to tell TypeScript even though a type is deinfed, it is actually a different type. 

The most common use case is when a type is unknown.

```
const myFunc = (student: unknown): string => {
  newStudent = student as string;
  return newStudent;
}
```

### Type Checking with typeof method
A JavaScript method used to determine the type of data.

Helpful when using third-party libraries

Example: `console.log(typeof myfunc(param));`

Returns most "types" but not all such as **Null** and **Promise** which will return as type **Object**.

### Notes
> Official [documentation](https://www.typescriptlang.org/docs/handbook/basic-types.html)

> TypeScript [cheatsheet](https://www.sitepen.com/blog/typescript-cheat-sheet)

> Explicit Typing	= When type is declared by the developer
> Implicit Typing	= When type is Inferred by the compiler

> Self-contained application = Implies the application receives data from no external sources


### Object-Like Types
Refers to indexes or tools to create those data structures.

* TypeScript Array:
	* Any length
	* Mixed types require the "union" type

Example: `const myArr1: number[] = [5, 10, 15, 20];`

Example mixed data: `const myArr2: (string|number)[] = ['cat', 1, 'dog', 2];`

* Tuples
	* TypeScript only -- not a JavaScript data type
	* Use only when length and data type are known
	* Allows for typing of specific elements in an array

Example: `const student: [string, number, string, string] = ['sarah', 12, 'math', 'science'];`

> When creating an array variable without defining type array. Typescript will interpret it as an array

* Enum
	* Not a JavaScript data type
	* Used for a set of predefined values i.e. moths, days, directions on compass
	* Data should be things that don't change
	* Can be mimicked in JavaScript using Object.freeze
	* Set values with **Enum varName** followed by comma-separated list of "keys"
	* PascalCase used for both varName and key names

Examples:

```
const compass = { 
	points: [North,South,East,West]
}
Object.feeze(myObj)
```

```
enum Compass { North, South, East, West };

const move = (dist: number, direction: Compass) => {
	return 'walk ${dist} paces ${direction}';
}
```

### Working With Objects in TypeScript
* Translating JavaScript Object into TypeScript
	* Not very feasible
	* Difficult to read
	* Better to use Interfaces or Type Aliases

* Interfaces
	* Preffered type for objects
	* Define shapre of objects using types (matches shape of interface as opposed to made using same interface)
	* Can only use object that matches type
	* Extendable
	* Open for adding new fields
	* Use PascalCase
	* Based on "Duck Typing" (if it walks like a duck, quacks like a duck, then it must be a duck)

Example:

```
interface Student {
	name: string;
	age: number;
}
```
	
Example creating and populating Interface:
```
interface Student {
	name: string;
	age: number;
	enrolled: boolean;
}

const stud2: Student { name: 'kara', age: 16, enrolled: false }
```

* Extending Interfaces is like Extending JavaScript Classess
* Extending is **NOT** adding more properties

Example:

```
interface Student {
	name: string;
	age: number;
	enrolled: boolean;
}

interface Undergrad extends Student {
	major: string;
}
```

Exmaple Duck Typing:
```
const myFunc = (person: Student) => {
	console.log(person);
}

interface Student {
	name: string;
	id: number;
}

const myStudent: Student = {
	name: "Deirdre Andrada",
	id: 11256
}

myFunc(myStudent);

// Replicate Inteface
interface Teacher	{
	name: string;
	id: number;
}

const myTeacher: Teacher = {
	name: "Dr. Olsen",
	id: 77491
}

myFunc(myTeacher);
```

> You can change value of Var using .ref for example: `myStudent.id = 3456`

### Optional and Readonly Properties
Typescript gives the ability to create both optional and read-only properties when working with object-like data.

* Optional 
	* Use when an object may or may not have a specific property
	* Set by adding a ? at the end of the property name.

```
interface Student { 
  name: string, 
  age: number, 
  enrolled: boolean,
  phone?: number // phone becomes optional
};
```

* Readonly
	* Use when a property should not be able to be modified after the object has been created. 
	* Keep in mind that this will only produce TypeScript errors 
	* The actual properties can still technically be changed as read-only does not exist in JavaScript. 
	* The closest thing in JavaScript is `Object.freeze` which stops properties of an object being modified.

```
interface Student { 
  name: string, 
  age: number, 
  enrolled: boolean,
  readonly id: number // id is readonly
};
```

### Type Aliases, TypeScript Classes and Factory Functions
* **Type Aliases**
	* Type aliases do not create a new type; they rename a type. 
	* You can use it to type an object and give it a descriptive name. 
	* But like the object type, once a type alias is created, it can not be added to; it can only be extended.
	* To create an object from type alias and then a second with additional properties, you need to extend the type alias and make your second object with the extended alias. 
	* This makes interfaces the preferred method for creating objects.

Type aliases become very useful when you would like a shorthand for something.

For example, creating multiple arrays of coordinates. 

It would need a tuple that accepts 2 numbers, defined as Coordinate.

This would allow creating multiple arrays of type Coordinate.

```
type Student = { 
  name: string; 
  age: number;
  enrolled: boolean;
};

let newStudent:Student = {name: 'Maria', age: 10, enrolled: true};
```

* **Classes**
	* TypeScript classes look and behave very much like the classes introduced in ES6. 
	* A class in programming is made up of member variables and member functions/methods. 
	* The same goes for TypeScript, with the big difference being variables (properties) are typed, as are the parameters and return types for our constructor and methods.

```
class Student {
  studentGrade: number;
  studentId: number;
  constructor(grade: number, id: number) {
    this.studentGrade = grade;
    this.studentId = id;
  }
}
```

* **Access Modifiers**
	* The biggest addition to TypeScript classes is the addition of access modifiers. 
	* Access modifiers are used in most object-oriented programming languages to declare how accessible a variable should be.
	* Consists of three forms of access: `public`, `private`, `protected`

* `public` 
	* By default, all properties of a TypeScript class are public
	* It's also commonplace to leave off the modifier to denote that it's public. 
	* Public properties can be accessed outside of the class.

* `private` 
	* Private properties can only be accessed and modified from the class itself. 
	* TypeScript uses the keyword private, but you can also use the # symbol for fields in EcmaScript. 
	* Private properties are only private in TypeScript; there are no true private properties in JavaScript.
	* A private property can still be changed if you ignore the error.


* `protected`
	* Protected properties can be accessed by the class itself and child classes.

```
class Student {
  protected studentGrade: number;
  private studentId: number;
  public constructor(grade: number, id: number) {
    this.studentGrade = grade;
    this.studentId = id;
  }
  id(){
    return this.studentId;
  }
}

class Graduate extends Student {
  studentMajor: string; // public by default
  public constructor(grade: number, id: number, major: string ){
      super(grade, id);
      this.studentId = id; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
      this.studentGrade = grade; // Accessable because parent is protected
      this.studentMajor = major;
  }
}

const myStudent = new Graduate(3, 1234, 'computer science');

console.log(myStudent.id()); //  prints 1234
myStudent.studentId = 1235; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
console.log(myStudent.id()); // prints 1235
```

* **Factory Functions**
	* Factory Functions for creating JavaScript objects are still useable within TypeScript. 
	* To create a factory function with explicit typing.
	* Create an interface with the object's properties and methods and use the interface as the return type for the function.

```
interface Student {
  name: string;
  age: number
  greet(): void;
}

const studentFactory = (name: string, age: number): Student =>{ 
  const greet = ():void => console.log('hello'); 
  return { name, age, greet };
}

const myStudent = studentFactory('Hana', 16);
```

### Key Terms
> Duck typing = A programming paradigm where if two or more structures (functions, interfaces, objects) have the same properties, they can be used interchangeably regardless of any type declarations

> Access Modifier = Used in classes to declare how a property or method can be accessed from the application

> Enumerated type = A set of constants that are automatically indexed and can be called by their name or index

> Interface = Used as a blueprint to declare the shape of something reuseable such as functions, objects, and classes

> Tuple = A data type of an array with a set number of values where all value types are known

### Generics and Asynchronous TypeScript
To fully understand how promises are typed in TypeScript, you need to understand Generics. 

A generic is a way to write a function that is reusable across different types. 

Why not just use any? Well, any allows for any type to go in, and any type to come out. 

Using a generic means a number goes in and a number comes out or a string goes in and a string comes out.

### Generics
* Reuseable components that can be used with different types
* Allows using generic *types* as parameters
* Uses angle bracket syntax <T> where T is type of parameter

Generics introduce the Type Variable. 

Rather than being a variable that accepts values, it's a variable that accepts types

It is denoted with angle brackets `myFunc<T>`. 

It's common to see a capital T being used at the type in the generic to denote the use of a type.

Example:

```
// Typed Function
const getItem = (arr: number[]):number => {
  return arr[1];
}

// Generic Function
const getItem = <T>(arr: T[]):T => {
  return arr[1];
};
```

### Using Generic Functions
**Generic Function:**

```
const getItem = <T>(arr: T[]):T => {
  return arr[1];
};
```

**Implicit typing:**

`javascript getItem([1, 2, 3]); // Implicitly typed as number`

**Explicit typing:**

`javascript getItem<number>([1,2,3]); // Explicitly typed as a number`

#### Extra
when working with Promises, Promises is capitalized and it uses the new keyword to create one `new Promise`.

That means that Promise is actually a constructor function (or class if using post ES6 terminology). 

Promises are built-in objects that have their own properties and methods.

### Asynchronous TypeScript
* **async/await** always returns a promise
* Use **Promise<type>** to set the type returned

The return type of an asynchronous function using async/await syntax is always a Promise. 

Promises in TypeScript take advantage of generics. 

This means we can explicitly state what type of Promise should be returned.

Example Promises As Generics:

```
const myFunc = async ():Promise<void> => { 
	const result = await asyncFunc();
	console.log(result);
};
```

### Async Return Types
With a function that returns a Promise, use the generic type variable to state what type of Promise should be returned. `Promise<number>`

Example PROMISES with THEN chaining:

```
// Three step consts as numbers for build house
const step1 = (): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = 1;
                console.log('complted step 1')
                resolve(nextStep);
            } catch (error) {
                reject();
            }
        }, 1000);
    });
};

// Const step 2 nextStep as number
const step2 = (step: unknown): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = (step as number) + 1;
                console.log('completed step ${nextStep}');
                resolve(nextStep);
            } catch (error) {
                reject();
            }
        }, 1000);
    });
};

// Const step 3 nextStep as number
const step3 = (step: unknown): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = (step as number) + 1;
                console.log('completed step ${nextStep}');
                resolve(nextStep);
            } catch (error) {
                reject();
            }
        }, 1000);
    });
};

// Call all three steps using then
step1()
    .then((result: number) => {
        return step2(result);
    })
    .then((result: number) => {
        return step3(result);
    })
    .then(() => {
        console.log('you house is built');
    })
    .catch(() => {
        console.log('there was an error with the build');
    });
```

Example ASYNC RPOMISES:

```
// Three step consts as numbers for build house
const step11 = (): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = 1;
                console.log('complted step 1')
                resolve(nextStep);
            } catch (error) {
                reject();
            }
        }, 1000);
    });
};

// Const step 2 nextStep as number
const step22 = (step: unknown): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = (step as number) + 1;
                console.log('completed step ${nextStep}');
                resolve(nextStep);
            } catch (error) {
                reject();
            }
        }, 1000);
    });
};

// Const step 3 nextStep as number
const step33 = (step: unknown): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = (step as number) + 1;
                console.log('completed step ${nextStep}');
                resolve(nextStep);
            } catch (error) {
                reject();
            }
        }, 1000);
    });
};

// Const build async
const build = async (): Promise<void> => {
    try {
        const steps1 = await step11();
        const steps2 = await step22(steps1);
        await step33(steps2);
    } catch (error) {
        console.log('error during build');
    }
};
```

> Generic = A way to write a function that is reusable across different types

### Extra

option | type | why?
--- | --- | ---
const | Implicit | Value is immutable so type can't be changed
let | Explicit | Value and type can be changed
Function with controlled inputs | Implicit | Output is controlled and code is simpler
Single-line arrow function | Implicit | Simpler code
Longer functions | Explicit | Explicit is easier to read

> TypeScripts official [Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html) documentation.

> Microsoft's [guide](https://github.com/microsoft/TypeScript/wiki/Performance) to performant TypeScript.

### Migrating to TypeScript
* Step 1: Look at project structure (Monolith or Microservice)
* Step 2: Decide whether to migrate all at once or file-by-file

* Add Typescript to each service if project uses microservice architecture.
* To exclude folders you don't want to be migrated, utilize the configuration file.

> Use "Set allowJs" to true to allow keeping files as .JS

### Third-party Module Type Definitions
To find the definitions, search through `dependencies` and `dev-dependencies`.

Go through each dependency and add definitions for each. 

If a dependency doesn't have definitions, you can create your own.

By setting `allowJS` to `true` in the `config` file, you. can follow the following approaches:

* Work for nested files to main files
	* Use file extension to track which files are migrated
	* Fewer errors in the console and IDE
* Work from main files to nested:
	* Main parts migrated first
	* More errors in console and IDE
* Update all files to `.ts`
	* Code will compile, but run with errors.

> Keeping .JS extension will throw errors but won't stop code working/app running

![allowJS](https://video.udacity-data.com/topher/2021/February/6030111f_typescript-migration-strategies/typescript-migration-strategies.png)

[Strategies for Migrating to TypeScript](https://2ality.com/2020/04/migrating-to-typescript.html).
