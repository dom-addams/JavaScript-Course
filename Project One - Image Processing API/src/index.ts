// Import Modules
import express from 'express'; // Import Express Framework
import routes from './routes/routes'; // Import Routes
import { checkFolderExists } from './utilities/processor';

////////////////////////
//// EXPRESS CONFIG ////
////////////////////////

// Create express instance
const app = express();
const port = 3000; // default port to listen

// Define initial base route
app.use('/api', routes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
  checkFolderExists();
});

// Export express instance
export default app;

/////////////////////////////////////////
//// EXAMPLE ROUTE WITH QUERY STRING ////
/////////////////////////////////////////
// example URL http://localhost:3000/api?width=500&name=Diablo
// app.get('/api', (req: Request, res: Response) => {
//   const name = req.query.name;
//   imageWidth = Number(req.query.width);
//   console.log(`Hello ${name}`);
//   console.log((path.join(`${ImagePath}_${imageWidth}.jpg`)));
//   res.send(`Hello ${name} and Size is ${imageWidth}`);
// });
