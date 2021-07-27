const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json({ extend: false }));
app.use(cors());

module.exports = app;
