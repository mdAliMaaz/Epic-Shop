import { NextFunction, Request, Response } from "express";
import ErrorHandelr from "../utils/errorHandler";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
    const error = new ErrorHandelr(404, `Not Found: ${req.originalUrl}`);
    next(error);
}

export const errorMiddleware = (err: ErrorHandelr, req: Request, res: Response, next: NextFunction) => {

    let statusCode = err.statusCode || 500;

    let message = err.message;

    console.log(statusCode, message)

    return res.status(statusCode).json({
        message: message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
}