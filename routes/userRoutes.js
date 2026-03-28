let express = require("express")
let router = express.Router();

let userControllers = require("./../controllers/userControllers");


router.get("/all",userControllers.getUsers);

router.get("/users", userControllers.get1user);



module.exports = router;