import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateWebToken from "../util/generateToken.js";

export const signupController = async (req, res) => {
  try {
    const {
      fullName,
      username,
      password,
      confirmPassword,
      gender,
      profilePic,
    } = req.body;

    // 1. Check if the password and Confirm Password Match
    if (password != confirmPassword) {
      return res.status(400).send({ message: "The password doesn't match" });
    }

    //  Does the username already exist
    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.status(400).send({ message: "The username already exists" });
    }

    // Create a new User , Adding a new profile Picture based on the gender
    //  , hash the password and save it to the db

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // https://avatar-placeholder.iran.liara.run/

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender == "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      // Generating the JWT Token here
      generateWebToken(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const loginController = (req, res) => {
  res.send("login controller ");
};

export const logoutController = (req, res) => {
  res.send("logout controller ");
};
