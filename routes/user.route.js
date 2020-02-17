const express = require('express');
const router = express.Router();

var user = require("../models/user.model");
/*create productp*/
router.post('/signup', async function (req, res) {
  var params = new user(req.body);
  var exitUser = await user.findOne({ email: req.body.email});
  if(exitUser) {
    return res.json({ msg: 'User is already exit.' });
  }
  params.save(function (err) {
    if (err) {
      return res.json({ success: err, msg: 'User Signup failed.' });
    }
    res.json({ success: true, msg: params });
  });
  return await params;
});

module.exports = router;
