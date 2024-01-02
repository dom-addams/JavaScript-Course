# Notes - Databases and SQL

## Topics
* Explore popular databases and their use cases
* Get started with SQL
* Create a database with PostgreSQL
* Learn about CRUD operations on a database
* Connect database tables via foreign keys
* Translate data requirements from stakeholders into a database schema

### What is a Database?
Databases are organized data storage (often, but not exclusively for computers)

How a database is organized is dependent on how the information it stores will be used

What makes it hard to talk about databases is how many different forms they can take

### Different Databases for Different Tasks
There are lots of different types of databases, each with strengths and weaknesses for different purposes. 

Choose the right one for your situation, and it will help you move quick and smooth. 

Choose the wrong one and you might fight against it while building out functionality. 

For a practical overview, let's take a look at ten of the most common database technologies and divide them up by type. 

### SQL/Relational Type Databases
SQL type databases are organized to be query-able using SQL (Structured Query Language) and organize information in tables. 

These are pretty much like giant spreadsheets, where an item stored in the database is a row in the table, and columns hold data points on each item.

#### Ideal Use Cases:
Repeating, structured data, such as:

* user information
* product inventories
* blogs

#### Common SQL/Relational Database Technologies:
MySQL
PostgreSQL
MariaDB
Microsoft SQL Server

### NoSQL
A NoSQL database ...doesn't use SQL. 

This means it isn't set up like a spreadsheet. 

These databases can take a few different forms and are used for large sets of distributed data (like for use in micro service architectures).

#### Ideal Use Cases:
Partially structured or un-structured data: really big collections of complex data, caches

#### Types of NoSQL Databases:
* Key-Value store
	* A key-value store is a non-relational 
	* noSQL database type that stores data in key-value pairs (exactly like objects or dictionaries in programming). 
	* These databases are fast because the keys are unique and easily searchable, and they are flexible
	* The key:value pairs can store any combination of data types required.

* Document store
	* A document store is a non-relational
	* noSQL database type that organizes data into documents. 
	* Documents can hold any shape of data, which means document stores can easily handle data with no structure or that is arbitrarily nested.

* Column-oriented
	* Data organized by column instead of by row. 
	* This architecture scales easily and makes fast, efficient queries. 
	* I'm including this architecture as a NoSQL type dbms, but this architecture can actually be used with SQL as well.

#### Common NoSQL Database Technologies:
* Redis [Key Value store]
* MongoDB [Document store]
* Elasticsearch [Document store]
* Apache Cassandra [Column-oriented]

### Postgres
Relational databases are where we will spend the rest of the course. 

We will be creating and connecting to a PostgreSQL (mostly known as just Postgres) database

Postgress is a relational, SQL type database.

#### Why Postgres?
Here are some reasons why we chose Postgres for this course:

* Availability - It is open source and free to use with any project
* Common - It is a relational, SQL database which is the most common type of database right now
* Popular and well tested - Postgres is a very popular database, and a common choice among enterprise software
* Transferable skills - Because Postgres uses SQL, what you learn with Postgres is entirely transferable to working with a MySQL database or any other SQL database


### SQL and Creating a Postgres Database
#### What is SQL?
Because SQL is associated with a type of database, it is often thought of as a database itself.

SQL is actually a language or syntax. 

SQL stands for Structured Query Language and it is the syntax that allows us to interact with a SQL type database.

SQL is the language that allows us to operate on a database without any extra graphical tools.

#### Introduction to SQL
* SQL is the standard language for relational database management systems
* psql in terminal allows us to execute SQL commands
* Non-meta psql commands must end in semi colons
* executing common psql commands

#### Common psql commands
open psql: `psql postgres`
connect to a database: `\c <database_name>`
create a new database: `create database <database_name>`
get out of psql: `\q`

> [SQL META Commands](https://dataschool.com/learn-sql/meta-commands-in-psql/)

#### The Database Schema - Tables and Columns
* Structure of a relational database table is like a spreadsheet with columns
* Command to list database tables is '\dt'
* The Primary Key is a piece of information unique to each row, often an ID.

Sample commands to create a new table:

```
CREATE TABLE [IF NOT EXISTS] my_table_dev (
 name text,
 age integer,
 birthday date
);
```

### _Data in the Database and CRUD Operations_
#### SQL Filters
* `WHERE`
	* Filters using conditions
	* `DELETE FROM my_table *WHERE* id='1';`
	* This example command will delete the entry in the table with ID = 1

* `LIMIT`
	* Limits the number of responses returned by the DB for a given command
	* `SELECT * FROM my_table *LIMIT* 5;`
	* This example command will return the first 5 rows of the table as it is limited to 5 responses

* `BETWEEN`
	* Selects the value between 2 input values
	* `SELECT name FROM my_table WHERE birthday *BETWEEN* '01-01-2023' AND '05-01-2023'`
	* This example command will return the names of people whose birthday is between 1st of Jan and 5th of Jan.

* `LIKE`
	* Identified content that matches based on a pattern
	* `SELECT name FROM my_table WHERE name *LIKE* '%Dom%'`
	* This example command would return any name that contains 'dom' but won't show age of birthday.

* `IS NULL`
	* Checks if the value is null
	* `SELECT name FROM my_table WHERE birthday *IS NULL*;`
	* This example command would return the name of people who haven't provided a birthday date

* `IS NOT NULL`
	* Checks if the value is NOT null
	* `SELECT name FROM my_table WHERE birthday *IS NOT NULL*;`
	* This example command would return the name of people who has provided a birthday date

#### Common SQL Mistakes
* Double quotes instead of single quotes. 
	* Double and single quotes are used for different tasks in SQL. 
	* For common strings like finding a name in a WHERE statement you must use single quotes. 
	* This is really easy to mix up, especially if you are copy/pasting SQL queries, as the formatted special or back-tick quotes also might not work. 
	* If a SQL command isn't running, but you know the syntax is good - double check for single quotes.

* Missing a semicolon. 
	* The semicolon at the end of a query is one of the most common mistakes to make. 
	* It's easy to fix by just adding a semi colon on the next line - but only if you notice it. 
	* Its recommended to keep an eye on the beginning of the terminal line, to make sure it ends with this `=#` and not something like this `-#`. 
	* Another good practice for catching SQL syntax mistakes early is to pay attention to the result output after a command. 
	* If you make a new table you should get a message saying there's a new table
	* If you do not get a response after running a command, something is wrong and you should stop and fix it.


#### Relating Tables with Foreign Keys
* Allows for creating relationship between data in different tables
* Allows queries to span multiple tables


### Key Terms
* Primary Key - A column with unique identifiers for each row in a table
* Foreign Key - A reference to the primary key of another table
* Database Schema - The high level structure of a database
* Meta Command - a management command starting with \ like in \c for connect




