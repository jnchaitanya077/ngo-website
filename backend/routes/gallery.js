var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
    res.send("gallery route")
})
router.get('/:albumId', function (req, res, next) {
    res.send(`response recived for album id:${req.params.albumId}`)
})


module.exports = router;
