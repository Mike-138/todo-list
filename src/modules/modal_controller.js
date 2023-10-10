import project from "./project_object";
import projectModal from "./modals/project_modal";

const projectHtml = projectModal.getHtml();
const projectInfo = projectModal.getInfo();

projectHtml.addEventListener("submit", () => {
    const createProject = () => {

        const newProject = project(projectInfo.title, projectInfo.description, projectInfo.due, projectInfo.priority, projectInfo.notes)

        const container = document.createElement("div");

        const title = newProject.generatePropertyElement(newProject.getTitle);

        const description = newProject.generatePropertyElement(newProject.getDescription);

        const dueDate = newProject.generatePropertyElement(newProject.getDueDate);

        const priority = newProject.generatePropertyElement(newProject.getPriority);

        const notes = newProject.generatePropertyElement(newProject.getNotes);

        container.append(
            title,
            description,
            dueDate,
            priority,
            notes
        )
        return container;
    }
    bodyElements.push(createProject());
    renderBody(bodyElements);
})