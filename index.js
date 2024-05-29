const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const apiData = require("./data.json");

app.get("/saleorders", (req, res) => {
  res.send(apiData);
});


app.listen(port,()=> {
    console.log(" i am live ");
})