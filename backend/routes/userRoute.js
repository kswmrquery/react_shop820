const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/userModel')
const router = express.Router();
const getToken = require('../util');

router.post('/signin', async(req, res)=>{

    const signUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if(signUser){
        res.send({
            _id:signUser.id,
            email:signUser.email,
            name:signUser.name,
            isAdmin:signUser.isAdmin,
            token:getToken(signUser)
        })
    }
    else{
        res.status(401).send({msg:'Invaild email or password'});
    }
});

router.post('/register', async(req, res)=>{
    
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password:req.body.password
    })

    const newUser = await user.save();

    if(newUser) {
        res.send({
            _id:newUser.id,
            email:newUser.email,
            name:newUser.name,
            isAdmin:newUser.isAdmin,
            token:getToken(newUser)
        })
    }
    else{
        res.status(401).send({msg:'Invaild User Data'});
    }

})
router.get('/createadmin', async(req, res)=>{
    try {
        const user = new User({
            name : 'ksw',
            email :'ksw@163.com',
            password:'1234',
            isadmin:true
        });
        const newUser = await user.save();
        res.send(newUser);
    } catch (error) {
        res.send({msg:error.message});
    }
    
});

module.exports =router;