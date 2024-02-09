const express=require("express")
const signupmodel=require("../models/usermodel")
const router=express.Router()
const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}


router.post("/add",async(req,res)=>{

    let{data}={"data":req.body}
    let password=data.password
    hashPasswordGenerator(password).then(
        (hashedpassword)=>{
            console.log(hashedpassword)
            data.password=hashedpassword
            console.log(data)
            let blog=new signupmodel(data)
            let result=blog.save()
            res.json({
                status:"success"
            })
            
        }
    )
})
module.exports=router