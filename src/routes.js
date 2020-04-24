const express = require('express');
// const authMiddleware = require('./middlewares/auth');

const AdminController = require('./controllers/AdminController');
const ProductCategoryController = require('./controllers/ProductCategoryController');
const TechinicalSheetController = require('./controllers/TechinicalSheetController');
const ProductController = require('./controllers/ProductController');
const ImageProductController = require('./controllers/ImageProductController');
const FirstImageProductController = require('./controllers/FirstImageProductController');
const SelectProductsController = require('./controllers/SelectProductsController');



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
routes.put('/product/:id',ProductController.change);
routes.delete('/product/:id',ProductController.delete);

routes.get('/techinicalsheet',TechinicalSheetController.index);
routes.post('/techinicalsheet',TechinicalSheetController.store);
routes.delete('/techinicalsheet/:id',TechinicalSheetController.delete);

routes.get('/imageproduct',ImageProductController.index);
routes.post('/imageproduct',ImageProductController.store);
routes.delete('/imageproduct/:id',ImageProductController.delete);

routes.get('/firstimageproduct',FirstImageProductController.index);
routes.post('/firstimageproduct',FirstImageProductController.store);
routes.delete('/firstimageproduct/:id',FirstImageProductController.delete);

routes.get('/selectproduct',SelectProductsController.index);

module.exports = routes;