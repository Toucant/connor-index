import mongoose, {Model, Schema} from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser {
    email: string,
    password: string,
    username: string,
}  
interface userModelInterface extends mongoose.Model<any>{
    build(attr: IUser):any
}

export const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true},
    password: String,
    username: { type: String, unique: true},
});
UserSchema.statics.build = (attr: IUser) => {
    return new User(attr);
};
const User = mongoose.model<any, userModelInterface>('User', UserSchema);
const build = (attr: IUser) => {
    return new User(attr);
};


export {User};

