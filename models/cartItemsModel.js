const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(  {

     
    name:String,
    image:String,
    price:String,
    description:String

  






},



                     
            

{collection: "CartItemCollection"}
);

const cartModel = mongoose.model("Cartschema", cartSchema)
module.exports = cartModel;