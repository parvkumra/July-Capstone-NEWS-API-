const express=require("express");
const app=express();
const userRouter=require("./routers/userRouter")
app.get("/hello",(req,res)=>{
    res.json({
        msg:"hello bro hbd guruji"
    })
});
app.use("/api/vi/user",userRouter)

app.listen(3000,()=>{
    console.log("server started")
})