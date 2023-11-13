require("dotenv").config({ path: __dirname + "/.env" });

const config = {
    port: 3001,
    db_url: process.env.DB_URI!,
};

export default config;
