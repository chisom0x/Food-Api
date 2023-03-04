const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app =require('./app');

dotenv.config({path: './config.env'})

const DB = process.env.DATABASE;
mongoose.connect(DB, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
}).then(con =>{
    console.log('DB connected')
})

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
})