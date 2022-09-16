import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const MotoZodSchema = z.object({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().positive().lte(2500),
});

const MotoWithVehicleSchema = z.intersection(VehicleZodSchema, MotoZodSchema);

type IMotorcycle = z.infer<typeof MotoWithVehicleSchema>;

export { IMotorcycle, MotoWithVehicleSchema };