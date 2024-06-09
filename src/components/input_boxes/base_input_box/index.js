import "./styles.css"

export function createBaseInputBox() {
    // Create
    const baseInputBox = document.createElement("div")

    // Update
    baseInputBox.classList.add("base-input-box")

    // Event Listeners
    baseInputBox.addEventListener("click", handleRemoveInputBox)

    // Return
    return baseInputBox
}

export function handleRemoveInputBox(e) {
    // To stop form submission while removing from DOM tree
    e.preventDefault()

    // Removes the baseInputBox and its children from the DOM tree
    //Get Request
    const body = document.getElementsByTagName("body")[0]
    const baseInputBox = document.getElementsByClassName("base-input-box")[0]

    // Remove
    body.removeChild(baseInputBox)
}