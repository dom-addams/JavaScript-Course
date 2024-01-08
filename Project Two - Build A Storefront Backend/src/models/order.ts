// Import the connection pool from the database.ts file
import db_pool from '../database';

// Export Order Type and Use ? for the id to be optional
export type Order = { id?: number; status: boolean; user_id: number };

// Export OrderInfo Type and use ? for the id to be optional
export type OrderInfo = {
  id?: number;
  order_id: number;
  product_id: number;
  quantity: number;
};

// Export OrderStore class
export class OrderStore {
  // Get all orders
  async index(): Promise<Order[]> {
    try {
      const conn = await db_pool.connect();
      const sql = 'SELECT * FROM orders';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get orders. Error: ${err}`);
    }
  }

  // Get all orders by order id
  async showOrder(id: string): Promise<Order> {
    try {
      const conn = await db_pool.connect();
      const sql = 'SELECT * FROM orders WHERE id=($1)';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find order ${id}. Error: ${err}`);
    }
  }

  // Create a new order
  async create(o: Order): Promise<Order> {
    try {
      const sql =
        'INSERT INTO orders (user_id, status) VALUES($1, $2) RETURNING *';
      const conn = await db_pool.connect();
      const result = await conn.query(sql, [o.user_id, o.status]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Could not add new order. ${err}`);
    }
  }

  // Update an order
  async update(o: Order, id: string): Promise<Order> {
    try {
      const conn = await db_pool.connect();
      const sql =
        'UPDATE orders SET status=($1), user_id=($2) WHERE id=($3) RETURNING *';
      const result = await conn.query(sql, [o.status, o.user_id, id]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Could not update order ${o.id}. Error: ${err}`);
    }
  }

  // Delete an order
  async delete(id: string): Promise<Order> {
    try {
      const conn = await db_pool.connect();
      const sql = 'DELETE FROM orders WHERE id=($1) RETURNING *';
      const result = await conn.query(sql, [id]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Could not delete order ${id}. Error: ${err}`);
    }
  }

  ////////////////////////
  // ORDER INFO METHODS //
  ////////////////////////

  // Add product to OrderInfo
  async addProduct(oi: OrderInfo): Promise<OrderInfo> {
    try {
      const sql =
        'INSERT INTO order_info (order_id, product_id, quantity) VALUES($1, $2, $3) RETURNING *';
      const conn = await db_pool.connect();
      const result = await conn.query(sql, [
        oi.order_id,
        oi.product_id,
        oi.quantity
      ]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (err) {
      throw new Error(
        `Could not add product ${oi.order_id} to orderInfo with order ${oi.order_id}. ${err}`
      );
    }
  }

  // Get all from OrderInfo
  async indexOrderInfo(): Promise<OrderInfo[]> {
    try {
      const conn = await db_pool.connect();
      const sql = 'SELECT * FROM order_info';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get order info. Error: ${err}`);
    }
  }

  // Delete from OrderInfo
  async deleteOrderInfo(id: string): Promise<OrderInfo> {
    try {
      const conn = await db_pool.connect();
      const sql = 'DELETE FROM order_info WHERE id=($1) RETURNING *';
      const result = await conn.query(sql, [id]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Could not delete order info ${id}. Error: ${err}`);
    }
  }
}
