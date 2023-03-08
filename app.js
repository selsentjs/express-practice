// middleware

const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const adminRouter = require("./routes/adminRoute");
const shopRouter = require("./routes/shopRoute");
const path = require('path')

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,'./views/pageNotFound.html'));
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
