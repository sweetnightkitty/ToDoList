//CONTENT CONTAINERS
// const tasksContainer = document.querySelector(".container-right");
const projectsContainer = document.querySelector(".container-left");

export function openModal(modal) {
    modal.style.display = "block";
};

export function closeModal() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        modal.style.display = "none";
    });
};

export function resetForm() {
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
        form.reset();
    })
}

export function displayProjects(projectsArray) {
    for(let i = 0; i < projectsArray.length; i++) {
        const project = document.createElement("div");
        project.textContent = projectsArray[i].name;
        projectsContainer.appendChild(project);
    };
};

//Currently logs task.title but we can make this more detailed for UI
export function displayTasks(currentProject) {
    const array = currentProject.tasks;
    for(let i = 0; i < array.length; i++) {
        const task = document.createElement("div");
        task.textContent = array[i].title;
        tasksContainer.appendChild(task);
    };
};
