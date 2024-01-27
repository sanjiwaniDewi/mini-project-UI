function handleNavDelivery() {
    let delivery = document.getElementById("delivery");
    let reservation = document.getElementById("reservation");

    let delLink = document.getElementById("delLink");
    let resLink = document.getElementById("resLink");

    if (resLink.className.includes("active")) {
        let name = resLink.className.replace("active", "");
        resLink.className = name;
    }
    if (!delLink.className.includes("active")) {
        delLink.className = delLink.className + " active";
    }
    if (delivery.style.display === "none") {
        delivery.style.display = "block";
    }
    if (reservation.style.display === "block") {
        reservation.style.display = "none";
    }
}

function handleNavReservation() {
    let reservation = document.getElementById("reservation");
    let delivery = document.getElementById("delivery");
    let delLink = document.getElementById("delLink");
    let resLink = document.getElementById("resLink");
    if (delLink.className.includes("active")) {
        let name = delLink.className.replace("active", "");
        delLink.className = name;
    }
    if (!resLink.className.includes("active")) {
        resLink.className = resLink.className + " active";
    }
    if (reservation.style.display === "none") {
        reservation.style.display = "block";
    }
    if (delivery.style.display === "block") {
        delivery.style.display = "none";
    }
}

let text = " this is word replace";

let text2 = text.replace("word", " ");
console.log(text2);
