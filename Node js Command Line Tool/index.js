#!/usr/bin/env node

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
    const allStats= Array(filenames.length).fill(null);
    

    for(let filename of filenames){
        const index=filenames.indexOf(filename);
        fs.lstat(filename,(err,stats)=>{
            if(err){
                console.log(err);
            }
            allStats[index]=stats;
            const ready =allStats.every((stats)=>{
                return stats;
            })
            if(ready){
                allStats.forEach((stats,index)=>{
                    console.log(filenames[index],stats.isFile());
                })
            }
        })
    }
});

