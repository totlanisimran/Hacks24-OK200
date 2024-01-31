const router = require("express").Router();

const { CompanyProfile } = require("../db/db");

router.post("/companyProfile", async (req, res) => {
  console.log("Received request:", req.body);

  try {
    const newCompanyProfile = new CompanyProfile(req.body);
    const savedProfile = await newCompanyProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    console.error("Error saving company profile:", error);
    res.status(500).send("Internal Server Error");
  }
});

//
router.put("/companyProfile/:companyId", async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const updatedProfile = await CompanyProfile.findByIdAndUpdate(
      companyId,
      req.body,
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ error: "Company profile not found" });
    }

    res.status(200).json(updatedProfile);
  } catch (error) {
    console.error("Error updating company profile:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/", async (req, res) => {
  res.status(200).send("company page");
});
module.exports = router;
