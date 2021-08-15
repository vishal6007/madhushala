const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');
const Product = require('./product');
const Order = require('./order');


const userSchema = new mongoose.Schema({
    info:{
        type:String,
        default:"user"
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Order'
        }
    ]
 
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User',userSchema);

module.exports = User;
