import { Request, Response } from "express";

// @desc    Registers admin
// route    POST /api/admin/register
// @access  Public
function registerAdmin(req: Request, res: Response) {
    res.status(200).json({ message: "Register Admin" });
}

// @desc    Authenticates admin
// route    POST /api/admin/login
// @access  Public
function loginAdmin(req: Request, res: Response) {
    res.status(200).json({ message: "Login Admin" });
}

// @desc    Logs out admin
// route    POST /api/admin/logout
// @access  Public
function logoutAdmin(req: Request, res: Response) {
    res.status(200).json({ message: "Logout Admin" });
}

export { registerAdmin, loginAdmin, logoutAdmin };
