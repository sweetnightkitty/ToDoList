import "./styles.css";
import { openModal } from "./dom";
import { closeModal } from "./dom";
import { resetForm } from "./dom";
import { taskManager } from "./tasks";
import { displayProjects } from "./dom";
import { displayTasks } from "./dom";

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
});


//BUTTON EVENT LISTENERS
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
    const projects = manage.getProjects;
    displayProjects(projects); // Displays updated projects to the left column on UI
    closeModal();
    resetForm();
});

taskSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const newTask = manage.createTask();
    const currentProject = manage.getCurrentProject();
    manage.addTaskToProject(newTask, currentProject);
    displayTasks(currentProject);
    closeModal();
    resetForm();

});


closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        closeModal();
        resetForm();
    });
});



