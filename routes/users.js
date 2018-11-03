const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/user", function (req, res) {
    db.User.find({}, function (error, response) {
        if (error) {
            console.log(error);
            res.send(error);
        }
        else {
            res.json(response);
        }
    })
});

router.get("/api/user/:id", function (req, res) {
    db.User.findOne({ _id: req.params.id }, function (err, response) {
        if (error) {
            console.log(error);
            res.send(error);
        }
        res.json(response)
    })
});

router.put("/api/user/:id", function (req, res) {
    db.User.update({ _id: req.params.id }, req.body, function (error, response) {
        if (error) {
            console.log(error);
            res.send(error);
        }
        else {
            res.json(response);
        }
    })
});

router.delete("/api/user/:id", function (req, res) {
    db.User.remove({ _id: req.params.id }, function (error, response) {
        if (error) {
            console.log(error);
            res.send(error);
        }
        else {
            res.json(response);
        }
    })
});

module.exports = router;