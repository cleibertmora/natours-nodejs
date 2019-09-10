const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, 'A tour has to have a name'],
        trim: true
    },
    duration: {
        type: Number,
        required: [true, 'Must have a duration']
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'Must have a max Group Size']
    },
    difficulty: {
        type: String,
        required: [true, 'Must have a difficulty']
    },
    guides: [String],
    summary: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, 'A tour need a Image Cover']
    },
    images: [String],
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour has to have a price']
    },
    priceDiscount: {
        type: Number
    },
    ratingsAverage: {
        type: Number
    },
    ratingsQuantity: {
        type: Number
    },
    startDates: [Date],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Tour = mongoose.model('Tour', TourSchema);

module.exports = Tour