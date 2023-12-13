import {PORT} from './config.js';
import express from 'express';


const app = express();
app.use(express.json()); // Allow parsing of json payloads.

app.get('/', (req, res) => {
  res.send('Afya bora is live!');
});

app.get('/status', (req, res) => {
  const status = {
    "Status": "Running"
 };
 
 res.send(status);
});

app.listen(PORT, () => {
  console.log(`App is listening @ http://localhost:${PORT}`);
});
