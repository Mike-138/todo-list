import modalFactory from "./modal_template";

const createProjectModal = modalFactory("projectDialog");

createProjectModal.makeHeader("h1", "Create a project!");
createProjectModal.makeTitleField("Title", "projectTitle")
createProjectModal.makeDescriptionField("Description", "projectDescription")
createProjectModal.makeDueDateField("Due", "projectDueDate")
createProjectModal.makePriorityField("Priority", "projectPriority")
createProjectModal.makeNotesField("Notes", "projectNotes")

const projectModal = createProjectModal.build();

export default projectModal;