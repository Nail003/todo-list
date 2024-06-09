// Style Sheets
import "./styles.css"

// Icons
import plusIcon from "../../../icons/plus.svg"

// Components
import { createIconButton } from "../icon_button"

export function createAddButtonSquar() {
    // Create
    const button = createIconButton()

    // Create Child
    const img = document.createElement("img")

    // Update
    button.classList.add("add-button--squar")

    // Update Child
    img.src = plusIcon

    // Append Child
    button.appendChild(img)

    // Return
    return button
}