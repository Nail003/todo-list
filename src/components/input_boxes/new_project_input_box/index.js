import { createInputCard } from "../../cards/input_card"
import { createNewProjectForm } from "../../forms/create_new_project_form"
import { createBaseInputBox } from "../base_input_box"
import "./styles.css"

export function createNewProjectInputBox() {
    // Create
    const baseInputBox = createBaseInputBox()

    // Create Child
    const inputCard = createInputCard()
    const form = createNewProjectForm()

    // Append Child
    inputCard.appendChild(form)
    baseInputBox.appendChild(inputCard)

    // Return
    return baseInputBox
}

export function renderNewProjectForm() {
    // Get
    const body = document.getElementsByTagName("body")[0]

    // Create Child
    const inputBox = createNewProjectInputBox()

    // Append Child
    body.appendChild(inputBox)
}