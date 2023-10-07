import createModal from "./modal_template";

const todoModal = createModal("todoDialog", "todoTitle", "todoDesc", "todoDueDate", "todoPriority", "todoNotes", "todoConfirmButton");

export default todoModal;