export class Group {
    // This class is meant to create the most top level container that will store data about all your tasks
    // i.e projects, checklists, notes, etc
    #name
    #items // Array to store all the todos, checklists, etc
    constructor(name) {
        this.#name = name
        this.#items = []
    }

    appendItem(item) {
        this.#items.push(item)
    }

    getName() {
        return this.#name
    }

    getItem(index) {
        return this.#items[index]
    }

    getItems() {
        return this.#items
    }

    updateItem(index, newItem) {
        this.#items[index] = newItem
    }

    updateName(newName) {
        this.#name = newName
    }

    deleteItem(index) {
        this.#items.splice(index, 1)
    }
}