import { Response, Request, NextFunction } from 'express'; // import express
import jwt from 'jsonwebtoken'; // import jsonwebtoken

// Create verifyAuthToken function middleware
export const verifyAuthToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization as string; // get authorization header
    const token = authHeader.split(' ')[1]; // get token
    jwt.verify(token, process.env.TOKEN_SECRET as string); // decode token
    next(); // call next function
  } catch (err) {
    res.status(401);
    res.json('Access denied, invalid token');
    return;
  }
};
