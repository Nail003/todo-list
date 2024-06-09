// Style Sheet
import "./styles.css"

// Components
import { createBaseTodoForm, getBaseTodoFormData, updateTodoFormInputValues } from "../base_todo_form"
import { handleRemoveInputBox } from "../../input_boxes/base_input_box"
import { updateTodo } from "../../../modules/projects/sub_modules/todo"

export function createUpdateTodoFrom(data) {
    // Get Todo Access Info 
    const { projectIndex, todoIndex } = data

    // Create
    const form = createBaseTodoForm()

    // Set input values to current todo values
    updateTodoFormInputValues(form, data)

    // Event Listeners
    form.addEventListener("submit", handleSubmit(projectIndex, todoIndex))

    // Return
    return form
}

function handleSubmit(projectIndex, todoIndex) {
    return (e) => {
        // Prevent form submission
        e.preventDefault()

        // Get values stored in input tags
        const data = getBaseTodoFormData(e)

        // Assign project access index
        data.projectIndex = projectIndex
        data.todoIndex = todoIndex

        // Update Todo
        updateTodo(data)

        // Remove input box
        handleRemoveInputBox(e)
    }
}