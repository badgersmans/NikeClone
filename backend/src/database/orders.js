const database = require('./db');

const getAllOrders = async() => {
    return await database.orders.find().toArray();
};

const getOrder = async(orderRef) => {
    return await database.orders.findOne({orderRef})
};

const createOrder = async(order) => {
    const result =  await database.orders.insertOne(order);

    return {...order, _id: result.insertedId};
};

module.exports = {
    getAllOrders,
    getOrder,
    createOrder,
}