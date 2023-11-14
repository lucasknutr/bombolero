import mongoose from "mongoose";
import { Document, Model } from "mongoose";
import { genSalt, hash, compare } from "bcrypt";

export interface AdminDocument extends Document {
    email: string,
    username: string,
    password: string,
    comparePassword(inputPassword: string): Promise<boolean>,
}

export interface AdminModel extends Model<AdminDocument> {}

const adminSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

adminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
});

adminSchema.methods.comparePassword = async function(inputPassword: string): Promise<boolean> {
    return await compare(inputPassword, this.password);
};

const Admin = mongoose.model<AdminDocument, AdminModel>("Admin", adminSchema);

export default Admin;
