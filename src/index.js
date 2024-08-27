import "./styles.css";

//Example projects
const projects = [
    {
        name: "default",
        tasks: [],
    },

    {
        name: "languages",
        tasks: [],
    },
];

projects[0].tasks.push("make this work");
projects[1].tasks.push("review japanese");

console.log(projects[0]);
console.log(projects[1]);