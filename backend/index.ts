import express from 'express';
import config from './server-config';

const app = express();
const port = config.port;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});