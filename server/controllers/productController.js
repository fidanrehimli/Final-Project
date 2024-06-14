const Product = require('../models/productModel');

const addUser = async (req, res) => {
    try {
        const { image,title,catagory, price } = req.body;
        const product = new Product({image,title,catagory, price});
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getByIdProduct = async (req, res) => {
    try {
        const {id}=req.params
        const product = await Product.findById(id);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getUpdateProduct = async (req, res) => {
    try {
        const {id}=req.params
        const { image,title,catagory, price } = req.body;
        const product = await Product.findByIdAndUpdate(
            id,
            {
                image,
                title,
                catagory, 
                price
            },{
                new:true
            }
        );
        res.status(200).send(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const {id}=req.params
        const product = await Product.findByIdAndDelete(id);
        res.status(200).send(product)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addUser,
    getProduct,
    deleteProduct,
    getByIdProduct,
    getUpdateProduct
};
