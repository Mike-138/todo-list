import modalFactory from "./modal_template";

const projectModal = (modalFactory("projectDialog")
    .makeHeader("h1", "Create a project!")
    .makeTitleField("projectTitle")
    .makeDescriptionField("projectDescription")
    .makeDueDateField("projectDueDate")
    .makePriorityField("projectPriority")
    .makeNotesField("projectNotes")
    .build()
    );

export default projectModal;