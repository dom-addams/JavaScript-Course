import express, { Request, Response } from 'express'; // import express
import { User, UserStore } from '../models/user'; // import user models
import jwt from 'jsonwebtoken'; // import jsonwebtoken
import { verifyAuthToken } from '../utility/authenticate'; // import verifyAuthToken middleware

const store = new UserStore(); // create new user store

////////////////////
// USER HANDLERS //
////////////////////
// Index Users
// showUser
// Authenticate User (pseudo login)
// Create User
// Update User
// Delete User

// Get all users
const indexUser = async (_req: Request, res: Response) => {
  try {
    const users = await store.index(); // get all users
    res.json(users); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Get user by user id
const showUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id; // get user id
    const user = await store.showUser(id); // get user by user id
    res.json(user); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Authenticate user by id and pass with bcrypt
const authenticateUser = async (req: Request, res: Response) => {
  try {
    const id = req.body.id; // get user id
    const password = req.body.password; // get user password
    const authenticated = await store.authenticateUser(id, password); // authenticate user
    authenticated ? res.sendStatus(200) : res.sendStatus(401); // Check bool and send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Create a new user in users table
const createUser = async (req: Request, res: Response) => {
  try {
    const user: User = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: req.body.password
    }; // create new user
    const newUser = await store.create(user); // create new user
    const token = jwt.sign(
      { user: newUser },
      process.env.TOKEN_SECRET as string
    ); // create JWT token
    res.json(token); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Update user
const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id; // get user id
    const user: User = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: req.body.password
    }; // create updated user
    const updatedUser = await store.update(user, id); // update user
    res.json(updatedUser); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Delete user
const removeUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id; // get user id
    const deletedUser = await store.delete(id); // delete user
    res.json(deletedUser); // send response
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

/////////////////////////////
// USE HANDLERS IN EXPRESS //
/////////////////////////////

// Configure routes for users with express
const user_routes = (app: express.Application) => {
  app.get('/users', verifyAuthToken, indexUser); // get all users
  app.get('/users/:id', verifyAuthToken, showUser); // get user by user id
  app.post('/users', verifyAuthToken, createUser); // create new user
  app.post('/users/authenticate', authenticateUser); // authenticate user
  app.put('/users/:id', updateUser); // update user
  app.delete('/users/:id', removeUser); // delete user
};

// export user routes
export default user_routes;
