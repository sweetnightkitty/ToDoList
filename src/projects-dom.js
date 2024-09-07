import { displayCurrentTasks } from "./tasks-dom";

const projectsContainer = document.querySelector(".container-left");

//Displays project name values as text
export function displayProjects(projectsArray) {
  for (let i = 0; i < projectsArray.length; i++) {
    const projectName = projectsArray[i].name;
    const project = document.createElement("button");

    //btn-projectName ensures each btn has a unique class and can be targeted using regex with btn-projName-$
    project.classList.add(
      "btn-projName",
      `btn-projName-${projectName.toLowerCase()}`,
    );

    project.textContent = projectName;
    projectsContainer.appendChild(project);

    //Display that project's tasks when clicked
    const projectBtns = document.querySelectorAll(".btn-projName");
    projectBtns.forEach((projectBtn) => {
      projectBtn.addEventListener("click", () => {
        displayCurrentTasks(projectBtn.textContent);
      });
    });
  }
}

export function clearProjectsContainer() {
  projectsContainer.innerHTML = "";
}
