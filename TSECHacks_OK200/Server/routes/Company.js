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
router.get("/getcompanyProfile/:companyName", async (req, res) => {
  const companyName = req.params.companyName;

  try {
    const companyProfile = await CompanyProfile.findOne({ name: companyName });

    if (!companyProfile) {
      return res.status(404).json({ error: "Company profile not found" });
    }

    res.status(200).json(companyProfile);
  } catch (error) {
    console.error("Error fetching company profile:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/companyProfile/:companyName", async (req, res) => {
  const companyName = req.params.companyName;
  console.log(companyName);
  try {
    const companyProfile = await CompanyProfile.findOne({ name: companyName });

    if (!companyProfile) {
      return res.status(404).json({ error: "Company profile not found" });
    }

    const companyLocationAndInterest = {
      selectedDistrict: companyProfile.selectedDistrict || "N/A",
      areasOfInterest: companyProfile.areasOfInterest || [],
    };

    res.json(companyLocationAndInterest);
  } catch (error) {
    console.error("Error fetching company profile:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.delete("/companyProfiles", async (req, res) => {
  try {
    const deletedProfiles = await CompanyProfile.deleteMany({});

    res
      .status(200)
      .json({ message: "All company profiles deleted", deletedProfiles });
  } catch (error) {
    console.error("Error deleting all company profiles:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/", async (req, res) => {
  res.status(200).send("company page");
});
module.exports = router;
