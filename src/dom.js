//CONTENT CONTAINERS
const tasksContainer = document.querySelector(".container-right");
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

export function displayProjects(array) {
    for(let i = 0; i < array.length; i++) {
        const project = document.createElement("div");
        project.textContent = array[i].name;
        projectsContainer.appendChild(project);
    };
};
