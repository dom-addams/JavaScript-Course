// import dependencies
import Client from '../database'
import bcrypt from 'bcrypt'

// Create authenticate method for DB
// const authUser = async authenticate(username: string, password: string): Promise<User | null> {
//     try {
//       // @ts-ignore
//       const conn = await Client.connect()
//       const sql = 'SELECT password_digest FROM users WHERE username=($1)'

//       const result = await conn.query(sql, [username])

//       if(result.rows.length) {

//         const user = result.rows[0]

//         if (bcrypt.compareSync(password+pepper, user.password_digest)) {
//           return user
//         }
//       } return null
//     } catch(err) {
//       throw new Error(`unable to authenticate user (${username}): ${err}`)
//     } 
// } 

// // export default createUser
// export default authUser
