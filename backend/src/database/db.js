const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://admin-user:NhCK9yZNsylLgMXay8babjdDgEOPYefLSeES3x9E@nikenjd.hs0rsvt.mongodb.net/'

const client = new MongoClient(uri);

const database = client.db('nikeNJD');
const products = database.collection('products');

module.exports = products;