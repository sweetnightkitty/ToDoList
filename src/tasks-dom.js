const tasksContainer = document.querySelector(".container-right");

//Currently logs task.title but we can make this more detailed for UI
export function displayTasks(currentProject) {
    clearTasksContainer();

    const array = currentProject.tasks;
    for(let i = 0; i < array.length; i++) {
        const task = array[i];

        // const temp = document.createElement("div");
        // temp.textContent = array[i].title;
        // tasksContainer.appendChild(temp);

        const card = createCard(task);
        tasksContainer.appendChild(card);

        //create a card = div
        //append info to card in seperate divs
        //append a delet button
        //append card to tasksContainer
    };
};


function clearTasksContainer() {
    tasksContainer.innerHTML = "";
};

function createCard(task) {
    //makes card div
    const card = document.createElement("div");
    card.classList.add("card");

    const title = createDiv(task.title);
    const description = createDiv(task.description);
    const date = createDiv(task.date);
    const priority = createDiv(task.priority);
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn-taskName"); //need a unique class identifier
    deleteBtn.textContent = "Delete";

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(date);
    card.appendChild(priority);
    card.appendChild(deleteBtn);

    return card;
};

// const newTask = {
//     title: title,
//     description: description,
//     date: date,
//     priority: priority,
// }

function createDiv(textContent) {
    const div = document.createElement("div");
    div.textContent = textContent;
    return div;
}