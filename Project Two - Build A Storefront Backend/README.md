# Build a Storefront Backend
## Environment Variables
This project leverages the `dotenv` module to use a `.env` file for passing environment variables to the application.

Below is a copy of the `.env` file and required vairables with sensitive values omitted.

For this project to work, you will need to create a `.env` file in the root of the project using the below variables and replace the omitted sensitive values with hactual values.

`.env`

```
POSTGRES_HOST = '127.0.0.1'

POSTGRES_DB = 'storefront_dev'

POSTGRES_TEST_DB = 'storefront_test'

POSTGRES_USER = 'store_dev'

POSTGRES_TEST_USER = 'store_test'

POSTGRES_PASSWORD = '*********'

POSTGRES_TEST_PASSWORD = '*********'

NODE_ENV='dev'

BCRYPT_PASSWORD='*********'

SALT_ROUNDS=10

TOKEN_SECRET='*********'
```

## Project Setup
All required modules/dependencies have been defined in the package.json and split into Deps and DevDeps.

To install all required dependencies, run `npm i`.

To build the project, run `npm run build`.

The project is configured to output to a `/build` folder with key file `server.js`.

## Postgres Database Setup
For the database, this project is required to use Postgres which is run locally using Docker.

To setup and start the database, at the root of the project, run `docker-compose up`.

This will pull the Postgres and start the container/DB.

During startup, Docker will run the `init.sql` script which is used to create the store_test DB automatically.

To stop the DB/Container run: `docker-compose down` or use `ctrl/cmd + c`.

For creating and dropping the tables, this project uses the `db-
migrate` module.

* CREATE:
	* Create DEV DB Tables: `db-migrate --env dev up`
	* Create TEST DB Tables: `db-migrate --env test up`

* DROP:
	* Drop DEV DB Tables: `db-migrate --env dev reset`
	* Drop TEST DB Tables: `db-migrate --env test reset`

The reset option is used to run db-migrate down in one go to make tidying up the DB easier.

## Testing Using Jasmine
This project leverages Jasmine framework and uses a JWT for authentication to the RESTFul Endpoints.

The tests have been split into Handler Tests and Model Tests.

For running the tests and to run against the different environments, use the following commands:

* DEV: `npm run dev`
* TEST: `npm run test`

The default ENV is dev as configured in the `.env` file. For test, the script uses `NODE_ENV=test` to override the default value.

These scripts also use the `db-migrate` to create and wipe the database tables on each run.

> NOTE: To test the app locally via endpoints, refer to list of endpoints in REQUIREMENTS.md

## Scripts
This project has the following scripts defined:

* `npm run test` --> Run Jasmine tests against TEST DB
* `npm run dev` --> Run Jasmine tests against DEV DB
* `npm run lint` --> Lints and Formats files using ESlint and Prettier
* `npm run build` --> Builds the project to commonJS and outputs to a /build folder
* `npm run start` --> Initialise the app in the ./build folder
* `npm run watch` ---> Initialise the app in the ./build folder && watch for changes to restart app

The application is set to run on `http://localhost:3000` and has CORS enabled only allowing origin `localhost`. 

-----END OF FILE------