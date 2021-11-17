import { ObjectId } from "mongodb";
import * as dotenv from "dotenv";
export default class Task {
  constructor(
    public title: string,
    public description: string,
    public taskLog: string,
    public department: string,
    public id?: ObjectId
  ) {}
}
