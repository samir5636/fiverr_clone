const mongoose = require('mongoose');

// Define the MongoDB schema and model
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    country: String,
    phone: String,
    description: String,
    avatar: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;