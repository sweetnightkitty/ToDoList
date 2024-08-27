import "./styles.css";
import { openModal } from "./dom";
import { closeModal } from "./dom";
import { resetForm } from "./dom";
import { createProject } from "./tasks";

//Main Buttons
const addProjectBtn = document.querySelector(".btn-add-project");
const addTaskBtn = document.querySelector(".btn-add-task");

//Modal Buttons
const projectModalBtn = document.querySelector(".btn-submit-modal-project");
const taskModalBtn = document.querySelector(".btn-submit-modal-task");
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

projectModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createProject();
    //update left column?
    closeModal();
    resetForm();
    
});

taskModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //stuff
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