import express, { Request, Response } from "express";
import * as SessionService from "./Sessions.service";
import { BaseSession, Session } from "./Session.interface";
import { parse } from "path";


export const sessionRouter = express.Router();

// GET sessionList

sessionRouter.get("/", async (req: Request, res: Response) => {
    try {
        const sessions: Session[] = await SessionService.findAll();
        res.status(200).send(sessions);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// GET sessionList/:id

sessionRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    
    try {
        const session: Session = await SessionService.find(id);
        if (session) {
            return res.status(200).send(session)
        }
        res.status(404).send("item not found");
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// POST sessionList

sessionRouter.post("/", async (req: Request, res: Response) => {
    try {
        const session: BaseSession = req.body;

        const newItem = await SessionService.create(session);

        res.status(201).json(newItem);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// PUT sessionList/:id

sessionRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const itemUpdate: Session = req.body;

        const existingItem: Session = await SessionService.find(id);

        if (existingItem) {
            const updatedItem = await SessionService.update(id, itemUpdate);
            return res.status(200).json(updatedItem);
        }

        const newItem = await SessionService.create(itemUpdate);

        res.status(201).json(newItem);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// DELETE sessionList/:id

sessionRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        await SessionService.remove(id);
        res.sendStatus(204);
    } catch (e) {
        res.status(500).send(e.message);
    }
});
