import modalFactory from "./modal_template";

const createProjectModal = modalFactory("projectDialog");

const projectModal = (createProjectModal
    .makeHeader("h1", "Create a project!")
    .makeTitleField("projectTitle")
    .makeDescriptionField("projectDescription")
    .makeDueDateField("projectDueDate")
    .makePriorityField("projectPriority")
    .makeNotesField("projectNotes")
    .build()
    );

export default projectModal;