import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

const errorHandler: ErrorRequestHandler = (
  err: Error | ZodError,
  _req: Request, 
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues });
  }
};

export default errorHandler;