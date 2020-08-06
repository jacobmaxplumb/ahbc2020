const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const foodRoutes = require("./routes/food.js");
const aboutRoutes = require("./routes/aboutMe");
app.use("/", foodRoutes);
app.use("/", aboutRoutes);

const port = 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
