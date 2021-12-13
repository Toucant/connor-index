import { NextFunction, Request, Response } from "express";
import { User } from "../models/User";
import passport from 'passport';
import {error401} from "../Interfaces/StandardErrorForm";
import '../middleware/isAuth';

export class AuthenticationController {
    public authenticateJWT(req: Request, res: Response, next: NextFunction) {
        passport.authenticate('jwt', function (err, user, info) {
            if (err) {
                console.log(err);
                return res.status(401).json({ status: 'error', message: 'unauthorized' });
            }
            if (!user) {
                return res.status(401).json({
                    status: 'error', message: 'Unauthorized'});
            } else {
                return next();
            }
        })(req, res, next);
}
public authorizeJWT(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('jwt', function (err, user, jwtToken) {
        if (err) {
            console.log(err);
            return res.status(401).json({ status: 'error', message: 'unauthorized' });
        }
        if (!user) {
            return res.status(401).json({
                status: 'error', message: 'Unauthorized'});
        } else {
            const scope = req.baseUrl.split('/').slice(-1)[0];
            const authScope = jwtToken.scope
            if (authScope.includes(scope)) {
            return next();
        } else{
            return res.status(401).json(error401);
        }
        }
    })(req, res, next);
}
}
