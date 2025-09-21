// import express from "express";
// import { donate, getMyDonations, getCampaignDonations } from "../controllers/donationController.js";
// import { protect } from "../middleware/authMiddleware.js";

// const router = express.Router();

// // Donor: make a donation
// router.post("/", protect, donate);

// // Donor: see their own donations
// router.get("/my", protect, getMyDonations);

// // NGO: see donations for their campaign
// router.get("/campaign/:id", protect, getCampaignDonations);

// export default router;


import express from "express";
import { createDonation, getMyDonations, getCampaignDonations } from "../controllers/donationController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a donation (Donor only)
router.post("/", protect, createDonation);

// Get my donations (Donor)
router.get("/my", protect, getMyDonations);

// Get donations for a campaign (NGO)
router.get("/campaign/:campaignId", protect, getCampaignDonations);

export default router;
