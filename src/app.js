const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const router = require('./routes/taskRouter');
const postRouters = require('./routes/postRouter');
const app = express();

app.set('port', process.env.PORT || 3005);
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use('/api', postRouters);

module.exports = app;