import { createProjectGroupSection } from "../project-group-section"
import "./styles.css"

const menubar = document.getElementsByClassName("menubar")[0]
export function renderMenuBar() {
    console.log("Rendering Menu Bar")
    menubar.innerHTML = ""
    menubar.appendChild(createProjectGroupSection())
}