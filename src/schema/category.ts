import { z } from "zod";
import { Prisma } from "@prisma/client";

export const createCategory = z
  .object({
    name: z.string(),
    color: z.string(),
  })
  .strict() satisfies z.Schema<Prisma.CategoryCreateInput>;
export type CreateCategory = z.infer<typeof createCategory>;
