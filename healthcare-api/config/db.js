const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/healthcare'); //Connection String mongodb://localhost:PORT_NUMBER/DatabaseName
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDB;
