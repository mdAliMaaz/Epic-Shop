import asyncHandler from "../utils/asyncHandler";
import { Request, Response, NextFunction } from "express";
import ErrorHandelr from "../utils/errorHandler";

export const getProducts = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    next(new ErrorHandelr(201, "This is very unique Error"))
})
