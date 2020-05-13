const Sequelize = require('sequelize');
const dbConfig = require('../config/database');



const Admins = require('../models/Admins');
const ProductCategory = require('../models/ProductCategory');
const TechinicalSheet = require('../models/TechinicalSheet');
const Product = require('../models/Product');
const ImageProduct = require('../models/ImageProduct');
const FirstImageProduct = require('../models/firstimageproduct');
const User = require('../models/Users');

const connection = new Sequelize(dbConfig);

Admins.init(connection);
ProductCategory.init(connection);
TechinicalSheet.init(connection);
FirstImageProduct.init(connection);
ImageProduct.init(connection);
Product.init(connection);
User.init(connection);


module.exports = connection;