// Style Sheet
import "./styles.css"

// SVGs
import crossSVG from "../../../icons/cross.svg"
import tickSVG from "../../../icons/tick.svg"

// Components
import { createIconButton } from "../icon_button"

export function createTickCrossButtonSquar(toggleState = false) {
    // State
    // False is cross and true is tick
    const states = {
        SVG: false, // Decide which svg img should be displayed
    }

    // Create
    const button = createIconButton()

    // Create Child
    const img = document.createElement("img")

    // Update
    button.classList.add("tick-cross-button--squar")

    // Update Child
    img.src = crossSVG

    // Append Child
    button.appendChild(img)

    // Event Listeners
    // button.addEventListener("click", () => {
    //     toggleSVG(states, img)
    // })

    // Change SVG to tick if toggleState is true
    if (toggleState) toggleSVG(states, img)

    // Return
    return button
}

function toggleSVG(states, img) {
    // Toggle the button to cross or tick depending on current state
    if (states.SVG) {
        // If current state is true/tick
        // Set the img to cross
        img.src = crossSVG
    } else {
        // If current state is false/cross
        // Set the img to tick
        img.src = tickSVG
    }
    // Toggle stored state to the opposite
    states.SVG = !states.SVG
}