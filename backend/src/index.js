const express=require('express');

const app=express();

const cors = require("cors");
app.use(cors());
// for body parsing
app.use(express.json());

const env=require('dotenv');
env.config();
// connecting to DB
const mongoose=require("mongoose")
mongoose.connect(process.env.DB_CONNECT);
mongoose.connection.on("connected",()=>{
    console.log("database se manjoori mil gyi hai buddy")
})



const community=require("../community/community");
app.use("/community",community)



app.listen(300,(req,res)=>{
    console.log("connected t port 3000")
})