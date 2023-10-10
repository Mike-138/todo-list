import modalFactory from "./modal_template";

const todoModal = modalFactory("todoDialog", "todoTitle", "todoDesc", "todoDueDate", "todoPriority", "todoNotes", "todoConfirmButton");

export default todoModal;