// Import All Model Stores
import { OrderStore } from '../models/order';
import { ProductStore } from '../models/product';
import { UserStore } from '../models/user';

// Assign Model Stores to Variables
const orderStore = new OrderStore();
const productStore = new ProductStore();
const userStore = new UserStore();

//////////////////////////
// UNIT TEST ALL MODELS //
//////////////////////////
/// Order of Tests ///
// CREATE User
// CREATE Product
// CREATE Order
// Add Order Details to OrderInfo Table
/////////
// AUTHENTICATE User
/////////
// INDEX all users
// INDEX all products
// INDEX all orders
/////////
// SHOW one user
// SHOW one product by id
// SHOW one product by category
// SHOW one order by user id
// SHOW one order by user id and status
/////////
// UPDATE one user
// UPDATE one product
// UPDATE one order
/////////
// DELETE orderInfo
// DELETE order
// DELETE user
// DELETE product

// NOTE: AUTH TO BE ADDED LATER

describe('UNIT TEST ALL MODELS', () => {
  // CREATE method tests
  describe('CREATE', () => {
    it('Should create a new user', async () => {
      const result = await userStore.create({
        first_name: 'John',
        last_name: 'Doe',
        password: 'password123'
      });
      expect(result.first_name).toEqual('John');
      expect(result.last_name).toEqual('Doe');
      expect(result.id).toEqual(2);
    });
    it('Should create a new product', async () => {
      const result = await productStore.createProduct({
        name: 'Apples',
        price: 3.99,
        category: 'Food'
      });
      expect(result.name).toEqual('Apples');
      expect(result.price).toEqual(3.99);
      expect(result.category).toEqual('Food');
    });
    it('Should create a new order', async () => {
      const result = await orderStore.create({
        user_id: 2,
        status: 'active'
      });
      expect(result.user_id).toEqual(2);
      expect(result.status).toEqual('active');
    });
    it('Should add order details to OrderInfo table', async () => {
      const result = await orderStore.addProduct({
        order_id: 2,
        product_id: 2,
        quantity: 50
      });
      expect(result.quantity).toEqual(50);
      expect(result.order_id).toEqual(2);
      expect(result.product_id).toEqual(2);
    });
  });

  // AUTHENTICATE method test
  describe('AUTHENTICATE', () => {
    it('Should authenticate the user', async () => {
      const result = await userStore.authenticateUser('2', 'password123');
      expect(result).toBeTruthy;
    });
  });

  // INDEX method tests
  describe('INDEX', () => {
    it('Should return a list of all users', async () => {
      const result = await userStore.index();
      expect(result.length).toBeGreaterThan(0); // Expect more than 0 users
    });
    it('Should return a list of all products', async () => {
      const result = await productStore.index();
      expect(result.length).toBeGreaterThan(0); // Expect more than 0 products
    });
    it('Should return a list of all orders', async () => {
      const result = await orderStore.index();
      expect(result.length).toBeGreaterThan(0); // Expect more than 0 orders
    });
    it('Should return a list of all order details', async () => {
      const result = await orderStore.indexOrderInfo();
      expect(result.length).toBeGreaterThan(0); // Expect more than 0 order details
    });
  });

  // SHOW method tests
  describe('SHOW', () => {
    it('Should return the created user', async () => {
      const result = await userStore.showUser('2');
      expect(result.first_name).toEqual('John');
      expect(result.last_name).toEqual('Doe');
    });
    it('Should return the created product by ID', async () => {
      const result = await productStore.showProduct('2');
      expect(result.name).toEqual('Apples');
      expect(result.price).toEqual(3.99);
      expect(result.category).toEqual('Food');
    });
    it('Should return the created product by category', async () => {
      const result = await productStore.showByCategory('Food');
      expect(result.length).toBeGreaterThan(0);
    });
    it('Should return the created order by user ID', async () => {
      const result = await orderStore.showOrder('2');
      expect(result.status).toEqual('active');
      expect(result.user_id).toEqual(2);
    });
    it('Should return the created order by user ID and status and expect to fail', async () => {
      const result = await orderStore.showOrderStatus('2', 'complete');
      expect(result).toThrowError;
    });
  });

  // UPDATE method tests
  describe('UPDATE', () => {
    it('Should update the user', async () => {
      const result = await userStore.update(
        {
          first_name: 'Jane', // Change only first name
          last_name: 'Doe',
          password: 'password123'
        }, // requires all fields in store
        '2' // user id
      );
      expect(result.first_name).toEqual('Jane');
    });
    it('Should update the product', async () => {
      const result = await productStore.update(
        {
          name: 'Oranges', // Change name
          price: 2.99, // Change price
          category: 'Food' // Same category
        },
        '2' // product id
      );
      expect(result.name).toEqual('Oranges');
      expect(result.price).toEqual(2.99);
      expect(result.category).toEqual('Food');
    });
    it('Should update the order', async () => {
      const result = await orderStore.update(
        {
          status: 'complete', // Change status
          user_id: 2
        },
        '2' // order id
      );
      expect(result.status).toEqual('complete');
      expect(result.user_id).toEqual(2);
    });
  });

  // DELETE method tests
  describe('DELETE', () => {
    // Delete orderInfo and expect error
    it('Should delete the orderInfo', async () => {
      await orderStore.deleteOrderInfo('2');
      const result = await orderStore.indexOrderInfo();
      expect(result).toThrowError;
    });
    // Delete order and expect error
    it('Should delete the order', async () => {
      const result = await orderStore.delete('2');
      expect(result).toThrowError;
    });
    // Delete user and expect it to return user info
    it('Should delete the user', async () => {
      const result = await userStore.delete('2');
      expect(result.first_name).toEqual('Jane');
      expect(result.last_name).toEqual('Doe');
    });
    // Delete product and expect error
    it('Should delete the product', async () => {
      const result = await productStore.delete('2');
      expect(result).toThrowError;
    });
  });
});
