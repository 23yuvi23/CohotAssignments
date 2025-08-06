// setTimeout(()=>{
//     console.log("hello i am non promisified version");
// },1000)




// function setTimeoutPromisified(duration){
//     return new Promise (function (resolve){
//         setTimeout(resolve,duration)
// })
// }

// function callback(){
//     console.log("hello i am from harkirat video");
// }

// setTimeoutPromisified(1000).then(callback)


console.log("i am before the callback hell even begins ");

setTimeout(function(){                                                                  // all three inside this are asynchronous operations 
    console.log("hi after 1 second");
    setTimeout(function(){
        console.log("hello after 3 seconds")
        setTimeout(function(){
            console.log("hello hi after 5 seconds");
        },5000)
    },3000)
},1000)

console.log("i am outside the callback hell");                                            // this is the synchronous operations 


//now comes the question how to get rid of this call back hell the bad code that is written above usko aache way mai kese print kare 

