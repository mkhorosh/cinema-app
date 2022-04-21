import express, { Request, Response } from "express";
import { BaseSession, Session } from "./Session.model";

export const sessionRouter = express.Router();
const dotenv = require("dotenv").config();

const CosmosClient = require("@azure/cosmos").CosmosClient;
const cosmosClient = new CosmosClient({
  endpoint: process.env.BD_ENDPOINT,
  key: process.env.BD_KEY,
});

const database = cosmosClient.database(process.env.BD_NAME);
const container = database.container(process.env.BD_CONTAINER);

// GET sessionList

sessionRouter.get("/", async (req: Request, res: Response) => {
  const querySpec = {
    query: "SELECT * from c",
  };

  const { resources: items } = await container.items
    .query(querySpec)
    .fetchAll();
  res.send(items);
});

// GET sessionList/:id

sessionRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = req.params.id;
  const querySpec = {
    query: `SELECT * from c WHERE c.id="${id}"`,
  };

  const { resources: items } = await container.items
    .query(querySpec)
    .fetchAll();
  res.send(items);
});

// POST sessionList

sessionRouter.post("/", async (req: Request, res: Response) => {
  const session: BaseSession = req.body;
  const { resource: doc } = await container.items.create(session);
  res.send("session is created");
});

// PUT sessionList/:id

sessionRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = req.params.id;
  const newItem: BaseSession = req.body;
  // let doc = await container.item(id).read();
  // doc = newItem;
  const { resource: replaced } = await container.item(id).replace(newItem);
  res.send("item updated");
});

// DELETE sessionList/:id

sessionRouter.delete("/delete/:id", async (req: Request, res: Response) => {
  const id: number = req.params.id;
  const { resource } = await container.item(id).delete();
  res.send("deleted");
});
