import dbClient from "../dbClient";
import { CreateCategory } from "../schema/category";

export async function getCategories() {
  return dbClient.category.findMany();
}

export async function createCategory(data: CreateCategory) {
  return dbClient.category.create({ data });
}

export async function deleteCategory(id: number) {
  return dbClient.category.delete({ where: { id } });
}
