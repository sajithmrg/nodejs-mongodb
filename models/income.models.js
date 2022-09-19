const mongoose = require('mongoose')
var Schema = mongoose.Schema

const incomeSchema = new Schema({
   totalIncome:{
        type:Number,
        required:true,
   },
    totalCost:{
        type:Number,
        required:true,
   },
   profit:{
        type:Number,
        required:false,
   }

})
module.exports  = mongoose.model("income",incomeSchema)