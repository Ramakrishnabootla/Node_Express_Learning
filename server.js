let app = require("./app.js")

app.listen(3030,"localhost",(err)=>{
    if(err){
        console.log("❌server cannot run due to below issue ❌");
        console.log(err);
                
    }else{
        console.log("✅ server is running succesfully ✅");
   
    }
});