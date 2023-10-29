import express from "express";
import mongoose from "mongoose";
import config from "./server-config";
import adminRoutes from "./routes/AdminRoute";

const app = express();
const port = config.port;
const db_url = config.db_url;

app.use("/api/admin", adminRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

mongoose
    .connect(db_url)
    .then(() => {
        console.log("App connected to database");
    })
    .catch((error) => {
        console.log(error);
    });
mongoose.connection.on("error", (error: Error) => console.log(error));
