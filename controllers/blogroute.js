const express=require("express")
const signupmodel=require("../models/usermodel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let blog=new signupmodel(data)
    let result= await blog.save()
    res.json({
        status:"success"
    })
})