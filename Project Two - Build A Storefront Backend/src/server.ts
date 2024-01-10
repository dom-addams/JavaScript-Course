import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import order_routes from './handlers/orders';
import product_routes from './handlers/products';
import user_routes from './handlers/users';
import cors from 'cors';

const app: express.Application = express();
const address = '0.0.0.0:3000';

const corsOptions = {
  origin: 'http://localhost/', // List of origins to allow, currently only localhost
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); // Use CORS to allow origins
app.use(bodyParser.json());

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World!');
});

// Pass express to handlers
order_routes(app);
product_routes(app);
user_routes(app);

app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});

// Export Express app
export default app;
