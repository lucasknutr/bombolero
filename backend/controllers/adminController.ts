import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

// @desc    Registers admin
// route    POST /api/admin/register
// @access  Public
const registerAdmin = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: "Register Admin" });
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
