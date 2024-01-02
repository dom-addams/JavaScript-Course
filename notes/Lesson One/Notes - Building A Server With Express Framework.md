# Building A Server With Express Framework

## GOALS
* Working with Express including how servers work, Express basics and Express Router
	* Understanding servers
	* Express
	* Router
* Writing and using Middleware
	* Using middleware
	* Writing middleware
* Working with the File System module to work with stored data to read and write to files.
	* Stored Data
	* Using the File System


### Server and HTTP
* Common HTTP Requests
	* GET - retrieves data from the server
	* POST - sends data to the server
	* DELETE - removes data from the server
	* PUT - replaces data on the server
	* PATCH - updates data on the server

* Query parameters
	* Query strings are parameters in the URL, identified by a ‘?’
		* Ex: https://coffee.com/search?decaf=true
	* To chain multiple parameters together in a query string, use ‘&”
		* Ex: https://coffee.com/search?decaf=true&size=large&creamer=soy

![ILLUSTRATION](https://video.udacity-data.com/topher/2021/February/6039900d_fsjs-c1-l4-query-parameters/fsjs-c1-l4-query-parameters.jpg)

#### HTTP Response Status Codes
Status Code Range | Example Code
--- | ---
100-199: information | 100 Continue
200-299: request was successful | 200 OK <br> 201 Created
300-399: request was redirected | 301 Moved Permanently <br> 307 Temporary Redirect
400-499: client-side error | 400 Bad Request <br> 401 Unauthorized <br> 405 Method Not Allowed
500-599: server-side error | 500 Internal Server Error

### Idempotency
**Definition:** “A request is said to be idempotent when making multiple requests to the API that are identical produce the same result.”


* Idempotency and API Methods:
	* The only method not considered idempotent is POST.
	* POST adds a new resource each time
	* GET, DELETE, PATCH, and PUT act on the same resource each time with the same result.

Idempotency and Security:

* Get:
	* Safe because the database doesn’t change
	* Endpoint is stored in session history
	* Can be cached
	* Often logged
* Post:
	* Ideal for login
	* Endpoint not stored in session history
	* Protects user data from being inadvertently exposed


### Why Use Express?
**Express is a framework used to:**

* Set up the server
* Work with routes
* Apply middleware

**Express solves problems, because it:**

* Builds on HTTP module
* Handles requests and parses data with minimal configuration
* Makes it easy to add middleware

> An easily recognizable acronym is MEAN, which stands for: MongoDB, Express, Angular, and Node.js.

> Idempotency = When making multiple identical requests to the API produce the same results each time
> Query parameter = A key-value pair added to the end of a URL to supply data to the application
> Route = The name or path used to access endpoints

> Official [documentation](https://expressjs.com/) from Express.

### How Experts Approach Express
Using the metaphor of a book which contains a Title, Index, Chapters, etc. Express is structured/used in a similar way.

The "title" is our "entrypoint", the location where we access/start our applicatio.

This is often the index.js, server.js or app.js file.

These files create/run the server and provide access to the defined routes of your app.

A separate file called a **"Route File"** is creating to store all the paths. 

A Route File is typically:

* Stored in `routes` folder
* One file per service or per route
* Contains all endpoints
* Can sometimes be broken p into subfolders

![ILLUSTRATION](https://video.udacity-data.com/topher/2021/March/604782bf_fsjs-l1-c4-express-is-like-a-book/fsjs-l1-c4-express-is-like-a-book.jpg)

#### Route VS Endpoint
**Routes** are the URLs that point to a location or path in the server.

**Endpoints** use the routes URL to perform an action on the data but are called with HTTP methods. 

Examples:

```
// Route
my-app/coffee/mocha

// Endpoint
GET my-app/coffee/options
```

### Express Basics
**The Application Object:**
Every Express application requires the creation of what is known as the application object. 

All of the core functions of express take place on the application object including endpoint methods. 

After importing express, the first thing you do is create an application object often named app.

To create the object, you set your application name = to the top-level Express function.

`const app = express();`

* Summary:
	* Defines how server works
	* Typically named app
	* Created with the **express** method

**Application Methods: .listen()**
`.listen()` - listens for connections to a specified host and port

* Creates the webserver at the specified **host** and **port**
* Also includes an optional callback argument
* Syntax == `app.listen(port, host, callback)`

* Ports and Hosts
	* **host** is the IP address of the machine running the server (defaults to localhost 127.0.0.1)
	* **port** is the address for the server (defaults to 3000)
	* Multiple services can run on different port on the same host

Example: Creating a server

```
import express from 'express';
const app = express();
const port = 3000;

//return
app.listen(port, () => { // type VOID
	console.log('Listening on ${port};')
});
```

**Application Methods: GET and POST**
GET and POST are the most commonly used HTTP methods.

* **get** retrieves data from a route
* **post** sends data to a route
* syntax
	* `app.get(path, callback)`
	* `app.post(path, callback`
* Callback function includes **req** and **res** parameters
	* **req** represents the HTTP request object
	* **res** represents the HTTP response object

**Core Methods:**

* `.get()` 
	* Used to get a route and takes a route and a callback function as arguments. 
	* The callback function takes two arguments, the request from the browser and the response from the server.
	* Middleware can also be passed in as an argument.

* `.post()`, `.put()`, `.delete()` - 
	* The other app methods that make up endpoints. 
	* They require having the ability to store data.
	* `.post()` is used to post a new item
	* `.put()` is used to edit an item already in existence
	* `.delete()` is used to remove an item from the data. 
	* Like get above, all three methods will take a route and perform an action.

![IMAGE](https://video.udacity-data.com/topher/2021/February/6036bfd2_1f2aeba4-fea0-4a29-bbd5-fcfd307faf1d-4-5005-c/1f2aeba4-fea0-4a29-bbd5-fcfd307faf1d-4-5005-c.jpeg)

### The Request Object
* Based on Node.js HTTP request object
* Used to get information about the request
* `.query` property returns the query parameters

#### Breakdown of an endpoint
To create an endpoint in express we use the following syntax:

```
app.method('/route', middleware, (callback) => {
  // what you want to do with the request or response
});

app.get('/books', (req, res) => {
  // perform an action with req or res. 
});
```

Example: `.get()`

```
app.get('/',(req, res) => {
	res.send('Hello, world.');
})
```

Example: `req.query`

```
// URL = http://website.com/books?title=express

app.get(/books, (req, res) => {
	console.log(req.query.titile);
}

//prints "express"
```

### Response Object
This is how the server responds to the HTTP request.

The Response Methods available are:

* `res.cookie() / res.clearCookie()` - This sets or clears a cookie
* `res.redirect()` - Redirects to a different URL
* `res.sendStatus(code)` - Sets and Sends the response status
* `res.sendFile(path)` - Sends a file
* `res.send(body)` - Sends a response which could be an object, array, or string of HTML

### Request and Response Options
#### Request
The request object is the HTTP request to the server. 

Request has many properties and methods available to it for getting information about the request from the browser.

* **ip** - a property to get the ip of the request.

`console.log(req.ip); // prints '127.0.0.1'`

* **cookies** - a property to access cookie information of a request.

`console.log(req.cookies.name); // prints 'cookie name'`

* **path** - a property to get the path of the URL request.

```
https://website.com/students
console.log(req.path); 
// prints '/students'
```

* **subdomains** - a property to get the subdomain of a URL request.

```
https://students.website.com
console.log(req.subdomains);
// prints 'students'
```

* **params()** - a method to get the param values from a request URL.

```
https://students.website.com/students:userId

// Use params() to get the value of a parameter in the path
app.get('/students/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`Student ID is: ${userId}`);
});
```

#### Response
The Response object is returned by the server after a request. 

It is the response from server back to the browser. 

Like request, it has many properties and methods available to it.

* **send()** - sends a response from the server to the browser.

```
app.get('/students', (req, res) => {
  res.send('Hello, world.');
});
```

* **status()** - set's an HTTP status.

```
app.get('/students', (req, res) => {
  res.status(400).send('bad request');
});
```

* **cookie()** - set's a cookie for the route.

```
app.get('/students', (req, res) => {
  res.cookie('admin', { expires: new Date(Date.now() + 1000000));
});
```

> View express documentation at https://expressjs.com/. 


### Middleware
Middleware is a function that is applied between the request and response. 

Meaning you get the request, do something with it, and then send the response. 

Common uses of middleware include checking the authentication status of a user before sending a response or logging the request before sending the response.

There are many different uses for middleware and multiple types that you can use.

![IMAGE](https://video.udacity-data.com/topher/2021/February/60398efd_fsjs-c1-l4-middelware/fsjs-c1-l4-middelware.jpg)

#### Types of Middleware
**Built-in Middleware** - Express contains 3 builtin middlewares:

* `express.static` - for serving static files
* `.json` - for parsing incoming JSON
* `.urlencoded` - for parsing incoming urlencoded data

**3rd Party Middleware** - Middleware that's installed through NPM

**Custom Middleware** - Middleware that you create specifically for your own project.

#### Using Middleware
There are two ways of applying middleware:

**Application/route level**
Applies the middleware to an entire application or the entirety of a route on either the entry point application object, or to specific routes (view working with routes).

* `.use();`
	* The `.use();` method is a method that can be applied to the application object or to route objects. 
	* It is used for applying middleware and can take in a route, and middleware as arguments

`app.use(middleware);`

**Endpoint level**
Applies middleware to a specific endpoint.

`students.get('/', middleware, (req, res) => { // do stuff });`

### Applying Multiple Middleware
It's possible to apply multiple middlewares to an application/route or endpoint.

#### Using an Array
Create an array of the names of the middleware and apply that on app/route or endpoint level

```
const middleware = [cors, logger];

app.use(middleware); // app level
students.get('/', middleware, (req, res) => { // do stuff }); // endpoint level
```

#### Listing Middleware
List out the middleware

```
app.use(cors(), logger); // app level 
students.get('/', cors(), logger, (req, res) => { // do stuff }); // endpoint level
```

### Writing Middleware
Middleware is really just a function that is applied between the request and response. 

As such, if writing middleware, you create a function.

A middleware function takes at least 3 arguments (req, res, next).

A 4th is also available of err (err, req, res, next) for use in writing error-handling middleware. 

Then you write the necessary code to complete your functionality followed by calling the next(); method.

* `next();`
	* The next method is a method from the express router. 
	* `next()` calls the next middleware in a chain of middlewares. 
	* Without adding next to your middleware function, your application will get stuck on the middleware.

```
const myMiddleware = (req, res, next) => {
  // do stuff
  next();
};
```

> Middleware = Functionality that runs between a request to the server and the response from the server

> Official [documentation](https://expressjs.com/en/guide/using-middleware.html) from Express on working with middleware


### Working with Routes
#### Router Object
When building an express application, it's best practice to keep the server and application endpoints and functionality separate. 

With the router object, you're able to create a directory of routes and separate the functionality of each route onto its own file.

* Router();
	* The router method is applied to the top-level express object. 
	* With this method, you are able to create a routes object that you can apply your endpoints to rather than the application object.

```
import express from 'express';   
const routes = express.Router();

routes.get('/', (req, res) => { //do something });

export default routes;
```

#### Using the Router
To use the router you have created, you must first export the router. 

Then on your main application entry point, you can import your routes module. 

Then use `app.use();` to use your routes module as middleware.

> The [official guide](https://expressjs.com/en/guide/routing.html) to using Express Routing.


### Reading and Writing with File System
File System is one of the core node.js modules. 

It's a larger module and requires import for use. 

Working with the file system allows you to access files within your system, and then on the server once the project is launched. 

It only allows access to the local file system, not users' file systems.

The File System Module also allows us to work with data by creating, delete, reading, and writing to files.

File System is almost entirely asynchronous by default.

There are some methods that are synchronous but should only be used when first opening a file.

One Async example is wanting to have a file read before the rest of the code runs. 

Otherwise, the remainder of the file system module is asynchronous. 

To avoid using callbacks, we can use the File System Promises API which allows the asynchronous methods to return promises.

```
import {promises as fsPromises} from fs;
// or
import {promises as fs} from fs;
```

#### Where Do We Get Data?
With an application, there are several ways of working with data. 

The most basic is application memory, where you save data to variables. 

With external APIs where you can read external data from someone else's API. 

Frontend local storage. Which is data saved to your browser across multiple sessions and cleared with clear cache.

The more complex way of working with data involves saving data to an external file. 

With Node.js there are two ways of doing this, through File System, or through a database. 

#### File System vs Database
Technically, databases are just files. 

They can be single files containing gigabytes of text data. 

So why use a database when it's ultimately a file as well?

With Databases the content is structured, can be relational, and indexed. 

With File System, you can only control where you write to the file, and where you read from the file, so File System is only good for simple data storage.

![IMAGE](https://video.udacity-data.com/topher/2021/March/6047851f_fsjs-c1-l4-filesystem-vs-database/fsjs-c1-l4-filesystem-vs-database.jpg)


### Using File System to Open and Write Files
Writing files is one of the most useful tasks when working with File System. 

Not only can you write to a file, but you can also create a file. 

There are two ways of writing files. 

You can open the file first, then write to it which is useful when you need to perform other operations on the file as well. 

You can also just write the file without opening it which is useful when writing is the only function you wish to perform, but you're not concerned about overwriting data that is already there.

#### Writing Data To Files
`.write()` | `.writeFile()`
--- | ---
* Write data to files | * Write data to files
* Create files that don't exist | * Create files that don't exist 
* Does not overwrite content | * Overwrites existing file
* File must be open |  
* Dependent on open flag |  
* Syntax: `write(data, options);` | * Syntax: `writeFile(path, data, options);`

Example: `.write()`

```
const writeData = async () => {
	try {
		const openFile = await fsPromises.open(
			'writeFile.txt', 'a+'
		);
		await openFile.write('\n add to file');
	} catch (err) {
		console.log('Unexpected Error');
	}
};

writeData();
```

Example: `.writeFile()`

```
const writeData = async () => {
	try {
		let newFile = await fsPromises.writeFile('writeFile.txt', 'hello world');
	} catch (err) {
		console.log(err);
	}
};

writeData();
```

#### File System Flags
File System Flags are used for identifying read/write operations available when opening a file.

* `r` - allows for the reading of a file
* `r+` - allows for the reading and writing of a file, will overwrite content in the file
* `w+` - allows for the reading and writing of a file, will create a file if it does not yet exist
* `a` - allows for reading and writing of a file and will append new content to the end of the file, not overwriting current content
* `a+` - allows for reading and writing of a file, will create a file if it does not yet exist, and will append new content to the end of the file, not overwriting current content

#### Writing to a File
* `.open()` - Used to open a file. Takes a filename and flag as arguments.

```
const writeData = async () => {
  const myFile = await fsPromises.open('myfile.txt', 'a+');
}
```

* `.write()` - Used to write to a file that is already open. Takes data, and options as arguments.

```
const writeData = async () => {
  const myFile = await fsPromises.open('myfile.txt', 'a+');
  await myFile.write('add text');
}
```

* `.writeFile()` - Used to write to a file, overwriting any content that may already exist in the file. Takes a filename, data, and options as arguments.

```
const writeData = async () => {
  const myFile = await fsPromises.writeFile('myfile.txt', 'add text');
}
```

### Reading, Moving, Renaming and Deleting Files
#### Reading file
`.read()` | `readFile()`
--- | ---
* Read entire file | * Read entire file
* Read part of a file | * Read part of a file
* Must open file first |  
* Requires a buffer to store and read data |  
* Syntax: `.read(buffer, options);` | * Syntax: `.readFile(path, options);`

Example: `.read()`

```
const readData = async () => {
	try {
		const buff = new Buffer.alloc(26);
		openFile = await fsPromises.open(
			'writeFile.txt', 'a+'
		);
		await openFile.read(buff, 0, 26)
		console.log(buff);
	} catch (err) {
		console.log(err);
	}
};
```

Example: `.readFile()`

```
const readData = async () => {
	try {
		const readFile = await fsPromises.readFile(
			'writeFile.txt', 'utf-8'
		);
		console.log(readFile);
	} catch (err) {
		console.log(err);
	}
};
```

#### Moving and Renaming
* Moving and Renaming are the same
* Use `.rename()` method
* Change path argument
* Use `.mkdir()	` if directory doesn't exist
* Syntax = `.rename(original_path, new_path)`

Example: `.mkdir()` and `.rename()`

```
const moveData = async () => {
	try {
		await fsPromises.mkdir('src');
		const moveFile = await fsPromises.rename(
			'config.txt', 'src/config.txt'
		);
	} catch (err) {
		console.log(err);
	}
};
```

#### Deleting Files and Directories
* Remove file: Use `.unlink()` method
* Remove direcotry: Use `.rmdir()` method
* Can only remove empty directories
* Use 3rd party module remraf to delete directories with files
* Syntax = `.unlink(path)` and `.rmdir(path)`

Example: `.unlink()` and `.rmdir()`

```
const removeData = async () => {
	try {
		const moveFile = await fsPromises.unlink(
			'src/config.txt'
		);
		await fsPromises.rmdir('src');
	} catch (err) {
		console.log(err);
	}
};
```

### Syntaxes
* `.read()`
	* Used to read a file. 
	* The file must be opened first. 
	* Allows for reading only a portion of a file, but requires the creation of a buffer to do so. 
	* Takes a buffer and options as arguments.
		
```
const readData = async () => {
  const buff = new Buffer.alloc(26);
  const myFile = await fsPromises.open('myfile.txt', a+);
  await myFile.read(buff, 0, 26);
  console.log(myFile);
}
```

* `.readFile()`
	* Used to read the entire contents of a file. 
	* Takes a path and options as arguments. 
	* Is the preferred method for reading files when the entire content needs to be read.

```
const readData = async () => {
  const myFile = await fsPromises.readFile('myfile.txt', 'utf-8');
  console.log(myFile);
}
```

* `.rename()`
	* Used to rename or move a file. 
	* Takes the old file path and new file path as arguments.

```
const moveData = async () => {
  await fsPromises.rename('old-name.txt', 'new-name.txt');
}
```

* `.mkdir()`
	* Used to make new directories. 
	* Takes a directory path as an argument.

```
const makeDir = async () => {
  await fsPromises.mkdir('src');
}
```

* `.unlink()`
	* Used to remove a file. 
	* Takes a file path as an argument.

```
const removeFile = async () => {
  await fsPromises.unlink('myFile.txt');
}
```

* `.rmdir()`
	* Used to remove an empty directory. 
	* Takes a directory path as an argument.

```
const removeFile = async () => {
  await fsPromises.rmdir('src');
}
```

> For removing directories that contain files without needing to remove the files first. 
> It's easiest to use a third-party module such as [rimraf](https://www.npmjs.com/package/rimraf).


> Official [documentation](https://nodejs.org/api/fs.html) from Node.js on the File System module.


> A tutorial on using the file system from Digital Ocean: [How to Work With Files Using the FS Module in Node.js.](https://learn.udacity.com/nanodegrees/nd0067/parts/cd0292/lessons/ls12155/concepts/42cc1b6e-0ac4-48d2-8c24-337da5946d11#:~:text=A%20tutorial%20on%20using%20the%20file%20system%20from%20Digital%20Ocean%3A%20How%20to%20Work%20With%20Files%20Using%20the%20FS%20Module%20in%20Node.js.)


### When To Use Express
the foundation of what's known as a REST API (Representational State Transfer). 

It's an architectural standard for APIs and currently the most popular type of API in use. 

RESTful APIs are considered to be stateless meaning the user/browser is independent of the server and they don't care what the other is doing.

If you need the interactions between the server and the user to be stateful meaning the server is aware of what the user is doing.

Instead of a REST API, you create a WebSocket API.

### WebSocket APIs
Websocket APIs are stateful and allow for real-time communication between the user and the server.

This allows for one user to know what another user is doing. 

Websockets do not use the HTTP protocol and have their own WebSocket protocol.

The most popular library for working with WebSockets in Node.js is [socket io](https://socket.io/).

![IMAGE](https://video.udacity-data.com/topher/2021/March/60478654_fsjs-c1-l4-websocket/fsjs-c1-l4-websocket.jpg)

#### A note on GraphQL
GraphQL isn't specifically a type of API, although it is generally referred to as one. 

GraphQL is a query language for working with APIs. 

It's becoming increasingly popular and does work well with Express. 

Once you're familiar with REST APIs it's very easy to learn GraphQL.

### Key Words
Term | Definition
--- | ---
GraphQL | A query language used for working with APIs
Idempotency | When making multiple identical requests to the API produce the same results each time
Middleware | Functionality that runs between a request to the server and the response from the server
Router | Middleware that directs your application to different routes
Websocket API | A type of stateful API that allows the server to know what the user is doing and vice versa

