function setTimeoutPromisified(duration){
    return new Promise (function (resolve){
        setTimeout(resolve,duration)
})
}

setTimeoutPromisified(1000).then(function(){
    console.log("hi after one second");

    setTimeoutPromisified(3000).then(function(){
        console.log("hello after 3 second");

        setTimeoutPromisified(5000).then(function(){
            console.log("hi after 5 second");
            
        })
    })
})

//method 2 = promise chaining 

setTimeoutPromisified(1000).then(function(){
    console.log("hi after 1 second");
    return setTimeoutPromisified(3000)
}).then(function(){
    console.log("hello after 3 second");
    return setTimeoutPromisified(5000)
}).then(function(){
    console.log("hi after 5 second");
})