import express, { Request, Response } from "express";
import mongoose from 'mongoose';
import { User } from "../models/User";

// interface defining what to expect from a user document
interface UserDoc extends mongoose.Document {
  email: string,
  password: string,
  username: string
}
const userRouter = express.Router();

userRouter.get("/api/users", [], async (_req: Request, res: Response) => {
  const user = await User.find({});
  return res.status(200).send(user);
});
userRouter.post("/api/register", async (req: Request, res: Response) => {
  const {email, password, username} = req.body;
  const user = User.build({email, password, username});
  await user.save();
  res.status(201).send(user);

});

export {userRouter};