const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        min: 6,
    },

    isAdmin: {
        type: Boolean,
        default: false
    },
    streetAddress: {
        type: String,
        max: 50
    },
    city: {
        type: String,
        max: 50
    },
    state: {
        type: String,
        max: 50
    },
    country: {
        type: String,
        max: 50
    },
    postalCode: {
        type: String,
        max: 50
    },
},

    { timestamps: true }
)

module.exports = mongoose.model("User", UserSchema);
