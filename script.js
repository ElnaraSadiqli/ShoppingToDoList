// Input
let inputName = document.querySelector(".input-name");
let inputCount = document.querySelector(".input-count");
let inputPrice = document.querySelector(".input-price");
let inputCode = document.querySelector(".input-code");
let trr = document.getElementsByTagName("tr");
// Button
let btn = document.querySelector("#btn-submit");

// Table
let table = document.querySelector(".table");
let ttbody = document.querySelector(".table-body");
let tr;
let data;
let bodyTable = [];


"use strict";
eventListeners();

function eventListeners() {

    btn.addEventListener("click", addNewItem);



}

function addNewItem(event) {

    bodyTable.push({

        "id": bodyTable.length + 1,
        "name": inputName.value,
        "count": inputCount.value,
        "price": inputPrice.value,
        "barcode": inputCode.value

    })

    creatItem();


    event.preventDefault();
};


function creatItem(event) {
  
    ttbody.innerHTML = "";


    for (data of bodyTable) {



     tr = `
        <th scope="row">${data.id}</th>
        <td>${data.name}</td>
        <td>${data.count}</td>
        <td>${data.price}</td>
        <td>${data.barcode}</td>
      
    <div class="dropdown">
     <a class="btn btn-slink dropdown-toggle btn-danger" style="color:black" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    ...
     </a>

     <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
     <li><a class="dropdown-item delete-btn" onclick="deleteTask()" href="#" >Delete</a></li>
     <li><a class="dropdown-item update-btn"  onclick='editTask()' href="#" >Update</a></li>
     </ul>
     </div>  `

     ttbody.insertAdjacentHTML("beforeend", tr)

     }


    event.preventDefault();
}


console.log(ttbody);

// error table artmir

// function eventListeners() {
//     btn.addEventListener("click", pushDataArray);

//     btn.addEventListener("keypress", function (event) {

//         if (event.key == "Enter") {
//             document.querySelector("#btn-submit").click();
//         }

//         event.preventDefault();
//     })
// }



// function addData(event) {

//     ttbody.innerHTML = "";


//     for (let data of bodyTable) {

//         tr = `
//     <th scope="row">${bodyTable.length }</th>
//     <td>${inputName.value}</td>
//     <td>${inputCount.value}</td>
//     <td>${inputPrice.value}</td>
//     <td>${inputCode.value}</td>
//     <div class="dropdown">
//      <a class="btn btn-slink dropdown-toggle btn-danger" style="color:black" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
//      ...
//      </a>

//     <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
//     <li><a class="dropdown-item delete-btn" onclick="deleteTask(${data.id})" href="#" >Delete</a></li>
//     <li><a class="dropdown-item update-btn"  onclick='editTask(${data.id},"${data.name}")' href="#" >Update</a></li>
//     </ul>
//     </div>`;

//         ttbody.insertAdjacentHTML("beforeend", tr);



//     }



//     event.preventDefault();
// }
// console.log(addData(e));

// function pushDataArray(event) {

//     if (inputName.value == "") {
//         alert("Insert text !!")
//     } else {

//         bodyTable.push({
//             "id": bodyTable.length + 1,
//             "name": inputName.value,
//             "code": inputCode.value,
//             "count": inputCount.value,
//             "price": inputPrice.value
//         });
//         bodyTable.id++;

//         addData();

//     }

//     event.preventDefault();


// }



// function deleteTask(iD) {

//     let deleteD;

//     deleteD = bodyTable.findIndex((item) => item.id == iD);


//     bodyTable.splice(deleteD, 1);

//     addData();
// }


// function editTask(ids) {
//     editId = ids;


// }