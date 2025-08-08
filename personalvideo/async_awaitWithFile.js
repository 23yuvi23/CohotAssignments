

const fs = require ("fs")

function readfileAsync(){
    return new Promise(function(resolve,reject){
        fs.readFile("a.txt","utf-8", function(err,data){
            if (err){
                reject("file not found")
            } else {
            resolve (data)
            }
        })
    })
}

readfileAsync ()
. then(function(x){
    console.log("file has been read " + x);
    
}).catch(function(e){
    console.log("ERROR!!");
    
    console.log(e);
    
})