import express from "express";
import authRoutes from "./routes/authRoutes.js";
import connnectToMongoDb from "./db/mongoDbConnect.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = 5000;

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connnectToMongoDb();
  console.log(`Connected on port ${PORT}`);
});
