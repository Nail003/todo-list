// Style Sheet
import "./styles.css"

// Components
import { createButtonFilled } from "../../buttons/button_filled"
import { createButtonOutlined } from "../../buttons/button_outlined"
import { handleRemoveInputBox } from "../../input_boxes/base_input_box"
import { createBaseInputField } from "../../input_fields/base_input_field"

export function createBaseProjectForm() {
    // Create
    const form = document.createElement("form")

    // Create Child
    const inputField = createBaseInputField("Name", "text")
    const buttonContainer = document.createElement("div")
    const submitButton = createButtonOutlined("Submit")
    const cancelButton = createButtonFilled("Cancel")

    // Update
    form.classList.add("new-project-form")

    // Update Child
    buttonContainer.classList.add("new-project-form__button-container")

    // Event Listeners
    cancelButton.addEventListener("click", handleRemoveInputBox)

    // Append Child
    buttonContainer.appendChild(cancelButton)
    buttonContainer.appendChild(submitButton)
    form.appendChild(inputField)
    form.appendChild(buttonContainer)

    // Return
    return form
}