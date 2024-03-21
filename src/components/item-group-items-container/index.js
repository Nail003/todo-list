import { createItem } from "../../item-group-item"
import "./styles.css"

export function createItemsContainer(group) {
    const itemsContainer = document.createElement("div")
    itemsContainer.classList.add("group-item_items-container")

    let index = 0 // Use to access item for CRUD functionalities
    for (let item of group.getItems()) {
        const newItem = createItem(item, group)
        newItem.dataset.index = index++
        itemsContainer.appendChild(newItem)
    }

    return itemsContainer
} 