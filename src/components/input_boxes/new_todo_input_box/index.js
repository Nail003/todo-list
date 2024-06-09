// Style Sheet
import "./styles.css"

// Componenets
import { createInputCard } from "../../cards/input_card"
import { createBaseInputBox } from "../base_input_box"
import { createNewTodoForm } from "../../forms/new_todo_form"

export function createNewTodoInputBox(projectIndex) {
    // Create
    const inputBox = createBaseInputBox()

    // Create Child
    const inputCard = createInputCard()
    const form = createNewTodoForm(projectIndex)

    // Append Child
    inputCard.appendChild(form)

    inputBox.appendChild(inputCard)

    // Return
    return inputBox
}

export function renderNewTodoInputBox(projectIndex) {
    // Get
    const body = document.getElementsByTagName("body")[0]

    // Create Child
    const inputBox = createNewTodoInputBox(projectIndex)

    // Append Child
    body.appendChild(inputBox)
}