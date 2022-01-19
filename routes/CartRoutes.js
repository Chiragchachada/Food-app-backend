const express = require("express");
 const cartModel = require('../models/cartItemsModel');
 const router = express.Router();


 router.post("/addcart", async function(req, res){
    console.log("req.body", req.body);
    try {
        const cartData = await  cartModel.create(req.body);
        console.log("dataCreation", cartData);
        res.send({"result": "Data added successfully"});
    
    } catch(error){
        console.log("error occured", error);
    }
    });

    router.get("/getcart", async function(req, res){
        try{
            const getCartData = await  cartModel.find({},{__v:0});
            console.log("data from database", getCartData);
            res.send({result: getCartData});
        } catch(error){
            console.log("error occured", err);
        }
        
    });

    router.delete("/delete", async function (request, response) {
        try {
          // Use deleteOne method to delete the items
          await cartModel.deleteOne({ _id: request.body._id });
          response.send({ result: "Item deleted successfully" });
        } catch (e) {
          console.log("Error occured", err);
        }
      });

      router.delete("/deleteall", async function (request, response) {
        try {
          // Use deleteOne method to delete the items
          await cartModel.deleteMany({ });
          response.send({ result: "Item deleted successfully" });
        } catch (e) {
          console.log("Error occured", err);
        }
      });



    module.exports = router;