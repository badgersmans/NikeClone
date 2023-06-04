const express = require('express');
const productRoutes = require('./router/productRoutes')

const app = express();
const PORT = 3000;

app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} ✅`);
});