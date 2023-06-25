#!/usr/bin/env node

const fs = require('fs');
//file system module in node

//methon #2
const util = require('util');
// const lstat = util.promisify(fs.lstat);

//methos #3
//fs promises Api
const {lstat} =fs.promises;
fs.readdir(process.cwd(),async (err,filenames)=>{
    //either
    //err===an error , which means something went ron 
    //or
    // err==null , which mean everything is ok
    if(err){
        console.log(err);
    }
    for(let filename of filenames){
        try{
        const stats = await lstat(filename);
        console.log(filename,stats.isFile());
        }catch(err){
            console.log(err);
        }
    }
    
});
 
//method #1
// const lstat = (filename)=>{
//     return new Promise((resolve,reject)=>{
//         fs.lstat(filename,(err,stats)=>{
//             if(err){
//                 reject (err);
//             }
//             resolve(stats);
//         })
//     })
// }