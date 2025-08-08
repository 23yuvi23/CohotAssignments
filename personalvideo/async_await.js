//async await are just syntectic sugar under the hood they are also using promises and callbacks

function setTimeoutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve,duration)
    })
}

async function solve(){
    await setTimeoutPromisified(1000)
    console.log("hi");
    await setTimeoutPromisified(3000)
    console.log("hello");
    await setTimeoutPromisified(5000)
    console.log("hello ji");
}

//calling the above defined function
console.log("before");

solve()
console.log("after");
