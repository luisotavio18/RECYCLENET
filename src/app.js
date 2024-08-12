const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const router = require('./routes/taskRouter');
const postRouters = require('./routes/postRouter');
const dadosRouters = require('./routes/dadosRouter');
const entrarRouter = require('./routes/entrarRouter');
const app = express();

app.set('port', process.env.PORT || 3005);
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(__dirname + '\\public'));
app.use('/api', router);
app.use('/api', postRouters);
app.use('/api', entrarRouter);
app.use('/api', dadosRouters);

module.exports = app;