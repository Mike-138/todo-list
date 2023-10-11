import project from "./project_object";
import projectModal from "./modals/project_modal";

const projectCard = (projectModal) => {

    const _projectModalInfo = projectModal.getInfo();

    const _newProject = project(
        _projectModalInfo.title,
        _projectModalInfo.description,
        _projectModalInfo.due,
        _projectModalInfo.priority,
        _projectModalInfo.notes
        );

    const _createContainer = (tag) => {
        const addContent = (content) => {
            const container = document.createElement(tag);
            container.textContent = content;
            return container;
        };
        return addContent;
    };

    const _addTitleElement = _createContainer("h1");

    const _addSubtitleElement = _createContainer("h2")

    const _addKeyElement = _createContainer("h4")

    const _addBodyElement = _createContainer("p");

    const createCard = () => {

        const container = document.createElement("div");
        container.classList.add("project");

        const title = _addTitleElement(_newProject.getTitle());
        title.classList.add("title");

        const description = _addSubtitleElement(_newProject.getDescription());
        description.classList.add("description");

        const dueDate = _addKeyElement(_newProject.getDueDate());
        dueDate.classList.add("due");

        const priority = _addKeyElement(_newProject.getPriority());
        priority.classList.add("priority");

        const notes = _addBodyElement(_newProject.getNotes());
        notes.classList.add("notes");

        container.append(
            title,
            description,
            dueDate,
            priority,
            notes
        );

        return container;
    };

    return { createCard };
};

export default projectCard;