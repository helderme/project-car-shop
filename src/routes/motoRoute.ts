import { Request, Response, Router } from 'express';
import MotoController from '../controllers/MotoController';
import { MotoWithVehicleSchema } from '../interfaces/IMotorcycle';
import MotoModel from '../models/MotoModel';
import MotoService from '../services/MotoService';

const motoRoute = Router();

const moto = new MotoModel();
const motoService = new MotoService(moto, MotoWithVehicleSchema);
const motoController = new MotoController(motoService);

const byID = '/motorcycles/:id';

motoRoute.post('/motorcycles', (req: Request, res: Response) => motoController.create(req, res));
motoRoute.get('/motorcycles', (req: Request, res: Response) => motoController.read(req, res));
motoRoute
  .get(byID, (req: Request, res: Response) => motoController.readOne(req, res));
motoRoute.put(byID, (req: Request, res: Response) => motoController.update(req, res));
motoRoute
  .delete(byID, (req: Request, res: Response) => motoController.delete(req, res));

export default motoRoute;