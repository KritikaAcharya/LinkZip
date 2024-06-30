const express=require("express");
const app=express();

PORT=8001;

app.listen(PORT,()=>{
    console.log(`app is running in port : ${PORT}`)
})