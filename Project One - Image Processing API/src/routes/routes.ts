import express from 'express'; // import express
import images from './pages/images'; // import images route

// set express router to routes
const routes = express.Router();

// define route
routes.get('/', (req, res) => {
  res.send('Dom Second Page!');
});

// Use images route
routes.use('/images', images);

// export routes
export default routes;
