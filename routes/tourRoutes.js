const express = require('express');
const router = express.Router();
const tourHandler = require('./../controllers/tourController');

//router.param('id', tourHandler.checkID);

router
    .route('/')
    .get(tourHandler.getAllTours)
    .post(tourHandler.createTour)

router
    .route('/:id')
    .patch(tourHandler.updateTour)
    .delete(tourHandler.deleteTour)
    .get(tourHandler.getTour)

module.exports = router;