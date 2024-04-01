import express from "express";
import authRoutes from "./routes/authRoutes.js";
import messageRoute from "./routes/messageRoute.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import connnectToMongoDb from "./db/mongoDbConnect.js";
import dotenv from "dotenv";
import protectRoute from "./middleware/protectRoute.js";
import cors from "cors";

dotenv.config();
const PORT = 5000; 

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/message", protectRoute, messageRoute);
app.use("/api/users", protectRoute, userRoutes);

app.listen(PORT, () => {
  connnectToMongoDb();
  console.log(`Connected on port ${PORT}`);
});
