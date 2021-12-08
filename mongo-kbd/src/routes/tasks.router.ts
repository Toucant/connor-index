import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import {taskSchema} from "../models/Task";

export const taskRouter = express.Router();

taskRouter.use(express.json());

taskRouter.get("/api/task", async (_req: Request, res: Response) => {
  try {
    const tasks = (await collections.tasks?.find({}).toArray());
    res.status(200).send(tasks);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});
taskRouter.post("/task", async (req: Request, res: Response) => {
  try {
    const newTask = req.body;
    const result = await collections.tasks?.insertOne(newTask);

    result
      ? res.status(201).send(`success -- created with id ${result.insertedId}`)
      : res.status(500).send("failed");
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});
