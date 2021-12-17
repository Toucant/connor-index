import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import { Task } from "../models/Task";
import mongoose from "mongoose";

interface TaskDoc extends mongoose.Document {
  title: String;
  description: String;
  taskLog: String;
  department: String;
  author: String;
  dueDate: Date;
  assignedUser: String;
}
export const taskRouter = express.Router();

taskRouter.use(express.json());

taskRouter.get("/api/task", [], async (req: Request, res: Response) => {
  const task = await Task.find({});

  return res.status(200).send(task);
});
taskRouter.get("/api/id/:_id", async (req: Request, res: Response) => {
  const id = req.body.id;
  const task = await Task.findById(id);
  console;
  return res.status(200).send(task);
});
taskRouter.put("/api/task", async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      taskLog,
      department,
      author,
      dueDate,
      assignedUser,
    } = req.body;
    const taskToEdit = await Task.findById(req.body._id);
    if (taskToEdit) {
      taskToEdit.title = title;
      taskToEdit.description = description;
      taskToEdit.taskLog = taskLog + "\n" + Date.now();
      taskToEdit.department = department;
      taskToEdit.author = author;
      taskToEdit.dueDate = dueDate;
      taskToEdit.assignedUser = assignedUser;
      await taskToEdit.save();
      return res.status(200).send({ status: "success", taskToEdit });
    }
  } catch (err: any) {
    res.status(404).send(err.message);
  }
});
taskRouter.post("/api/task", async (req: Request, res: Response) => {
  const {
    title,
    description,
    taskLog,
    department,
    author,
    dueDate,
    assignedUser,
  } = req.body;

  const task = Task.build({
    title,
    description,
    taskLog,
    department,
    author,
    dueDate,
    assignedUser,
  });
  await task.save().then(() => {
    console.log("Task saved");
  });
  res.status(201).json({ status: "success", task: task });
});
taskRouter.delete("/api/deletetask", async (req: Request, res: Response) => {
  const id = req.body.id;
  const task = await Task.findByIdAndDelete(id);
  if (task) {
    res.status(200).send({ status: "success", task: task });
  } else {
    res.status(404).send("Task not found");
  }
});
