import express, { Request, Response } from 'express'; // Import Express
import imageRoute from './api/images'; // import images route
import path from 'path'; // Import path module

// set express router to routes
const routes = express.Router();

///////////////////////////////
//// SERVE HOMEPAGE CONFIG ////
///////////////////////////////
routes.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../HTML/index.html'));
  res.status(200);
  console.log('Showing Homepage');
});

////////////////////////////
//// SERVE IMAGE RESIZE ////
////////////////////////////
routes.use('/resize', imageRoute);

// Export routes
export default routes;
