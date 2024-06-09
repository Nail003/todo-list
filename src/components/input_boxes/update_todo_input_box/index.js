// Style Sheet
import { createInputCard } from "../../cards/input_card"
import { createUpdateTodoFrom } from "../../forms/update_todo_form"
import { createBaseInputBox } from "../base_input_box"
import "./styles.css"

// Components


export function createUpdateTodoInputBox(data) {
    // Create
    const inputBox = createBaseInputBox()

    // Create Child
    const inputCard = createInputCard()
    const form = createUpdateTodoFrom(data)

    // Append Child
    inputCard.appendChild(form)

    inputBox.appendChild(inputCard)

    // Return
    return inputBox
}

export function renderUpdateTodoInputBox(data) {
    // Get
    const body = document.getElementsByTagName("body")[0]

    // Create Child
    const inputBox = createUpdateTodoInputBox(data)

    // Append Child
    body.appendChild(inputBox)
}