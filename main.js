"use strict"

// Require all packages and files
const express = require('express');
const layouts = require("express-ejs-layouts");
const router = require("./routes/router");


const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static("public"));


//request page through router
app.use('/', router);

//listen the port 
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
