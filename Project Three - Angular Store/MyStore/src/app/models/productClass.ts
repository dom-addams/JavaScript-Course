// New Class for Product
// Class should defined properties: id, name, price, url, description, quantity

export default class Product {
    id: number
    name: string
    price: number
    url: string
    description: string
    quantity: number

    constructor(){
        this.id = 1,
        this.name = "Book",
        this.price = 4.99,
        this.url = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        this.description = "Amazing product"
        this.quantity = 1
    }
}
