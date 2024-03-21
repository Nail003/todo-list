import { Group } from "../../modules/group"
import { createItemGroup } from "../item-group"
import "./styles.css"

const projects = new Group("Projects")
export function createProjectGroupSection() {
    return createItemGroup(projects.getName(), projects)
}