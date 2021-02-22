var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

// boardMemebers Schema

const boardMembers = new mongoose.Schema({
  boardMembers: Array,
  communications: Array,
  humanResources: Array,
  mentors: Array,
  developmentTeam: Array,
  volunteers: Array
}, { collection: 'boardMembers' })

// Mongoose model for boardMembers
const Members = mongoose.model("boardMember", boardMembers)

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/loadMembers', (req, res) => {
  Members.find({}, { 'boardMembers': 1 }, (err, members) => {
    if (!err) {
      res.send(members)
    } else {
      console.log(err)
    }
  })
})

module.exports = router;
