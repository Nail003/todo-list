// Style Sheet
import "./styles.css"

// Components
import { createBaseProjectForm } from "../base_project_form"
import { handleRemoveInputBox } from "../../input_boxes/base_input_box"
import { editProject } from "../../../modules/projects"

export function createEditProjectForm(index) {
    // Create
    const form = createBaseProjectForm()

    // Event Listeners
    form.addEventListener("submit", (e) => { handleSubmit(e, index) })

    // Return
    return form
}

function handleSubmit(e, index) {
    // Stop form submission
    e.preventDefault()

    // Get Data
    const form = e.target
    const newName = form.getElementsByTagName("input").name.value

    // Edit Project
    editProject(index, newName)

    // Close the Input Box
    handleRemoveInputBox(e)
}