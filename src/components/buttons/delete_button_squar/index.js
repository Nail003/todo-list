// Style Sheet
import "./styles.css"

// Icons
import deleteIcon from "../../../icons/delete.svg"

// Components
import { createIconButton } from "../icon_button"

export function createDeleteButton() {
    // Create
    const button = createIconButton()

    // Create Child
    const img = document.createElement("img")

    // Update
    button.classList.add("delete-button--squar")

    // Update Child
    img.src = deleteIcon

    // Append Child
    button.appendChild(img)

    // Return
    return button
}