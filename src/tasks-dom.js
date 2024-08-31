import { manage } from "./index";
const tasksContainer = document.querySelector(".container-right");

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
            //Logic to find the current task and remove from projects array
        })
    })
};


function clearTasksContainer() {
    tasksContainer.innerHTML = "";
};

function createCard(task) {
    //makes card div
    const card = document.createElement("div");
    card.classList.add("card");

    const radio = createRadio("id"); //id needs to be unique

    const title = createDiv(task.title);
    const description = createDiv(task.description);
    const date = createDiv(task.date);
    const priority = createDiv(task.priority);
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn-task-delete"); //need a unique class identifier
    deleteBtn.textContent = "Delete";

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