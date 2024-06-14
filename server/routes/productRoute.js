const express = require('express');
const productController = require('../controllers/productController'); 

const productRouter = express.Router(); 

productRouter.post("/products", productController.addUser); 

productRouter.get("/products", productController.getProduct);

productRouter.get("/products/:id", productController.getByIdProduct);

productRouter.delete("/products/:id", productController.deleteProduct);

productRouter.put("/products/:id", productController.getUpdateProduct);

module.exports = productRouter; 
