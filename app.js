const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const userId = require('./Api/routes/userId');



const nameRoute = require('./api/routes/name');
const emailRoute = require('./Api/routes/email');

mongoose.connect('mongodb+srv://nattym302:'+ 
        process.env.MONGO_ATLAS_PW + 
        '@school-management-mwpam.mongodb.net/<dbname>?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }
        )
//app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/name', nameRoute);
app.use('/email', emailRoute);
//app.use('/userId', userId);

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type, Accept, Authorization");

    if(req.method == 'OPTIONS')
    {
        req.header('Access-Control-Allow-Origin','POST, DELETE, GET, PATCH');
        return req.statusCode(200).json({});
    }

})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`listen on ${PORT}`)
});

