import express, { Request, Response } from 'express'; // import express
import { Order, OrderInfo, OrderStore } from '../models/order'; // import order models
import { verifyAuthToken } from '../utility/authenticate'; // import verifyAuthToken

const store = new OrderStore(); // create new order store

////////////////////
// ORDER HANDLERS //
////////////////////
// Index Orders
// showOrder
// Create Order
// Update Order
// Delete Order

// Get all orders
const indexOrder = async (_req: Request, res: Response) => {
  try {
    const orders = await store.index(); // get all orders
    res.json(orders); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Get order by user id
const showOrder = async (req: Request, res: Response) => {
  try {
    const uID = req.params.user_id; // get order id
    const order = await store.showOrder(uID); // get order by user id
    res.json(order); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Create a new order in orders table
const createOrder = async (req: Request, res: Response) => {
  try {
    const order: Order = {
      status: req.body.status,
      user_id: req.body.user_id
    }; // create new order
    const newOrder = await store.create(order); // create new order
    res.json(newOrder); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Update an order
const updateOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.id; // get order id
    const order: Order = {
      status: req.body.status,
      user_id: req.body.user_id
    }; // create updated order
    const updatedOrder = await store.update(order, id); // update order
    res.json(updatedOrder); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const removeOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.id; // get order id
    const deletedOrder = await store.delete(id); // delete order
    res.status(200);
    res.json(deletedOrder); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

/////////////////////////
// ORDER INFO HANDLERS //
/////////////////////////
// Add to OrderInfo
// Index OrderInfo
// Delete from OrderInfo

// Add product to OrderInfo
const addProduct = async (req: Request, res: Response) => {
  try {
    const oi: OrderInfo = {
      order_id: req.body.order_id, // get order id
      product_id: req.body.product_id, // get product id
      quantity: req.body.quantity // get quantity
    };
    const orderDetails = await store.addProduct(oi); // add product to order
    res.status(200);
    res.json(orderDetails); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Get all from OrderInfo
const indexOrderInfo = async (_req: Request, res: Response) => {
  try {
    const orderDetails = await store.indexOrderInfo(); // get all order details
    res.status(200);
    res.send(orderDetails); // send response
  } catch (err) {
    console.error(err); // Log the error
    res.status(400);
    res.json(err); // Send the error message in the response
  }
};

// Delete an order from OrderInfo
const deleteOrderInfo = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id); // get order id
    const deletedOrder = await store.deleteOrderInfo(id); // delete order
    res.status(200);
    res.json(deletedOrder); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

/////////////////////////////
// USE HANDLERS IN EXPRESS //
/////////////////////////////

// Configure routes for orders with express
const order_routes = (app: express.Application) => {
  app.get('/orders', indexOrder); // get all orders
  app.get('/orders/details', indexOrderInfo); // get all order details
  app.post('/orders', createOrder); // create a new order
  app.get('/orders/:id', verifyAuthToken, showOrder); // get order by order id
  app.put('/orders/:id', updateOrder); // update an order
  app.delete('/orders/:id', removeOrder); // delete an order
  app.post('/orders/:id/products', addProduct); // add product to order
  app.delete('/orders/:id/products', deleteOrderInfo); // delete an order from order details
};

// export order routes
export default order_routes;
