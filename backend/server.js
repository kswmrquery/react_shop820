const express = require("express");
var data = require("./data");

const dotenv = require('dotenv');
const config = require('./config');
const bodyParser = require('body-parser')
dotenv.config('./env');
const mongodburl = config.MONGODB_URL;

const mongoose = require('mongoose');

mongoose.connect(mongodburl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
    }).catch(error=> console.log(error.reason));

const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute')
const app= express();

app.use(bodyParser.json());

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

// app.get("/api/home", (req, res)=>{
//     res.send(data.products);
// });

// app.get("/api/detail/:id", (req, res)=>{
//     const product_id = req.params.id;
//     const product = data.products.find(x=> x._id == product_id);
//     if(product) {
//         res.send(product);
//     }
//     else{
//         res.status(404).send({msg:"Product Not find"});
//     }
// });

app.listen(4000, ()=>{console.log("start server")});