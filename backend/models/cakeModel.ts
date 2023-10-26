import mongoose from "mongoose";

const cakeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: String,
});

export const Cake = mongoose.model("Cake", cakeSchema);
