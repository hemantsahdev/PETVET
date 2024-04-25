const USERS = require("../../Models/user/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const APPOINTMENT = require("../../Models/appointment/appointment");
const { extractJwtToken } = require("../../Helpers/CommonHelper");

const loginController = async (req, res) => {
  // jis bhi way se user login krega..vo field hum isse assign kr denge . usernameOrEmail is just like another parameter . no actual operater in the name
  const { usernameOrEmail, password } = req.body;
  
  if (!usernameOrEmail || !password)
    return res
      .status(400)
      .json({ message: "All fields are required to be filled" });

  try {
    // find the username in the collection
    const user = await USERS.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });

    if (!user)
      res.status(400).json({ message: "user not found by provided credentials" });

    // check the validty of the password
    const validPassword = await bcrypt.compare(password, user.password);
    
    if (!validPassword)return res.status(400).json({ message: "Invalid password" });

    // genrating the jwt and assigning to local.
    const payload = {
      _id: user._id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    // sending the tokens in the headers
    // res.setHeader("Authorization", `Bearer${token}`);
    console.log(user.userRole);
    res
      .status(200)
      .json({
        message: "Logged in Successfull",
        token: token,
        userRole: user.userRole,
      });
  } catch (err) {
    console.log(err.message, "error logging in user");
    res
      .status(400)
      .json({ error: err.message, message: "error logging in user" });
  }
};



const userRoleController = async (req, res) => {
  
  const { jwtToken } = req.body;

  if (!jwtToken) {
    res.status(400).json({
      message: "auth token not received",
    });
  }
   const token= extractJwtToken(jwtToken);
  try{
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decodedToken._id;
  const user = await USERS.findById(userId);

  res.status(200).json({
    message:"User found",
    userRole:user.userRole
  })
  }
  catch(err){
    res.status(500).json({
      error:err.message,
      message:"not able to get userRole"
    })
  }

};




module.exports = { loginController, userRoleController };
