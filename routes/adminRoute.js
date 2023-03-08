const express = require('express');

const router = express.Router();


router.get("/add-product", (req, res, next) => {
    res.send(
      '<h1>Add Product</h1><form action="/admin/store-product" method="POST"><input type="text" name="title" /><button>Submit</button></form>'
    );
  });
  
  router.post("/store-product", (req, res, next) => {
    console.log("form-data:", req.body);
    res.status(200).json(req.body);
  });



module.exports = router;