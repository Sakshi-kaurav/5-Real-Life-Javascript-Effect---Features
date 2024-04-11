var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function(abc){
    crsr.style.left = abc.x+"px"
    crsr.style.top= abc.y+"px"

})
