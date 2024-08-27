import "./styles.css";
import { openModal } from "./dom";
import { closeModal } from "./dom";

const addProjectBtn = document.querySelector(".btn-add-project");
const addTaskBtn = document.querySelector(".btn-add-task");
const closeModalBtns = document.querySelectorAll(".btn-close");

addProjectBtn.addEventListener("click", () => {
    //selects project modal
    const modal = document.querySelector(".modal-project");
    openModal(modal);
});

addTaskBtn.addEventListener("click", () => {
    //selects task modal
    const modal = document.querySelector(".modal-task");
    openModal(modal);
});

closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        closeModal();
    });
});










//Examples:

const projectsContainer = document.querySelector(".container-left");
const tasksContainer = document.querySelector(".container-right");

//Example projects
const projects = [
    {
        name: "default",
        tasks: [],
    },

    {
        name: "languages",
        tasks: [],
    },
];

projects[0].tasks.push("make this work");
projects[1].tasks.push("review japanese");

console.log(projects[0]);
console.log(projects[1]);