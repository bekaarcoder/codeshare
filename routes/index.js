var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "CodeShare - Share Code With Anyone" });
});

// Get about page
router.get("/about", function(req, res, next) {
  res.render("about", { title: "CodeShare - About" });
});

router.get("/contact", function(req, res, next) {
  res.render("contact", { title: "CodeShare - Contact" });
});

router.post("/contact", function(req, res, next) {
  res.render("thank", { title: "CodeShare - Share Code With Anyone" });
});

module.exports = router;
