import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connnectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.mongodbURI);
    console.log("Successfully Connected To MongoDb")
  } catch (error) {
    console.log(error);
  }
};

export default connnectToMongoDb;
