import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Admin } from "../models/adminModel";

// @desc    Registers admin
// route    POST /api/admin/register
// @access  Public
const registerAdmin = asyncHandler(async (req: Request, res: Response) => {
    const { email, username, password } = req.body;
    const emailTaken = await Admin.findOne({ email });
    const usernameTaken = await Admin.findOne({ username });

    if (!email || !username || !password) {
        res.status(400);
        throw new Error("Missing data");
    }

    if (emailTaken) {
        res.status(400);
        throw new Error("Email already taken");
    }

    if (usernameTaken) {
        res.status(400);
        throw new Error("Username already taken");
    }

    if (typeof password === "string" && password.length < 8) {
        res.status(400);
        throw new Error("Password too short");
    }

    const admin = await Admin.create({
        email,
        username,
        password,
    });

    if (admin) {
        res.status(201).json({
            _id: admin._id,
            email: admin.email,
            username: admin.username,
        });
    }
});

// @desc    Authenticates admin
// route    POST /api/admin/login
// @access  Public
const loginAdmin = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: "Login Admin" });
});

// @desc    Logs out admin
// route    POST /api/admin/logout
// @access  Public
const logoutAdmin = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: "Logout Admin" });
});

export { registerAdmin, loginAdmin, logoutAdmin };
