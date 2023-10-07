import createModal from "./modal_template";

const projectModal = createModal("projectDialog", "projectTitle", "projectDesc", "projectDueDate", "projectPriority", "projectNotes", "projectConfirmButton");

export default projectModal;