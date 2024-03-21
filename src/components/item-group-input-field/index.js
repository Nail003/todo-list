import { Group } from "../../modules/group"
import { renderMenuBar } from "../menubar"
import "./styles.css"

function createInputField() {
    const inputField = document.createElement("input")
    inputField.type = "text"
    inputField.classList.add("item-group_input-field")
    return inputField
}

function appendInputField(node) {
    const inputField = createInputField()
    node.appendChild(inputField)
    inputField.focus()
    return inputField
}

export function newItemInputField(itemsContainer, group) {
    const inputField = appendInputField(itemsContainer)

    assignNewInputFieldEventListeners(inputField, () => addItemToGroup(inputField.value, group))
}

export function updateItemNameInputField(itemContainer, group) {
    const inputField = appendInputField(itemContainer)
    const index = itemContainer.dataset.index
    assignNewInputFieldEventListeners(inputField, () => editItemNameOfGroup(inputField.value, group, index))
}


function assignNewInputFieldEventListeners(inputField, inputHandler) {
    // To stop the double firing of event listner when pressed enter key
    let propagationFlag = false // Open to better suggestions

    inputField.addEventListener("focusout", () => {
        if (propagationFlag) return
        inputHandler()
    })
    inputField.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            propagationFlag = true
            inputHandler()
        }
    })
}

function addItemToGroup(itemName, group) {
    const newProject = new Group(itemName)
    if (itemName) group.appendItem(newProject)
    renderMenuBar()
}

function editItemNameOfGroup(newName, group, index) {
    console.log(newName, index, group)
    if (newName) {
        const itemsList = group.getItems()
        itemsList[index].updateName(newName)
    }
    renderMenuBar()
}
