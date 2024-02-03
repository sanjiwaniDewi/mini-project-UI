const carousel = document.querySelectorAll(".carousels");

for (let i = 0; i < carousel.length; i++) {
    let isDragStart = false,
        prevPageX,
        prevScrollLeft;

    const dragStart = (e) => {
        // updatating global variables value on mouse down event
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = carousel[i].scrollLeft;
    };

    const dragging = (e) => {
        // scrolling images/carousel to left according to mouse pointer
        if (!isDragStart) return;
        e.preventDefault();
        positionDiff = e.pageX - prevPageX;
        carousel[i].scrollLeft = prevScrollLeft - positionDiff;
    };

    const dragStop = () => {
        isDragStart = false;
    };

    carousel[i].addEventListener("mousedown", dragStart);
    document.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
}
