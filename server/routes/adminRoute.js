const express = require('express');
const adminController = require('../controllers/adminController'); 

const adminRouter = express.Router(); 

adminRouter.post("/admins", adminController.addAdmin); 

adminRouter.get("/admins", adminController.getAdmin);

adminRouter.get("/admins/:id", adminController.getByIdAdmin);

adminRouter.delete("/admins/:id", adminController.deleteAdmin);

adminRouter.put("/admins/:id", adminController.getUpdateAdmin);

module.exports = adminRouter; 
