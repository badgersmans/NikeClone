const { ObjectId } = require('mongodb');
const database = require('./db');

const getAllProducts = async() => {
    return await database.products.find().toArray();
};

const getProduct = async(id) => {
    return await database.products.findOne({ _id: new ObjectId(id) })
};

module.exports = {
    getAllProducts,
    getProduct
}