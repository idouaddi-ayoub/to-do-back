import type { NextFunction, Request, Response } from "express";

export default async function errorHandler(
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
) {
  console.log(error);

  console.log("you fucked up");
  response
    .status(500)
    .send({ message: error.message ?? "internal server error" });
}
