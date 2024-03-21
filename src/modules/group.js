export class Group {
    #name
    #items
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