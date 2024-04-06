const VETERINARIAN = require("../Models/user/veterinarian");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const USERS = require("../Models/user/user");


const registerController=async(req,res)=>{

    const {name,username,email,password,pincode,city,state,mobile,gender,speciality}=req.body;

   // Check if required fields are missing in the request body
    if (!name || !username || !email || !password) {
        return res.status(400).json({ message: 'Name, username, email, and password are required' });
    }

    try {
        // Check if the username or email already exists in the database
        const existingVet= await VETERINARIAN.findOne({
          $or: [{ username }, { email }],
        });

        if (existingVet) {
          return res
            .status(409)
            .json({ message: "Username or email already exists" });
        }

        const hashedPassword= await bcrypt.hash(password,10)
        // Create a new user instance
        const newVet = new VETERINARIAN({
          name,
          username,
          email,
          password:hashedPassword, // Note: Password should be hashed before saving (not shown here)
          pincode,
          city,
          state,
          mobile,
          gender,
          speciality,
        });

        // Save the new user to the database
        await newVet.save();

        // generating jwt token
        const token = jwt.sign(
          { _id: newVet._id },
          process.env.TOKEN_SECRET_USER
        );

        // sending token in headers
        res.setHeader("Authorization",`Bearer ${token}`)

        // Return success response if registration is successful
        res.status(201).json({ message: "Veterinarian registered successfully" });
      } catch (error) {
        // Handle registration error
        console.error("Error registering vet:", error.message);
        res.status(500).json({ message: error.message });
      }
}








module.exports={registerController}