const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello...');
});

router.get('/:productId', (req, res) => {
    const {productId} = req.params;
    res.send(`product id: ${productId}`);
});

module.exports = router;