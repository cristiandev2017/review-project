const express = require('express');
const router = express.Router();
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json({ extend: false }));
app.use(cors());
app.use(router.get('/', (req, res) => {
    res.send("Hola mundo");
}));

module.exports = app;