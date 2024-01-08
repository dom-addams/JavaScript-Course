# API BACKEND WITH EXPRESS AND SQL
## Project Goals
### Requirements.md API ENDPOINTS + TABLES
* Update REQUIREMENTS.md file API ENDPOINTS
	* Determine route/path for each bulleted endpoint i.e. `SHOW = /blog`
	* Determine HTTP VERB for each route/path i.e `SHOW = /blog [GET]`
	* Think about using camel case i.e. `TilteOptions`

* Update REQUIREMENTS.md file DB TABLES based on "data shapes"
	* Determine table headers/columns for each data shape block
	* Denote FOREIGN KEYS 
	* Think about if extra tables are needed or could be beneficial (table joins)
	* Example: 
	* `Table Books: (id:varchar, title:varchar, author:varchar, published_year:varchar, publisher_id:string[foreign key to publishers table], pages:number)`

> Foreign Key - A reference to the primary key of another table

### Setup DB Migration Folder + SQL FILES
* DB Setup and Migration Module
	* Create P-Sql DB using docker-compose file (check it works and is accessbile)
	* Use the `db-migrate` module to create migrations folder for each DB Table
	* Leverage `.env` file for DB VARS
	* Eventually remove "sensitive" values and use `bcrypt` module to hash + salt
	* Figure out command for `UP` and `DOWN` for the migration sql files

> Run `db-migrate create [TABLE-NAME] --sql-file` to create `migration` folder 

> Bring the migration up `db-migrate up`

> Bring the migration down `db-migrate down`

### Create DB MODELS files
* Create MODELS
	* Create a modles folder in src/ to contain all methods for each table.
	* Each model file should map to 1) Data Shapres & 2) Endpoints

### Create DB HANDLER files
* Create HANDLERS
	* Create a handlers folder in src/ to contain handler files for each Model.
	* Each handler file should contain all routes for all endpoints defined in REQUIREMENTS.md

### Create TESTS
* Create JASMINE TESTS
	* Create Unit and Integration tests for checking each endpoint against a "test db"

### Implement JWTs
* Implement JWTs
	* Review `jsonwebtoken` module and add tokens for each required endpoint

### Implement CORS
* Implement CORS
	* Review how to setup CORS and allow "localhost" domain to avoid errors
	* Apply CORS to all endpoints (done in server.ts file)

### Other
* Move sensitive values to Hash
	* Use bcrypt and salt to remove any "sensitive" values not already hidden

```
INSERT INTO users (first_name, last_name, password) VALUES('John','Doe','Password123');
INSERT INTO products (name, price, category) VALUES ('Apples', 3.99, 'Food');
INSERT INTO orders (user_id, status) VALUES (7, true);
INSERT INTO order_info (order_id, product_id, quantity) VALUES(7,7,5) RETURNING *


SELECT * FROM users
SELECT * FROM products
SELECT * FROM orders
SELECT * FROM order_info

-- TRUNCATE TABLE products CASCADE
```







