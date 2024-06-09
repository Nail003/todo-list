import "./styles.css"

export function createIconButton() {
    // Create
    const button = document.createElement("button")

    // Update
    button.classList.add("icon-button")

    // Return
    return button
}