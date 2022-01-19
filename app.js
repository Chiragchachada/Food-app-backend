const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require("cors");

const logger = require('morgan');
require("dotenv").config();
const mongoose = require("mongoose")

mongoose.connect(process.env.DB_CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	
},function(err){
    if(err){
        console.log("error in db connection", err);
    } else{
        console.log("Connection established");
    }
});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const PizzaItemsRouter = require('./routes/PizzaItemsRoutes')
const BurgerItemsRouter = require('./routes/BurgerItemsRoutes')
const CartItemsRouter = require('./routes/CartRoutes')
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/PizzaItems", PizzaItemsRouter)
app.use("/BurgerItems", BurgerItemsRouter)
app.use("/CartItems", CartItemsRouter)
module.exports = app;
