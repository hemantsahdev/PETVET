const USERS = require("../../Models/user/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const loginController = async (req, res) => {
  // jis bhi way se user login krega..vo field hum isse assing kr denge . usernameOrEmail is just like another parameter . no actual operater in the name
  const { usernameOrEmail, password } = req.body;
  if (!usernameOrEmail || !password)
    return res
      .status(400)
      .json({ message: "All fields are required to be filled" });

  try {
    // find the username in the collection
    const petParent = await USERS.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });

    if (!petParent) res.status(400).json({ message: "Username/email not found" });

    // check the validty of the password
    const validPassword = await bcrypt.compare(password, petParent.password);
    if (!validPassword)
      return res.status(400).json({ message: "Invalid password" });

    // genrating the jwt and assigning to local.
    const payload = {
      _id: petParent._id,
    };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET_USER);

    // sending the tokens in the headers
    res.setHeader("Authorization", `Bearer${token}`);
    res.status(200).json({ message: "Logged in Successfull" });
  } catch (err) {
    console.log(err.message, "error logging in user");
    res
      .status(400)
      .json({ error: err.message, message: "error logging in user" });
  }
};


module.exports={loginController}