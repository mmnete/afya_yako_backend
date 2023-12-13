const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Afya bora is live!')
});

app.listen(port, () => {
   console.log('App is listening @ http://localhost:${port}');
});
