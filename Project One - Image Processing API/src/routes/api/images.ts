///////////////////////////////
//// IMAGE RESIZE ENDPOINT ////
///////////////////////////////
import express, { Request, Response } from 'express'; // Import Express
import { imageProcessor } from '../../utilities/processor'; // Import imageProcessor function

// set express route for image resize endpoint
const imageRoute = express.Router();

// Resize image endpoint with validation using nested if else statements
imageRoute.get('/', (req: Request, res: Response) => {
  const filename = String(req.query.filename);
  const imageWidth = Number(req.query.width);
  const imageHeight = Number(req.query.height);
  try {
    imageProcessor(filename, imageWidth, imageHeight, res);
  } catch {
    res.status(500).send('Oops! Something went wrong');
  }
});

// Export imageRoute
export default imageRoute;
