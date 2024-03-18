const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    username: {
        type: String,
    },

    userId: {
        type: String,
    },

    subtotal: {
        type: Number,
    },
    items: [{
        productId: String,
        size: String,
        quantity: Number

    }],
    status:{
        type: String,
        default: 'pending'
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("Order", OrderSchema);
