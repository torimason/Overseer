const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/tickets", function (req, res) {
    db.Tickets.find({}, function (error, response) {
        if (error) {
            console.log(error);
            res.send(error);
        }
        else {
            res.json(response);
        }
    })
});

router.post("/api/tickets", function (req, res) {
    console.log(req.body);
    db.Tickets.create(req.body, function(error, response) {
        if(error) {
            console.log(error);
            res.send(error)
        }
        else{
            res.json(response);
        }
    })
});

router.put("/api/tickets/:id", function (req, res) {
   res.json("Update Ticket");
});

router.delete("/api/tickets/:id", function (req, res) {
  res.json("Delete Ticket");
});

module.exports = router;