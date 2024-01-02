// Import the connection pool from the database.ts file
import db_pool from '../database';

// Export User type
export type User = {
  id?: number; // Use ? as the id is optional
  first_name: string;
  last_name: string;
  password: string;
};

// Export UserStore class
export class UserStore {
  // Index method
  async index(): Promise<User[]> {
    try {
      const conn = await db_pool.connect();
      const sql = 'SELECT * FROM users';

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get users. Error: ${err}`);
    }
  }

  // Show method
  async show(id: string): Promise<User> {
    try {
      const conn = await db_pool.connect();
      const sql = 'SELECT * FROM users WHERE id=($1)';

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find user ${id}. Error: ${err}`);
    }
  }

  // Create method
  async create(u: User): Promise<User> {
    try {
      const conn = await db_pool.connect();
      const sql =
        'INSERT INTO users (first_name, last_name, password) VALUES($1, $2, $3) RETURNING *';

      const result = await conn.query(sql, [
        u.first_name,
        u.last_name,
        u.password
      ]);

      const user = result.rows[0];

      conn.release();

      return user;
    } catch (err) {
      throw new Error(`Could not add new user ${u.first_name}. Error: ${err}`);
    }
  }

  // Update method
  async update(u: User): Promise<User> {
    try {
      const conn = await db_pool.connect();
      const sql =
        'UPDATE users SET first_name=($1), last_name=($2), password=($3) WHERE id=($4) RETURNING *';

      const result = await conn.query(sql, [
        u.first_name,
        u.last_name,
        u.password,
        u.id
      ]);

      const user = result.rows[0];

      conn.release();

      return user;
    } catch (err) {
      throw new Error(`Could not update user ${u.id}. Error: ${err}`);
    }
  }

  // Delete method
  async delete(id: string): Promise<User> {
    try {
      const conn = await db_pool.connect();
      const sql = 'DELETE FROM users WHERE id=($1) RETURNING *';

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not delete user ${id}. Error: ${err}`);
    }
  }
}
