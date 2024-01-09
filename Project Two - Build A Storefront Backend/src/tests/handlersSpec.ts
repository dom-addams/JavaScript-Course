import supertest from 'supertest'; // import supertest to test HTTP requests/responses
import app from '../server'; // import express app

const request = supertest(app); // supertest agent

// AUTH TOKEN FOR TESTING
import jwt from 'jsonwebtoken'; // import jsonwebtoken
import { User } from '../models/user'; // import User model

let token = ''; // declare token variable

// Create a User and Token for testing beforeAll tests
beforeAll(async () => {
  const user: User = {
    first_name: 'Mark',
    last_name: 'Cavendish',
    password: 'EliteCyclist123'
  }; // create new user
  const tmp_jwt = jwt.sign({ user }, process.env.TOKEN_SECRET as string); // create token
  token = tmp_jwt; // assign tmp token to variable
  console.log('Token: ', token); // log token to console
});

// Make token available to required tests
export default token;

///////////////////////////////
// HANDLER INTEGRATION TESTS //
///////////////////////////////
/// Order of Tests ///
// CREATE User via /users
// CREATE Product via /products
// CREATE Order via /orders
// Add Order Details to OrderInfo Table via /orders/:id/products
/////////
// AUTHENTICATE User via /users/authenticate
/////////
// INDEX all users via /users
// INDEX all products via /products
// INDEX all orders via /orders
// INDEX all order details via /orders/products
/////////
// SHOW one user via /users/:id
// SHOW one product by id via /products/:id
// SHOW one product by category via /products/category/:category
// SHOW one order via /orders/:id
// SHOW one order by user id and status via /orders/:id/:status
/////////
// UPDATE one user via /users/:id
// UPDATE one product via /products/:id
// UPDATE one order via /orders/:id
/////////
// DELETE orderInfo via /orders/:id/products
// DELETE order via /orders/:id
// DELETE user via /users/:id
// DELETE product via /products/:id

// Begin integration tests
describe('HANDLER INTEGRATION TESTS', () => {
  // CREATE INTEGRATION TESTS
  describe('CREATE HADLER TESTS', () => {
    it('Should create a new user', async () => {
      const result = await request
        .post('/users')
        .send({
          first_name: 'Jane',
          last_name: 'Ambers',
          password: 'MyPassword123'
        })
        .set('Authorization', 'Bearer ' + token);
      expect(result.status).toBe(200);
    });
    it('Should create a new product', async () => {
      const result = await request
        .post('/products')
        .send({
          name: 'Bananas',
          price: 2.99,
          category: 'Food'
        })
        .set('Authorization', 'Bearer ' + token);
      expect(result.status).toBe(200);
    });
    it('Should create a new order', async () => {
      const result = await request
        .post('/orders')
        .set('Content-Type', 'application/json')
        .send({
          user_id: 1,
          status: 'active'
        });
      expect(result.status).toBe(200);
    });
    it('Should add order details to OrderInfo table', async () => {
      const result = await request.post('/orders/1/products').send({
        order_id: 1,
        product_id: 1,
        quantity: 5
      });
      expect(result.status).toBe(200);
    });
  });

  // AUTHENTICATE INTEGRATION TEST
  describe('AUTHENTICATE HANDLER TEST', () => {
    it('Should authenticate user', async () => {
      const result = await request
        .post('/users/authenticate')
        .set('Content-Type', 'application/json')
        .send({
          id: 1,
          password: 'MyPassword123'
        });
      expect(result.status).toBe(200);
    });
  });

  // INDEX INTEGRATION TESTS
  describe('INDEX HANDLER TESTS', () => {
    it('Should get all users', async () => {
      const result = await request
        .get('/users')
        .set('Authorization', 'Bearer ' + token);
      expect(result.body.length).toBeGreaterThan(0);
      expect(result.status).toBe(200);
    });
    it('Should get all products', async () => {
      const result = await request
        .get('/products')
        .set('Content-type', 'application/json');
      expect(result.body[0]).toEqual({
        id: 1,
        name: 'Bananas',
        price: 2.99,
        category: 'Food'
      });
    });
    it('Should get all orders', async () => {
      const result = await request
        .get('/orders')
        .set('Content-type', 'application/json');
      expect(result.body[0]).toEqual({
        id: 1,
        user_id: 1,
        status: 'active'
      });
    });
    it('Should get all order details from order_info', async () => {
      const result = await request
        // .get('/orderDetails')
        .get('/orders/details')
        .set('Content-type', 'application/json');
      expect(result.body[0]).toEqual({
        id: 1,
        order_id: 1,
        product_id: 1,
        quantity: 5
      });
    });
  });

  // SHOW INTEGRATION TESTS
  describe('SHOW HANDLER TESTS', () => {
    it('Should get the user with ID 1', async () => {
      const result = await request
        .get('/users/1')
        .set('Authorization', 'Bearer ' + token);
      expect(result.body.first_name).toEqual('Jane');
      expect(result.body.last_name).toEqual('Ambers');
    });
    it('Should get one product with ID 1', async () => {
      const result = await request.get('/products/1');
      expect(result.body).toEqual({
        id: 1,
        name: 'Bananas',
        price: 2.99,
        category: 'Food'
      });
    });
    it('Should get one product by category', async () => {
      const result = await request.get('/products/category/Food');
      expect(result.body[0].category).toEqual('Food');
    });
    it('Should get one order by user ID', async () => {
      const result = await request
        .get('/orders/1')
        .set('Authorization', 'Bearer ' + token);
      expect(result.body).toEqual({
        id: 1,
        user_id: 1,
        status: 'active'
      });
    });
    it('Should get one order by user ID and status', async () => {
      const result = await request
        .get('/orders/1/active')
        .set('Authorization', 'Bearer ' + token);
      expect(result.body).toEqual({
        id: 1,
        user_id: 1,
        status: 'active'
      });
    });
  });

  // UPDATE INTEGRATION TESTS
  describe('UPDATE HANDLER TESTS', () => {
    it('Should update the user with ID 1', async () => {
      const result = await request
        .put('/users/1')
        .set('Content-Type', 'application/json')
        .send({
          first_name: 'Jane',
          last_name: 'Ambers',
          password: 'MyPassword123'
        });
      expect(result.status).toBe(200);
    });
    it('Should update the product with ID 1', async () => {
      const result = await request
        .put('/products/1')
        .set('Content-Type', 'application/json')
        .send({
          name: 'Bananas',
          price: 2.99,
          category: 'Food'
        });
      expect(result.status).toBe(200);
    });
    it('Should update the order with ID 1', async () => {
      const result = await request
        .put('/orders/1')
        .set('Content-Type', 'application/json')
        .send({
          user_id: 1,
          status: 'complete'
        });
      expect(result.status).toBe(200);
    });
  });

  // DELETE INTEGRATION TESTS
  describe('DELETE HANDLER TESTS', () => {
    it('Should delete order details with ID 1', async () => {
      const result = await request.delete('/orders/1/products');
      expect(result.status).toBe(200);
    });
    it('Should delete order with ID 1', async () => {
      const result = await request.delete('/orders/1');
      expect(result.status).toBe(200);
    });
    it('Should delete user with ID 1', async () => {
      const result = await request.delete('/users/1');
      expect(result.status).toBe(200);
    });
    it('Should delete product with ID 1', async () => {
      const result = await request.delete('/products/1');
      expect(result.status).toBe(200);
    });
  });
});
