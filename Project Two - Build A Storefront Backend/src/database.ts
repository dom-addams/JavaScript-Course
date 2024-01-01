import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const {
  DB_HOST,
  DEV_DB,
  TEST_DB,
  DEV_DB_USER,
  DEV_DB_PASSWORD,
  TEST_DB_USER,
  TEST_DB_PASSWORD,
  ENV
} = process.env;

let db_pool: Pool = new Pool();

if (ENV === 'dev') {
  db_pool = new Pool({
    host: DB_HOST,
    database: DEV_DB,
    user: DEV_DB_USER,
    password: DEV_DB_PASSWORD
  });
}

if (ENV === 'test') {
  db_pool = new Pool({
    host: DB_HOST,
    database: TEST_DB,
    user: TEST_DB_USER,
    password: TEST_DB_PASSWORD
  });
}

export default db_pool;
