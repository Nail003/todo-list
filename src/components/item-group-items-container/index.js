import "./styles.css"

export function createItemsContainer(items) {
    const itemsContainer = document.createElement("div")
    itemsContainer.classList.add("group-item_items-container")
    console.log(items.getItems())
    return itemsContainer
} 