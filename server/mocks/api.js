var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    console.log(req.body);
    console.log("get /");
    res.send("Hello,API Test!");
})

router.post('/search',function(req,res,next){
    console.log(req.body);
    console.log("post /search");
    res.send(req.body);
})

router.post('/list',function(req,res,next){
    console.log(req.body);
    console.log("post /list");
    res.send(req.body);
})

router.post('/insert',function(req,res,next){
    console.log(req.body);
    console.log("post /insert");
    res.send(req.body);
})

router.post('/delete',function(req,res,next){
    console.log(req.body);
    console.log("post /delete");
    res.send(req.body);
})

router.post('/update',function(req,res,next){
    console.log(req.body);
    console.log("post /update");
    res.send(req.body);
})

module.exports=router;
