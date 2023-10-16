// const body = document.querySelector("body"), 
//     sidebar = body.querySelector(".sidebar"), 
//     toggle = body.querySelector(".toggle");

//     toggle.addEventListener("click", () => {
//         sidebar.classList.toggle("close");
//     });

const arrow = document.getElementById("arrow");

arrow.addEventListener("click", (event) => {
    event.target.classList.add("fa-chevron-right")
});