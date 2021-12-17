import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../models/User";
// interface defining what to expect from a user document
interface UserDoc extends mongoose.Document {
  email: string;
  firstname: string;
  lastname: string;
}
const userRouter = express.Router();

userRouter.get("/api/users", [], async (_req: Request, res: Response) => {
  const user = await User.find({});
  return res.status(200).send(user);
});

userRouter.post("/api/adduser", async (req: Request, res: Response) => {
  const { email, firstName, lastName } = req.body;
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    res.status(401).send({ error: "Email already exists in the system" });
    console.log("email exists");
  } else {
    const user = User.build({ email, firstName, lastName });

    console.log(email, firstName, lastName);
    await (user).save();
    res.status(201).json(user);
  }
});

export { userRouter };
