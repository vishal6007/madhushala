const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Seller = require('../models/seller');
const passport = require('passport');
const { isLoggedIn,isSellerLoggedIn,isSpSellerLoggedIn,isUserLoggedIn } = require('../middleware');



router.get('/profile/seller/:id',isSellerLoggedIn,async(req,res)=>{
    const seller=await Seller.findById(req.params.id);
    res.render('profile/sellerprofile',{seller});
})

router.get('/profile/user/:id',isUserLoggedIn,async (req,res)=>{
    const user=await User.findById(req.params.id);
    res.render('profile/userprofile',{user});
})


module.exports = router;