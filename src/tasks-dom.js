const tasksContainer = document.querySelector(".container-right");

//Currently logs task.title but we can make this more detailed for UI
export function displayTasks(currentProject) {
    const array = currentProject.tasks;
    for(let i = 0; i < array.length; i++) {
        const task = document.createElement("div");
        task.textContent = array[i].title;
        tasksContainer.appendChild(task);
    };
};