# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints -- ORIGINAL
### Products
- Index 
- Show
- Create [token required]
- Products by category (args: product category)

### Users
- Index [token required]
- Show [token required]
- Create [token required]

### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## API Endpoints -- ACTUAL
### Products
* `GET` `/products` == Get all products
* `GET` `/products/:id` == Get product by ID
* `POST` `/products` == Create new product
* `PUT` `/products/:id` == Update existing product with ID
* `DELETE` `/products/:id` == Delete product with ID

### Users
* `GET` `/users` == Get all users
* `GET` `/users/:id` == Get user by ID
* `POST` `/users/new` == Create new user ++ generate JWT
* `POST` `/users/auth` == Authenticate user ???
* `PUT` `/users/update/:id` == Update user with ID
* `DELETE` `/users/:id` == Delete user with ID

### Orders
* `GET` `/orders` == Get all orders
* `GET` `/orders/:id` == Get order with ID
* `POST` `/order` == Create new order
* `PUT` `/order` == Update order to add stuff
* `DELETE` `/order/:id` == Delete order with ID

## Data Shapes
### Product
-  id
- name
- price
- category

### User
- id
- firstName
- lastName
- password

### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

## DB Tables
### Products
* ID `:Number`
* Name `:String`
* Price `:FLOAT`
* Category `:String`

### Users
* ID `:Number`
* Firstname `:String`
* Lastname `:String`
* Password `:String`

### Orders
* ID `:Number`
* User_ID [Foreign Key] `:Number`
* Status `Boolean`

### Order_Info
* ID `:Number`
* User_ID [Foreign Key] `:Number`
* Order_ID [Foreign Key] `:Number`
* Quantity `:Number`

-----END OF FILE------