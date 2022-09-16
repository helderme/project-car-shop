import 'express-async-errors';
import express from 'express';
import errorHandler from './middlewares/errorHandler';
import carRoute from './routes/carRoute';
import motoRoute from './routes/motoRoute';

const app = express();

app.use(express.json());

app.use(carRoute);
app.use(motoRoute);
app.use(errorHandler);

export default app;
