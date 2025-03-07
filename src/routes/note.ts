import { Router } from "express";
import * as noteLibs from "../libs/note";
import {
  createNote,
  updateNote,
  UpdateNote,
  type CreateNote,
} from "../schema/note";
import requestBodyValidation from "../middlewares/requestBodyValidation";

const router = Router();

router.get("/note", async (_request, response, next) => {
  noteLibs
    .getNotes()
    .then((categories) => {
      response
        .send({ message: "Notes found successfully", data: categories })
        .status(200);
    })
    .catch((error: unknown) => next(error));
});

router.put(
  "/note/:id",
  requestBodyValidation(updateNote),
  async (request, response, next) => {
    const id: number = Number(request.params.id ?? 0);
    const data: UpdateNote = request.body;

    noteLibs
      .updateNote(id, data)
      .then(() => {
        response.send({ message: "Note updated successfully" }).status(201);
      })
      .catch((error: unknown) => next(error));
  }
);

router.post(
  "/note",
  requestBodyValidation(createNote),
  async (request, response, next) => {
    const data: CreateNote = request.body;

    noteLibs
      .createNote(data)
      .then(() => {
        response.send({ message: "Note created successfully" }).status(201);
      })
      .catch((error: unknown) => next(error));
  }
);

router.delete("/note/:id", async (request, response, next) => {
  const id: number = Number(request.params.id ?? 0);

  noteLibs
    .deleteNote(id)
    .then(() => {
      response.send({ message: "Note deleted successfully" }).status(202);
    })
    .catch((error: unknown) => next(error));
});

export default router;
