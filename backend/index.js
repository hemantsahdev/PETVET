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

// routes only logged in as PET-PARENT can visit
const petParent=require("./src/api/Routes/petParents/route")
app.use("/petParent", petParent);

//  routes only logged in as VETS can visit
const veterinarian=require("./src/api/Routes/vets/route")
app.use("/veterinarian",veterinarian)

// routes PUBLIC can visit
const public=require("./src/api/Routes/Public/route")
app.use("/user",public)



app.listen(3000,(req,res)=>{
    console.log("connected t port 3000")
})