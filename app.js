let express = require("express");
let userControllers = require("./controllers/userControllers");

let app = express();


app.get("/welcome", userControllers.getWelcome);


app.get("/users", userControllers.getUsers);
app.get("/admins", userControllers.getAdmins);
    
    

module.exports = app;