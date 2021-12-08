import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import {Task} from "../models/Task";
import mongoose  from "mongoose";

interface TaskDoc extends mongoose.Document {
  title: String,
  description: String,
  taskLog: String,
  department: String,
  author: String,
  dueDate: {type: Date},
  assignedUser: String
}
export const taskRouter = express.Router();

taskRouter.use(express.json());

taskRouter.get("/api/task", [], async (_req: Request, res: Response) => { 
  const task = await Task.find({})
  return res.status(200).send(task);
});
taskRouter.post("/api/task", async (req: Request, res: Response) => {
  try {
    const {title, description, taskLog, department, author, dueDate, assignedUser}= req.body;
    const task = Task.build({
      title,
      description,
      taskLog,
      department,
      author,
      dueDate,
      assignedUser
    })
    res.status(200).send(task);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});
