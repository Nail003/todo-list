// Style Sheet
import "./styles.css"

// Components
import { createBaseInputField } from "../../input_fields/base_input_field"
import { createButtonFilled } from "../../buttons/button_filled"
import { createButtonOutlined } from "../../buttons/button_outlined"
import { createPriortyInputField } from "../../input_fields/priorty_input_field"
import { handleRemoveInputBox } from "../../input_boxes/base_input_box"


export function createBaseTodoForm() {
    // Create
    const form = document.createElement("form")

    // Create Child
    const titleInput = createBaseInputField("Title", "text")
    const descriptionInput = createBaseInputField("Description", "textarea")

    const styleContainer = document.createElement("div")
    const dueDateInput = createBaseInputField("Due-Date", "date")
    const priortyInputField = createPriortyInputField()

    const buttonContainer = document.createElement("div")
    const cancelButton = createButtonFilled("Cancel")
    const submitButtom = createButtonOutlined("Submit")

    // Update
    form.classList.add("base-task-form")

    // Update Child
    styleContainer.classList.add("base-task-form__style-container")
    buttonContainer.classList.add("base-task-form__button-container")

    // Event Listeners Child
    cancelButton.addEventListener("click", handleRemoveInputBox)

    // Append Child
    styleContainer.appendChild(dueDateInput)
    styleContainer.appendChild(priortyInputField)

    buttonContainer.appendChild(cancelButton)
    buttonContainer.appendChild(submitButtom)

    form.appendChild(titleInput)
    form.appendChild(descriptionInput)
    form.appendChild(styleContainer)
    form.appendChild(buttonContainer)


    // Return
    return form
}

export function getBaseTodoFormData(e) {
    // Get the inputs dictionary sorted by each input name
    const inputs = e.target.getElementsByTagName("input")
    const textArea = e.target.getElementsByTagName("textarea")[0]

    // Get values stored in input tags
    const title = inputs["title"].value
    const description = textArea.value
    const dueDate = inputs["due-date"].value
    const priorty = inputs["priorty"].value

    // Compilling data
    const data = { title, description, dueDate, priorty }

    // Return
    return data
}

export function updateTodoFormInputValues(form, data) {
    // Get the inputs dictionary sorted by each input name
    const inputs = form.getElementsByTagName("input")
    const textArea = form.getElementsByTagName("textarea")[0]

    // Set values of input tags
    inputs["title"].value = data.title
    textArea.value = data.description
    inputs["due-date"].value = data.dueDate

    // Change the priorty value by simulating button click
    const button = form.getElementsByClassName("priorty-button--" + data.priority)[0]
    button.click()
}
