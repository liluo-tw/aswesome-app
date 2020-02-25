var express = require('express');
var router = express.Router();

/* GET member by id. */
router.get('/:memberId', function (req, res, next) {
  res
    .status(200)
    .send({
      name: "Name",
      id: "some id"
    });
});

module.exports = router;
