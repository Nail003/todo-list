// Style Sheet
import "./styles.css"

// Icons
import editIcon from "../../../icons/edit.svg"

// Componenets
import { createIconButton } from "../icon_button"

export function createEditButton() {
    // Create
    const button = createIconButton()

    // Create Child
    const img = document.createElement("img")

    // Update
    button.classList.add("edit-button")

    // Update Child
    img.src = editIcon

    // Append Child
    button.appendChild(img)

    // Return
    return button
}