const express=require("express")
const signupmodel=require("../models/usermodel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let name=req.body.name
    let age=req.body.age
    let phone=req.body.phone
    let address=req.body.address
    let pincode=req.body.pincode
    let email=req.body.email
    let password=req.body.password
    //let blog=new signupmodel(data)
    //let result= await blog.save()
    res.json({
        status:"success"
    })
})
module.exports=router