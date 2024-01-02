// Import the connection pool from the database.ts file
import db_pool from '../database';

// Export Product type
export type Product = {
  id?: number; // Use ? as the id is optional
  name: string;
  price: number;
  category: string;
};

// Export ProductStore class
export class ProductStore {
  // Index method
  async index(): Promise<Product[]> {
    try {
      const conn = await db_pool.connect();
      const sql = 'SELECT * FROM products';

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get products. Error: ${err}`);
    }
  }

  // Show method
  async show(id: string): Promise<Product> {
    try {
      const conn = await db_pool.connect();
      const sql = 'SELECT * FROM products WHERE id=($1)';

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find product ${id}. Error: ${err}`);
    }
  }

  // Create method
  async create(p: Product): Promise<Product> {
    try {
      const conn = await db_pool.connect();
      const sql =
        'INSERT INTO products (name, price, category) VALUES($1, $2, $3) RETURNING *';

      const result = await conn.query(sql, [p.name, p.price, p.category]);

      const product = result.rows[0];

      conn.release();

      return product;
    } catch (err) {
      throw new Error(`Could not add new product ${p.name}. Error: ${err}`);
    }
  }

  // Delete method
  async delete(id: string): Promise<Product> {
    try {
      const conn = await db_pool.connect();
      const sql = 'DELETE FROM products WHERE id=($1) RETURNING *';

      const result = await conn.query(sql, [id]);

      const product = result.rows[0];

      conn.release();

      return product;
    } catch (err) {
      throw new Error(`Could not delete product ${id}. Error: ${err}`);
    }
  }
}
