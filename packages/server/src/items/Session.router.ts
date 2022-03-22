import express, { Request, Response } from "express";
// import * as SessionService from "./Sessions.service";
import { BaseSession, Session } from "./Session.interface";
import { parse } from "path";


export const sessionRouter = express.Router();
const SessionModel = require("./Session.model");

// GET sessionList

sessionRouter.get("/", async (req: Request, res: Response) => {
    SessionModel.find({}, (error, result) =>{
        if(error){
            res.send(error);
        }
        res.send(result);
    });
});

// GET sessionList/:id

sessionRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    
    SessionModel.find({$where: {id: id}}, (error, result) =>{
        if(error){
            res.send(error);
        }
        res.send(result);
    });
});

// POST sessionList

sessionRouter.post("/", async (req: Request, res: Response) => {
    const session: BaseSession = req.body;
    const newItem = new SessionModel({session});
    try {
        await newItem.save();
        res.send("inserted data");
    } catch(err) {
        console.log(err);
    }
});

// PUT sessionList/:id

sessionRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    const newItem: Session = req.body;

    try {
        await SessionModel.findById(id, (err, updateItem)=> {
            updateItem = newItem;
            updateItem.save();
            res.send("update");
        })
    } catch(err) {
        console.log(err);
    }
});

// DELETE sessionList/:id

sessionRouter.delete("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    await SessionModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});
