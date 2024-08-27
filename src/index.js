import "./styles.css";
import { openModal } from "./dom";
import { closeModal } from "./dom";
import { resetForm } from "./dom";
import { taskManager } from "./tasks";

const manage = taskManager();

//Main Buttons
const addProjectBtn = document.querySelector(".btn-add-project");
const addTaskBtn = document.querySelector(".btn-add-task");

//Modal Buttons
const projectSubmitBtn = document.querySelector(".btn-submit-modal-project");
const taskSubmitBtn = document.querySelector(".btn-submit-modal-task");
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

projectSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    manage.createProject();
    //update left column
    closeModal();
    resetForm();
    
});

taskSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const newTask = manage.createTask();
    const currentProject = manage.getCurrentProject();
    manage.addTaskToProject(newTask, currentProject);
    closeModal();
    resetForm();
    console.log(manage.getProjects());

});


closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        closeModal();
        resetForm();
    });
});










//Examples:

const projectsContainer = document.querySelector(".container-left");
const tasksContainer = document.querySelector(".container-right");

//Example projects
// const projects = [
//     {
//         name: "default",
//         tasks: [],
//     },

//     {
//         name: "languages",
//         tasks: [],
//     },
// ];

// projects[0].tasks.push("make this work");
// projects[1].tasks.push("review japanese");

// console.log(projects[0]);
// console.log(projects[1]);