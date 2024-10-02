const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
     title: {
        type: String,
        required: true,
     },
     description: {
        type: String,
        required: true,
     },
     price: {
        type: Number,
        required: true,
     },
     category: {
        type: String,
        required: true,
     },
     image: {
        type: String,
        required: true,
     },
     rating: {
        rate: Number,
        count: Number,
     },
     
     
     
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
