M.AutoInit();

window.onscroll = function() { scroll()};

let navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop;


function scroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky")
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
