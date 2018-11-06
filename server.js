const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("client/public"));

app.get('/', function (req, res) {
  res.send("Hello World");
});

const userRoutes = require("./routes/users.js");
app.use(userRoutes);

const authRoutes = require("./routes/auth.js");
app.use(authRoutes);

const ticketsRoutes = require("./routes/tickets.js");
app.use(ticketsRoutes);

mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/Overseer");

app.listen(PORT, function(){
  console.log(`Connected on PORT ${PORT}.`);
});