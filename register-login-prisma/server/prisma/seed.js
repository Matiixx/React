import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function generateString() {
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return new Array(Math.floor(Math.random() * 12))
    .fill("")
    .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
    .join("");
}

async function seed() {
  await prisma.User.deleteMany();
  await prisma.user.create({
    data: {
      username: "admin",
      password: "admin",
      role: 1,
    },
  });
  for (let i = 0; i < 10000; i++) {
    try {
      await prisma.user.create({
        data: {
          username: generateString(),
          password: generateString(),
          role: 0,
        },
      });
    } catch (err) {}
  }
}

seed();
