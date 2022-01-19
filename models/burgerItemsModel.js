const mongoose = require("mongoose");

const burgerItemsSchema = new mongoose.Schema(  {

     
    name:String,
    image:String,
    price:String,
    description:String
  






},



                     
            

{collection: "BurgerItemCollection"}
);

const burgerModel = mongoose.model("burgerItemsModel", burgerItemsSchema)
module.exports = burgerModel;