import { Router } from "express";
import * as categoryLibs from "../libs/category";
import { createCategory, type CreateCategory } from "../schema/category";
import requestBodyValidation from "../middlewares/requestBodyValidation";

const router = Router();

router.get("/category", async (_request, response, next) => {
  categoryLibs
    .getCategories()
    .then((categories) => {
      response
        .send({ message: "Categories found successfully", data: categories })
        .status(200);
    })
    .catch((error: unknown) => next(error));
});

router.post(
  "/category",
  requestBodyValidation(createCategory),
  async (request, response, next) => {
    const data: CreateCategory = request.body;

    categoryLibs
      .createCategory(data)
      .then(() => {
        response.send({ message: "Category created successfully" }).status(201);
      })
      .catch((error: unknown) => next(error));
  }
);

router.delete("/category/:id", async (request, response, next) => {
  const id: number = Number(request.params.id ?? 0);

  categoryLibs
    .deleteCategory(id)
    .then(() => {
      response.send({ message: "Category deleted successfully" }).status(202);
    })
    .catch((error: unknown) => next(error));
});

export default router;
