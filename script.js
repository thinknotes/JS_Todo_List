
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
//Time Code
var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
if (minutes < 10) {
    minutes = "0" + minutes
}

// ToDo List Code 
const addButton = document.getElementById("add-btn");
const taskerror = document.getElementById("erorr");
const countValve = document.getElementById("countvalue");
var taskCount = 1;


const itemsContainer = document.getElementById("items-container");
const input = document.getElementById("input");
const app = document.getElementById("app");
const section = document.getElementById("section");




function addTask() {


    //Checks to see if input field is empty
    if (input.value === "") { 
        return;
    }
      

    //Creating elements that i will need for the do items
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
    // countValve.innerText = taskCount
   
    //Appending all elements to a to do item
    div.appendChild(p);
    div.appendChild(finishButton);
    div.appendChild(deleteButton);
    div.appendChild(strikeButton);
    
    

    //Adding to do item to the list
    section.appendChild(div);
    countValve.innerText = taskCount
    itemsContainer.appendChild(div);
     taskCount += 1
     console.log("DEBUG: Add Task Count" + taskCount)
     //Updates the task count for taskcount
     app.appendChild(div);
     app.appendChild(p);
     
    // Deletes to do item from the list
    function deleteTask() {
        div.remove();
        p.remove();
        taskCount -= 1;
        countValve.innerText = taskCount
        console.log("DEBUG: Delete Task Count"  +   taskCount)

        
    
    }
    // Makes the delete button work
    deleteButton.addEventListener("click", deleteTask);
    //Addes the a way to strike the text in the do item
    function strikeTask() {
        p.classList.add("strike");
    }
     
    //Make the strike button work
    strikeButton.addEventListener("click", strikeTask);
    
}

    //Makes the Add Task button work
    addButton.addEventListener("click", addTask);
    document.getElementById("add-btn").addEventListener("click", addTask); 

//Side Bar Code

//Allows the sidebar to be opened and closed
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
 // Format the current date in a smpified way 
function formatDate(date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
}

//Consel Log

console.log(month + "/" + day + "/" + year)
console.log(currentTime + "/" + hours + "/" + minutes)
console.log(isOpen)



