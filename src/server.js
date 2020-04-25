const express = require('express');
const routes = require('./routes');
const morgan = require("morgan");  //para log
const cors = require('cors');

require('./database');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use(routes);
app.listen(3333);