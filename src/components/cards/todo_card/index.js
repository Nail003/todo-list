import { deleteTodo, toggleTodoFinishedState } from "../../../modules/projects/sub_modules/todo"
import { createDeleteButton } from "../../buttons/delete_button_squar"
import { createEditButton } from "../../buttons/edit_button_squar"
import { createTickCrossButtonSquar } from "../../buttons/tick_cross_button_squar"
import { renderUpdateTodoInputBox } from "../../input_boxes/update_todo_input_box"
import "./styles.css"

export function createTodoCard(data) {
    // Create
    const card = document.createElement("div")

    // Create Child
    const header = document.createElement("div")
    const title = document.createElement("h4")
    const description = document.createElement("h4")
    const dueDate = document.createElement("h4")
    const toggleCheckmarkButton = createTickCrossButtonSquar(data.finishedState)
    const editButton = createEditButton()
    const deleteButton = createDeleteButton()
    const cutLine = document.createElement("div")

    // Update
    card.classList.add("todo-card")
    card.classList.add("todo-card--" + data.priority)

    // Update Child
    header.classList.add("todo-card__header")

    title.classList.add("todo-card__title")
    title.textContent = data.title

    description.classList.add("todo-card__description")
    description.textContent = data.description
    toggleDisplay(description)

    dueDate.classList.add("todo-card__due-date")
    dueDate.textContent = data.dueDate

    toggleCheckmarkButton.classList.add("todo-card__toggle-checkmark-button")
    editButton.classList.add("todo-card__edit-button")
    deleteButton.classList.add("todo-card__delete-button")

    cutLine.classList.add("todo-card__cut-line")
    !data.finishedState && toggleDisplay(cutLine)


    // Append Child
    header.appendChild(toggleCheckmarkButton)
    header.appendChild(title)
    header.appendChild(editButton)
    header.appendChild(deleteButton)
    header.appendChild(dueDate)
    header.appendChild(cutLine)

    card.appendChild(header)
    card.appendChild(description)

    // Event Listeners
    card.addEventListener("click", handleCardClick(description))

    // Event Listeners Child
    toggleCheckmarkButton.addEventListener("click", handleToggleCheckmarkButton(data))
    editButton.addEventListener("click", handleEditButton(data))
    deleteButton.addEventListener("click", handleDeleteButton(data))

    // Return
    return card
}

function handleCardClick(description) {
    // Toggles the display of description section
    return (_e) => {
        toggleDisplay(description)
    }
}

function toggleDisplay(domElement) {
    // Toggle the display of the dom-element
    // Draw backs
    // Will set the display to browser default display not the user defined

    // Get current display value for comparision
    const display = domElement.style.display
    if (display != "none") {
        // Hide the element
        domElement.style.display = "none"
    } else {
        // Display the element
        domElement.style.display = ""
    }
}

function handleToggleCheckmarkButton(data) {
    return (e) => {
        // Stop accidental parent click
        e.stopPropagation()

        // Get this todo access data
        const { projectIndex, todoIndex } = data

        // Toggle State
        toggleTodoFinishedState(projectIndex, todoIndex)
    }
}

function handleEditButton(data) {
    return (e) => {
        // Stop accidental parent click
        e.stopPropagation()

        // Render the input form
        renderUpdateTodoInputBox(data)
    }
}

function handleDeleteButton(data) {
    return (e) => {
        // Stop accidental parent click
        e.stopPropagation()

        // Get this todo access data
        const { projectIndex, todoIndex } = data

        // Delete this todo
        deleteTodo(projectIndex, todoIndex)
    }
}