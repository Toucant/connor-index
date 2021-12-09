import mongoose, { Model, Query, Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
import { userInfo } from "os";
import { NextFunction } from "express";

const SALT_FACTOR = 10;

export interface IUser {
  email: string;
  password: string;
  username: string;
}
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
  },
  password: String,
  username: { type: String, required: true },
});
interface UserQueryHelpers {
  findByEmail(email: string): Query<any, Document<IUser>> & UserQueryHelpers;
  findByUsername(
    username: string
  ): Query<any, Document<IUser>> & UserQueryHelpers;
}
// Hashing logic from MongoDB blog https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
UserSchema.pre('save' , function (next) {
  var user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});
// compare password to hash in database and return true if matches
UserSchema.methods.comparePassword = async function (attemptpass: string,  attr: IUser): Promise<boolean> {

    return await bcrypt.compareSync(attemptpass, attr.password);

};

UserSchema.statics.build = (attr: IUser) => {
  return new User(attr);
};
const User = mongoose.model<any, userModelInterface>('User'
, UserSchema);
const build = (attr: IUser) => {
  return new User(attr);
};

export { User };
