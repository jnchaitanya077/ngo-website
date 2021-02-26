var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

// Gallery Scehmea
const gallery = new mongoose.Schema({
    albumId: Number,
    eventTitle: String,
    overlayText: String,
    thumbnail: String,
    photos: Array
})

const Albums = mongoose.model("album", gallery)
/* GET users listing. */
router.get("/", function (req, res) {
    Albums.find({}, function (err, response) {
        if (!err) {
            res.send(response)
        }
        else {
            console.log(err);
        }
    })
})
router.get('/:albumId', function (req, res, next) {
    const albumId = req.params.albumId
    console.log(albumId)
    Albums.findOne({ albumId: albumId }, (err, result) => {
        if (!err) {
            res.send(result)
        } else {
            console.log(err)
        }
    })
})


module.exports = router;
