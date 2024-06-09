import { createAddButtonSquar } from "../buttons/add_button_squar"
import "./styles.css"

export function createGroup(name) {
    // Create
    const group = document.createElement("div")

    // Create Child
    const buttonContainer = document.createElement("div")
    const itemContainer = document.createElement("div")
    const h2 = document.createElement("h2")
    const addButton = createAddButtonSquar()

    // Update
    group.classList.add("side-menu__group")
    group.classList.add("side-menu__" + name.toLowerCase())

    // Update Child
    buttonContainer.classList.add("group__button-container")
    buttonContainer.classList.add(name.toLowerCase() + "__button-container")

    itemContainer.classList.add("group__item-container")
    itemContainer.classList.add(name.toLowerCase() + "__item-container")

    h2.textContent = name

    addButton.classList.add("side-menu__add-button__" + name.toLowerCase())

    // Append Child
    buttonContainer.appendChild(h2)
    buttonContainer.appendChild(addButton)

    group.appendChild(buttonContainer)
    group.appendChild(itemContainer)

    // Return
    return group
}