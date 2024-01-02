# Getting Started with Node.js
Deep dive into the Node.js ecosystem. 

It'll cover the following topics:
- Node.js fundamentals including installation, running files, and the event loop
- Extending JS with Node.js APIs
- Using Node Package Manager to install node project dependencies

## Topics
- Node JS
    > What is Node.js?
    > Getting started
    > Understanding Event Loop

- How Node.js Extends JavaScript
    > Node,js Globals
    > Node.js APIs

- Working with NPM (Node Package Manager)
    > What is NPM?
    > Creating a project
    > Adding and Configuring Packages/Depdencies


> Node.js enables use of JavaScript for Frontend ++ Backend 

## Writing and Running Javascript with Node.js
Node version are split into two categories. LTS Versions and Current Versions.

LTS Versions are:
- Even numbers
- Have 30 months support
- Used by developers

Current Versions are:
- Odd numbers
- Have 6 months support
- Used by Library Owners to ensure modules are up-to-date and will work with next LTS version

> It is recommended to always install LTS Version unless requiring feature in Current Version

### Running JavaScript with Node.js
There are two options for running JavaScript Code with Node

#### Using REPL
The first method is through accessing nodes REPL environment. 

REPL stands for READ, EVALUATE, PRINT, LOOP. 

REPL runs JavaScript directly in your console application.

To access the Node.js REPL environment, run:

```node```

#### Using NODE command
The second method is by running JavaScript files using the node command. 

This is done by typing "node" in your command line tool, followed by the path to the file.

```node src/index.js```

```node .``` The period symbol will search and try to run the index.js file

### Node.JS Globals
Node.js is a runtime based on the V8 Engine by Google.

The V8 Engine runs and processes ECMAScript and WebAssembly inside Chrome Browser.

ECMAScript is the JavaScrpipt standard

WebAssembly runs alongside JavaScript and enables the running of code in other languages such as C#

WebAsembly works by translating code into Bytecode which is an abstraction of machine language

Node.js works the exact same way as the V8 Engine by running ECMAScript and WebAssembly.

#### API's
There are some APIs that overlap between the browser and Node.js, like Timers and Console.

But there are others that are exclusive to the browser or Node.js like File System, which is exclusive to Node.js.

DOM and Canvas are examples which are exlucsive to Browsers.

Fetch is a Browser API but is supported in node.js as a 3rd party extension.

### The Module System
The module system creates the ability to export and import JavaScript from separate files to add functionality.

It works by:
- Breaking code into "focused functional chunks"
- Allowing Export of chunks as modules
- Used in apps via Importing

Common JS is the default system for Modules in Node.JS

However, ES6 (ECMAScript 6) has introduced Module Specification which makse module handling cleaner

> TypeScript tanspiles into Common JS

All nodules except Common JS are considered part of the "Global Scope"

Variables can be used "Globally" but their scope is limited to the module they're used in.

#### Import / Export
```module.export {};``` is used to Export JS out of the current module.

```require('module-name');``` is used to Import JS into the current module

#### Working with files
```__filename``` Can be used to get the "filename" of the current module

```__dirname``` Can be used to get the "directory path" of the current module

#### Timer Module
Two module features available in the browser are ```setTimeout``` and ```setInterval```.

But Node.js offers a 3rd feature which is ```setImmediate```.

This 3rd feature runs Asynchronous code in the input-output blocks without retruning to the start of the loop.

#### Console Module
Often used for debugging, in the browser is shows the output logged in DEV TOOLS Console.

In Node.js it prints output to the terminal.

> Beware of printing output to screen and avoid printing Sensitive Information.

#### Example Code
Below is the example code for:

- Export
- Require (Import)
- dirname
- filename

- Export:
    > It is most common to see shorthand property names in use, 
    > Some developers choose to use very specific function names when developing their libraries
    > They then create short names for the functions when exporting 

