const express = require('express')
const Food = require('./foodmodels')
const AppError = require('./appError')



exports.getAllFoods = async (req, res)=>{
    const foods = await Food.find()
    res.status(200).json({
        status: 'success',
        results: foods.length,
        data:{
            foods
        }
    })
}



exports.createNewFood = async (req, res)=>{
    const newFood = await Food.create(req.body)
    res.status(200).json({
        status: 'success',
        data:{
            newFood
        }
    })
}

exports.getFood = async (req, res)=>{
    const food = await Food.findById(req.params.id)
    if(!food){
        return new AppError('No food found with that ID', 400)}
    res.status(200).json({
        status: 'success',
        data: {
            food
        }
    })
}

exports.update = async (req, res) => {
    const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
        status: 'success',
        data: {
            updatedFood
        }
    })
}

exports.deleteFoods = async (req, res) => {
    const food = await Food.findByIdAndDelete(req.params.id, req.body)
    res.status(204).json({
        status: 'success',
        data: {
           food
        }
    })
}