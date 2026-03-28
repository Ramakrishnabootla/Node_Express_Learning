let express = require("express");
let userRouter = require("./routes/userRoutes");   // ← add this

let app = express();

app.use("/users", userRouter);    

module.exports = app;