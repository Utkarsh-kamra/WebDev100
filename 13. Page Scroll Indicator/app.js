let indicator = document.querySelector(".scroll-indicator .progress");
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// Area which can be scrolled(Because In Begining, the visible window won't count. Only the scrollable Part)

window.addEventListener("scroll", scroll);

function scroll(){
    let scrollTop = document.documentElement.scrollTop; // Indicates area covered from Top
    let scrolled = (scrollTop/scrollHeight) *100 ;
    indicator.style.width = `${scrolled}%` ;
}