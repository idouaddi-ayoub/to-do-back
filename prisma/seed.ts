import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.create({
    data: {
      name: "category-1",
      color: "___",
      notes: {
        createMany: {
          data: [
            {
              name: "Note-1",
              description: "Note-1",
              state: "inProgress",
              priority: "high",
              due_date: "monday",
              effort: "easy",
            },
            {
              name: "Note-2",
              description: "Note-2",
              state: "inProgress",
              priority: "medium",
              due_date: "monday",
              effort: "moderate",
            },
            {
              name: "Note-3",
              description: "Note-3",
              state: "inProgress",
              priority: "high",
              due_date: "friday",
              effort: "hard",
            },
          ],
        },
      },
    },
  });
  await prisma.category.create({
    data: {
      name: "category-2",
      color: "___",
      notes: {
        createMany: {
          data: [
            {
              name: "Note-1",
              description: "Note-1",
              state: "pending",
              priority: "high",
              due_date: "monday",
              effort: "easy",
            },
            {
              name: "Note-2",
              description: "Note-2",
              state: "pending",
              priority: "medium",
              due_date: "monday",
              effort: "moderate",
            },
            {
              name: "Note-3",
              description: "Note-3",
              state: "pending",
              priority: "high",
              due_date: "friday",
              effort: "hard",
            },
          ],
        },
      },
    },
  });
  await prisma.category.create({
    data: {
      name: "category-3",
      color: "___",
      notes: {
        createMany: {
          data: [
            {
              name: "Note-1",
              description: "Note-1",
              state: "done",
              priority: "high",
              due_date: "monday",
              effort: "easy",
            },
            {
              name: "Note-2",
              description: "Note-2",
              state: "done",
              priority: "medium",
              due_date: "monday",
              effort: "moderate",
            },
            {
              name: "Note-3",
              description: "Note-3",
              state: "done",
              priority: "high",
              due_date: "friday",
              effort: "hard",
            },
          ],
        },
      },
    },
  });
}

main()
  .then(async () => {
    console.log("Database seeded successfully");
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
