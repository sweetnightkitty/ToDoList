const projectsContainer = document.querySelector(".container-left");

//Displays project name values as text
export function displayProjects(projectsArray) {
    clearProjectsContainer();
    
    for(let i = 0; i < projectsArray.length; i++) {
        const projectName = projectsArray[i].name;
        const project = document.createElement("button");

        //btn-projectName ensures each btn has a unique class and can be targeted using regex with btn-projName-$
        project.classList.add("btn", `btn-projName-${projectName.toLowerCase()}`);

        project.textContent = projectName;
        projectsContainer.appendChild(project);
    };
};

function clearProjectsContainer() {
    projectsContainer.innerHTML = "";
};

//deleteBooks