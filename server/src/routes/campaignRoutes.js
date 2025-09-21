import express from "express";
import {
    createCampaign,
    getCampaigns,
    getCampaignById,
    updateCampaign,
    deleteCampaign
} from "../controllers/campaignController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public
router.get("/", getCampaigns);
router.get("/:id", getCampaignById);

// Protected (NGO only)
router.post("/", protect, createCampaign);
router.put("/:id", protect, updateCampaign);
router.delete("/:id", protect, deleteCampaign);

export default router;
