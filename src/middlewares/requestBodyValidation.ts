import { ZodSchema } from "zod";
import { NextFunction, Request, Response } from "express";

export default function requestBodyValidation(schema: ZodSchema) {
  return (request: Request, response: Response, next: NextFunction) => {
    const body = request.body;
    const validationResult = schema.safeParse(body);

    if (!validationResult.success) {
      response.status(400).send({ message: "schema fucki waki" });
      console.log(validationResult.error);
    } else {
      next();
    }
  };
}
