// initialize express
const express = require("express");
const app = express();

// express handlebars
const exphbs = require("express-handlebars");

// template engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// routing
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contacts", (req, res) => {
  res.render("contacts");
});

// server listen
app.listen(4000, () => {
  console.log("server is running");
});
