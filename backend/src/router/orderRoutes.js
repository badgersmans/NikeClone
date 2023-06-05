const express = require('express');
const router = express.Router();
const { getAllOrders, getOrder, createOrder } = require('../database/orders') 

router.get('/', async (req, res) => {
    const orders = await getAllOrders();
    // console.log(orders)
    res.send(orders);
});

router.get('/:orderRef', async (req, res) => {
    try {
        const { orderRef } = req.params;
        const order = await getOrder(orderRef);

        if(!order) {
            res.status(404).send({
                status: 'failed',
                error: 'Order not found'
            });
            return;
        }

        res.send(order);
    } catch (error) {
        res.status(400).send({
            status: 'failed',
            error: error.message
        });
    }
});

router.post('/', async (req, res) => {
    const order = req.body;

    order.orderRef = (Math.random() + 1).toString(36).substring(7);

    const result = await createOrder(order);

    res.status(201).send(result);
});


module.exports = router;