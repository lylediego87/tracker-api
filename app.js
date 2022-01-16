const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
app = express()

require('dotenv').config();

app.use('/', require('./routes/hello'));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Tracker Api listening on port: ${PORT}`);
});