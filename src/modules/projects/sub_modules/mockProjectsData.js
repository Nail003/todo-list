import { Group } from "../../../classes/group"
import { TodoItem } from "../../../classes/todo-item"

export function mockProjectsData(projects) {
    const demo = new Group("Mock Project")
    const description = "Set up the zombie workers for wood colloection and vineyard Set up the zombie workers for wood colloection and vineyard"
    const demoItem = new TodoItem("Click on me to show the description", "2024-06-25", "low", description)
    demo.appendItem(demoItem)

    const description2 = "Create a todo list likes of which has never seen before"
    const demoItem2 = new TodoItem("Click again to hide the description", "2024-06-25", "high", description2)
    demo.appendItem(demoItem2)

    const description3 = "Create a tic tac toe game where the AI is so strong that the player always loses"
    const demoItem3 = new TodoItem("Click the plus button in bottom right to create todo", "2024-06-25", "medium", description3)
    demo.appendItem(demoItem3)

    const description4 = "Go outside and touch grass. Appearently it is good for my health?"
    const demoItem4 = new TodoItem("Click on plus icon on the top left to create new project", "2024-06-25", "medium", description4)
    demo.appendItem(demoItem4)

    projects.appendItem(demo)
}