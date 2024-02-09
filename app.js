const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const blogroute=require("./controllers/blogroute")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://asnamv123:asnamv08@cluster0.erlchgb.mongodb.net/blogDb?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
app.use("/api/blog",blogroute)
app.listen(3001,()=>{
    console.log("server running")
})
