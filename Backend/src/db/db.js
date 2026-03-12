const mongoose = require('mongoose');

async function createDB(){
   await mongoose.connect(process.env.MONGO_DB_URI);
    
    console.log("DB connected");
}

module.exports = createDB;