```
// working file = util/logger.js

// exports as object
module.exports = { 
    myFirstFunction: myFirstFunction,
    mySecondFunction: mySecondFunction
}

// using ES6 shorthand property names
module.exports = { 
    myFirstFunction,
    mySecondFunction
}
```

- Require:
    > It is standard to name the const the same as the file or module name. 
    > Omitting the file extension is safe and common practice. 
    > Destructuring is often used when only requiring one function from an otherwise large library.
    > When using require, a preceding slash must come before a locally created module name.
    > Otherwise, Node.js will search the core modules and then node_modules.

```
// working file = index.js
// all functions in util/logger.js are available
const logger = require('./util/logger.js');

// using ES6 object destructuring, only myFirstFunction is available
const { myFirstFunction } = require('./util/logger.js');
```

- DIRNAME and FILENAME

```
// working file = /app/util/logger.js

console.log(__dirname);
// prints /app/util

console.log(__filename);
// prints /app/util/logger.js
```

### Node.JS Core Modules
Node.JS offers some Core Modules out-of-the-box that use the common JS "required" import method.

The modules we're looking at are Path and File System.

#### Path Module
The path module allows you to use "paths" in a cross-platform way.

This module has 3 commonly used options:
- Path.resolve: To get the absoloute path from a relative path
- Path.normalize: Normalizes a path by removing dots and double slashes
- Path.join: Concatenates strongs to create a path that works across OS's

- Example code:
```filePath = 'app/src/routes/api';```

**path.resolve**
```
console.log(path.resolve('index.js'));

// prints /Users/user/Desktop/app/index.js
```

**path.normalize**
```
console.log(path.normalize('./app//src//util/..'));

// prints app/src/util
```

**path.join**
```
console.log(path.join('/app', 'src', 'util', '..', '/index.js'));

// prints  /app/src/index.js
```

#### Other Core Modules
Node.js also leverages other core modules which are:

- **HTTP/HTTPS** = Used to transfer data.
- **URL** = Used for parsing and resolving URLs
- **TLS/SSL** = Implements security protocols on top of OpenSSL 

