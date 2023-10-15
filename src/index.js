import "./styles/style.css";
import plusIcon from "./assets/icons/plus.svg";
import todoItem from "./modules/todo_object";
import project from "./modules/project_object";
import todoModal from "./modules/modals/todo_modal";
import projectModal from "./modules/modals/project_modal";

const projectModalHtml = projectModal.getHtml();
const projectModalInfo = projectModal.getInfo();
const todoModalHtml = todoModal.getHtml();
const todoModalInfo = todoModal.getInfo()

const renderBody = (elements) => {
    const stack = elements.slice().reverse();
    document.body.replaceChildren(projectModalHtml, todoModalHtml, addProjectButton, ...stack);
}

const bodyElements = [project("Test", "Test", "2023-02-02", "high", "Some generic notes.").createCard()]; // temp

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
    projectModalHtml.showModal();
})

projectModalHtml.addEventListener("submit", () => {
    let newProject = project().fromObject(projectModalInfo);
    let newProjectCard = newProject.createCard();
    bodyElements.push(newProjectCard);
    renderBody(bodyElements);
})

todoModalHtml.addEventListener("submit", () => {
    let newTodo = todoItem().fromObject(todoModalInfo);
    let newTodoCard = newTodo.createCard();
    bodyElements.push(newTodoCard);
    renderBody(bodyElements);
})