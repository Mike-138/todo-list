import "./styles/style.css";
import plusIcon from "./assets/icons/plus.svg";
import todoItem from "./modules/todo_object";
import project from "./modules/project_object";
import todoModal from "./modules/modals/todo_modal";
import projectModal from "./modules/modals/project_modal";
import projectCard from "./modules/modal_controller";

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

projectHtml.addEventListener("submit", () => {
    let newProject = projectCard(projectModal);
    let newProjectCard = newProject.createCard();
    bodyElements.push(newProjectCard);
    renderBody(bodyElements);
})