const express = require('express');
const Tour = require('./../models/tourModel');

exports.getAllTours = async (req, res) => {

    const queryObj = {... req.query};
    const excludeQueries = ['sort', 'limit', 'page', 'fields'];
    excludeQueries.forEach(el => delete queryObj[el]);

    try {
     
        //const tours = await Tour.find();
        const query = await Tour.find(queryObj);
        const tours = await query;

        //const advanceFiltering = JSON.stringify(req.query);
        
        res.status(200).json({
            status: 'success',
            results: tours.length,
            data: {
                tours
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: `Error : ${error}`
        })
    }
}

exports.getTour = async (req, res) => {

    try {
        const tour = await Tour.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: `Error : ${error}`
        })
    }

}

exports.createTour = async (req, res) => {
    //console.log(req.body);
    try {
        
        const tour = await Tour.create(req.body);
        res.status(200).json({
            status: 'success',
            data: {
                tour: tour
            }
        })

    } catch (error) {
        
        res.status(400).json({
            status: 'fail',
            message: `Error : ${error}`
        })
    }
}

exports.updateTour = async (req, res) => {
    try {
        const tour = await Tour.findOneAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        
        res.status(200).json({
            status: 'success',
            data: {
                tour: tour
            }
        })

    } catch (error) {
        
        res.status(400).json({
            status: 'fail',
            message: `Error : ${error}`
        })
    }
}

exports.deleteTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndDelete(req.params.id);
        
        res.status(204).json({
            status: 'success',
            data: {
                tour: tour
            }
        })

    } catch (error) {
        
        res.status(400).json({
            status: 'fail',
            message: `Error : ${error}`
        })
    }
}