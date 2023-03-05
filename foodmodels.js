const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name: {
        type:String,
        unique: true,
        trim: true
    },
    ingredient:[String],
    culture: {
        type: String,
    },
    servings:{
        type: Number
    },
    direction1: String,
    direction2: String,
    direction3: String,
    direction4: String,
    direction5: String,
    direction6: String,
    direction7: String,
    direction8: String,
    direction9: String,
    direction10: String,
    direction11: String,
    direction12: String,
    direction13: String,

})

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;