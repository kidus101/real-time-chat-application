import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Messages",
        required: true,
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Converstaion = mongoose.model("Conversation", conversationSchema);

export default Converstaion;
