const express=require('express');
const users_controller=require('../Controller/controller')
const router=express.Router();

router.get('/register',users_controller.getfilter); 


module.exports=router;