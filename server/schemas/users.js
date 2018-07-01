const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type : String,
        required : true,
        unique : true
    },
    phone: {
        type : String,
        required : true,
        trim : true
    },
    password: {
        type : String,
        required : true,
        trim : true
    }
});

const users = mongoose.model("users", userSchema);

module.exports = users;