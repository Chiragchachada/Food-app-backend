const mongoose = require("mongoose");

const pizzaItemsSchema = new mongoose.Schema(  {

     
        name:String,
        image:String,
        price:String,
        description:String
      

    




},


  
                         
                
    
    {collection: "PizzaItemCollection"}
);






 const pizzaModel = mongoose.model('foodItemsModel', pizzaItemsSchema)

 module.exports = pizzaModel;
