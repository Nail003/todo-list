import "./styles.css"

export function createMenuItemButton(text = "", classList = "", id = "") {
    const button = document.createElement("button")
    button.textContent = text
    button.classList = classList
    button.classList.add("menu-item-button")
    button.id = id
    return button
}