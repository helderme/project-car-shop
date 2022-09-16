import { ZodSchema } from 'zod';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

class Service<T> implements IService<T> {
  protected _model: IModel<T>;
  protected _schema: ZodSchema<T>;

  constructor(model: IModel<T>, schema: ZodSchema<T>) {
    this._schema = schema;
    this._model = model;
  }

  public async create(obj:T):Promise<T> {
    const parsed = this._schema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._model.create(obj);
  }

  public async read():Promise<T[] | null> {
    const response = await this._model.read();
    return response;
  }

  public async readOne(_id:string):Promise<T | null> {
    const response = await this._model.readOne(_id);
    return response;
  }

  public async update(_id: string, obj: T):Promise<T | null> {
    const parsed = this._schema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const response = await this._model.update(_id, obj);
    return response;
  }

  public async delete(_id:string):Promise<T | null> {
    const response = await this._model.delete(_id);
    return response;
  }
}

export default Service;