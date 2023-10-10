import "./styles/style.css";
import plusIcon from "./assets/icons/plus.svg";
import todoItem from "./modules/todo_object";
import project from "./modules/project_object";
import todoModal from "./modules/modals/todo_modal";
import projectModal from "./modules/modals/project_modal";

const projectHtml = projectModal.getHtml();
const projectInfo = projectModal.getInfo();

const renderBody = (elements) => {
    const stack = elements.slice().reverse();
    document.body.replaceChildren(projectHtml, addProjectButton, ...stack);
}

const bodyElements = [];

const addProjectButton = (() => {
    const button = document.createElement("button");
    button.classList.add("add-project-button");
    const image = new Image();
    image.src = plusIcon;
    button.appendChild(image);
    return button;
})();

renderBody(bodyElements);

addProjectButton.addEventListener("click", () => {
    projectHtml.showModal();
})

/* projectHtml.addEventListener("submit", () => {
    const createProject = () => {
        const container = document.createElement("div");
        const title = document.createElement("h1");
        title.textContent = projectInfo.title;
        const description = document.createElement("h2");
        description.textContent = projectInfo.description;
        const dueDate = document.createElement("h3");
        dueDate.textContent = projectInfo.due;
        const priority = document.createElement("h4");
        priority.textContent = projectInfo.priority;
        const notes = document.createElement("p");
        notes.textContent = projectInfo.notes;
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
}) */

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