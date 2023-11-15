import mongoose from "mongoose";
import { Document, Model } from "mongoose";

export interface CakeDocument extends Document {
    name: string,
    price: number,
    description: string,
}

export interface CakeModel extends Model<CakeDocument> {}

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

const Cake = mongoose.model<CakeDocument, CakeModel>("Cake", cakeSchema);

export default Cake;
