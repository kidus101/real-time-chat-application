import express from "express";
import { sendMessage , getMessages } from "../controllers/messageController.js";

const router = express.Router();

router.post("/sender/:id", sendMessage );
router.get("/:id",getMessages)

export default router;