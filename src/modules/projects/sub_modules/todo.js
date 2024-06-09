import { projects } from "..";
import { TodoItem } from "../../../classes/todo-item";
import { renderTodoList } from "../../../components/todo_list";
import { storeProjectsInLocalStorate } from "./localStorage";

export function createTodo(data) {
    // Data is a dictionary
    // Data must include the index of the project
    // Data should contain title, description, due-date and priorty

    // Create Todo
    const todo = new TodoItem

    // Set todo data
    todo.settitle(data.title)
    todo.setDescription(data.description)
    todo.setdueDate(data.dueDate)
    todo.setPriority(data.priorty)

    // Add todo to the project
    const project = projects.getItem(data.projectIndex)
    project.appendItem(todo)

    // Store in localStorage
    storeProjectsInLocalStorate(projects)

    // Render todo list again
    renderTodoList(project)
}

export function deleteTodo(projectIndex, todoIndex) {
    // Get the parent project
    const project = projects.getItem(projectIndex)

    // Remove the todo
    project.deleteItem(todoIndex)

    // Store in localStorage
    storeProjectsInLocalStorate(projects)

    // Render todo list again
    renderTodoList(project)
}

export function updateTodo(data) {
    // Get Access Info
    const { projectIndex, todoIndex } = data

    // Get new todo data
    const { title, description, dueDate, priorty } = data

    // Create new todo
    const todo = new TodoItem(title, dueDate, priorty, description)

    // Get the parent project
    const project = projects.getItem(projectIndex)

    // Update todo
    project.updateItem(todoIndex, todo)

    // Store in localStorage
    storeProjectsInLocalStorate(projects)

    // Render todo list again 
    renderTodoList(project)
}

export function toggleTodoFinishedState(projectIndex, todoIndex) {
    // Get the parent project
    const project = projects.getItem(projectIndex)

    // Toggle finished state of todo
    project.getItem(todoIndex).toggleFinishedState()

    // Store in localStorage
    storeProjectsInLocalStorate(projects)

    // Render todo list again
    renderTodoList(project)
}