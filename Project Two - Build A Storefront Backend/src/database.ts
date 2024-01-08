import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_TEST_DB,
  POSTGRES_USER,
  POSTGRES_TEST_USER,
  POSTGRES_PASSWORD,
  POSTGRES_TEST_PASSWORD,
  NODE_ENV
} = process.env;

// Database configuration based on NODE_ENV
const db_pool = new Pool({
  host: POSTGRES_HOST,
  database: NODE_ENV === 'dev' ? POSTGRES_DB : POSTGRES_TEST_DB,
  user: NODE_ENV === 'dev' ? POSTGRES_USER : POSTGRES_TEST_USER,
  password: NODE_ENV === 'dev' ? POSTGRES_PASSWORD : POSTGRES_TEST_PASSWORD
});

// Print NODE_ENV to console to confirm which environment is being used
console.log(`ENV: ${NODE_ENV}`);

export default db_pool;
