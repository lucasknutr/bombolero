import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import jwt, { JwtPayload } from "jsonwebtoken";
import Admin from "../models/adminModel";
import config from "../server-config";

declare module 'jsonwebtoken' {
    export interface JwtPayload {
        userId: string,
    }
}

const protectRoute = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt;

    if (!token) {
        res.status(401);
        throw new Error("Unauthorized, no token");
    }

    try {
        const decodedToken = jwt.verify(token, config.jwtKey) as JwtPayload;
        req.user = await Admin.findById(decodedToken.userId).select("-password");
        next();
    } catch (err) {
        res.status(401);
        throw new Error("Unauthorized, invalid token");
    }
});

export { protectRoute };