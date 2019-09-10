const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

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

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});