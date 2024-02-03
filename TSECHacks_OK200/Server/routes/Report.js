const router = require("express").Router();
const { Report } = require("../db/db");
const PDFDocument = require("pdfkit");
router.post("/reports", async (req, res) => {
  try {
    const { companyName, ngoName, allocatedMoney, expenditures } = req.body;

    // Create a new report instance
    const newReport = new Report({
      companyName,
      ngoName,
      allocatedMoney,
      expenditures,
    });

    // Save the report to the database
    const savedReport = await newReport.save();

    res.json(savedReport);
  } catch (error) {
    res.status(500).json({ error: "Error saving report" });
  }
});

// router.get("/reports/:companyName/:ngoName", async (req, res) => {
//   try {
//     const reports = await Report.find({
//       companyName: req.params.companyName,
//       ngoName: req.params.ngoName,
//     });

//     if (!reports || reports.length === 0) {
//       return res
//         .status(404)
//         .json({ error: "Reports not found for the company" });
//     }

//     // Create a PDF document
//     const doc = new PDFDocument();

//     // Set response headers
//     res.setHeader("Content-Type", "application/pdf");
//     res.setHeader("Content-Disposition", "attachment; filename=report.pdf");

//     reports.forEach((report) => {
//       // Pipe the PDF to the response
//       doc.pipe(res);

//       // Add content to the PDF
//       doc.text(Company Name: ${report.companyName});
//       doc.text(NGO Name: ${report.ngoName});
//       doc.text(Allocated Money: $${report.allocatedMoney});

//       doc.text("\nExpenditures:\n");
//       report.expenditures.forEach((expenditure) => {
//         doc.text(${expenditure.category}: $${expenditure.amount});
//       });

//       doc.text(
//         `\nTotal Expenditure: $${report.expenditures.reduce(
//           (total, exp) => total + exp.amount,
//           0
//         )}`
//       );

//       // Move to the next page for the next report
//       doc.addPage();
//     });

//     // End the PDF document
//     doc.end();
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

router.get("/reports/:companyName/:ngoName", async (req, res) => {
  try {
    const reports = await Report.find({
      companyName: req.params.companyName,
      ngoName: req.params.ngoName,
    });

    if (!reports || reports.length === 0) {
      return res
        .status(404)
        .json({ error: "Reports not found for the company" });
    }

    // Instead of generating a PDF, return the data as JSON
    const reportData = reports.map((report) => ({
      companyName: report.companyName,
      ngoName: report.ngoName,
      allocatedMoney: report.allocatedMoney,
      expenditures: report.expenditures || [], // Ensure expenditures is an array
      totalExpenditure: (report.expenditures || []).reduce(
        (total, exp) => total + exp.amount,
        0
      ),
    }));

    res.json(reportData); // Send the JSON response here
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
