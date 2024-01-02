# Notes - Create An API With PostgreSQL Connection

## Topics
* What it means to connect to a database
* The role of environment variables
* Database migrations
* Models in NodeJS
* Testing models

> [DB migrate package](https://github.com/db-migrate/node-db-migrate) 

### Introduction to Migrations
Instructions for making and undoing changes to a database.

* Up Migration
	* Action applying change described in migration UP file to database
	* Example = CREATE TABLE

* Down Migraiton
	* Action removing change in migration DOWN file to database
	* Example = DROP TABLE

* Use the [db-migrate package](https://www.npmjs.com/package/db-migrate) to action this
* Also use extention package for DB type i.e. [db-migrate-pg](https://www.npmjs.com/package/db-migrate-pg)

* Create a `database.json` file to store config details

```
{
    "dev": {
      "driver": "pg",
      "host": "127.0.0.1",
      "database": "dom_db",
      "user": "dominic",
      "password": "password"
    }
}
```

* Run `db-migrate create my-table --sql-file` to create `migration` folder and relevant `sql` files
* Add `SQL commands` to SQL files i.e. `CREATE TABLE`
* Bring the migration up `db-migrate up`
* Bring the migration down `db-migrate down`

### Models
Tables hold a list of items that share properties (columns). 

Models are a class in the code that can be used as a template to create items that are stored as rows in the table.

A class is an object used to create lots of data of the same structure using a pattern.

In the model file, a DB table is represented as a class.

Inside this class can be each "row" from the Table.

The class is effectively a template that allows data to be passed through.

Each set of data passed is an "instance" and each "instance" becomes a new "row" in the Table.

It's good pratice to make an TypeScript Type for the object being stored in the table.

Example Weapon in my_weapons Table:

```
export type Weapon {
	id: Number;
	name: String;
	type: String;
	weight: Number
}
```

This type is then used in the class which is often referred to as a "Store".

Example Get Weapon Info:

```
export class MyWeaponStore {
	async index(): Promise<Weapon[]> {
		try {
			const conn = await DB.connect()
			const sql = 'SELECT * FROM my_weapons'
			const result = await conn.query(sql)
			conn.release()
			return result.rows
		} catch (err) {
			throw new Error(`Cannot get weapons ${err}`)
		}
	}
}
```

### Integration vs Unit Testing
* Unit Testing
	* A unit test, tests a small chunk of code in your application. 
	* Unit tests are for the individual functions or classes in your code, 
	* It checks to to make sure each function is doing what it should. 
	* These are small, typically fast to write, and can really save you time when troubleshooting.

* Integration Testing
	* An integration test checks how the individual pieces of your application logic work together. 
	* The span of one integration test will cover multiple chunks of code
	* It ensures that it's working correctly together in a flow or process.

