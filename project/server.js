const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const app = express();

const port = 3000


app.use(bodyParser.json());
// app.use(bodyParser.urlencoded())
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", require("./routes/user.routes"));

app.get('/', (req, res) => {
  res.send('Welcome to Students Database')
  // console.log('Welcome to Students Database')
})

app.listen(port , ()=>{console.log('Connected to the port ' + port)})
