// Style Sheet
import "./styles.css"

// Components
import { handleRemoveInputBox } from "../../input_boxes/base_input_box"
import { createBaseTodoForm, getBaseTodoFormData } from "../base_todo_form"
import { createTodo } from "../../../modules/projects/sub_modules/todo"

export function createNewTodoForm(projectIndex) {
    // Create
    const form = createBaseTodoForm()

    // Event Listeners
    form.addEventListener("submit", (e) => { handleSubmit(e, projectIndex) })

    // Return
    return form
}

function handleSubmit(e, projectIndex) {
    // Prevent form submission
    e.preventDefault()

    // Get values stored in input tags
    const data = getBaseTodoFormData(e)

    // Assign project access index
    data.projectIndex = projectIndex

    // Create todo with current data
    createTodo(data)

    // Remove input box
    handleRemoveInputBox(e)
}