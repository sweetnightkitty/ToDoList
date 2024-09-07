import { manage } from "./index";

const tasksContainer = document.querySelector(".container-right");
let taskId = 1;

//Currently logs task.title but we can make this more detailed for UI
export function displayTasks(currentProject) {

    const array = currentProject.tasks;
    for(let i = 0; i < array.length; i++) {
        const task = array[i];
        const card = createCard(task);
        tasksContainer.appendChild(card);
    };

    //Creates event listener for deleteBtns after they're created
    const taskDeleteBtns = document.querySelectorAll(".btn-task-delete");
    taskDeleteBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            manage.deleteTask(btn.dataset.index);
            clearTasksContainer();
            displayTasks(manage.getCurrentProject());
        })
    })

    //Creates event listener for radios after they're created
    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((box) => {
        box.addEventListener("click", () => {
            manage.deleteTask(box.dataset.index);
            clearTasksContainer();
            displayTasks(manage.getCurrentProject());
        })
    })
};


export function clearTasksContainer() {
    tasksContainer.innerHTML = "";
};

function createCard(task) {

    //makes card div
    const card = document.createElement("div");
    card.classList.add("card");

    const radio = createRadio();
    const title = createDiv(task.title);
    const description = createDiv(task.description);
    const date = createDiv(task.date);
    const priority = createDiv(task.priority);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn-task-delete"); 
    deleteBtn.textContent = "Delete";

    //gets the index value of that task
    const currentProject = manage.getCurrentProject();
    const index = currentProject.tasks.indexOf(task);
    
    //When deleteBtn or radio box is checked the index value can target the task to remove
    deleteBtn.dataset.index = index;
    radio.dataset.index = index;

    card.appendChild(radio);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(date);
    card.appendChild(priority);
    card.appendChild(deleteBtn);

    return card;
};


function createRadio() {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "delete";
    radio.classList.add("checkbox");
    radio.checked = false;

    return radio;
};


export function displayCurrentTasks(projectName) {
    manage.switchProjects(projectName);
    const newCurrentProject = manage.getCurrentProject();
    clearTasksContainer();
    displayTasks(newCurrentProject);
};

function createDiv(textContent) {
    const div = document.createElement("div");
    div.textContent = textContent;
    return div;
}