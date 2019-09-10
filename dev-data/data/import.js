const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
//const DB = process.env.DATABASE_LOCAL;

mongoose.connect( DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false
}).then(con => {
    console.log('now connected!');
});

const data = fs.readFileSync(`${__dirname}/tours.json`, 'utf-8');
const tours = JSON.parse(data);

const createTours = async () => {
    try {
        await Tour.create(tours)
        console.log('Tours created successfully!...')
        process.exit()
    } catch (error) {
        console.log(error)
    }
}

const deleteTours = async () =>{
    try {
        await Tour.deleteMany()
        console.log('Tours deleted successfully!')
        process.exit()
    } catch (error) {
        console.log(error);
    }
}

console.log(process.argv);

if(process.argv[2] === '--importTours'){
    createTours()
}else if(process.argv[2] === '--deleteTours'){
    deleteTours()
}