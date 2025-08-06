setTimeout(()=>{
    console.log("hello i am non promisified version");
},1000)

// setTimeoutPromisified(1000)
// .then(()=>console.log("i am promisified version "))


function setTimeoutPromisified(duration){
    return new Promise (function (resolve){
        setTimeout(resolve,duration)
})
}

function callback(){
    console.log("hello i am from harkirat video");
}

setTimeoutPromisified(1000).then(callback)