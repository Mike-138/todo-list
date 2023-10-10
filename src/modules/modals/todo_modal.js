import modalFactory from "./modal_template";

const todoModal = (modalFactory("todoDialog")
    .makeHeader("h1", "Create a task!")
    .makeTitleField("todoTitle")
    .makeDescriptionField("todoDescription")
    .makeDueDateField("todoDueDate")
    .makePriorityField("todoPriority")
    .makeNotesField("todoNotes")
    .build()
    );

export default todoModal;