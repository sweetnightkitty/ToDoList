export function getProjects() {
    const projects = [
        {
            name: "Main",
            tasks: [
                {
                    title: "Finish To Do Project",
                }
            ],
        },
    ];
    return projects;
}

export function taskManager() {
    const projects = getProjects();

    let currentProject = projects[0];

    const switchProjects = (projectName) => {
        for(let i = 0; i < projects.length; i++) {
            if(projects[i].name == projectName) {
                currentProject = projects[i];
            };
        };
    };

    const createProject = () => {
        const projectName = document.querySelector("#project-name").value;
        const newProject = {
            name: projectName,
            tasks: [],
        };
    
        projects.push(newProject);

        return newProject;
    };
    
    
    const createTask = () => {
        const title = document.querySelector("#task-name").value;
        const description = document.querySelector("#task-descript").value;
        const date = document.querySelector("#task-date").value;
        let priority;

        const priorities = document.getElementsByName("task-priority");
        priorities.forEach((option) => {
            if(option.checked) {
                priority = option.id;
            };
        });
    
        const newTask = {
            title: title,
            description: description,
            date: date,
            priority: priority,
        };
    
        return newTask;
    };

    const getCurrentProject = () => currentProject;

    const addTaskToProject = (newTask, currentProject) => {
        currentProject.tasks.push(newTask);
    };

    //takes in the index from currentProjects.tasks[index]
    const deleteTask = (index) => {
        const currentProject = getCurrentProject();
        const projectIndex = projects.indexOf(currentProject);

        projects[projectIndex].tasks.splice(index, 1);

    }  

    return {
        getProjects: projects,
        switchProjects,
        createProject,
        createTask,
        getCurrentProject,
        addTaskToProject,
        deleteTask,
    };
};
