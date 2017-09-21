"use strict"

const express = require('express');  
const uuid = require('uuid');  
const os = require('os');
const randomword = uuid.v4();
let app = express();

let hostname = os.hostname();

app.get("/guid", (req, res) => {  
    res.json({ "guid": randomword, "container": hostname });
});

app.listen(9000, () => {  
    console.log("listening on port 9000");
});
