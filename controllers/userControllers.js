
let getWelcome = (req, res) => {
    res.send("hi");
};
let getUsers = (req,res)=>{
    res.json([{
        roll: 1,
        name: "rama",
        department: "csm_a"
    },
    {
        roll: 2,
        name: "hari",
        department: "csm_a"
    },{
        roll: 3,
        name: "shiva",
        department: "csm_a"
    },{
        roll: 4,
        name: "karthi",
        department: "csm_a"
    },{
        roll: 5,
        name: "krishna",
        department: "csm_a"
    },{
        roll: 6,
        name: "manoj",
        department: "csm_a"
    }])
};

let get1user = (req,res) => {
    res.send("hello the user 1 is responding")
}
module.exports = {getWelcome,getUsers,get1user};