import dbClient from "../dbClient";
import { CreateNote, UpdateNote } from "../schema/note";

export async function getNotes() {
  return dbClient.note.findMany({
    include: {
      category: true,
    },
  });
}

export async function updateNote(id: number, data: UpdateNote) {
  return dbClient.note.update({ where: { id }, data });
}

export async function createNote(data: CreateNote) {
  console.log(data);

  return dbClient.note.create({ data });
}

export async function deleteNote(id: number) {
  return dbClient.note.delete({ where: { id } });
}
