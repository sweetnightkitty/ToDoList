const projectsContainer = document.querySelector(".container-left");

export function displayProjects(projectsArray) {
    for(let i = 0; i < projectsArray.length; i++) {
        const project = document.createElement("div");
        project.textContent = projectsArray[i].name;
        projectsContainer.appendChild(project);
    };
};