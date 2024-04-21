const VETERINARIAN = require("../../Models/user/veterinarian");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const USERS = require("../../Models/user/user");

const registerController = async (req, res) => {
  const {
    name,
    username,
    email,
    profilePic,
    password,
    pincode,
    city,
    state,
    mobile,
    gender,
    speciality,
  } = req.body;

  // Check if required fields are missing in the request body
  if (!name || !username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Name, username, email, and password are required" });
  }

  try {
    // Check if the username or email already exists in the database
    const existingVet = await VETERINARIAN.findOne({
      $or: [{ username }, { email }],
    });

    if (existingVet) {
      return res
        .status(409)
        .json({ message: "Username or email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user instance
    const newVet = new VETERINARIAN({
      name,
      username,
      email,
      password: hashedPassword, // Note: Password should be hashed before saving (not shown here)
      pincode,
      city,
      state,
      mobile,
      gender,
      speciality,
    });

    const newUser = new USERS({
      username,
      email,
      password: hashedPassword,
      userRole: "veterinarian",
    });

    // Save the new user to the database
    await newVet.save();
    await newUser.save();

    // generating jwt token
    const token = jwt.sign({ username: newVet.username }, process.env.JWT_SECRET);

    // sending token in headers
    // res.setHeader("Authorization", `Bearer ${token}`);

      // Return success response if registration is successful
      res
        .status(201)
        .json({
          message: "Veterinarian registered successfully",
          jwtToken:token
        });
    } catch (error) {
        // Handle registration error
        console.error("Error registering vet:", error.message);
        res.status(500).json({ message: error.message });
      }
}

const getAllVeterinarians = async (req, res) => {
  try {
    const vets = await VETERINARIAN.find();
    res.status(200).json({ success: true, veterinarians: vets });
  } catch (error) {
    console.error("Error fetching veterinarians:", error);
    res.status(500).json({
      success: false,
      message: "Error getting veterinarians from the DB",
    });
  }
};

const handlingPricePerSlot = async (req, res) => {
  const { pricePerSlot, jwtToken } = req.body;
  try {
    // Decode the JWT token to get veterinarian's username
    const decodedToken = jwt.verify(jwtToken, secretKey); // Assuming you have a secretKey for JWT

    // Find the veterinarian based on the decoded token
    let vet = await VETERINARIAN.findOne({ username: decodedToken.username });

    if (!vet) {
      return res.status(404).json({ error: "Veterinarian not found" });
    }

    // Update the veterinarian's pricePerSlot with the provided pricePerSlot
    vet.pricePerSlot = pricePerSlot;
    await vet.save();

    res.status(200).json({ message: "Price per slot updated successfully" });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = { registerController, getAllVeterinarians,handlingPricePerSlot };


// const registerController = async (req, res) => {
//   const {
//     name,
//     username,
//     email,
//     password,
//     pincode,
//     city,
//     state,
//     mobile,
//     gender,
//     speciality,
//   } = req.body;

//   // Check if required fields are missing in the request body
//   if (!name || !username || !email || !password) {
//     return res
//       .status(400)
//       .json({ message: "Name, username, email, and password are required" });
//   }

//   try {
//     // Check if the username or email already exists in the database
//     const existingVet = await VETERINARIAN.findOne({
//       $or: [{ username }, { email }],
//     });

//     if (existingVet) {
//       return res
//         .status(409)
//         .json({ message: "Username or email already exists" });
//     }

//     // Upload profile picture to Cloudinary
//     let profilePicUrl;
//     if (req.file) {
//       const result = await cloudinary.uploader.upload(req.file.path, {
//         folder: 'profile-pictures',
//       });
//       profilePicUrl = result.secure_url;
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     // Create a new veterinarian instance
//     const newVet = new VETERINARIAN({
//       name,
//       username,
//       email,
//       password: hashedPassword, // Note: Password should be hashed before saving (not shown here)
//       pincode,
//       city,
//       state,
//       mobile,
//       gender,
//       speciality,
//       profilePic: profilePicUrl, // Set profile picture URL
//     });

//     // Save the new veterinarian to the database
//     await newVet.save();

//     // generating jwt token
//     const token = jwt.sign({ _id: newVet._id }, process.env.JWT_SECRET);

//     // sending token in headers
//     res.setHeader("Authorization", `Bearer ${token}`);

//     // Return success response if registration is successful
//     res.status(201).json({
//       message: "Veterinarian registered successfully",
//     });
//   } catch (error) {
//     // Handle registration error
//     console.error("Error registering vet:", error.message);
//     res.status(500).json({ message: error.message });
//   }
// };
