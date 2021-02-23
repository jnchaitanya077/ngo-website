var express = require('express');
var router = express.Router();
var _ = require('lodash');
const mongoose = require('mongoose');


// boardMemebers Schema

const awards = new mongoose.Schema({
    category: {
        cashAwards: Array,
        scholarships: Array,
        medals: Array,
        certificates: Array,
    }
}, { collection: 'awards' })

// Mongoose model for boardMembers
const Awards = mongoose.model("award", awards)

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render('index', { title: 'Express' });
})

router.get('/:awardCategory', function (req, res, next) {
    let searchString = req.params.awardCategory
    searchString = _.camelCase(searchString)
    console.log(searchString)
    Awards.find({}, { 'category': 1 }, (err, foundData) => {
        if (!err) {
            res.send(foundData[0].category[searchString])
        } else {
            console.log(err)
        }
    })
});

module.exports = router;
