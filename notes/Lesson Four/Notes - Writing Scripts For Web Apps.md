# Notes - Writing Scripts For Web Apps

## TOPICS
* Deployment scripts
* Build scripts
* Test scripts

### Deployment Scripts
A deployment script is a command or a series of commands that will update your application.

Deployment scripts are used to deploy your application. 

This can mean deploying your latest code to a platform like Elastic Beanstalk or updating the content of a static website hosted on S3. 

These scripts can call different commands such as `EB deploy` or `AWS S3 CP`.

When it comes to creating a deployment script, its important to think about the following:

* Understand what you are deploying
* Read the documentation about the platform you are deploying to. 
* Add your script to the package.json script section

### Build Scripts
A build script is a command or a series of commands that package your application.

Some frameworks like React and Angular make them readily available.

When putting together a build script, you should explore the following:

* Bundlers like Webpack and Rollup
	* These are able to package your application code and all its dependencies.
	* They are responsible for packing your code in a format that is compact but still usable by browsers and servers.

* Compilers like Babel 
	* This lets you use more advanced features of the latest JavaScript versions while maintaining compatibility with older browsers.

* Transpilers like TypeScript 
	* These extend the base capacities of JavaScript by adding extra features not present in the base language.

When creating build scripts, you should cosnider the following:

* Check if a framework default script is available.
* Understand the final format of what you are building.
* Make the build script available inside a `package.json`.

### Test Scripts
A test script is a command or series of commands that test application code against pre-defined scenarios.

When looking to deploy an applcation, you would often use tests in order to have confidence all components will work individually and together.

Tests are called via scripts most of the time. Especially in pipelines.

Common test scenarios are:

1. **Unit tests** - to be run first since they are the fastest and most simple tests.
1. **Integration tests** - more involved with what they test, so are run after unit tests.
1. **End to End (E2E) and UI tests** are often complex and involve some form of setup. So are done last.

An example script for testing using Jest is: `"test:ci": "jest --ci --coverage"`
