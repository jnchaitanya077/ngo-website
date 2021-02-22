var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

// Schemes Schema
const schemes = new mongoose.Schema({
  id: Number,
  image: String,
  overlayText: String,
  tite: String,
  subTitle: String,
  fullDescription: Object,
  stats: Object
}, { collection: 'schemesInfo' })

// Mongoose Model
const Schemes = mongoose.model("schemesInfo", schemes)

/* GET users listing. */
router.get('/', function (req, res) {
  Schemes.find({}, (err, foudData) => {
    if (!err) {
      res.send(foudData)
    } else {
      console.log(err);
    }
  })
});



module.exports = router;
