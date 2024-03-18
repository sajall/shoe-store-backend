const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 3,
        max: 50,
    },

    price: {
        type: Number,
        required: true,
    },

    discountedPrice: {
        type: String,
        required: true,
        min: 6,
    },
    colors: {
        type: Array,
        default: []
    },

    sizes: {
        type: Array,
        default: []
    },

    images: {
        type: Array,
        default: []
    },
    detail: {
        type: String,
        require: true,
        min: 3,
        max: 50,
    },
    category:String
},

    { timestamps: true }
)

module.exports = mongoose.model("Product", ProductSchema);
