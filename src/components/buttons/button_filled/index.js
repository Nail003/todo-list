import { createBaseButton } from "../base_button"
import "./styles.css"

export function createButtonFilled(text = "") {
    // Create
    const button = createBaseButton()

    // Update
    button.classList.add("button-filled")
    button.textContent = text

    // Return
    return button
}