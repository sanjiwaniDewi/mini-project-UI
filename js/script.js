// const branches = [
//     {
//         area: "Jakarta",
//         address: [
//             "Jl Pegangsaan timur No 48, Jakarta Selatan",
//             "Jl Melati indah mekar No 56, Tanjung Duren",
//             "Jl Budi pekerti luhur No 82,  Jakarta Utara",
//             "Jl Akar gandaria No 45, Jakarta Barat",
//         ],
//     },
//     {
//         area: "Bandung",
//         address: [
//             "Jl Dago pakar No 05, Dago",
//             "Jl A. Yani No 45, Asia Afrika",
//             "Jl Pelajar Pejuang No 54, Buah Batu",
//         ],
//     },
//     {
//         area: "Bogor",
//         address: [
//             "Jl Dayang Sumbi No 45, Cisarua",
//             "Jl Sultan Hasan No 54, Bogor",
//         ],
//     },
//     {
//         area: "Tangerang",
//         address: [
//             "Jl Hos Cokrominoto No 109",
//             "Jl BSD grand Boulevard no 45, BSD",
//             "Jl Letnan Sutopo 08, Tangerang Selatan",
//         ],
//     },
// ];
// const showBranches = document.getElementById("branch");

// for (let i = 1; i <= branches.length; i++) {
//     const col = document.createElement("div");
//     col.className = "col";
//     const contain = document.createElement("div");
//     if (i % 2 !== 0) {
//         contain.className = "d-flex flex-column justify-content-end px-3";
//     } else {
//         contain.className = "d-flex flex-column justify-content-start px-3";
//     }

//     const area = document.createElement("h4");
//     area.appendChild(document.createTextNode(branches[i - 1]["area"]));
//     contain.appendChild(area);
//     for (const adrs of branches[i - 1]["address"]) {
//         const address = document.createElement("p");
//         address.appendChild(document.createTextNode(adrs));
//         contain.appendChild(address);
//     }
//     col.appendChild(contain);

//     showBranches.appendChild(col);
// }
