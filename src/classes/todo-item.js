export class TodoItem {
    // This class is meant to create a single todo item that is further stored in a group
    // Currently it is used to create todos for projects group
    #title
    #dueDate
    #priority
    #description
    #finishedState

    constructor(title, dueDate, priority, description, finishedState = false) {
        this.#title = title
        this.#dueDate = dueDate
        this.#priority = priority
        this.#description = description
        this.#finishedState = finishedState
    }

    getAllData() {
        return {
            title: this.#title,
            dueDate: this.#dueDate,
            priority: this.#priority,
            description: this.#description,
            finishedState: this.#finishedState,
        }
    }

    settitle(newTitle) {
        this.#title = newTitle
    }

    gettitle() {
        return this.#title
    }

    setdueDate(newDueDate) {
        this.#dueDate = newDueDate
    }

    getdueDate() {
        return this.#dueDate
    }

    setPriority(newPritioty) {
        this.#priority = newPritioty
    }

    getPriority() {
        return this.#priority
    }

    setDescription(newDescription) {
        this.#description = newDescription
    }

    getDescription() {
        return this.#description
    }

    getFinisedState() {
        return this.#finishedState
    }

    toggleFinishedState() {
        this.#finishedState = !this.#finishedState
    }
}