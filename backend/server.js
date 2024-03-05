import express from "express";
import authRoutes from "./routes/authRoutes.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import connnectToMongoDb from "./db/mongoDbConnect.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoute);


app.listen(PORT, () => {
  connnectToMongoDb();
  console.log(`Connected on port ${PORT}`);
});
