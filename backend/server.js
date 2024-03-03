import express from "express";
import authRoutes from "./routes/authRoutes.js";
import connnectToMongoDb from "./db/mongoDbConnect.js";

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT =  5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connnectToMongoDb();
  console.log(`Connected on port ${PORT}`);
});
