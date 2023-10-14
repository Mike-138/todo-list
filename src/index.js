import "./styles/style.css";
import plusIcon from "./assets/icons/plus.svg";
import todoItem from "./modules/todo_object";
import project from "./modules/project_object";
import todoModal from "./modules/modals/todo_modal";
import projectModal from "./modules/modals/project_modal";

const modalHtml = projectModal.getHtml();
const modalInfo = projectModal.getInfo();

const renderBody = (elements) => {
    const stack = elements.slice().reverse();
    document.body.replaceChildren(modalHtml, addProjectButton, ...stack);
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
    modalHtml.showModal();
})

modalHtml.addEventListener("submit", () => {
    let newProject = project().fromObject(modalInfo);
    let newProjectCard = newProject.createCard();
    bodyElements.push(newProjectCard);
    renderBody(bodyElements);
})