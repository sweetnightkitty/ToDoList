import { displayProjects } from "./projects-dom";

export function updateProjects(manage) {
    manage.createProject();
    const projects = manage.getProjects;
    displayProjects(projects);
};