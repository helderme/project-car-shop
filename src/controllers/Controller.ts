import { Request, Response } from 'express';
import { IController } from '../interfaces/IController';
import { IService } from '../interfaces/IService';

abstract class Controller<T> implements IController<T> {
  private _service: IService<T>;

  constructor(service: IService<T>) {
    this._service = service;
  }

  public async create(req: Request, res: Response<T>) {
    const response = await this._service.create(req.body);
    return res.status(201).json(response);
  }

  public async read(_req: Request, res: Response<T[] | null>) {
    const response = await this._service.read();
    return res.status(200).json(response);
  }

  public async readOne(req: Request, res: Response<T | null>) {
    const response = await this._service.readOne(req.params.id);
    return res.status(200).json(response);
  }

  public async update(req: Request, res: Response<T | null>) {
    const response = await this._service.update(req.params.id, req.body);
    return res.status(200).json(response);
  }

  public async delete(req: Request, res: Response<T | null>) {
    const response = await this._service.delete(req.params.id);
    return res.status(204).json(response);
  }
}

export default Controller;