import { createButtonFilled } from "../button_filled"
import "./styles.css"

export function createPriortyButton(priorty = "low") {
    // Takes low, medium and high as input

    // Create
    const button = createButtonFilled(priorty)

    // Update
    button.classList.add("priorty-button")
    button.classList.add("priorty-button--" + priorty.toLowerCase())

    // Return
    return button
}