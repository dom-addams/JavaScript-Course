// import dependencies
import Client from '../database'
import bcrypt from 'bcrypt'

// Create user method for DB
// const createUser = async create(u: User): Promise<User> {
//     try {
//       // @ts-ignore
//       const conn = await Client.connect()
//       const sql = 'INSERT INTO users (username, password_digest) VALUES($1, $2) RETURNING *'

//       const hash = bcrypt.hashSync(
//         u.password + pepper, 
//         parseInt(saltRounds)
//       );

//       const result = await conn.query(sql, [u.username, hash])
//       const user = result.rows[0]

//       conn.release()

//       return user
//     } catch(err) {
//       throw new Error(`unable create user (${u.username}): ${err}`)
//     } 
// }
