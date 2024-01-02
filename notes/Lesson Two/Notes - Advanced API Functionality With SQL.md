# Notes - Advanced API Functionality With SQL

## TOPICS
* Database relationships
* SQL Joins
* RESTful endpoints using with joins
* RESTful endpoints with params

### SQL Relationships
#### One to Many
One to many is like the relationship with plants and regions.

Where many plants could be associated with one region.

This is done by adding a foreign key on the plants tatble.

#### One to One
In a one-to-one relationship, one row in a table is associated with one row in another table. 

This relationship would be if there is only one plant per region.

#### Many to Many
Many to many is the relationship where rows on multiple tables can be associated with many rows on another table.

This relationship is acheived by an intermediary table.

This is called a `join table` and stores each relationship as a row.

> Example Join Command === `SELECT * FROM products INNER JOIN order_products ON product.id = order_products.id;`
































