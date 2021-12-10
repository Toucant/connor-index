// import jwt from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';
// import { User } from '../models/User';

// const auth = (req: Request, res: Response, next: NextFunction) => {
//     const token = req.header('x-auth-token');
//     if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

//     const verified = jwt.verify(token, process.env.JWT_SECRET || 'secret');
//     if (!verified) { return res.status(401).json({ msg: 'Token is not valid' }); }
//     const user = await User.findById(verified._id);
// }