const express = require("express");
const app = express();
const ejs = require("ejs");

app.set('view engine', "ejs");

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index")
});
app.get("/about", (req, res) => {
  res.render("about")
});
app.get("/addpost", (req, res) => {
  res.render("add_post")
});
app.get("/post", (req, res) => {
  res.render("post")
});


const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
