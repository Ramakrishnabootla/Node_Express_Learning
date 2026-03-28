// app.js
let express = require("express");
// let studentController = require("./controllers/studentController")
let studentRouter = require("./routes/studentRoute");

let app = express();

// /students/all
app.use((req, res, next) => {
  req.startTime = Date.now();
  setTimeout(() => {
    next();
    console.log(132863);
    
  }, 2000);
  


  
});
app.use((req, res, next) => {
  
  setTimeout(() => {
		next();
    console.log(987654321);
    z
  }, 2000);
  // next();
  
});
app.use((req, res, next) => {
  setTimeout(() => {
		next();
    console.log("12");
  }, 2000);

  // next();
  
});
app.use("/student", studentRouter);

module.exports = app;
