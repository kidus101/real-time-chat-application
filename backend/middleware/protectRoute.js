import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectedRoute = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    res.status(401).json({ error: "UNAUTHORIZED TOKEN NOT PROVIDED" });
  }

  const decodedToken = await jwt.verify(token, process.env.JWT_SECRET_KEY);

  if (!decodedToken) {
    res.status(401).json({
      error: "Unauthorized - Invalid Token",
    });
  }

  const user = await User.findById(decodedToken.user_id).select("-password");

  if (!user) {
    res.status(400).json({ error: "NO USER FOUND" });
  }

  req.user = user;

  next();
};

export default protectedRoute;
