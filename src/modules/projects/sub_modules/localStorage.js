import { Group } from "../../../classes/group"
import { TodoItem } from "../../../classes/todo-item"

export function storeProjectsInLocalStorate(projects) {
    // Fail Safe
    // If localstorage is not available than return
    if (!storageAvailable("localStorage")) return

    // Create temp storage object to hold the data untill stored in localstorage
    const projectsData = []
    for (const project of projects.getItems()) {
        // Loop all projects and store there names and items in an object
        // Get the name of project
        const projectName = project.getName()
        // Get all the todos data
        const items = []
        for (const todo of project.getItems()) {
            // Loop all the todos and store there data in items array
            items.push(todo.getAllData())
        }
        // Store the data object in temp storage
        projectsData.push({ projectName, items })
    }
    // Store projects data in localstorage
    localStorage.setItem(projects.getName(), JSON.stringify(projectsData))
}

export function getProjectsDataFromLocalStorage(projects) {
    // Get the projects data that is stored in localstorage
    const projectsData = JSON.parse(localStorage.getItem(projects.getName()))
    for (const projectData of projectsData) {
        // Loop through each project
        // Create a new project group for each project using the name stored in localstorage
        const project = new Group(projectData.projectName)
        // Give the above projects it todos
        for (const todoData of projectData.items) {
            // Loop through the todo data of the above project
            // Create a new todo
            const { title, description, dueDate, priority, finishedState } = todoData
            const todo = new TodoItem(title, dueDate, priority, description, finishedState)
            // Add that todo to the project
            project.appendItem(todo)
        }
        // Add the project to projects group
        projects.appendItem(project)
    }
}

export function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}
