const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Name = require('../models/name');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Name is created',
        name: {
            firstName: 'Emanuel',
            lastName: 'Mahlangu'
        }
    });
});

router.post ('/', (req, res, next) => { 
    const name = new Name({ 
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    name.save().then(results=>{
        console.log(results);
    })
    .catch(err => console.log(err));
    
    res.status(201).json({
        message: 'kjshfguer',
        name: name
    });
});

router.get('/:nameId',(req, res, next)=>{

    const id = req.params.productId;
    Name.findById(id).
    exec().
    then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});
/*
router.patch('/:productId', (req, res, next)=>{

    res.status(200).json({
        message: 'patch is working '
    });
});*/
 module.exports = router; 