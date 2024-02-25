# Project Instructions: MyStore
build an e-commerce website – an application that allows users to perform the following:

* View a list of available products to purchase
* Add products to a shopping cart
* Complete the checkout process.

## Starter Code
* CSS 
    * Stylesheet provided from sample repo. 
    * Can use sample or create own CSS

* `data.json`
    * A file populated with data is included in sample repo
    * Connect app to DB from second project for data persistence

## Project features
Application should include the following characteristics:

* **Product list page**, which displays the available products for the user to choose and add to their cart (in various quantities)
* **Product details page**, which displays more information about any particular product
* **Shopping cart**, which includes the products that the user has added to their cart
* **Checkout form**, which collects information about the user (e.g., name, address, payment details, etc.)
* **Order confirmation page**, which shows the outcome after the user completes the checkout process (i.e., submits the checkout form)

### Development strategy / Recommended Steps
Use this overview and the rubric specifications to create this project.

* Scaffold your project
* Generate the product list component (serve product list as "main page")
* Begin building the component logic and template
* Consider the hierarchy of components
* Create the TypeScript model for products in the app (products should be model instead of ordinary object)
* Generate the service(s)
* Fetch data from the API for DB (or `data.json file) and render products in product list
* Generate and create other components
* Create routing between components
* Ensure that inputs are validated in the client (how to ensure data at checkout is accurate/correct).


### Suggested Improvements
1. Enable a signup/login flow using Auth0.
2. Incorporate the back end built in the second course of this Nanodegree program to persist data.
3. Apply your own styling to the application.
4. Show an item amount “badge” next to the link for your shopping cart.
5. Show the properly-calculated cart total in the cart. 
6. When no items are in the cart, indicate that the cart is empty.

