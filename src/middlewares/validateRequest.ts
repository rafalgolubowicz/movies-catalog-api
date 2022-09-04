import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";

const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params
      });

      next();
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        return res.status(400).send(error.errors);
      }

      return res.status(500);
    }
  };

export default validateRequest;
