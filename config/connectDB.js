const mongoose = require ("mongoose") ;

require ('dotenv').config ({path:"../.env"}) ;



const connectDB =async () => {
    try {
        await mongoose.connect (process.env.MONGO_URI)
        console.log("MongoDB connected")
    } catch (error) {
        console.log(err)
    }
}
module.exports = connectDB