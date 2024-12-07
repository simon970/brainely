import express from "express"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"

import zod from "zod"
import { userModel } from "./db";

const app =express();

app.use(express.json());

const userSchema = zod.object({
    username:zod.string().email(),
    password:zod.string().min(8).max(20).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/).regex(/[\W_]/)
})


app.post("/api/v1/signup",async (req,res)=>{
    
    const response = userSchema.safeParse(req.body)

    if(response.success){
        await userModel.create({
            username:req.body.username
        })
        res.json({
            msg:"Successful"
        })     
    }else{
        res.json({
            msg:"Wrong Inputs"
        })
    }
 })
app.post("/api/v1/signin",(req,res)=>{
res.json({ msg:"You are Signed In"})
})
app.post("/api/v1/content",(req,res)=>{

})

app.get("/api/v1/content",(req,res)=>{

})

app.delete("/api/v1/content",(req,res)=>{

})

app.post("api/v1/brain/share",(req,res)=>{

})

app.get("/api/v1/brain/:shareLink",(req,res)=>{

})

app.listen(3000);