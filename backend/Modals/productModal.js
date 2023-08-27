const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
    Brand: {
        type: String,
    },
    Category: {
        type: String,
        required: true,
    },
    Stock: {
        type: Number,
        required: true,
    },
    link: {
        type: String,
    },
},{
    timestamps: true
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;