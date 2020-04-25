const express = require('express');
const multer =require("multer");
const multerconfig = require('./config/multer');
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

routes.get('/imageproduct/:id',ImageProductController.index);
routes.post('/imageproduct/:id',multer(multerconfig).single('file'),ImageProductController.store);


routes.get('/firstimageproduct',FirstImageProductController.index);
routes.post('/firstimageproduct',multer(multerconfig).single('file'),FirstImageProductController.store);
routes.delete('/firstimageproduct/:id',FirstImageProductController.delete);

routes.get('/selectproduct',SelectProductsController.index);

// routes.post("/posts",multer(multerconfig).single('file'),(req,res) => {
//     console.log(req.file);
//     return res.json({hello : "Oi"})
// })
module.exports = routes;