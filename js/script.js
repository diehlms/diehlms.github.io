M.AutoInit();

var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
});

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
