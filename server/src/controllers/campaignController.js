import Campaign from "../models/Campaign.js";

// Create new campaign
export const createCampaign = async (req, res) => {
    try {
        const { title, description, goalAmount, category } = req.body;

        const newCampaign = new Campaign({
            title,
            description,
            goalAmount,
            category,
            createdBy: req.user.id,
        });

        await newCampaign.save();
        res.status(201).json(newCampaign);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// Get all campaigns
export const getCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find().populate("createdBy", "name email");
        res.json(campaigns);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// Get single campaign
export const getCampaignById = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id).populate("createdBy", "name email");
        if (!campaign) return res.status(404).json({ message: "Campaign not found" });
        res.json(campaign);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// Update campaign
export const updateCampaign = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await Campaign.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Campaign not found" });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// Delete campaign
export const deleteCampaign = async (req, res) => {
    try {
        const { id } = req.params;
        const campaign = await Campaign.findByIdAndDelete(id);
        if (!campaign) return res.status(404).json({ message: "Campaign not found" });
        res.json({ message: "Campaign deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};
