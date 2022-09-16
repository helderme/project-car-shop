import { Request, Response } from 'express';

export interface IController<T> {
  create(req: Request, res: Response):Promise<Response>,
  read(_req: Request, res: Response):Promise<Response>,
  readOne(req: Request, res: Response):Promise<Response>,
  update(req: Request, res: Response, obj: T):Promise<Response>,
  delete(req: Request, res: Response):Promise<Response>,
}
