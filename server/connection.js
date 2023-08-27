const mongoose = require("mongoose");
const Connection = async()=> {
    try {
         await mongoose.connect('mongodb://127.0.0.1:27017/Users')
         .then(()=>{
            console.log("Connected to Database")
         })
    } catch (error) {
        console.log(error)
    }
   
}
module.exports = Connection;