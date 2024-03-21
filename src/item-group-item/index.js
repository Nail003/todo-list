import { createMenuItemButton } from "../components/buttons"
import { updateItemNameInputField } from "../components/item-group-input-field"
import { renderMenuBar } from "../components/menubar"
import "./styles.css"

export function createItem(item, group) {
    const newItem = document.createElement("div")
    newItem.classList.add("items-group-item")

    createItemHeading(item.getName(), newItem)
    createItemButtons(newItem, group)

    return newItem
}

function createItemHeading(text, item) {
    const h4 = document.createElement("h4")
    h4.textContent = text
    item.appendChild(h4)
}

function createItemButtons(item, group) {
    const buttonsContainer = document.createElement("div")

    createEditButton(buttonsContainer, item, group)
    createRemoveButton(buttonsContainer, item, group)

    item.appendChild(buttonsContainer)
}

function createEditButton(buttonsContainer, item, group) {
    const editButton = createMenuItemButton("+")
    editButton.addEventListener("click", () => { editButtonHandler(item, group) })
    buttonsContainer.appendChild(editButton)
}

function createRemoveButton(buttonsContainer, item, group) {
    const removeButton = createMenuItemButton("-")
    removeButton.addEventListener("click", () => { removeButtonHandler(item, group) })
    buttonsContainer.appendChild(removeButton)
}

function editButtonHandler(item, group) {
    item.innerHTML = ""
    updateItemNameInputField(item, group)
}

function removeButtonHandler(item, group) {
    group.deleteItem(item.dataset.index)
    renderMenuBar()
}