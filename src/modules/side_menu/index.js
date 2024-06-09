import { refreshProjects, renderProjects } from "../projects"
import "./styles.css"

export function renderSideMenu() {
    // This function is meant to be called during the initialization of the app
    console.log("Rendering side-menu")
    renderProjects()
}

export function refreshSideMenu() {
    // To re-render or refresh the side-menu for new updates use this function
    console.log("Refresing side-menu")
    refreshProjects()

}