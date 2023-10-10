import modalFactory from "./modal_template";

const createTodoModal = modalFactory("todoDialog");

const todoModal = (createTodoModal
    .makeHeader("h1", "Create a task!")
    .makeTitleField("Title", "todoTitle")
    .makeDescriptionField("Description", "todoDescription")
    .makeDueDateField("Due", "todoDueDate")
    .makePriorityField("Priority", "todoPriority")
    .makeNotesField("Notes", "todoNotes")
    .build()
    );

export default todoModal;