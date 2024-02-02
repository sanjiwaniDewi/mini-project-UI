const data = [
    {
        id: "uuid1",
        type: "Korean Bowls",
        name: "Korean bibimbab",
        price: 25000,
        purches: 145,
        img: "../asset/images/menu/korea/63d20fac11f7cf217c8b9482343aa610.jpg",
        ingrediance: [
            "onion",
            "gochujang pase",
            "beef",
            "rice",
            "garlic",
            "ginger",
        ],
        description:
            "deep fried beef with onion and gocujang pase and rice with aromatic ginger",
    },
    {
        id: "uuid2",
        type: "Korean Bowls",
        name: "Premium korean bibimbab",
        price: 25000,
        purches: 145,
        img: "../asset/images/menu/korea/63d20fac11f7cf217c8b9482343aa610.jpg",
        ingrediance: [
            "onion",
            "gochujang pase",
            "beef",
            "rice",
            "garlic",
            "ginger",
        ],
        description:
            "deep fried beef with onion and gocujang pase and rice with aromatic ginger",
    },
    {
        id: "uuid3",
        type: "Korean Bowls",
        name: "Korean Salmon Gochujang",
        price: 25000,
        purches: 145,
        img: "../asset/images/menu/korea/63d20fac11f7cf217c8b9482343aa610.jpg",
        ingrediance: [
            "onion",
            "gochujang pase",
            "beef",
            "rice",
            "garlic",
            "ginger",
        ],
        description:
            "deep fried beef with onion and gocujang pase and rice with aromatic ginger",
    },
    {
        id: "uuid4",
        type: "Japanese Bowls",
        name: "Curry Bowls",
        price: 25000,
        purches: 145,
        img: "../asset/images/menu/japan/japanese.jpeg",
        ingrediance: [
            "onion",
            "gochujang pase",
            "beef",
            "rice",
            "garlic",
            "ginger",
        ],
        description:
            "deep fried beef with onion and gocujang pase and rice with aromatic ginger",
    },
    {
        id: "uuid5",
        type: "Japanese Bowls",
        name: "Salmon Mentai Bowls",
        price: 25000,
        purches: 145,
        img: "../asset/images/menu/japan/6df188d8033561c02b106b5dfcbb7610.jpg",
        ingrediance: [
            "onion",
            "gochujang pase",
            "beef",
            "rice",
            "garlic",
            "ginger",
        ],
        description:
            "deep fried beef with onion and gocujang pase and rice with aromatic ginger",
    },

    {
        id: "uuid6",
        type: "Sushi",
        name: "Salmon Mentai Bowls",
        price: 25000,
        purches: 145,
        img: "../asset/images/menu/japan/6df188d8033561c02b106b5dfcbb7610.jpg",
        ingrediance: [
            "onion",
            "gochujang pase",
            "beef",
            "rice",
            "garlic",
            "ginger",
        ],
        description:
            "deep fried beef with onion and gocujang pase and rice with aromatic ginger",
    },
];

function removeSpace(char) {
    return char
        .split("")
        .filter((a) => a !== " ")
        .join("");
}

const addTitleMenu = (type) => {
    return `
        <div class="mt-4 pt-3">
        <h3 class="fs-3 fw-bold">${type}</h3>
        <div class="mt-1">
          <div class="row mt-3 row-cols-auto gx-3 gy-1" id=${removeSpace(type)}>

          </div>
        </div>
      </div>
  `;
};

const catMenu = document.getElementById("optionMenu");

const types = [...new Set(data.map((a) => a.type))];

types.forEach((element) => {
    catMenu.innerHTML += addTitleMenu(element);
});

function convertPrice(price) {
    let newprice = price.toString().split("").reverse().join("");
    let result = "";
    for (let index = 1; index <= newprice.length; index++) {
        if (index % 3 == 0 && index !== newprice.length) {
            result += newprice[index - 1] + ".";
        } else {
            result += newprice[index - 1];
        }
    }
    return result.split("").reverse().join("");
}

const addModal = (id) => {
    return `
    <div class="modal fade" id=${id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
         <div class="modal-header border-0 position-absolute w-100" >
            <button type="button" class="btn-close align-self-end z-1" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body p-0 position-relative">
            <img class ="object-fit-cover w-100" src=${data
                .filter((a) => a.id === id)
                .map((a) => a.img)
                .join("")} height= "380px">
             
            <h5 class="px-3 pt-3">${data
                .filter((a) => a.id === id)
                .map((a) => a.name)
                .join("")}</h5>
                
            <p class="px-3 pt-1 m-0"><Strong>Ingresiances: </Strong>  ${data
                .filter((a) => a.id === id)
                .map((a) => a.ingrediance)
                .join("")
                .split(",")
                .join(", ")}</p>
            <p class="px-3 pt-1"><strong>Description: </strong> ${data
                .filter((a) => a.id === id)
                .map((a) => a.description)} </p>   

         </div>
         <div class="modal-footer border-0">
          <button type="button" class="border-0 rounded-2 fw-bold">Add to Basket</button>
         </div>
        </div>
     </div>
    </div>
    `;
};

const modals = document.querySelector("#modal");

function findId(id) {
    modals.innerHTML = addModal(id);
}

const addMenu = (img, price, name, id) => {
    return `             
    <div class="col" >
      <button class="btn border-0 p-0" data-bs-toggle="modal" data-bs-target="#${id}" onClick=findId("${id}")>
      <div class="card rounded-0 mb-2" style="width: 15rem;">
        <div class="position-relative rounded-0">
          <img
            src=${img}
            class="card-img-top rounded-0 object-fit-cover" alt="..." height="298px"
                      width="238px">
        </div>
        <div
          class="position-absolute w-100 d-flex align-items-top">
            <div class="card-body py-2">
              <p
                class="card-text text-center fw-bold text-light fs-5 py-0 px-0 my-0">Rp${convertPrice(
                    price
                )}</p>
            </div>
        </div>
        <div
          class="position-absolute accordion w-100 h-100 d-flex align-items-end">
            <div class="card-body py-0 d-flex justify-content-center align-items-center" style="height:80px">
              <p
                class="card-text text-center fw-bold text-light fs-5">${name}</p>
            </div>
        </div>
      </div>
    </button>        
    </div>   
    `;
};

data.forEach((element) => {
    const category = document.getElementById(removeSpace(element.type));
    category.innerHTML += addMenu(
        element.img,
        element.price,
        element.name,
        element.id
    );
});
