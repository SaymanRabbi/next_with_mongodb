const mongoose = require('mongoose');
const clc = require('cli-color');

const connectMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(clc.yellow.bold.underline('Connected to MongoDB'));
    } catch (error) {
        
        console.log(clc.red.bold('Error connecting to MongoDB', error));

    }
}

module.exports = { connectMongodb };
