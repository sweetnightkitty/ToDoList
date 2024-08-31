import "./styles.css";
import { openModal } from "./modal-dom";
import { closeModal } from "./modal-dom";
import { resetForm } from "./modal-dom";
import { taskManager } from "./task-manager";
import { displayProjects } from "./projects-dom";
import { updateProjects } from "./projects";


const manage = taskManager();


//MAIN BUTTONS
const addProjectBtn = document.querySelector(".btn-add-project");
const addTaskBtn = document.querySelector(".btn-add-task");

//MODAL BUTTONS
const projectSubmitBtn = document.querySelector(".btn-submit-modal-project");
const taskSubmitBtn = document.querySelector(".btn-submit-modal-task");
const closeModalBtns = document.querySelectorAll(".btn-close");

//LOADS PROJECTS
window.addEventListener("load", () => {
    displayProjects(manage.getProjects);
    //display tasks on page
});


//Add new project
addProjectBtn.addEventListener("click", () => {
    //selects project modal
    const modal = document.querySelector(".modal-project");
    openModal(modal);
});

//Add new to do item (task)
addTaskBtn.addEventListener("click", () => {
    //selects task modal
    const modal = document.querySelector(".modal-task");
    openModal(modal);
});


projectSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    updateProjects(manage);
    closeModal();
    resetForm();
});

taskSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    closeModal();
    resetForm();

});


closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        closeModal();
        resetForm();
    });
});



