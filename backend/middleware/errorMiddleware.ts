import { Request, Response, NextFunction } from "express";

function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    let statusCode: number = res.statusCode === 200 ? 500 : res.statusCode;
    let message: string = err.message;
    res.status(statusCode).json({
        message: message,
    });
}

function notFound(req: Request, res: Response, next: NextFunction) {
    const error = new Error(
        "Not Found - the requested resource does not exist"
    );
    res.status(404);
    next(error);
}

export { errorHandler, notFound };
