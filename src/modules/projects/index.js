import { Group } from "../../classes/group"
import { emptyTodoList, renderTodoList } from "../../components/todo_list"
import { onClickNewProjectButton } from "./event_listeners/onClickNewProjectButton"
import "./styles.css"
import { getProjectsDataFromLocalStorage, storageAvailable, storeProjectsInLocalStorate } from "./sub_modules/localStorage"
import { mockProjectsData } from "./sub_modules/mockProjectsData"
import { refreshGroupOnSideMenu } from "./sub_modules/refreshGroupOnSideMenu"
import { renderGroupOnSideMenu } from "./sub_modules/renderGroupOnSideMenu"


// The most top level data storage container for project group
// This will contain all the todos for project section
export const projects = new Group("Projects")

// Try to store localstorage data in projects
// Otherwise store mock data
if (storageAvailable("localStorage") && localStorage.getItem(projects.getName())) {
    // If localStorage is availible
    // Store the local storage data in projects
    getProjectsDataFromLocalStorage(projects)
} else {
    // Else store the mock data in projects used for testing
    console.log("Local Storage not availaible");
    console.log("Reasons might be first time site access or browser support");
    console.log("Showing Mock Data");
    mockProjectsData(projects)
}

export function renderProjects() {
    // Function used to initialize the projects group
    console.log("Rendering projects group")

    // Display this group on sideMenu
    renderGroupOnSideMenu(projects)

    // Display items from this group
    refreshGroupOnSideMenu(projects)

    // Display the default project
    renderProject()

    // Assign Event listeners
    onClickNewProjectButton()
}

export function refreshProjects() {
    // Function used to refresh or reRender the projects group incase of updates
    console.log("Refreshing projects group")
    refreshGroupOnSideMenu(projects)
}

export function createProject(name = "text") {
    // Create New Project and stores in the projects storage group
    // Returns true or false depending on success or failure

    // Don't store data if name is empty
    if (!name) return false

    // Create
    const newProject = new Group(name)

    // Store
    projects.appendItem(newProject)

    // Store in localStorage
    storeProjectsInLocalStorate(projects)

    // Refresh the list
    refreshProjects()

    // Return
    return true
}

export function deleteProject(index) {
    // Remove project
    projects.deleteItem(index)

    // Store in localStorage
    storeProjectsInLocalStorate(projects)

    // Referesh project list
    refreshGroupOnSideMenu(projects)

    // Render the default project
    renderProject()
}

export function editProject(index, newName) {
    // Get Item
    let project = projects.getItems()[index]

    // Update Name
    project.updateName(newName)

    // Store in localStorage
    storeProjectsInLocalStorate(projects)

    // Refresh list
    refreshGroupOnSideMenu(projects)
    renderProject(index)
}

export function renderProject(index = 0) {
    // Fail Safe
    // If there are no projects don't render anything
    // Also remove old content
    if (projects.getItems().length === 0) {
        emptyTodoList()
        return
    }

    // Get
    const project = projects.getItems()[index]

    // This index is used for accessabillity
    // And is bound to change
    project.index = index

    // Show this project todos
    renderTodoList(project)
}