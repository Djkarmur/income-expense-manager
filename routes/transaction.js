// const express=require('express');
const router=require("express").Router();
const {gettrans,addtrans,deletetrans} =require('../control/trans');
// const app=express();

router
    .route('/')
    .get(gettrans)
    .post(addtrans);
       
router.route('/:id').delete(deletetrans);   

 module.exports=router;