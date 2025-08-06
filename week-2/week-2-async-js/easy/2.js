let watch = 1
function print(){
    console.clear()
    console.log(watch);
    watch= watch+1;
    setTimeout(print,1000)

}
setTimeout(print, 1000)