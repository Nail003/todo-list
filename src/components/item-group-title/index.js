import "./styles.css"

export function createItemGroupTitle(text) {
    const itemGroupTitleContainer = document.createElement("div")
    itemGroupTitleContainer.classList.add("item-group_title")

    createTitleHeading(text, itemGroupTitleContainer)
    createTitleButton(itemGroupTitleContainer)

    return itemGroupTitleContainer
}

function createTitleHeading(text, itemGroupTitleContainer) {
    const titleHeading = document.createElement("h2")
    titleHeading.textContent = text
    itemGroupTitleContainer.appendChild(titleHeading)
}

function createTitleButton(itemGroupTitleContainer) {
    const addItemButton = document.createElement("button")
    addItemButton.textContent = "+"
    itemGroupTitleContainer.appendChild(addItemButton)
}