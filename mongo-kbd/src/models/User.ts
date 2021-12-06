import mongoose, {Model, Schema} from 'mongoose';
import bcrypt from 'bcrypt';

export const UserSchema: Schema = new mongoose.Schema({
    email: { type: String, unique: true},
    password: String,
    username: { type: String, unique: true},
}, {timestamps: true});


// password encryption
UserSchema.pre("save", function save(next: any) {
    const user: any = this;
    if (user && user.email){
        user.email = user.email.toLowerCase();
    }
    if (!user.isModified("password")){
        return next();
    }
    bcrypt.genSalt(10, (err: any, salt: any) => {
        bcrypt.hash(user.password as string, salt, (err: mongoose.Error | undefined, encrypted: string) => {
            if (err) {
                return next(err)
            }
            user.password = encrypted;
            next();
        })
    })
}) 