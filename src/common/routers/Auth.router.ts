import { setRandomFallback } from "bcryptjs";
import express, { Request, Response } from "express";

export const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
import { userContainer } from "../../index";

export interface User {
  login: string;
  password: string;
  fullName: string;
  dateOfBirth: string;
  position: string;
}

authRouter.post("/login", async (req: Request, res: Response) => {
  try {
    const { login, password } = req.body;
    const querySpec = {
      query: `SELECT * from c WHERE c.login="${login}"`,
    };
    const { resources: items } = await userContainer.items
      .query(querySpec)
      .fetchAll();
    if (items.length === 0) {
      res.status(500).send("incorrect login ");
      return;
    }

    const isCorrectPassword = await bcrypt.compare(password, items[0].password);
    if (!isCorrectPassword) {
      res.status(500).send("incorrect password");
      return;
    }

    const user = { login: login };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "2 days",
    });
    res.json({ login: login, accessToken: accessToken });
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong. Try again" });
  }
});

authRouter.post("/register", async (req: Request, res: Response) => {
  try {
    const { login, password, fullName, dateOfBirth, position } = req.body;

    const querySpec = {
      query: `SELECT * from c WHERE c.login="${login}"`,
    };
    const { resources: items } = await userContainer.items
      .query(querySpec)
      .fetchAll();

    if (items.length !== 0) {
      return res.send(items);
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user: User = {
      login,
      password: hashedPassword,
      fullName,
      dateOfBirth,
      position,
    };
    const { resource: doc } = await userContainer.items.create(user);
    res.send("user is created");
  } catch (e) {
    res.status(500).send(e);
  }
});
