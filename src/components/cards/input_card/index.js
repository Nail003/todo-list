import "./styles.css"

export function createInputCard() {
    // Create
    const inputCard = document.createElement("div")

    // Update
    inputCard.classList.add("input-card")

    // Event Listener
    inputCard.addEventListener("click", handleClick)

    // Return
    return inputCard
}

function handleClick(e) {
    // We don't have a remove button
    // To remove this field the user needs to click anywhere except this box
    // In this case anywhere = parent of this box
    // Thats why we want to hide clicks on this child from its parents
    e.stopPropagation()
}