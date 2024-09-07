import { manage } from "./index";
const tasksContainer = document.querySelector(".container-right");
let taskId = 1;

//Currently logs task.title but we can make this more detailed for UI
export function displayTasks(currentProject) {
    clearTasksContainer();

    const array = currentProject.tasks;
    for(let i = 0; i < array.length; i++) {
        const task = array[i];
        //Uses task info to create a card and append to UI
        const card = createCard(task);
        tasksContainer.appendChild(card);

    };

    const taskDeleteBtns = document.querySelectorAll(".btn-task-delete");
    taskDeleteBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            //delete task from array and display tasks again
            manage.deleteTask(btn.dataset.index);
            displayTasks(manage.getCurrentProject());
        })
    })

    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((box) => {
        box.addEventListener("click", () => {
            //delete task from array and display tasks again
            manage.deleteTask(box.dataset.index);
            displayTasks(manage.getCurrentProject());
        })
    })
};


function clearTasksContainer() {
    tasksContainer.innerHTML = "";
};

function createCard(task) {
    //gets the index value of that task
    const currentProject = manage.getCurrentProject();
    const index = currentProject.tasks.indexOf(task);

    //makes card div
    const card = document.createElement("div");
    card.classList.add("card");

    const radio = createRadio(`card-${taskId}`); //unique id

    const title = createDiv(task.title);
    const description = createDiv(task.description);
    const date = createDiv(task.date);
    const priority = createDiv(task.priority);
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn-task-delete"); 
    deleteBtn.textContent = "Delete";

    //Assign the index value of the task as dataset numbers
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


function createRadio(id) {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "delete";
    radio.classList.add("checkbox");
    radio.id = id;
    radio.checked = false;
    return radio;
};

function createDiv(textContent) {
    const div = document.createElement("div");
    div.textContent = textContent;
    return div;
}

export function displayCurrentTasks(projectName) {
    manage.switchProjects(projectName);
    const currentProject = manage.getCurrentProject();
    displayTasks(currentProject);
};
