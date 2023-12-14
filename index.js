import {PORT} from './config.js';
import express from 'express';
import router from './src/routes/routes.js';

const app = express();
app.use(express.json()); // Allow parsing of json payloads.

app.use(router);

app.listen(PORT, () => {
  console.log(`App is listening @ http://localhost:${PORT}`);
});
