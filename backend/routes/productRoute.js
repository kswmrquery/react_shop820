const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/productModel')
const router = express.Router();
const getToken = require('../util');
const e = require('express');

router.get("/", async (req, res)=>{
    const products = await Product.find({});
    res.send(products);

});

router.post("/newproduct", async (req, res)=>{
    const prodct = new Product({
        name:req.body.name,
        img:req.body.img,
        brand:req.body.brand,
        category:req.body.category,
        description:req.body.description,
        price:req.body.price,
        rating:req.body.rating,
        instock:req.body.instock,
        numreviews:req.body.numreviews
    })
    const newproduct = await prodct.save();
    if(newproduct) {
        res.status(200).send({message:"New product Create.", data:newproduct});
    }
    else{
        res.status(500).send({message:"Error creating product."});
    }
})

router.get("/detail/:id",  async (req, res)=>{
    const product_id = req.params.id;
    const detailproduct = await Product.findById(product_id);
    if(detailproduct) {
        res.send(detailproduct);
    }
    else{
        res.status(404).send({msg:"Product Not find"});
    }
});
module.exports =router;