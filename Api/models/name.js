const mongoose = require('mongoose'); 

const nameSchema = mongoose.Schema({
     
    _id: mongoose.Schema.Types.ObjectId,

    firstName: String,
    lastName: String

});

module.exports = mongoose.model('Name', nameSchema)