import "./styles/style.css";
import plusIcon from "./assets/icons/plus.svg";
import todoItem from "./modules/todo_object";
import project from "./modules/project_object";
import todoModal from "./modules/modals/todo_modal";
import projectModal from "./modules/modals/project_modal";

const renderBody = (elements) => {
    const stack = elements.slice().reverse();
    document.body.replaceChildren(projectModal.getHtml(), addProjectButton, ...stack);
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
    projectModal.getHtml().showModal();
})

projectModal.getHtml().addEventListener("submit", () => {
    const createProject = () => {
        const container = document.createElement("div");
        const title = document.createElement("h1");
        title.textContent = projectModal.getInfo().title;
        const description = document.createElement("h2");
        description.textContent = projectModal.getInfo().description;
        const dueDate = document.createElement("h3");
        dueDate.textContent = projectModal.getInfo().due;
        const priority = document.createElement("h4");
        priority.textContent = projectModal.getInfo().priority;
        const notes = document.createElement("p");
        notes.textContent = projectModal.getInfo().notes;
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