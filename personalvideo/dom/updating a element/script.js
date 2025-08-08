 // so here we fetched the h1 element and just updated it 
 // with the stopwatch like element with setInterval
 
 let ctr=0
 function callback (){
    document.querySelectorAll("h4")[0].innerHTML = ctr
    ctr = ctr + 1 
 }

 let b = setInterval(callback,1000)
