require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const fetchRandomEquipment = require("./wip-fetch/item_dd.js");

const itemRoutes = require("./routes/productsRoutes");

const app = express();
const port = 3000;
app.use(morgan("dev"));
app.use(cors());

/* if (process.env.NODE_ENV === "production") {
  //*Set static folder up in production
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} */

app.use("/api", itemRoutes);

//fetchRandomEquipment().then(console.log);

app.listen(port, () => {
  console.log(`server running`);
});
