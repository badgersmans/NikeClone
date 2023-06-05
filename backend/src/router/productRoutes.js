const express = require('express');
const router = express.Router();
const { getAllProducts, getProduct } = require('../database/products') 

router.get('/', async (req, res) => {
    const products = await getAllProducts();
    // console.log(products)
    res.send(products);
});

router.get('/:productId', async (req, res) => {
    // console.log(`query product with ID: ${req.params.productId}`)
    try {
        const {productId} = req.params;
        const product = await getProduct(productId);

        if(!product) {
            res.status(404).send({
                status: 'failed',
                error: 'Product not found'
            });
            return;
        }
    
        res.send(product);
    } catch (error) {
        res.status(400).send({
            status: 'failed',
            error: error.message
        });
    }
});

module.exports = router;