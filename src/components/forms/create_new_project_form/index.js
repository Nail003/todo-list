// Style Sheet
import "./styles.css"

// Components
import { createProject } from "../../../modules/projects"
import { createBaseProjectForm } from "../base_project_form"
import { handleRemoveInputBox } from "../../input_boxes/base_input_box"

export function createNewProjectForm() {
    // Create
    const form = createBaseProjectForm()

    // Event Listeners
    form.addEventListener("submit", handleSubmit)

    // Return
    return form
}

function handleSubmit(e) {
    // Stop form submission
    e.preventDefault()

    // Get Data
    const form = e.target
    const name = form.getElementsByTagName("input").name.value

    // Create Project
    createProject(name)

    // Close the Input Box
    handleRemoveInputBox(e)
}