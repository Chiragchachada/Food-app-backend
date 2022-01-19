 const express = require("express");
 const pizzaModel = require('../models/pizzaItemsModel');
 const router = express.Router();


 router.post("/addpizza", async function(req, res){
    console.log("req.body", req.body);
    try {
        const dataCreation = await  pizzaModel.create(req.body);
        console.log("dataCreation", dataCreation);
        res.send({"result": "Data added successfully"});
    
    } catch(error){
        console.log("error occured", error);
    }
    });

    router.get("/getpizza", async function(req, res){
        try{
            const getFoodItems = await  pizzaModel.find({},{__v:0, _id:0 });
            console.log("data from database", getFoodItems);
            res.send({result: getFoodItems});
        } catch(error){
            console.log("error occured", err);
        }
        
    });




    module.exports = router;