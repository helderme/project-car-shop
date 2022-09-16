import { Request, Response, Router } from 'express';
import CarController from '../controllers/CarController';
import CarModel from '../models/CarModel';
import CarService from '../services/CarService';

const carRoute = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

carRoute.post('/cars', (req: Request, res: Response) => carController.create(req, res));
carRoute.get('/cars', (req: Request, res: Response) => carController.read(req, res));
carRoute.get('/cars/:id', (req: Request, res: Response) => carController.readOne(req, res));
carRoute.put('/cars/:id', (req: Request, res: Response) => carController.update(req, res));

export default carRoute;