import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET;

// Create token with jwt.sign()
export const generateToken = (payload: any) => {
  const token = jwt.sign(payload, JWT_SECRET!, {
    expiresIn: '1d',
  });
  return token;
};

// Verify token with jwt.verify()
export const verifyToken = (token: string) => {
  const decoded = jwt.verify(token, JWT_SECRET!);
  return decoded;
};
