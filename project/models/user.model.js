// const mongoose = require('mongoose')
const db = require('../db');


const userSchema = new db.Schema({
        email:String,
        password:String,
        name:String,
        age:Number,
        gender:String,
        isActive:Boolean,
        userType:String
        }
   )


module.exports = db.model("users", userSchema)