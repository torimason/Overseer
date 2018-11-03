    const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/login", function(req, res){
    db.User.findOne({username:req.body.username},function(error, user){
            if(error){
                res.send(error)
            }
            res.json(response)
    })
})

router.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create(req.body, function (error, response) {
        if (error) {
            console.log(error);
            res.send(error)
        }
        else {
            res.json(response);
        }
    });
});

module.exports = router;