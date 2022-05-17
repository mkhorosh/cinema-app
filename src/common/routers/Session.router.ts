import express, { Request, Response } from "express";
import { sessionContainer } from "../../index";
import { BaseSession, Session } from "../models/Session.model";

export const sessionRouter = express.Router();

// GET sessionList

sessionRouter.get("/", async (req: Request, res: Response) => {
  const querySpec = {
    query: "SELECT * from c",
  };

  const { resources: items } = await sessionContainer.items
    .query(querySpec)
    .fetchAll();
  res.send(items);
});

// POST sessionList

sessionRouter.post("/", async (req: Request, res: Response) => {
  const session: BaseSession = req.body;
  const { resource: doc } = await sessionContainer.items.create(session);
  res.send("session is created");
});

// PUT sessionList/:id

sessionRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = req.params.id;
  const newItem: BaseSession = req.body;
  const { resource: replaced } = await sessionContainer
    .item(id)
    .replace(newItem);
  res.send("item updated");
});

// DELETE sessionList/:id

sessionRouter.delete("/delete/:id", async (req: Request, res: Response) => {
  const id: number = req.params.id;
  const { resource } = await sessionContainer.item(id).delete();
  res.send("deleted");
});
