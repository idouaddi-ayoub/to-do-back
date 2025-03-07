import { z } from "zod";
import { Prisma } from "@prisma/client";

const stateSchema = z.enum(["done", "pending", "canceled", "inProgress"]);
export type State = z.infer<typeof stateSchema>;

const prioritySchema = z.enum(["low", "medium", "high"]);
export type Priority = z.infer<typeof prioritySchema>;

const effortSchema = z.enum(["easy", "moderate", "hard"]);
export type Effort = z.infer<typeof effortSchema>;

const dueDateSchema = z.enum([
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
]);
export type Due_date = z.infer<typeof dueDateSchema>;

export const createNote = z
  .object({
    name: z.string(),
    description: z.string(),
    state: stateSchema,
    priority: prioritySchema,
    effort: effortSchema,
    due_date: dueDateSchema,
    category: z.object({
      connect: z.object({
        id: z.number(),
      }),
    }),
  })
  .strict() satisfies z.Schema<Prisma.NoteCreateInput>;
export type CreateNote = z.infer<typeof createNote>;

export const updateNote = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  completed: z.boolean().optional(),
  state: stateSchema.optional(),
  priority: prioritySchema.optional(),
  effort: effortSchema.optional(),
  due_date: dueDateSchema.optional(),
  category: z
    .object({
      connect: z.object({
        id: z.number(),
      }),
    })
    .optional(),
}) satisfies z.Schema<Prisma.NoteUpdateInput>;
export type UpdateNote = z.infer<typeof updateNote>;
