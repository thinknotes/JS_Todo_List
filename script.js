
//Side Bar Code
const arrow = document.getElementById("arrow");
const sideBar = document.getElementById("side-bar");
const navItems = document.querySelectorAll(".nav-link");
const date = document.getElementById("date");

var isOpen = false;
//Date Code
var currentTime = new Date()
var month = currentTime.getMonth()
var day = currentTime.getDate()
var year = currentTime.getFullYear()
// document.write((month + 1) + "/" + day + "/" + year)
//Time Code
var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
if (minutes < 10) {
    minutes = "0" + minutes
}

// document.write(hours + ":" + minutes + " ")
// if (hours > 11) {
//     document.write("PM")
// } else {
//     document.write("AM")
// }

// ToDo List Code 
const addButton = document.getElementById("add-btn");
const taskerror = document.getElementById("erorr");
const countValve = document.getElementById("count-value");
let taskCount = 0;


const itemsContainer = document.getElementById("items-container");
const input = document.getElementById("input");
const app = document.getElementById("app");
const section = document.getElementById("section");

// const input = text.valve();

function addTask() {
    let taskName = input.value;
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.classList.add("item-p-styling");
    p.innerText = taskName;
    let finishButton = document.createElement("button");
    let deleteButton = document.createElement("button"); 
    let strikeButton = document.createElement("button");
    finishButton.classList.add("itembutton");
    deleteButton.classList.add("itembutton");
    strikeButton.classList.add("itembutton");
    finishButton.innerHTML = "<i class='fa-solid fa-flag-checkered'></i>"
    deleteButton.innerHTML = "<i class='fa-solid fa-trash'></i>"
    strikeButton.innerHTML = "<i class='fa-solid fa-strikethrough'></i>"
   
    div.appendChild(p);
    div.appendChild(finishButton);
    div.appendChild(deleteButton);
    div.appendChild(strikeButton);
    
    

    section.appendChild(div);

    itemsContainer.appendChild(div);




     
     app.appendChild(div);
     app.appendChild(p);

    function deleteTask() {
        div.remove();
    }

    deleteButton.addEventListener("click", deleteTask);

    function strikeTask() {
        p.classList.add("strike");
    }
     
    strikeButton.addEventListener("click", strikeTask);
}



// addTask();

addButton.addEventListener("click", addTask);


document.getElementById("add-btn").addEventListener("click", addTask);


// setInterval(() => {
//     let time = document.getElementById("current-time");
//     let d = new Date();
//     time.innerHTML = d.toLocaleTimeString();
//     // date.innerText = ` ${month + 1}  ${day}`;
//     date.innerHTML = formatDate(d);
// }, 1000)

//Side Bar Code

arrow.addEventListener("click", () => {
    if(isOpen){
        sideBar.classList.remove("close");
        isOpen = false;
    }
    else{
        sideBar.classList.add("close");
        isOpen = true;
    }

});

function formatDate(date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
}

//Consel Log

console.log(month + "/" + day + "/" + year)
console.log(currentTime + "/" + hours + "/" + minutes)
console.log(isOpen)



