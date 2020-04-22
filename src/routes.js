const express = require('express');
// const authMiddleware = require('./middlewares/auth');

const AdminController = require('./controllers/AdminController');
const ProductCategoryController = require('./controllers/ProductCategoryController');



const routes = express.Router();

routes.get('/admin',AdminController.index);
routes.post('/admin',AdminController.store);
routes.put('/admin/:id',AdminController.change);
routes.delete('/admin/:id',AdminController.delete);

routes.get('/productcategory',ProductCategoryController.index);
routes.post('/productcategory',ProductCategoryController.store);
routes.delete('/productcategory/:id',ProductCategoryController.delete);



module.exports = routes;