import { displayTasks } from "./tasks-dom";

export function updateTasks(manage) {
    const newTask = manage.createTask();
    const currentProject = manage.getCurrentProject();
    manage.addTaskToProject(newTask, currentProject);
    displayTasks(currentProject);
};