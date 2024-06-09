import { createGroup } from "../../../components/side_menu_group"

export function renderGroupOnSideMenu(group) {
    // Get Parent
    const sideMenu = document.getElementsByClassName("side-menu")[0]

    // Create Child
    const groupDOM = createGroup(group.getName()) // Check the side_menu_group component for className

    // Append
    sideMenu.appendChild(groupDOM)
}