const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/tickets", function (req, res) {
    res.json("Get Tickets")
});

router.post("/api/tickets", function (req, res) {
    res.json("Create Ticket");
});

router.put("/api/tickets/:id", function (req, res) {
   res.json("Update Ticket");
});

router.delete("/api/tickets/:id", function (req, res) {
  res.json("Delete Ticket");
});

module.exports = router;