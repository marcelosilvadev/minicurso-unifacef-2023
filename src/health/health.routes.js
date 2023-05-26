let router = require("express").Router();

router.get("/", function (req, res) {
  res.send({
    status: "UP"
  });
});

module.exports = router;
