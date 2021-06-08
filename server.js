'use strict';
const express = require('express');

const SERVER_PORT = process.env.SERVER_PORT || 8080;

const app = express();

app.get('/', async (req, res) => {
  res.json({ hello: 'world' });
});

app.listen(SERVER_PORT, () => console.log(`Server ready at *:${SERVER_PORT}`));

