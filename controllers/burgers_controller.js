var express = require ("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var handleBarObject = {
            burger: data
        };
        console.log(handleBarObject);
        res.render("index, handleBarObject");
    });
});

router.post("/api/burger", function(req,res) {
    burger.insertOne([
        "burgerName", "devoured"
    ], [
        req.body.burgerName, 0
    ], function(){
        res.redirect("/");
    });
});

router.put("/burger/:id", function(req, res){
    console.log("inside put route");
    var condition = "id = " + req.params.id;
  
    console.log("condition: "+ condition);
  
    burger.updateOne({
      devoured: true
    }, condition, function() {
      console.log("Done");
    });
  });

module.exports = router;