1. Configure the NPM project
2. Install the proper node modules.
    - `prettier` Note: you'll need to use Prettier version 2.5.1
    - `eslint` version - 8.8.0
    - `eslint-config-prettier` to turn off ESLint reult that conflict with Prettier(compatible version: 8.3.0)
    - `eslint-plugin-prettier@4.0.0` which runs Prettier as an ESLint rule
3. Write scripts that run eslint and prettier.
4. Run the scripts to find the errors in index.js
5. Fix the errors and run the scripts again until the code is clean.
