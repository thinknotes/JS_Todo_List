

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

console.log(month + "/" + day + "/" + year)
console.log(currentTime + "/" + hours + "/" + minutes)
