import jwt from "jsonwebtoken";
import passport from "passport";
import passportlocal from "passport-local";
import passportJWT from "passport-jwt";
import { User } from "../models/User";
import IUser from "../Interfaces/IUser";
import * as dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
dotenv.config();
const LocalStrategy = passportlocal.Strategy;
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

passport.use(
  new LocalStrategy(
    { usernameField: 'username' },
    (username, password, done) => {
      User.findOne({ username: username.toLowerCase }, (err: Error, user: IUser) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(undefined, false, { message: `${username} not found` });
        }
        const isMatch = (user as any).comparePassword(
          password,
          (err: Error) => {
            if (err) {
              return done(err);
            }
          }
        );
        if (isMatch) {
            return done(undefined, user);
        } else {
            return done(undefined, false, { message: "Invalid username or password" });
        }
      });
    }
  )
);
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    function (jwtToken, done) {
      User.findOne(
        { username: jwtToken.username },
        function (err: any, user: any) {
          if (err) {
            return done(err, false);
          }
          if (user) {
            return done(undefined, user, jwtToken);
          } else {
            return done(undefined, false);
          }
        }
      );
    }
  )
);
