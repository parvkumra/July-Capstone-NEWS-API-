const express=require("express");
const app=express();
const userRouter=require("./routers/userRouter")
const dotenv=require("dotenv");
const connectdb = require("./config/connection");
dotenv.config();


const PORT=process.env.PORT || 3000;
app.use(express.json());
connectdb();

app.use("/api/vi/user",userRouter)

app.listen(PORT,()=>{
    console.log("server started")
})