const mongoose = require('mongoose');

// Define the MongoDB schema and model
const freelancerSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    country: String,
    phone: String,
    description: String,
});

const Freelancer = mongoose.model('Freelancer', freelancerSchema);

module.exports = Freelancer;