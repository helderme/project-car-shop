import { CarWithVehicleSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

class CarService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async create(obj:ICar):Promise<ICar> {
    const parsed = CarWithVehicleSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._car.create(obj);
  }

  public async read():Promise<ICar[] | null> {
    const response = await this._car.read();
    return response;
  }

  public async readOne(_id:string):Promise<ICar | null> {
    const response = await this._car.readOne(_id);
    return response;
  }

  public async update(_id: string, obj: ICar):Promise<ICar | null> {
    const parsed = CarWithVehicleSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const response = await this._car.update(_id, obj);
    return response;
  }

  public async delete(_id:string):Promise<ICar | null> {
    const response = await this._car.delete(_id);
    return response;
  }
}

export default CarService;