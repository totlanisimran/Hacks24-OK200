const router = require("express").Router();
const { NGO } = require("../db/db");

router.post("/NgoProfile", async (req, res) => {
  try {
    const newNGOProfile = new NGO(req.body);
    const savedProfile = await newNGOProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    console.error("Error saving company profile:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/NgoProfile/:NgoId", async (req, res) => {
  try {
    const NgoId = req.params.NgoId;
    const updatedProfile = await NGO.findByIdAndUpdate(NgoId, req.body, {
      new: true,
    });

    if (!updatedProfile) {
      return res.status(404).json({ error: "Company profile not found" });
    }

    res.status(200).json(updatedProfile);
  } catch (error) {
    console.error("Error updating company profile:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
