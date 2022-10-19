import fastify from "fastify";
import dotenv from "dotenv";
import sensible from "@fastify/sensible";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import { loginUser } from "./controllers/users/users.js";

dotenv.config();
const app = fastify();
app.register(sensible);
app.register(cors, {
  origin: process.env.CLIENT_URL,
});
const prisma = new PrismaClient();

app.get("/users", async (req, res) => {
  const users = await commitToDb(
    prisma.user.findMany({
      take: 10,
    })
  );
  res.status(200).send(users);
});

export async function commitToDb(promise) {
  const [error, data] = await app.to(promise);
  if (error) return app.httpErrors.internalServerError(error.message);
  return data;
}

app.post("/users/login", loginUser(prisma));

app.listen({ port: process.env.PORT }, () => {
  console.log("🚀 Server ready at: http://localhost:" + process.env.PORT);
});
