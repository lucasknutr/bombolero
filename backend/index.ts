import express from "express";
import mongoose from "mongoose";
import config from "./server-config";
import { errorHandler, notFound } from "./middleware/errorMiddleware";
import adminRoutes from "./routes/AdminRoute";

// Initialize app
const app = express();
const port = config.port;
const db_url = config.db_url;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/admin", adminRoutes);

// Error handling
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

mongoose
    .connect(db_url)
    .then(() => console.log("App connected to database"))
    .catch((error) => console.log(error));

mongoose.connection.on("error", (error: Error) => console.log(error));
