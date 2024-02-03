const router = require("express").Router();
const { SelectedNgo } = require("../db/db");

router.post("/select-ngos", async (req, res) => {
  try {
    const { companyName, selectedNgos } = req.body;

    let existingEntry = await SelectedNgo.findOne({ companyName });

    if (!existingEntry) {
      existingEntry = new SelectedNgo({
        companyName,
        selectedNgos,
      });
    } else {
      existingEntry.selectedNgos =
        existingEntry.selectedNgos.concat(selectedNgos);
    }
    const savedSelectedNgo = await existingEntry.save();

    res.json(savedSelectedNgo);
  } catch (error) {
    res.status(500).json({ error: "Error processing selected NGOs" });
  }
});

router.get("/ngo/:companyName", async (req, res) => {
  try {
    const companyName = req.params.companyName;
    console.log(companyName);
    const selectedNgoEntry = await SelectedNgo.findOne({ companyName });

    if (!selectedNgoEntry) {
      return res
        .status(404)
        .json({ error: "Selected NGOs not found for the company" });
    }

    res.json({ selectedNgos: selectedNgoEntry.selectedNgos });
  } catch (error) {
    console.error("Error while sending list of NGOs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
