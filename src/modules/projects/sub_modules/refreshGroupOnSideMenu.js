import { createItem } from "../../../components/side_menu_item"

export function refreshGroupOnSideMenu(group) {
    // Get Parent Group
    const groupItemContainer = document.getElementsByClassName(group.getName().toLowerCase() + "__item-container")[0]

    // Remove whole child tree
    groupItemContainer.innerHTML = ""

    // Create and Append Child
    let index = 0
    for (const item of group.getItems()) {
        // Create
        const itemDOM = createItem(item.getName())

        // Update
        itemDOM.dataset.index = index++ // For access purposes

        // Append
        groupItemContainer.appendChild(itemDOM)
    }
}