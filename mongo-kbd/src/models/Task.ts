import { ObjectId } from "mongodb";
import * as dotenv from "dotenv";
import mongoose, { Schema, model } from "mongoose";
// for incrementing task #
// credit to mongoose docs for the increment function + schema

interface taskModelInterface extends mongoose.Model<any> {
  build(attr: ITask): any;
}
export interface ITask {
  title: {type: String, required: true};
  description: {type: String, required: true};
  taskLog: {type: String, required: false};
  department: {type: String, required: true};
  author: {type: String, required: true};
  dueDate: { type: Date };
  assignedUser: {type: String, required: true};
}
interface taskModelInterface extends mongoose.Model<any> {
  build(attr: ITask): any;
}
// TODO: Link task to user on creation through frontend
export const TaskSchema: Schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    taskLog: String,
    department: String,
    author: String,
    creationDate: { type: Date, default: Date.now },
    dueDate: { type: Date },
    assignedUser: String,
  },
  { timestamps: true }
);
TaskSchema.statics.build = (attr: ITask) => {
  return new Task(attr);
};

const Task = mongoose.model<any, taskModelInterface>("Task", TaskSchema);
// pre == hook on creation of task
const build = (attr: ITask) => {
  return new Task(attr);
};
export { Task };
