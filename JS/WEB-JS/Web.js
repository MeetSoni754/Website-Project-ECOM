// Simple scroll animation
const fadeElements = document.querySelectorAll('.fade-in');

function checkScroll() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

function clickme() {
    let element = document.querySelector(".divhide");
    let close = document.querySelector(".Hamburger");
    let open = document.querySelector(".close-1");

    close.style.display = "none"
    open.style.display = "block"
    element.style.display = "flex"
    let element2 = document.querySelector(".divhide");
    if (element2.style.display == "flex");
    element2.style.position = "fixed";
    element2.style.top = "70px";
    element2.style.left = "30%";

    //console.log(clc)

}

function clickmeone() {
    let element = document.querySelector(".divhide");
    let close = document.querySelector(".Hamburger");
    let open = document.querySelector(".close-1");
    close.style.display = "flex"
    open.style.display = "none"
    element.style.display = "none"
    element.style.position = "static";

    console.log(window.innerWidth)
}
function sizechange() {
    let element = document.querySelector(".divhide");
    let close = document.querySelector(".Hamburger");
    let open = document.querySelector(".close-1");
    if (window.innerWidth >= "768") {
        close.style.display = "none"
        open.style.display = "none"
        element.style.display = "none"

    }
    else {
        close.style.display = "flex"
        open.style.display = "none"
        element.style.display = "none"
        
    }


}

let ele = document.getElementById("Close-2");
console.log(ele)
ele.addEventListener("click", () => {

    window.history.back();

})

