const express = require('express');
const router = express.Router();

var product = require("../models/product.model");

/*get all products*/
router.get('/getProducts', function (req, res) {
  product.find(function (err, products) {
    if (err) {
      return res.json({ success: err, msg: 'Getting Products failed.' });
    }
    res.json({ success: true, 'results': products });
    return products;
  });
}
);


/*create productp*/
router.post('/addProduct', async function (req, res) {
  var params = new product(req.body);
  params.save(function (err) {
    if (err) {
      console.log("error", err);
      return res.json({ success: err, msg: 'Adding failed.' });
    }
    res.json({ success: true, msg: params });
  });
  return await params;
});

/*update product*/
router.put('/update/:id', function (req, res) {
  product.findOneAndUpdate(req.params.id, {
    ...req.body
  }, function (err, product) {
    if (err) {
      return res.json({ success: false, msg: 'Updating failed.' });
    }
    res.json({ success: true, msg: product });
  });
  return product;
});

/*get product findOne*/
router.get('/getProduct/:id', function (req, res) {
  product.findById(req.params.id, function (err, product) {
    if(err) {
      return res.json({ success: false, msg: 'Getting failed.' });
    }
    res.json({success:true, msg:product})
  });
  return product;
});

/*delete product*/
router.delete('/delete/:id',function (req, res) {
  product.deleteOne({
      _id: req.params.id
  }, function (err) {
      if (err) return err;
      res.json({ success: true,msg:"Deleting Product Success" });
  });
  return product;
});

module.exports = router;
