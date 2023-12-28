// Log URL request parameters to console
// Import Modules
// Configure logger middleware
// Export logger middleware

// Import Express
import express from 'express';

// Configure Logger
const logger = (req: express.Request, res: express.Response, next: Function): void => {
    let url = req.url;
    console.log(`Request was made to: ${url}`);
    next();
}

// Export Logger
export default logger;
