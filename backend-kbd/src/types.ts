import {Redis} from 'ioredis';
import {Response, Request } from 'express';
import { SessionData } from 'express-session';
export type MyContext = {
    req: Request & { session: SessionData}; // Invalid w/ Express.session
    redis: Redis;
    res: Response;
}