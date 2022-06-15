import { setRandomFallback } from "bcryptjs";
import express, { Request, Response } from "express";

export const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
import { userContainer } from "../../index";

export interface User {
  login: string;
  password: string;
  name: string;
  date: string;
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
      res.status(500).send("Неверный логин или пароль");
      return;
    }

    const isCorrectPassword = await bcrypt.compare(password, items[0].password);
    if (!isCorrectPassword) {
      res.status(500).send("Неверный логин или пароль");
      return;
    }

    const user = { login: login };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1 min",
    });
    res.json({ login: login, accessToken: accessToken });
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так. Попробуйте снова" });
  }
});

authRouter.post("/register", async (req: Request, res: Response) => {
  try {
    const { login, password, name, date, position } = req.body;

    const querySpec = {
      query: `SELECT * from c WHERE c.login="${login}"`,
    };
    const { resources: items } = await userContainer.items
      .query(querySpec)
      .fetchAll();

    if (items.length !== 0) {
      return res.status(500).send("логин уже занят");
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user: User = {
      login,
      password: hashedPassword,
      name,
      date,
      position,
    };
    const { resource: doc } = await userContainer.items.create(user);
    res.send("пользователь создан");
  } catch (e) {
    res.status(500).send(e);
  }
});
