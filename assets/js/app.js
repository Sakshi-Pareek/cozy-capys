// ----------------navbar----------------

let label = document.querySelector("#label")
let navbox = document.querySelector(".navbox")
label.addEventListener("click", function () {
    navbox.classList.toggle("right-0")
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