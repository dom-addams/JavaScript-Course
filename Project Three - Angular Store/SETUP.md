# What Do I Need?
- 6 products
- models Class file to set the structure of a product
- homepage to display all products
- page per product 
- cart page
- checkout page
- order confirmation page

## Angular Components Setup
- Root
    - product module
        - productList component
            - uses HTTP service to pull data from file and create a list of products
        - products component
            - takes products from list and display on "homepage"
        - productPage
            - shows specific product page
    - cart module
        - cartPage
            - show product, quantity, and total price
    - order module
        - orderPage
            - show 
    - navigation component (doesn't need "routing" to)
        - component to show links in HTML
        - added to `app.component.html` (root HTML file)
            - line one should be `<app-navigation></app-navigation><br>`
            - line two should be `<router-outlet></router-outlet>`

## Angular Services (for fetching data)
- Cart service
- HTTP service
