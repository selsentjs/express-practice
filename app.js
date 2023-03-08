// middleware

const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const adminRouter = require("./routes/adminRoute");
const shopRouter = require("./routes/shopRoute");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>404 not found</h1>");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
