require('dotenv').config();

const express = require('express');
const app = express();

// Use environment variable or fallback to 4000
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.send('Hello Harsh');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
