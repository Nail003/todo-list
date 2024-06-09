import { createInputCard } from "../../cards/input_card"
import { createEditProjectForm } from "../../forms/edit_project_form"
import { createBaseInputBox } from "../base_input_box"
import "./styles.css"

export function createEditProjectInputBox(index) {
    // Create
    const inputBox = createBaseInputBox()

    // Create Child
    const inputCard = createInputCard()
    const form = createEditProjectForm(index)

    // Append Child
    inputCard.appendChild(form)

    inputBox.appendChild(inputCard)

    // Return
    return inputBox
}

export function renderEditProjectForm(index) {
    // Get
    const body = document.getElementsByTagName("body")[0]

    // Create Child
    const inputBox = createEditProjectInputBox(index)

    // Append Child
    body.appendChild(inputBox)
}