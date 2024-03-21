import { Group } from "../../modules/group"
import { renderMenuBar } from "../menubar"
import "./styles.css"

function createInputField() {
    const inputField = document.createElement("input")
    inputField.type = "text"
    inputField.classList.add("item-group_input-field")
    return inputField
}

export function newItemInputField(itemsContainer, group) {
    const inputField = createInputField()

    itemsContainer.appendChild(inputField)
    inputField.focus()

    assignNewInputFieldEventListeners(inputField, group)
}

function assignNewInputFieldEventListeners(inputField, group) {
    // To stop the double firing of event listner when pressed enter key
    let propagationFlag = false // Open to better suggestions

    inputField.addEventListener("focusout", () => {
        if (propagationFlag) return
        addItemToGroup(inputField.value, group)
    })
    inputField.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            propagationFlag = true
            addItemToGroup(inputField.value, group)
        }
    })
}

function addItemToGroup(itemName, group) {
    const newProject = new Group(itemName)
    if (itemName) group.appendItem(newProject)
    renderMenuBar()
}
