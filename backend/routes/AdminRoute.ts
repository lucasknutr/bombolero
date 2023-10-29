import express from "express";
import {
    registerAdmin,
    loginAdmin,
    logoutAdmin,
} from "../controllers/adminController";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);

export default router;
