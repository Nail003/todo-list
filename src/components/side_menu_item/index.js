import { deleteProject, renderProject } from "../../modules/projects"
import { createDeleteButton } from "../buttons/delete_button_squar"
import { createEditButton } from "../buttons/edit_button_squar"
import { renderEditProjectForm } from "../input_boxes/edit_project_input_box"
import "./styles.css"

export function createItem(name = "text") {
    // Create
    const itemContainer = document.createElement("div")

    // Create Child
    const title = document.createElement("h3")
    const buttonContainer = document.createElement("div")
    const editButton = createEditButton()
    const deleteButton = createDeleteButton()


    // Update
    itemContainer.classList.add("group__item")

    // Update Child
    title.classList.add("item__title")
    title.textContent = name

    buttonContainer.classList.add("item__button-container")

    editButton.classList.add("item__button")
    deleteButton.classList.add("item__button")

    // Event Listeners
    itemContainer.addEventListener("click", () => { handleClick(itemContainer) })

    // Event Listeners Child
    editButton.addEventListener("click", (e) => { handleEditButton(e, itemContainer) })
    deleteButton.addEventListener("click", (e) => { handleDeleteButton(e, itemContainer) })

    // Append Child
    buttonContainer.appendChild(editButton)
    buttonContainer.appendChild(deleteButton)

    itemContainer.appendChild(title)
    itemContainer.appendChild(buttonContainer)

    // Return
    return itemContainer
}

function handleClick(item) {
    // Get Index of Item
    const index = item.dataset.index

    // Render this item data
    renderProject(index)
}

function handleEditButton(e, item) {
    // Stop accidental parent clicks
    e.stopPropagation()

    // Get Index of Item
    const index = item.dataset.index

    // Leave Everything to the Form
    renderEditProjectForm(index)
}

function handleDeleteButton(e, item) {
    // Stop accidental parent clicks
    e.stopPropagation()

    // Get Index of Item
    const index = item.dataset.index

    // Leave Everything to the Form
    deleteProject(index)
}