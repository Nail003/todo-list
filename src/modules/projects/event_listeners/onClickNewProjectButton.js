import { createNewProjectInputBox, renderNewProjectForm } from "../../../components/input_boxes/new_project_input_box"

export function onClickNewProjectButton() {
    // Handles the creation of new project request
    console.log("Assigning new project button event handler")

    // Get Request
    // The class name is set during the creation of side_menu_group component
    const newProjectButtonClassName = "side-menu__add-button__projects"
    const newProjectButton = document.getElementsByClassName(newProjectButtonClassName)[0]

    // Assign Event Listener
    newProjectButton.addEventListener("click", handleNewProjectButton)

}

function handleNewProjectButton() {
    // Creates a form in which user submitts it's input and is stored in the projects group
    // Than refreshes the whole projects tree 
    console.log("New project button pressed")

    // Show the new project input dialogue box
    renderNewProjectForm()
}