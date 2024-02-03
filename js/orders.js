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

function deliveryModal() {
    return `
    <div class="modal fade" id="deliveryModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
         <div class="modal-header border-0 position-absolute w-100" >
            <button type="button" class="btn-close align-self-end z-1" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body position-relative">

         <div
            class=" d-flex flex-column justify-content-center align-items-center mt-4">
                <h4 class="m-0 fw-bolder py-0" id="title fs-1">Order</h4>
                <h6 class="ps-1 fs-6"  style="line-height:0.8">Dap<span
                    style="color:#820000">s</span></h6>
         </div>

         <div class="mt-3 mx-3 px-2">
            <div class="row gx-1">
                <div class="col-3"><p class="m-0">Nama</p></div>
                <div class="col"><p class="m-0">: Kenny Keys</p></div>

            </div>

            <div class="row gx-1">
                <div class="col-3"><p class="m-0">Alamat</p></div>
                <div class="col"><p class="m-0">: Jl. Waringin Timur No.34, BSD, Tangerang</p></div>

            </div>

            <div class="row gx-1">
                <div class="col-3"><p class="m-0">Detail Order</p></div>
                <div class="col"><p class="m-0">: </p></div>
            </div>
         </div>

    <div class="mt-4  rounded-1 mb-4 px-5 px-3">
      <div class="m-0 p-0">
        <div class="row mx-1 mb-2 pb-2">
          <div class="col text-start px-0 align-self-center">
            <p class="food m-0 p-0">Korean Bowls</p>
          </div>
          <div class="col text-end px-0 align-self-center">
            <p class="price m-0 p-0">Rp. 25.000</p>
          </div>
        </div>
        <div class="row mx-1 mb-2 pb-2">
          <div class="col text-start px-0 align-self-center">
            <p class="food m-0 p-0">Japanese Bowls</p>
          </div>
          <div class="col text-end px-0 align-self-center">
            <p class="price m-0 p-0">Rp. 25.000</p>
          </div>
        </div>
        <div class="row mx-1 mb-2 pb-2">
          <div class="col text-start px-0 align-self-center">
            <p class="food m-0 p-0">Sushi</p>
          </div>
          <div class="col text-end px-0 align-self-center">
            <p class="price m-0 p-0">Rp. 25.000</p>
          </div>
        </div>
      </div>
      <div
        class="border-top border-dark mt-3 px-1">
        <div class="row my-1">
          <div class="col text-start">
            <p class="m-0 p-0">Total Item</p>
          </div>
          <div class="col text-end">
            <p class="m-0 p-0">Rp. 75.000</p>
          </div>
        </div>

        <div class="row my-1">
          <div class="col text-start">
            <p class="m-0 p-0">Tax 10%</p>
          </div>
          <div class="col text-end">
            <p class="m-0 p-0">Rp. 7.500</p>
          </div>
        </div>

        <div class="row my-1">
          <div class="col text-start">
            <p class="m-0 p-0">Delivery Fee</p>
          </div>
          <div class="col text-end">
            <p class="m-0 p-0">Rp. 12.500</p>
          </div>
        </div>

        <div class="row my-1">
          <div class="col text-start d-flex align-self-center">
            <p class="m-0 p-0 align-self-center">Disc</p>
            <p class="mx-2 my-0 bg-dark p-1 rounded-2 text-light">
              EnD2023</p>
          </div>
          <div class="col text-end align-self-center">
            <p class="m-0 p-0 ">Rp. 12.500</p>
          </div>
        </div>

        <div class="row my-1">
          <div class="col text-start">
            <p class="m-0 p-0 fw-bold">Total</p>
          </div>
          <div class="col text-end">
            <p class="m-0 p-0 fw-bold">Rp. 12.500</p>
          </div>
        </div>

      </div>
    </div>

         <div class="modal-footer py-4 justify-content-center">
          <p class="text-start m-0 p-0">Detail Payment Mehod will send to your Email or WhatsApp</p>
         </div>
        </div>
     </div>
    </div>

    `;
}

const order = document.querySelector("#createOrder");

order.addEventListener("click", function () {
    const modal = document.getElementById("modal");
    modal.innerHTML = deliveryModal();
});
