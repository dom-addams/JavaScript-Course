# *_Project Three - MyStore Angular App_*
This project contains an angular application called MyStore.

## Overview
All code for this project is inside the `MyStore` folder.

The application leverages the Angular framework to create a storefront that contains Angular Components.

In addition to the `Components` feature, this app uses `Services` and `Angular Routing` for navigation.

HTML is used to "create" the website and CSS has been used to apply customm styling (including button hover).

## Build & Serve
To prepare the project, run `npm i`.

To build and server the project, run `ng serve`.

This will serve the application on `http:localhost:4200`.

While navigating the application, the paths will will also show in the address bar i.e. `http:localhost:4200/checkout`.

## Unit Tests
As unit testing is not a requirement for completion of this project, it has not been included.


# *_Project Structure_*

## Routing

### _Path:_ `/`

Displays the homepage which shows all the products available from `data.json` file.

To view details of product, click on image.

### _Path:_ `/product:id`

Displays detailed product page about the specific item.

### _Path:_ `/checkout`

Takes the user to the checkout page.

Will only display `Total` if baske isn't empty/

If cart is empty, display message "Your cart is empty"

> If cart or fields are empty, the Purchase button won't work

### _Path:_ `/order`

Once a user completes their order, they will be taken to the successful order page.

If no order exists, there's a return to checkout button.

On successful order, there is a back to products page button.

## Services

### HTTP Service
The HTTP service returns observables that can be subscribed to return data. 

It simulates working with a REST API by fetching data from `data.json` in the `assets` folder. 

### Cart Service
The Cart interacts with most components and the service allows better handling of CRUD operations.

It allows the app to store a "state" value of the cart. From adding items to returning cart total.

This makes the cart more flexible than adding lots of `Input` and `Output` decorators to components.

## Modules

### Product Module
This houses three different product components. 

The components in this module are:

 - `product-list`
 - `product-page`
 - `products`

### Cart Module
Contains the `cart-page` component displaying checkout page.

### Order Module
This contains the `order` component used for showing the successful order or no order page.

## Components

### Product Components
 - `product-list`
	- Parent component for `products` component. 
	- Pulls data using the HTTP service and subscribes to results.
	- Results are then passed to products array to store the list of products.
	- Renders each product in the list for `products` component.

 - `products`: Renders the products from `data.json` on the products homepage
 - `product-page`: This displays the item page for a specific product. This is the page shown when clicking on images.

### Cart Components
 - `cart-page`
	- Displays the checkout page and handles the entire checkout process.
	- Contains a form with fields to fill out to complete order.
	- Shows products that have been "added" to cart.
	- Only displays total and allows purchase completion when cart is not empty. 
	- On submission of form, sneds user to order page.
	- Display `Remove Product` button to remove individual products from cart.

### Order Components
When the user submits the form from the `cart-page` component, it returns a order successful page.

Also shows a "no order found" page with a return button.

## Form Validation

### Cart Component
Each input field on the checkout page form has its own validation check using `ngModelChange` and `ngIf`.

#### `ngModelChange`
- `validateName`
	- Checks name field is not empty and creates Window Alert "Fullname is required"
	- Checks if name `length < 1` OR `length > 16` and creates Windows Alert "Fullname must be at least 3 characters and no more than 16 characters"
	- Check if name contains numbers and create Window Alert "Fullname cannot contain numbers"

- `validateAddress`
	- Checks address field is not empty and creates Window Alert "Address is required"
	- Checks if name `length < 1` and creates Windows Alert "Address must be at least 7 characters"

- `validateCreditCard`
	- Checks credit card field is not empty and creates Window Alert "Credit Card is required"
	- Checks if field contains letters and creates Window Alert "Credit Card cannot contain letters"
	- Checks if field `length < 1` OR `length > 16` and creates Windows Alert "Credit Card must be at least 16 characters"

#### HTML `ngIf`
- Name
	- Checks if name field is `invalid` and `dirty`
	- Checks if field is empty and uses `required` to create div saying "Fullname is required"
	- Checks if field doesn't match `pattern` and creates div saying "Fullname cannot have numbers"
	- Checks if field length is more than `minlength` and creates div saying "Name must be at least 3 characters long"

- Address
	- Checks if address field is `invalid` and `dirty`
	- Checks if field is empty and uses `required` to create div saying "Address is required"
	- Checks if field length is more than `minlength` and creates div saying "Address must be at least 7 characters long"

- Credit Card
	- Checks if credit card field is `invalid` and `dirty`
	- Checks if field is empty and uses `required` to create div saying "Credit card field is required"
	- Checks if field doesn't match `pattern` and creates div saying "Fullname cannot have numbers"
	- Checks if field length is more than `minlength` and creates div saying "Credit Card Number must be at least 16 characters long"
