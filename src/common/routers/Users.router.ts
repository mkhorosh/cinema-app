import express, { Request, Response } from "express";
import { userContainer } from "../../index";

export const userRouter = express.Router();

userRouter.get("", async (req: Request, res: Response) => {
  const querySpec = {
    query: "SELECT * from c",
  };

  const { resources: items } = await userContainer.items
    .query(querySpec)
    .fetchAll();
  res.send(items);
});
