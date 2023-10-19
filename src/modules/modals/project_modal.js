import modalFactory from "./modal_template";

const projectModal = (modalFactory("projectDialog")
    .makeHeader("h1", "Create a project!", true)
    .makeTitleField("projectTitle")
    .makeDescriptionField("projectDescription")
    .makeDueDateField("projectDueDate")
    .makePriorityField("projectPriority")
    .makeNotesField("projectNotes", true)
    .build()
    );

export default projectModal;