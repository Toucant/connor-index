import { RequestHandler, Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import TaskCollection from "../models/Task";
import { validationErrorResponse } from "../myTypes";

export interface dataModel {
    _id: any,
    creationDate?: String,
    title: String,
    description: String,
    author: String,
}

export const create: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const badRequest: Response | false = validationErrorResponse(res, validationResult(req));
    if (badRequest) {
        return badRequest;
    }
    const task = new TaskCollection({
        title: req.body.title,
        description: req.body.description,
        taskLog: req.body.tasklog,
        department: req.body.department,
        author: req.body.author,
        
    });

    // TODO add task interface to communicate between front and backend
    task.save().then((saved: dataModel) => {
        res.status(200).json(saved);
        if (req.body.mentions){
            return;
        }
    })
}
