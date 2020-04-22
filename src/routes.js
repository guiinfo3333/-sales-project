const express = require('express');
// const authMiddleware = require('./middlewares/auth');

const AdminController = require('./controllers/AdminController');
const ProductCategoryController = require('./controllers/ProductCategoryController');
const TechinicalSheetController = require('./controllers/TechinicalSheetController');
const ProductController = require('./controllers/ProductController');



const routes = express.Router();

routes.get('/admin',AdminController.index);
routes.post('/admin',AdminController.store);
routes.put('/admin/:id',AdminController.change);
routes.delete('/admin/:id',AdminController.delete);

routes.get('/productcategory',ProductCategoryController.index);
routes.post('/productcategory',ProductCategoryController.store);
routes.delete('/productcategory/:id',ProductCategoryController.delete);

routes.get('/product',ProductController.index);
routes.post('/product',ProductController.store);
routes.delete('/product/:id',ProductController.delete);

routes.get('/techinicalsheet',TechinicalSheetController.index);
routes.post('/techinicalsheet',TechinicalSheetController.store);
routes.put('/admin/:id',TechinicalSheetController.change);
routes.delete('/techinicalsheet/:id',TechinicalSheetController.delete);



module.exports = routes;