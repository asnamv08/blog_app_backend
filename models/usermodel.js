const mongoose=require("mongoose")

const signupmodelschema=new mongoose.Schema(
    {
        name:String,
        age:String,
        phone:String,
        address:String,
        pincode:String,
        email:String,
        password:String
    }
)
module.exports=mongoose.model("blog",signupmodelschema)
