let express = require("express");
let userControllers = require("./controllers/userControllers");
let adminControllers = require("./controllers/adminContrllers");

let app = express();


app.get("/welcome", userControllers.getWelcome);


app.get("/users", userControllers.getUsers);
app.get("/admins", adminControllers.getAdmins);
    
    

module.exports = app;