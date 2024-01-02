import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_TEST_DB,
  POSTGRES_USER,
  POSTGRESS_TEST_USER,
  POSTGRES_PASSWORD,
  POSTGRES_TEST_PASSWORD,
  ENV
} = process.env;

let db_pool: Pool = new Pool();

if (ENV === 'dev') {
  db_pool = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
  });
}

if (ENV === 'test') {
  db_pool = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_TEST_DB,
    user: POSTGRESS_TEST_USER,
    password: POSTGRES_TEST_PASSWORD
  });
}

export default db_pool;
