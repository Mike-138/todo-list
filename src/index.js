import "./styles/style.css";
import plusIcon from "./assets/icons/plus.svg";
import todoItem from "./modules/todo_object";
import project from "./modules/project_object";
import todoModal from "./modules/modals/todo_modal";
import projectModal from "./modules/modals/project_modal";

const renderBody = (elements) => {
    const stack = elements.slice().reverse();
    document.body.replaceChildren(projectModal, addProjectButton, ...stack);
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
    projectModal.showModal();
})

projectModal.addEventListener("submit", () => {
    const createProject = () => {
        const container = document.createElement("div");
        const title = document.createElement("h1");
        title.textContent = projectModal.information.title;
        const description = document.createElement("h2");
        description.textContent = projectModal.information.description;
        const dueDate = document.createElement("h3");
        dueDate.textContent = projectModal.information.dueDate;
        const priority = document.createElement("h4");
        priority.textContent = projectModal.information.priority;
        const notes = document.createElement("p");
        notes.textContent = projectModal.information.notes;
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