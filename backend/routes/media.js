var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');


// Media Schema
const media = new mongoose.Schema({
    category: {
        printMedia: {
            title: String,
            photos: Array
        },
        socialMedia: {
            title: String,
            photos: Array
        },
        electronicMedia: {
            title: String,
            photos: Array
        },
        videoInterviews: {
            title: String,
            photos: Array
        }


    }
}, { collection: 'media' })

// Model 
const Media = mongoose.model('media', media)

router.get("/:category", function (req, res) {
    const category = req.params.category
    console.log("request " + category)
    Media.findOne({}, { 'category': 1 }, (err, data) => {
        if (!err) {
            let result = data['category'][category]
            if (category == 'videoInterviews') {
                let videos = seperatePhotos(result.photos)
                res.send({ ...result, onlyPhotos: videos })
            } else {
                res.send(result)
            }

        } else {
            console.log(err)
        }
    })
})


function seperatePhotos(orginalPhotos) {
    let arr = []
    orginalPhotos.map((originalPhoto) =>
        arr.push(originalPhoto.image)
    )
    return arr
}

module.exports = router