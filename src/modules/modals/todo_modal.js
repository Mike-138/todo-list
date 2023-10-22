import modalFactory from "./modal_template";

const todoModal = modalFactory("todoDialog")
  .makeHeader("h1", "Create a task!", true)
  .makeTitleField("todoTitle", true)
  .makeDueDateField("todoDueDate")
  .makePriorityField("todoPriority")
  .build();

export default todoModal;
