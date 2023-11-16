import { Response } from "express";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
import config from "../server-config";

function generateJWT(res: Response, userId: ObjectId) {
    const token = jwt.sign({ userId }, config.jwtKey, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: config.nodeEnv === "development" ? false : true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in miliseconds
    })
}

export default generateJWT;