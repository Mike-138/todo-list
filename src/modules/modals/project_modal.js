import modalFactory from "./modal_template";

const createProjectModal = modalFactory("projectDialog");

const projectModal = (createProjectModal
    .makeHeader("h1", "Create a project!")
    .makeTitleField("Title", "projectTitle")
    .makeDescriptionField("Description", "projectDescription")
    .makeDueDateField("Due", "projectDueDate")
    .makePriorityField("Priority", "projectPriority")
    .makeNotesField("Notes", "projectNotes")
    .build()
    );

export default projectModal;