// import bcrypt from 'bcrypt';
// import db_pool from '../database';

// async create(u: User): Promise<User> {
//     const conn = await db_pool.connect();
//     const sql = 'INSERT INTO users (first_name, last_name, password_digest) VALUES ($1, $2, $3) RETURNING *';
//     const hash = bcrypt.hashSync(
//         u.password + pepper, 
//         parseInt(saltRounds)
//     );
// };

// const result = await conn.query(sql, [u.first_name, hash]);
// const user = result.rows[0];

// conn.release();

// return user;

// //////////////////
// // AUTHENTICATE //
// //////////////////

// async authenticate(first_name: string, password: string): Promise<User | null> {
//     const conn = await db_pool.connect();
//     const sql = 'SELECT * FROM users WHERE first_name=$1';
//     const result = await conn.query(sql, [first_name]);
//     if(result.rows.length) {
//         const user = result.rows[0];
//         if(bcrypt.compareSync(password + pepper, user.password_digest)) {
//             return user;
//         }
//     }
//     return null;
// }
