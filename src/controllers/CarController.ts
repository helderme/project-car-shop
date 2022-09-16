import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

class CarController {
  private _car: IService<ICar>;

  constructor(service: IService<ICar>) {
    this._car = service;
  }

  public async create(req: Request, res: Response) {
    const response = await this._car.create(req.body);
    res.status(201).json(response);
  }

  public async read(_req: Request, res: Response) {
    const response = await this._car.read();
    res.status(200).json(response);
  }

  public async readOne(req: Request, res: Response) {
    const response = await this._car.readOne(req.params.id);
    res.status(200).json(response);
  }

  public async update(req: Request, res: Response) {
    const response = await this._car.update(req.params.id, req.body);
    res.status(200).json(response);
  }

  public async delete(req: Request, res: Response) {
    const response = await this._car.delete(req.params.id);
    res.status(204).json(response);
  }
}

export default CarController;