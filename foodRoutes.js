const express = require('express');
const foodController = require('./foodController')
const router = express.Router()

router
.route('/')
.get(foodController.getAllFoods)
.post(foodController.createNewFood);

router
.route('/:id')
.get(foodController.getFood)
.patch(foodController.update)
.delete(foodController.deleteFoods)

module.exports=router;