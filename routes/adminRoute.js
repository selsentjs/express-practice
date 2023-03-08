const express = require('express');

const router = express.Router();
const path = require('path')

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
     
  });
  
  router.post("/store-product", (req, res, next) => {
    console.log("form-data:", req.body);
    res.status(200).json(req.body);
  });



module.exports = router;