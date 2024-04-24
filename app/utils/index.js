const { projectsData } = require("../data");

export function getProject(id) {
    const project = projectsData.find(p => p.id === id)
    return project
}