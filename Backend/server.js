require("dotenv").config();
const app = require('./src/app');
const createDB = require('./src/db/db');

createDB(); 


app.listen(3000,()=>{
    console.log("Server started on port 3000"); 
    
})