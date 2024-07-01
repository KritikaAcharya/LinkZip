const express=require("express");
const app=express();
const urlRoute=require("./routes/url")
const {connectToMongoDB}=require("./connect")

PORT=8001;

connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>console.log("mongodb connected"))

app.use("/url",urlRoute);

app.listen(PORT,()=>{
    console.log(`app is running in port : ${PORT}`)
})