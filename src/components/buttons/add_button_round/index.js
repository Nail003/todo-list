// Style Sheet
import "./styles.css"

// Components
import { createAddButtonSquar } from "../add_button_squar"

export function createAddButtonRound() {
    // Create
    const button = createAddButtonSquar()

    // Update
    button.classList.remove("add-button--squar")
    button.classList.add("add-button--round")

    // Return
    return button
}