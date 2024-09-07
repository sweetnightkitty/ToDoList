import "./styles.css";
import { openModal } from "./modal-dom";
import { closeModal } from "./modal-dom";
import { resetForm } from "./modal-dom";
import { taskManager } from "./task-manager";
import { displayProjects } from "./projects-dom";
import { displayTasks } from "./tasks-dom";




//Manages all to do list functionality
export const manage = taskManager();


//ADD NEW buttons
const addProjectBtn = document.querySelector(".btn-add-project");
const addTaskBtn = document.querySelector(".btn-add-task");

//SUBMIT FORM BTNS
const projectSubmitBtn = document.querySelector(".btn-submit-modal-project");
const taskSubmitBtn = document.querySelector(".btn-submit-modal-task");

//EXIT MODAL
const closeModalBtns = document.querySelectorAll(".btn-close");

//LOADS DEFAULT PROJECTS on page load
window.addEventListener("load", () => {
    displayProjects(manage.getProjects);
    displayTasks(manage.getCurrentProject());
});


//Opens new project modal/form
addProjectBtn.addEventListener("click", () => {
    const modal = document.querySelector(".modal-project");
    openModal(modal);
});

//Opens new task modal/form
addTaskBtn.addEventListener("click", () => {
    const modal = document.querySelector(".modal-task");
    openModal(modal);
});

//Submits new project
projectSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    updateProjects(manage);
    displayProjects(manage.getProjects);
    closeModal();
    resetForm();
});

//Submits new to do task
taskSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    updateTasks(manage);
    displayTasks(manage.getCurrentProject());
    closeModal();
    resetForm();

});


closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        closeModal();
        resetForm();
    });
});


function updateTasks() {
    const newTask = manage.createTask();
    const currentProject = manage.getCurrentProject();
    manage.addTaskToProject(newTask, currentProject);
};

function updateProjects() {
    manage.createProject();
};
