import "./styles.css"

export function createBaseButton() {
    // Create
    const button = document.createElement("button")

    // Update
    button.classList.add("base-button")

    // Return
    return button
}