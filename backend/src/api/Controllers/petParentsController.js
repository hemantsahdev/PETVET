const PETPARENT = require("../Models/user/petParent");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const USERS = require("../Models/user/user");

const registerController = async (req, res) => {
  const { name, email, username, password, city, state } = req.body;

  try {
    // Validate input fields
    if (!name || !email || !username || !password || !city || !state) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if username already exists
    const parentExist = await PETPARENT.findOne({
         $or:[{username},{email}] 
        });

    if (parentExist) {
      return res.status(409).json({ message: "Username or email already taken" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new petParent
    const petParent = new PETPARENT({
      name,
      email,
      username,
      password: hashedPassword,
      city,
      state,
    });

    // Save the new petParent
    const newPetParent = await petParent.save();

    // Generate JWT token
    const payload = { _id: newPetParent._id };
    const options = { expiresIn: "24h" };
    const petParentToken = jwt.sign(
      payload,
      process.env.TOKEN_SECRET_USER,
      options
    );

    // sending the jwt in Headers
    res.setHeader("Authorization",`Bearer ${petParentToken}`)

    // Return success message and JWT token
    res
      .status(200)
      .json({
        message: "Pet parent successfully registered",
      });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};






module.exports = { registerController };
