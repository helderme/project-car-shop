import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const CarZodSchema = z.object({
  doorsQty: z.number().int().gte(2).lte(4),
  seatsQty: z.number().int().gte(2).lte(7),
});

const CarWithVehicleSchema = z.intersection(VehicleZodSchema, CarZodSchema);

type ICar = z.infer<typeof CarWithVehicleSchema>;

export { ICar, CarWithVehicleSchema };