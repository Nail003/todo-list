import "./styles.css"

export function createBaseInputField(name = "", type = "text") {
    // Create
    const inputFieldContainer = document.createElement("div")

    // Create Child
    const inputLabel = document.createElement("label")
    const inputField = document.createElement("input")
    const textArea = document.createElement("textarea")

    // Update
    inputFieldContainer.classList.add("base-input-field")

    // Update Child
    inputLabel.textContent = name
    inputLabel.htmlFor = name.toLocaleLowerCase()
    inputLabel.classList.add("base-input-field__label")

    inputField.name = name.toLowerCase()
    inputField.id = name.toLocaleLowerCase()
    inputField.type = type
    inputField.classList.add("base-input-field__input-field")
    inputField.required = true

    textArea.name = name.toLowerCase()
    textArea.id = name.toLocaleLowerCase()
    textArea.rows = "5"
    textArea.classList.add("base-input-field__text-area")
    textArea.required = true

    // Append Child
    inputFieldContainer.appendChild(inputLabel)

    // Choose between input-field or text-area depending on input
    type != "textarea" && inputFieldContainer.appendChild(inputField)
    type === "textarea" && inputFieldContainer.appendChild(textArea)

    // Return
    return inputFieldContainer
}