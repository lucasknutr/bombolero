import express from "express";
import mongoose from "mongoose";
import config from "./server-config";

const app = express();
const port = config.port;
const db_url = config.db_url;

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
