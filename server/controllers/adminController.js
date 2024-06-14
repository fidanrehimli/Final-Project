const adminModel = require('../models/adminModel');

const addAdmin = async (req, res) => {
    try {
        const { image,name,email, phone } = req.body;
        const admin = new adminModel( { image,name,email, phone });
        await admin.save();
        res.status(201).send(admin);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getAdmin = async (req, res) => {
    try {
        const admins = await adminModel.find({});
        res.status(200).send(admins);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getByIdAdmin = async (req, res) => {
    try {
        const {id}=req.params
        const admin = await adminModel.findById(id);
        res.status(200).send(admin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getUpdateAdmin = async (req, res) => {
    try {
        const {id}=req.params
        const { image,name,email, phone } = req.body;
        const admin = await adminModel.findByIdAndUpdate(
            id,
            {
                image,
                name,
                email, 
                phone
            },{
                new:true
            }
        );
        res.status(200).send(admin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteAdmin = async (req, res) => {
    try {
        const {id}=req.params
        const admin = await adminModel.findByIdAndDelete(id);
        res.status(200).send(admin)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addAdmin,
    getAdmin,
    deleteAdmin,
    getByIdAdmin,
    getUpdateAdmin
};
