// Styles
import "./styles.css"

// Components
import { createAddButtonRound } from "../buttons/add_button_round"
import { createTodoCard } from "../cards/todo_card"
import { renderNewTodoInputBox } from "../input_boxes/new_todo_input_box"

export function createTodoList(project) {
    // Create
    const todoList = document.createElement("div")

    // Create Child
    const title = document.createElement("h2")
    const createTaskButton = createAddButtonRound()

    // Update
    todoList.classList.add("todo-list")

    // Update Child
    title.classList.add("todo-list__title")
    title.textContent = project.getName()

    createTaskButton.classList.add("todo-list__create-task-button")

    // Event Listeners Child
    createTaskButton.addEventListener("click", () => handleCreateTaskButton(project.index))

    // Append Child
    todoList.appendChild(title)
    todoList.appendChild(createTaskButton)

    createAndAppendProjectTodos(project, todoList)

    return todoList
}

export function renderTodoList(project) {
    // Get
    const itemsContainer = document.getElementsByClassName("items-container")[0]

    // Remove Old Content
    itemsContainer.innerHTML = ""

    // Create Child
    const todoList = createTodoList(project)

    // Append Child
    itemsContainer.appendChild(todoList)
}

export function emptyTodoList() {
    // Get
    const itemsContainer = document.getElementsByClassName("items-container")[0]

    // Remove Old Content
    itemsContainer.innerHTML = ""
}

function createAndAppendProjectTodos(project, todoList) {
    // Get
    const todos = project.getItems()

    // Fail Safe
    // If there are no todos return
    if (todos.length === 0) return

    // Loop untill all todos are displayed
    let todoIndex = 0 // This is used for access purposes
    for (const todo of todos) {
        // Get data
        const data = todo.getAllData()

        // Provide the todo-access indexes
        data.projectIndex = project.index
        data.todoIndex = todoIndex++

        // Create todo
        const todoCard = createTodoCard(data)

        // Append Card
        todoList.appendChild(todoCard)
    }
}

// Event handlers

function handleCreateTaskButton(projectIndex) {
    renderNewTodoInputBox(projectIndex)
}