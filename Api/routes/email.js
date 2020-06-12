const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Name is created',
        email: {
            email: 'emanuel@thedigitalacademy.co.za'
        }
    });
});

/*router.post ('/', (req, res, next) => {  
    res.status(201).json({

        message: 'Handling POST request to /products'
    });
});

router.get('/:productId',(req, res, next)=>{

    const id = req.params.productId;

    if(id === 'special')
    {
        res.status(200).json({
            message: 'you discovered'
        });
    }
    else{
        res.status(200).json({
            message: 'passed '
        });
    }
});

router.patch('/:productId', (req, res, next)=>{

    res.status(200).json({
        message: 'patch is working '
    });
});*/
 module.exports = router; 