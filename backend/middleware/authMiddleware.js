import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import Admin from "../models/adminModel";
import config from "../server-config";

const protectRoute = asyncHandler(async (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) {
        res.status(401);
        throw new Error("Unauthorized, no token");
    }

    try {
        const decodedToken = jwt.verify(token, config.jwtKey);
        req.user = await Admin.findById(decodedToken.userId).select("-password");
        next();
    } catch (err) {
        res.status(401);
        throw new Error("Unauthorized, invalid token");
    }
});

export { protectRoute };