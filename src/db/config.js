const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost:27017/reactcrud',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection done")
}).catch((e)=>{
    console.log("something error")
})