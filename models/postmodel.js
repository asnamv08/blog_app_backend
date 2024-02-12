const mongoose=require("mongoose")
const postschema=new mongoose.Schema(
    {
        userid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"blog"
        },
        post:{
            type:String,
            required:true
        },
        posteddate:{
            type:Date,
            default:Date.now
        }
    }
)
module.exports=mongoose.model("blogpost",postschema)