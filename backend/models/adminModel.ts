import mongoose from "mongoose";
import { genSalt, hash, compare } from "bcrypt";

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

adminSchema.methods.comparePassword = async function(inputPassword: string) {
    return await compare(inputPassword, this.password);
};

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
