
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
let getAdmins = (req,res)=>{
    res.json([{
        id:101,
        admi_name:"raki",
        role:"db_head"
    },{
        id:102,
        admi_name:"hari",
        role:"db_l1"
    },{
        id:103,
        admi_name:"viswa",
        role:"tester"
    },{
        id:104,
        admi_name:"harsha",
        role:"lead_executer"
    }])
};
module.exports = {getWelcome,getUsers,getAdmins}