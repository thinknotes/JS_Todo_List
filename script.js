
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
document.write((month + 1) + "/" + day + "/" + year)
//Time Code
var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
if (minutes < 10) {
    minutes = "0" + minutes
}

document.write(hours + ":" + minutes + " ")
if (hours > 11) {
    document.write("PM")
} else {
    document.write("AM")
}

// ToDo List Code 
const addButton = document.getElementById("#add-btn");
const newItemInput = document.getElementById(" wrapper input");
const taskContainer = document.createElement("#tasks");
const taskerror = document.getElementById("erorr");
const countValve = document.getElementById("count-value");
let taskCount = 0;

function addTask() {
    const taskInput = document.querySelector("input[type='text']");
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskContainer = document.getElementById("tasks");
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
     
    taskElement.querySelector(".delete-btn").addEventListener("click", () => {
        tasksContainer.removeChild(taskElement);
        updateTaskCount();
    });

    tasksContainer.appendChild(taskElement);
    taskInput.value = "";
    updateTaskCount();
    }     
}

function updateTaskCount() {
    const pendingTasks = document.querySelectorAll(".tasks").length;
    document.querySelector(".count-value").textContent = pendingTasks;

}

document.getElementById("add-btn").addEventListener("click", addTask);

document.querySelector("input[type='text']").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

setInterval(() => {
    let time = document.getElementById("current-time");
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
    // date.innerText = ` ${month + 1}  ${day}`;
    date.innerHTML = formatDate(d);
}, 1000)

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
console.log()


