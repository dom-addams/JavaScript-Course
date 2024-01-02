// Import the connection pool from the database.ts file
import db_pool from '../database';

// Export Order and OrderInfo types
// Use ? as the id is optional
export type Order = { id?: number; status: string; user_id: number };
export type OrderInfo = { id?: number; status: string; user_id: number };

export class OrderStore {
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

  async show(id: number): Promise<Order> {
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

  async create(o: Order): Promise<Order> {
    try {
      const conn = await db_pool.connect();
      const sql =
        'INSERT INTO orders (status, user_id) VALUES($1, $2) RETURNING *';
      const result = await conn.query(sql, [o.status, o.user_id]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Could not add new order ${o.status}. Error: ${err}`);
    }
  }

  async update(o: Order): Promise<Order> {
    try {
      const conn = await db_pool.connect();
      const sql =
        'UPDATE orders SET status=($1), user_id=($2) WHERE id=($3) RETURNING *';
      const result = await conn.query(sql, [o.status, o.user_id, o.id]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Could not update order ${o.id}. Error: ${err}`);
    }
  }

  async delete(id: number): Promise<Order> {
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
}
