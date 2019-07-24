M.AutoInit();

window.onscroll = function() { scroll()};


let navbar = document.getElementById("navbar");
let title = document.getElementById("navbar-lead");

let sticky = navbar.offsetTop;


function scroll() {
    if (window.pageYOffset >= sticky) {
        title.style.display = "block";
        title.style.fontFamily = "Rubik Mono One, sans-serif"
        title.style.fontSize = "10px"
        navbar.classList.add("sticky");
    } else {
        title.style.display = "none";
        navbar.classList.remove("sticky");
    }
}

// window.onscroll = function() { titleScroll()};

// let title = document.getElementById("title");

// let titleSticky = title.offsetTop;

// function titleScroll() {
//     if (window.pageYOffset >= titleSticky && window.pageYOffset > sticky) {
//         title.classList.add("sticky");
//     } else {
//         title.classList.remove("sticky");
//     }
// }
