import jwt from "jsonwebtoken";

const generateWebToken = (user_id, res) => {
  // 1. Sign the jwt " Payload, secret key , options like  ExpiresDate"
  const token = jwt.sign({user_id}, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  });

  // 2. Setting the res.cookie with the token generated
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly:true,
    sameSite:"strict",
  });
};

export default generateWebToken; 