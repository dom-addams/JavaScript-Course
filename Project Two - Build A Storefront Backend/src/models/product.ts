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
  // Get all products
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

  // Get all products by product id
  async showProduct(id: string): Promise<Product> {
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

  // Get all products by product category
  async showByCategory(category: string): Promise<Product[]> {
    try {
      const conn = await db_pool.connect();
      const sql = 'SELECT * FROM products WHERE category=($1)';

      const result = await conn.query(sql, [category]);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not find product ${category}. Error: ${err}`);
    }
  }

  // Create a new product
  async createProduct(p: Product): Promise<Product> {
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

  // Update a product
  async update(p: Product, id: string): Promise<Product> {
    try {
      const conn = await db_pool.connect();
      const sql =
        'UPDATE products SET name=($1), price=($2), category=($3) WHERE id=($4) RETURNING *';

      const result = await conn.query(sql, [p.name, p.price, p.category, id]);

      const product = result.rows[0];

      conn.release();

      return product;
    } catch (err) {
      throw new Error(`Could not update product ${id}. Error: ${err}`);
    }
  }

  // Delete a product
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