> Learn more about Node.js Core Modules from the [Node.js documentation](https://nodejs.org/api/globals.html).

### The Event Loop
The Event Loop exists rto process Asynchronous tasks.

There are 5 common types of code that are run with JavaScript.

These are:
- Synchronous/Asynchronous
- Timers
- Input/Output
- process.nextTick
- Promises

A sample flow of the Event Loop is code using Timer module.

```setTimeout: 1000```

JS define "setTime" > move to Callstack > process by Node API > moved to queue > result in Terminal

![LOOP](https://video.udacity-data.com/topher/2021/February/6033fb75_fsjs-c1-l1-event-loop/fsjs-c1-l1-event-loop.jpg)


Nearly every Node.js feature is considered to be asynchronous (non-blocking). 

This means that we can request an API using promises and have our application continue running.

The Event Loop controls the order in which results (output) of asynchronous tasks (input) are displayed.

Once you become familiar with the Event Loop and the order in which Node.js handles tasks, you will control when those tasks occur in your application.

#### Six Phases of The Event Loop
1. Timers - executes callbacks using timers. If there are timers set to `0 ms` or `setImmediate()`, they will run here. Incomplete timers will run in later iterations of the loop.
2. Pending - internal phase
3. Idle/Prepare - internal phase
4. Poll - process I/O callbacks
5. Check - execute any `setImmediate()` timers added in the Poll phase
6. Close - loop continues if there are more timers or I/O calls. If all timers and I/O calls are done, the loop closes and the process ends.

- NOTE: `process.nextTick();` will always run at the end of whichever phase is called and before the next phase.

> `process.nextTick();` is considered a "Microtask"

#### More About Polling Phase
The polling phase is a bit more complex than just adding to the poll queue. 

If there are no timers left to execute when the polling phase is reached, the poll phase will wait for input/output callbacks. 

If the I/O contains synchronous code, this code will not be added to the call stack till the polling phase is reached. 

If setImmediate() is reached, the polling phase will end and the check phase will begin. 

If setImmediate() is not called, the polling phase will continue to wait for a bit.

It will then move on through the next phases to execute additional timers and so forth.

> Read the official Node.js documentation on the event loop: [What is the Event Loop?](https://nodejs.org/en/guides/event-loop-timers-and-nexttick#:~:text=What%20is%20the%20Event%20Loop%3F).


### Node Package Manager
Node Package Manager is a tool use for managing a project's dependencies via command line.

It's also a website which hosts third-party packages that can be used for your project.

Some key details are:
- **Dependencies** are called **modules**.
- **Modules** are shared as **packages**
- Packages extend the functionality of your app
- Modules are stored in the app's `node_modules` folder
- Core modules include `path`, `Filesystem`, and more

Modules are commonly used when you want your code to take perform certain tasks that aren't available in the Core APIs.

Applications will either include both dependencies and devDependencies or just dependencies.

`devDependencies` are thought of as dependencies that are only necessary for development.

whereas `dependencies` are dependencies used in both development and production.

Pay special attention to the version listed. The format is as follows.
- **First number = major version**
- **Second number = minor release**
- **Third number = patch**

The version states what was installed, but it also clarifies how it can be updated.

The additional included characters (or lack thereof) tell npm how to maintain your dependencies.

- `*` means that you'll accept all updates
` `^` means that you'll only accept minor releases
- `~` means that you'll only accept patch releases
- `>, >=, <=, <` are also valid for saying you'll accept versions greater/less/equal to the listed version
- `||` allows you to combine instructions `"prettier": "2.2.1 || >2.2.1 < 3.0.0"`. This says use prettier greater than 2.2.1 and less than 3.0.0
- You can also leave off a prefix and only accept the listed version

#### package-lock.json
`package-lock.json` contains all of the information for the dependencies of the modules you have installed.

It is best practice to add `package-lock.json` as well as `./node_modules` to your `.gitignore` file when using a repository. 

The `node_modules` folder can grow rapidly, containing thousands of files. 

You should clone a repository without `node_modules` and run `npm install` to reinstall all dependencies of the project directly from npm.

#### npm update
Running `npm update` will update all of your dependencies based on the specifications given in your package.json file.

#### Scripts
To run a script that you have added to your package.json file, simply run `npm run` argument with the name of the script as the argument.

For example `npm run build` which will run the build script in package.json

#### Deps
NOTE: It's common to encounter deprecation warnings when working with NPM packages. 

Packages may have multiple dependencies. 

If one updates before the other, you may encounter one of these warnings.

### Is Node.js Single Threaded?
JavaScript and Node.JS are single threaded processes.

JavaScript is an Interpreted language as opposed to a Compiled language.

- Compiled Language:
    - Language is written and compiled to machine code inside of an application
    - Errors are detected during compiling
    - The code won’t compile until it’s error-free
    - Examples: C, C++, Erlang, Go

- JavaScript is an Interpreted Language
    - Errors found when the code is run
    - The interpreter translates and runs code one statement at a time
    - Interpreted code runs more slowly

![COMPARISON](https://video.udacity-data.com/topher/2021/February/60272013_fsjs-c1-l1-compiled-vs-interpretedjpg/fsjs-c1-l1-compiled-vs-interpretedjpg.jpg)


Node.js is an Interpreter as it's mostly written in C++, many modules include C++ code, and other modules include Pythohn or C.

- The C Libuv Library Gives Node.JS Access to a Thread Pool.
    - Libuv takes advantage of the operating system's asynchronous interfaces before engaging the thread pool
    - The thread pool is engaged for events that require more processing power including compression and encryption tasks
    - The default thread pool includes four threads

![THREADPOOL](https://video.udacity-data.com/topher/2021/February/60272141_fsjs-c1-l1-libuv-and-node/fsjs-c1-l1-libuv-and-node.jpg)

> Libuv	= A library written in C that provides multithreading to Node.js and allows for heavy processing.
> Interpreted Language = The language is read by a runtime and executed on the spot and errors are found on execution

