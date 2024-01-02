import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRESS_DB_TEST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    ENV,
} = process.env;

let db_pool
console.log(ENV)

if(ENV === 'dev') {
    db_pool = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    })
};

if(ENV === 'test') {
    db_pool = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRESS_DB_TEST,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    })
};

export default db_pool;
