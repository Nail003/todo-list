import { createBaseButton } from "../base_button"
import "./styles.css"

export function createButtonOutlined(text = "") {
    // Create
    const button = createBaseButton()

    // Update
    button.classList.add("button--outlined")
    button.textContent = text

    // Return
    return button
}