const fs = require('fs');
//file system module in node

fs.readdir(process.cwd(),(err,filenames)=>{
    //either
    //err===an error , which means something went ron 
    //or
    // err==null , which mean everything is ok
    if(err){
        console.log(err);
    }
    console.log(filenames);
});