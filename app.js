const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const blogroute=require("./controllers/blogroute")
const postroute=require("./controllers/postrouter")

const app=express()

app.use(express.json())
app.use(cors())
app.use("/api/post",postroute)
app.use("/api/blog",blogroute)

mongoose.connect("mongodb+srv://asnamv123:asnamv08@cluster0.erlchgb.mongodb.net/blogDb?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
app.listen(3001,()=>{
    console.log("server running")
})
