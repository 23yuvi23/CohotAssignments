function addTodo() {
    const value = document.querySelector("input").value;
    if(!value) return;
    const spanel = document.createElement("span")
    const buttonel = document.createElement("button")
    spanel.innerHTML = value;
    buttonel.innerHTML="Delete"
    //////
    const divEL = document.createElement("div")
    
    divEL.appendChild(spanel);
    divEL.appendChild(buttonel);
    /////
    document.querySelector("body").appendChild(divEL);
    // value = ""
}

 