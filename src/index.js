import "./styles/style.css";
import plusIcon from "./assets/icons/plus.svg";
import todoItem from "./modules/todo_object";
import project from "./modules/project_object";
import todoModal from "./modules/modals/todo_modal";
import projectModal from "./modules/modals/project_modal";

const addProjectButton = (() => {
    const button = document.createElement("button");
    button.classList.add("add-project-button");
    const image = new Image();
    image.src = plusIcon;
    button.appendChild(image);
    return button;
})();

document.body.append(projectModal, addProjectButton);