// configuration for creating database connection
const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_DB);
mongoose.connect('mongodb://127.0.0.1:27017/polling_system_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;