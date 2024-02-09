const express=require("express")
const signupmodel=require("../models/usermodel")
const router=express.Router()
const bcrypt=require("bcryptjs")
const { log } = require("console")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}


router.post("/add",async(req,res)=>{

    let{data}={"data":req.body}
    let password=data.password
    /*hashPasswordGenerator(password).then(
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
    )*/
    const hashedpassword=await hashPasswordGenerator(password)
    data.password=hashedpassword
    let blog=new signupmodel(data)
    let result= await blog.save()
    res.json({
        status:"success"
    })
    

})
router.post("/signin",async(req,res)=>{
    let input=req.body
    let email=req.body.email
    let data=await signupmodel.findOne({"email": email})
    if(!data)
    {
        return res.json({
            status:"invalid user"
        })
    }
    console.log(data)
    let dbpassword=data.password
    let inputpassword=req.body.password
    console.log(dbpassword)
    console.log(inputpassword)
    const match=await bcrypt.compare(inputpassword,dbpassword)
    if(!match)
    {
        return res.json({
            status:"invalid password"
        })

    }
    res.json({
        status:"success"
    })
    

})
module.exports=router