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

// pet parent public
const petParent=require("./src/api/Routes/petParents/route")
app.use("/petParent", petParent);

// veterinarian public
const veterinarian=require("./src/api/Routes/vets/route")
app.use("/veterinarian",veterinarian)

// common public
const common=require("./src/api/Routes/common/route")
app.use("user",common)



app.listen(3000,(req,res)=>{
    console.log("connected t port 3000")
})