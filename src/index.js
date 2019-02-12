const express = require('express');
const morgan = require('morgan');   
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


//Database Setup
mongoose.connect('mongodb://localhost:27017/upload',
    { useNewUrlParser: true }
);




app.use(require('./routes'));   

app.listen(3000, () => {
    console.log("server running on port 3000")
})