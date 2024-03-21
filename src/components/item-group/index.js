import { Group } from "../../modules/group"
import { newItemInputField } from "../item-group-input-field"
import { createItemsContainer } from "../item-group-items-container"
import { createItemGroupTitle } from "../item-group-title"
import { renderMenuBar } from "../menubar"
import { projects } from "../project-group-section"
import "./styles.css"

export function createItemGroup(text, group) {
    const groupContainer = document.createElement("div")
    groupContainer.classList.add("item-group")

    const itemGroupTitle = createItemGroupTitle(text)
    const itemsContainer = createItemsContainer(group)

    assignItemGroupTitleEventListeners(itemGroupTitle, itemsContainer, group)

    groupContainer.appendChild(itemGroupTitle)
    groupContainer.appendChild(itemsContainer)

    return groupContainer
}

function assignItemGroupTitleEventListeners(itemGroupTitle, itemsContainer, group) {
    const addItemButton = itemGroupTitle.querySelector("button")
    addItemButton.addEventListener("click", () => { newItemInputField(itemsContainer, group) })
}