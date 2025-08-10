    function dark(){
        document.body.classList.toggle("dark-mode");
    }
    let ctr = 0 ;
    function del(index){
        console.log("delete is pressed ");
        const element = document.getElementById(index)
        element.parentNode.removeChild(element)

        
    }

    function add(){
        const inp = document.querySelector("input")
        const val = inp.value
        if(!val) return
        // console.log(val);

        var div = document.createElement("div")
        div.setAttribute("id",ctr)
        document.querySelector("body").appendChild(div)
        div.innerHTML = `${val} <button onclick = "del(${ctr})"> delete </button>`
        ctr= ctr+1
        inp.value=""
    }