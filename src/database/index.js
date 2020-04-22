const Sequelize = require('sequelize');
const dbConfig = require('../config/database');



const Admins = require('../models/Admins');
const ProductCategory = require('../models/ProductCategory');

const connection = new Sequelize(dbConfig);

Admins.init(connection);
ProductCategory.init(connection);

module.exports = connection;