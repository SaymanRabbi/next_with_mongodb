
const clc = require('cli-color');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectMongodb } = require('./lib/DataBase/Util/ConnectMongodb');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
connectMongodb();
// routes
const ProductRoute = require('./lib/DataBase/Routes/ProductRoute');
app.use('/api/product', ProductRoute);
// routes
app.listen(5000, () => {
    console.log(clc.cyan.bold('Server is running on port 5000'));
})
app.get('/',(req,res)=>{
    res.send('Hello World');
})
