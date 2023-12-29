# _Reviewer Guide For Project One - Image Processing API_

# _Overview_:
* About the app
* Handling images
* Setup for getting started
* Tools used by this api app

## About Image Processing APP 
This is a simple node express API app that will convert a full size image to specified height and width and save it to a new location.

## Handling Images
On startup, the API automatically creates a `THUMB` folder in the directory the app is running from

The API takes query string input to automatically read from the `IMAGES` folder in the root of the repository.

After prcoessing, the API will store the process image in the `THUMB` folder.

As the API automatically reads from the `IMAGES` folder, you only need to ensure images exist in the folder.

If a new image is placed into the `IMAGES` folder, the API cab read and process it.

## Setup
The application has already been developed, built and tested in this repository.

To setup the api, run `npm install` to install required depedencies/tools for the app to run.

Run `npm run prod` to start the production build of the app.

## Tools
This core of the APP was built using Node and Express.

The API is written in Typescript and built to JavaScript CommonJS.

It leverages PRettier and ESLint for formatting and error handling.

Nodemon is used to serve the running instance of the API.

Lastly, Jasmine has been used for unit testing the API endpoint and functionality.

# _How To Use The API_
The API runs on `localhost:3000/api` and takes three query strings inputs for the `/api/resize` endpoint:

1.  `filename` (string)

2.  `height` - Height (number)

3.  `width` - Width (number)

The parameter `filename` refers to the name of the image file in `IMAGES` folder. 

The `height` and `width` parameters refer to the size at which to process the image with.

The processed image is placed in the `THUMB` folder and served to the user in the browser.

If a resized image already exists in `THUMB`, it will be served to the user instead of the original image being re-processed.

## Testing
The application current has 9 Unit Tests to check the both the resizeImage functionality and endpoint status.

These tests leverage the Jasmine test framework and the supertest module.

The tests are as follows and are run using the command: `npm run test`:

### _ENDPOINT Tests: (4 tests)_
1. Checks the service is running at `localhost:3000/api` and returns a `200` status

2. Checks the image processing function works at `localhost:3000/api/resize` when passing the query string `?filename=waterfall&width=1000&height=700` and returns `200` status.

3. Checks the error handling if wrong query string type is used by sending `?filename=waterfall&width=1000&height=sevenhundred` and expect it returns a `400` status.

4. Checks error handling if the wrong filename is passed in query string by sending `?filename=myImage&width=1000&height=700` and expect it to return a `404` status.

### _UTILITIES Tests: (5 tests)_
1. Run `checkFolderExists` function to verify the `THUMB` folder was created and expect it to return true.

2. Checks if original image exists by calling the `originalImageExistsCheck` function and checking if `waterfall.png` exists in the `IMAGES` folder.

3. Check if resized image doesn't exist by calling the `resizedImageExistsCheck` function and checking if `waterfall_400x700.png` exists in the `THUMB` folder.

4. Checks the `inputValidationCheck` function works by passing parameter values: `waterfall`,`1000`,`700` and expects it to be true/successfull.

5. Runs `resizeImage` function and passes the paramater values: `waterfall`,`1000`,`700` and check if `waterfall_1000x700.jpg` image exists in the `THUMB` folder.

## Scripts/Commands
* `npm run build` Builds the production ready code to JavaScript CommonJS to the `build` folder.

* `npm run test` Runs the Jasmine Unit Tests without needing app to be in running state.

* `npm run lint` Lints and formats the code with Prettier and ESLint based on their config file settings.

* `npm run start` Starts nodemon at the `src/` folder to serve the index.ts file at `localhost:3000`.

* `npm run prod` Starts nodemon at the `build/` folder to serve the production build index.js file at `localhost:3000`.

## Limitations
The APP only handles images with `.jpg` extension and requires image to exist in `IMAGES` folder for them to be processed by the API.

Future version could look to implement a parameter for specifying extension to pass to Sharp module `.toFormat` for changing image format. 