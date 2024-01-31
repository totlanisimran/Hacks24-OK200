const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

db()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect" + error);
  });

const comp_route = require("./routes/Company");
const ngo_route = require("./routes/Ngo");
const chat_route = require("./routes/Chat");

app.use("/api/comp", comp_route);
app.use("/api/ngo", ngo_route);
app.use("/api/chat", chat_route);

app.get("/", (req, res) => {
  res.json("Hello hi ");
});
