const mongoose =require("mongoose")

const userDetailsScheme=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true

    },
    date:{
        type:Date,
        default:Date.now
    }
})

const userDetailsTable=new mongoose.model('userDetail',userDetailsScheme);
module.exports =userDetailsTable