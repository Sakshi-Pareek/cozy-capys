// ----------------navbar----------------

let label = document.querySelector("#label")
let navbox = document.querySelector(".navbox")
let nav_bg = document.querySelector(".nav_bg")
label.addEventListener("click", function () {
    navbox.classList.toggle("right-0");
    nav_bg.classList.toggle("z_index_5");
})
function showNav() {
    document.body.classList.toggle('overflow-hidden')
    document.getElementById("label").classList.toggle("cross_icon");
}
// -----------preloader-----------------
setTimeout(() => {
    const box = document.getElementById("box");

    box.style.display = "none";

    window.scrollTo(0, 0);

    document.body.classList.remove("overflow-hidden");
}, 3000);
// -------------------aos-----------------------
AOS.init({
    duration: 1200,
    once: true,
}
);