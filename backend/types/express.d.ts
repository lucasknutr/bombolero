import Admin from "../models/adminModel";

declare global {
    namespace Express {
        export interface Request {
            user?: Admin;
        }
    }
}