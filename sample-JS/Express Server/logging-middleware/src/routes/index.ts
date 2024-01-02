// import express
import express from 'express';
import logger from '../utilities/logger';

// import continents, countries, and oceans routes
import continents from './places/continents';
import countries from './places/countries';
import oceans from './places/oceans';

// set express router to routes
const routes = express.Router();

// define route
routes.get('/', (req, res) => {
  res.send('Dom Location Page!');
});

// Define routes for continents, countries, and oceans
routes.use('/continents', continents);
routes.use('/countries', countries);
routes.use('/oceans', oceans);

// export routes
export default routes;
