import modalFactory from "./modal_template";

const createTodoModal = modalFactory("todoDialog");

const todoModal = (createTodoModal
    .makeHeader("h1", "Create a task!")
    .makeTitleField("todoTitle")
    .makeDescriptionField("todoDescription")
    .makeDueDateField("todoDueDate")
    .makePriorityField("todoPriority")
    .makeNotesField("todoNotes")
    .build()
    );

export default todoModal;