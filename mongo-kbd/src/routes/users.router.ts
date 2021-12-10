import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../models/User";

// interface defining what to expect from a user document
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
  username: string;
}
const userRouter = express.Router();

userRouter.get("/api/users", [], async (_req: Request, res: Response) => {
  const user = await User.find({});
  return res.status(200).send(user);
});

userRouter.post("/api/signin", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user: (typeof User) = await User.findOne({ email });
  if (!user) {
    return res.status(401).send({ error: "User not found" });
  }
  if (await (user as any).comparePassword(password, user)) {
    console.log("password match");
    return res.status(200).send(user);
  }
  return res.status(401).send({ error: "Invalid credentials" });
});
userRouter.post("/api/signup", async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  const emailExists = await User.findOne({ email });
  const usernameExists = await User.findOne({ username });
  if (emailExists) {
    res.status(401).send({ error: "User already exists" });
  } else if (usernameExists) {
    res.status(401).send({ error: "Username already exists" });
  } else {
    const user = User.build({ email, password, username });

    console.log(email, password, username);
    await user.save();
    res.status(201).json(user);
  }
});

export { userRouter };
