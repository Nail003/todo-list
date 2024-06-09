// Style Sheet
import "./styles.css"

// Components
import { createPriortyButton } from "../../buttons/priorty_button"

export function createPriortyInputField() {
    // Create
    const inputField = document.createElement("div")

    // Create Child
    const title = document.createElement("h3")

    // This input field is to store the priorty
    const hiddenInput = document.createElement("input")

    const buttonContainer = document.createElement("div")
    const lowPriortyButton = createPriortyButton("Low")
    const mediumPriortyButton = createPriortyButton("Medium")
    const highPriortyButton = createPriortyButton("High")

    // Update
    inputField.classList.add("priorty-input-field")

    // Update Child
    title.classList.add("priorty-input-field__title")
    title.textContent = "Priorty"

    hiddenInput.classList.add("priorty-input-field__hidden-input")
    hiddenInput.type = "text"
    hiddenInput.name = "priorty"
    hiddenInput.value = "low"

    buttonContainer.classList.add("priorty-input-field__button-container")
    lowPriortyButton.classList.add("priorty-button--active")

    // Event Listeners
    inputField.addEventListener("change", (e) => { console.log("ran") })

    lowPriortyButton.addEventListener("click", (e) => { handlePriortyButton(e, "low") })
    mediumPriortyButton.addEventListener("click", (e) => { handlePriortyButton(e, "medium") })
    highPriortyButton.addEventListener("click", (e) => { handlePriortyButton(e, "high") })


    // Append Child
    buttonContainer.appendChild(lowPriortyButton)
    buttonContainer.appendChild(mediumPriortyButton)
    buttonContainer.appendChild(highPriortyButton)
    buttonContainer.appendChild(hiddenInput) // Added to button container for easy access

    inputField.appendChild(title)
    inputField.appendChild(buttonContainer)

    // Return
    return inputField
}

function handlePriortyButton(e, priorty) {
    // Stop form submission
    e.preventDefault()

    // Get
    const parent = e.target.parentElement
    const priortyInput = parent.getElementsByClassName("priorty-input-field__hidden-input")[0]

    // Set the new priorty value
    priortyInput.value = priorty

    // Remove active class from all buttons
    const buttons = parent.getElementsByClassName("priorty-button")
    for (const button of buttons) {
        button.classList.remove("priorty-button--active")
    }

    // Add active class to the clicked button
    e.target.classList.add("priorty-button--active")
}