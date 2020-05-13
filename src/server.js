const express = require('express');
const routes = require('./routes');
const morgan = require("morgan");  //para log

const cors = require('cors');
const path = require("path");
require('./database');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(
    "/files",
    express.static(path.resolve(__dirname,"tmp","uploads")))

app.use(routes);


app.listen(3000);