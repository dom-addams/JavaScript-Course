import express, { Request, Response } from 'express'; // import express
import { Product, ProductStore } from '../models/product'; // import product models

const store = new ProductStore(); // create new product store

//////////////////////
// PRODUCT HANDLERS //
//////////////////////
// Index Products
// showProduct
// showByCategory
// Create Product
// Update Product
// Delete Product

// Get all products
const indexProduct = async (_req: Request, res: Response) => {
  try {
    const products = await store.index(); // get all products
    res.json(products); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Get product by product id
const showProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id; // get product id
    const product = await store.showProduct(id); // get product by product id
    res.json(product); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Get product by product category
const showByCategory = async (req: Request, res: Response) => {
  try {
    const category = req.params.category; // get product category
    const product = await store.showByCategory(category); // get product by product category
    res.json(product); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Create a new product in products table
const createProduct = async (req: Request, res: Response) => {
  try {
    const product: Product = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category
    };
    const newProduct = await store.createProduct(product); // create new product
    res.json(newProduct); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Update a product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id; // get product id
    const product: Product = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category
    }; // create updated product
    const updatedProduct = await store.update(product, id); // update product
    res.json(updatedProduct); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Delete a product
const removeProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id; // get product id
    const deleted = await store.delete(id); // delete product
    res.json(deleted); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

/////////////////////////////
// USE HANDLERS IN EXPRESS //
/////////////////////////////

// Configure routes for products with express
const product_routes = (app: express.Application) => {
  app.get('/products', indexProduct); // get all products
  app.get('/products/:id', showProduct); // get product by product id
  app.get('/products/category/:category', showByCategory); // get product by product category
  app.post('/products', createProduct); // create a new product
  app.put('/products/:id', updateProduct); // update a product
  app.delete('/products/:id', removeProduct); // delete a product
};

// export product routes
export default product_routes;
