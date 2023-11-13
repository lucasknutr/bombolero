require("dotenv").config({ path: __dirname + "/.env" });

const config = {
    nodeEnv: process.env.NODE_ENV!,
    port: process.env.PORT!,
    dbUri: process.env.DB_URI!,
    jwtKey: process.env.JWT_KEY!,
};

export default config;
