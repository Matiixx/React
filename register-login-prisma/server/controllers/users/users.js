import { commitToDb } from "../../server.js";
import jwt from "jsonwebtoken";

export const generateToken = async (user, prisma) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    "secret"
  );
  return token;
};

export const loginUser = (prisma) => {
  return async (req, res) => {
    const { username, password } = req.body;

    if (!(username && password))
      return res.status(400).send({ message: "Incorrect credentials" });

    const user = await commitToDb(
      prisma.User.findUnique({
        where: {
          username: username,
        },
      })
    );

    if (!user) {
      return res.status(400).send({ message: "Incorrect login" });
    }

    try {
      if (password === user.password) {
        console.log("correct");
        return res
          .status(200)
          .send({ accessToken: await generateToken(user, prisma) });
      }
    } catch {
      return res.status(500);
    }
  };
};
