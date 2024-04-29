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


// STRIPE
const stripe=require("stripe")(process.env.STRIPE_SECRET_KEY) 

app.post('/create-checkout-session',async(req,res)=>{

        const {
            vetDetails,selectedSlot,selectedMode
        } = req.body;


    try {
        

      
       const session=await stripe.checkout.sessions.create({
        

            payment_method_types:['card'], //it contains the arr of all the payment types we want
            mode:'payment' ,         //payment menas one time payment ans other is subscription type
            line_items:[{
                price_data:{
                    currency:'inr',
                    product_data:{
                        name:vetDetails.name,
                    },
                    unit_amount: vetDetails.pricePerSlot*100
                },
                quantity:totalNumberOfNights,
            }],
            success_url: `http://localhost:5173/booking/success`,
            cancel_url: 'http://localhost:5173/failure',
        })

        res.json({
            url: session.url
        })
        
    } catch (e) {
        console.log(e.message)
    }
    
    
    
})



app.listen(3000,(req,res)=>{
    console.log("connected t port 3000")
})