let inp=document.querySelector("input")

console.log(inp)

function abc(){
    inp.style.border="1px solid skyblue";
}
// dashboard side bar script
let sidebarr = document.querySelector(".sidebar")
console.log(sidebarr)
let toggle = document.querySelector(".btn-menu-close")
console.log(toggle)
let togglerbutton = document.getElementById("toggler-button")
console.log(togglerbutton)
let icon = toggle.firstElementChild
console.log(icon)
toggle.addEventListener("click", back = () => {
    console.log("ooo pai")
    sidebarr.style.marginLeft = "-100%";
    sidebarr.style.transition = "all .1s ease-in .1s";
    toggle.style.display = "none";
})
togglerbutton.addEventListener("click", forward = () => {
    console.log("ooo pai")
    sidebarr.style.marginLeft = "0px";
    sidebarr.style.transition = "all .1s ease-in .1s";
    toggle.style.display = "block ";
    icon.style.marginLeft = "17px";
    icon.style.marginTop = "15px";
})

// event script
let new_event=document.getElementById("new-event")
let notice_board=document.getElementById("notice-board")
let newitems=document.querySelector(".newitems")
let newevents=document.querySelector(".newevents")
console.log(new_event,notice_board,newitems,newevents)

new_event.addEventListener("click",function(){
    newevents.classList.remove("block")
notice_board.classList.remove("borderr")
    newitems.style.display="block"
    new_event.style.borderBottom="5px solid rgb(32, 32, 136)"
})
notice_board.addEventListener("click",function(){
    newevents.classList.add("block")
notice_board.classList.add("borderr")
    newitems.style.display="none"
    new_event.style.border="none"

})