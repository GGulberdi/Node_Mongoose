const mongoose = require ('mongoose');
require('dotenv').config()

const url = process.env.DB_URL

mongoose.connect(url, {useNewUrlParser: true}, 
	(err) => {
	if (!err) {
        mongoose.connection.on('open',()=>{console.log('MongoDB connection success')})
	} else {
        mongoose.connection.on('error',(err)=>{console.log('MongoDB connection failed:', err)})
	} });


    module.exports = mongoose
