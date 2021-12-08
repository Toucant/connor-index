   import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import {taskSchema} from "../models/Task";

export const userRouter = express.Router();

userRouter.get("/api/user", async (_req: Request, res: Response) => {
  return res.send('user fetched');
});
userRouter.post("/api/user", async (req: Request, res: Response) => {
  res.send('user created');
});
