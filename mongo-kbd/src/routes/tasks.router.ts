import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Task from "../models/Task";

export const taskRouter = express.Router();

taskRouter.use(express.json());

taskRouter.get("/", async (_req: Request, res: Response) => {
  try {
    const tasks = (await collections.tasks?.find({}).toArray()) as Task[];
    res.status(200).send(tasks);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});
taskRouter.post("/", async (req: Request, res: Response) => {
  try {
    const newTask = req.body as Task;
    const result = await collections.tasks?.insertOne(newTask);

    result
      ? res.status(201).send(`success -- created with id ${result.insertedId}`)
      : res.status(500).send("failed");
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});
