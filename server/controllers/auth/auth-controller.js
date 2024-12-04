const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
//register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    //hash the password
    const hashPassword = await brcypt.hash(password, 12);

    // create new user
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });

    //save new user in database

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error registering. Some error occurred",
    });
  }
};

//login

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error loggin in. Some error occurred",
    });
  }
};

//logout

//auth middleware

module.exports = { registerUser };
