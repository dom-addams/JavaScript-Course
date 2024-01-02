// import express
import express from 'express';

// import routes api index files
import teachers from './api/teachers';
import students from './api/students';

// set express router to routes
const routes = express.Router();

// define route
routes.get('/', (req, res) => {
  res.send('Dom Second Page!');
});

// define routes for teachers and students
routes.use('/teachers', teachers);
routes.use('/students', students);

export default routes;
