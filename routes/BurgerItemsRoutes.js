const express = require("express");
 const burgerModel = require('../models/burgerItemsModel');
 const router = express.Router();


 router.post("/addburger", async function(req, res){
    console.log("req.body", req.body);
    try {
        const burgerData = await  burgerModel.create(req.body);
        console.log("dataCreation", burgerData);
        res.send({"result": "Data added successfully"});
    
    } catch(error){
        console.log("error occured", error);
    }
    });

    router.get("/getburger", async function(req, res){
        try{
            const getBurgerData = await  burgerModel.find({},{__v:0, _id:0 });
            console.log("data from database", getBurgerData);
            res.send({result: getBurgerData});
        } catch(error){
            console.log("error occured", err);
        }
        
    });




    module.exports = router;