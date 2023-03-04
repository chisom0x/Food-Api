const express = require('express');
const morgan = require('morgan')
const app = express();
const foodroutes = require('./foodRoutes')

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());


app.use('/api/v11/foods', foodroutes)






module.exports = app;