# Project One - Image Processing APP

## Step One
* **Initialize your project.**
	* Add the required dependencies, including Express, TypeScript, Jasmine, Eslint, and Prettier. 
	* Complete your package.json file.
	* Where should your dependencies be placed?
	* What scripts should you create to take advantage of the dependencies you've added?
	* Are there other dependencies you would like to add or know you will need to improve your workflow?

## Step Two
* **Set up your project structure.** 
	* Create folders and files for what you anticipate you will need for the project.
	* How do you plan to keep your source code and build code separately?
	* Where will you keep your tests?
	* How do you plan to name your routes? Utilities?

## Step Three
* **Configure your middleware and dependencies.** 
	* You have quite a few dependencies that all need to work together. 
	* Consider using simple js functions to test dependencies before adding new functionality.
	* Does your TypeScript compile?
	* Do your Eslint and Prettier scripts work?
	* Are you able to write and pass a basic unit test?

## Step Four
* **Set up your server and create an API endpoint.**
	* Even though this application is fairly straightforward, you still want to set it up in a scalable way. 
	* How can you set up your server and route so that your project remains scalable? 
	* Only one endpoint is required. 
	* It's best to create this and test that it is working before you move on.

## Step Five
* **Install [Sharp](https://www.npmjs.com/package/sharp) and configure endpoint.** 
	* Documentation for Sharp can be found [here](https://www.npmjs.com/package/sharp). 
	* It is required that you create a separate module for your processing functionality 
	* You should import it into your route. 
	* It is only required that you add resizing, 
	* You may add additional processing if you choose to extend your application. 
	* It is also only required that you work with jpg files.
	* Pay close attention to if you need to use asynchronous code or not. 
	* If you do, make sure you stay consistent throughout your application.
	* There is limited information on using Sharp with TypeScript, but don't let that be a blocker.
	* Think about what type the Sharp constructor would return.
	* Have a look at the [complete documentation](https://sharp.pixelplumbing.com/api-constructor) and the examples it provides.

## Step Six
* **Write your tests.** 
	* If you haven't already been writing unit tests, now would be the time to start. 
	* Think about what you should test? 
	* At a minimum, you should have at least one test for your endpoint 
	* And at least one test for your image processing
	* There are many different tests you could create.

## Step Seven
* **Add caching.** 
	* Add caching to your application so that repeated requests use pre-stored images.
	* It should *not* generate a new image each time to call the same endpoint.

## Step Eight
* **Test, Debug, and Refactor.** 
	* Think of edge-cases for your project and how someone may access your project. 
	* Should they get different error messages based on what's wrong? 
	* Make certain that your user isn't left in the dark when something goes wrong.
	* Do all of your tests still pass?
	* Does stopping and restarting your server cause any issues?
	* Does your user get feedback when something goes wrong?
	* Is your code easy to follow? Comments?
	* Is your API production-ready?

## Step Nine
* **Build, Document, and Submit.** 
	* You should be able to compile your typescript and start up your production server and test it wokrs. 
	* Make sure you've provided all necessary information in your readme file
	* Your reviewer needs to know how to test your API. 
	* If everything works and your documentation is complete, you're ready to submit!






















































