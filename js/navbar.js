let navEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        navEl.classList.add("nav-scrolled");
    } else if (window.screenY <= 200) {
        navEl.classList.remove("nav-scrolled");
    }
});
