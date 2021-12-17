import mongoose, { Model, Query, Schema, Document } from "mongoose";
import IUser from "../Interfaces/IUser";

interface userModelInterface extends mongoose.Model<any> {
  build(attr: IUser): any;
}

export const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    sparse: true,
  },
  firstName: { type: String, required: false },
  lastName: { type: String, required: true },
});
interface UserQueryHelpers {
  findByEmail(email: string): Query<any, Document<IUser>> & UserQueryHelpers;
  findByName(
    firstName: string | undefined
  ): Query<any, Document<IUser>> & UserQueryHelpers;
}

UserSchema.statics.build = (attr: IUser) => {
  return new User(attr);
};
const User = mongoose.model<any, userModelInterface>("User", UserSchema);
const build = (attr: IUser) => {
  return new User(attr);
};

export { User };
