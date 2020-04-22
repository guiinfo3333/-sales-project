const Sequelize = require('sequelize');
const dbConfig = require('../config/database');



const Admins = require('../models/Admins');
const ProductCategory = require('../models/ProductCategory');
const TechinicalSheet = require('../models/TechinicalSheet');
const Product = require('../models/Product');

const connection = new Sequelize(dbConfig);

Admins.init(connection);
ProductCategory.init(connection);
TechinicalSheet.init(connection);
Product.init(connection);

module.exports = connection;