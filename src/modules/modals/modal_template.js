import createField from "./field_template";
import createSelect from "./select_template";
import createTextarea from "./textarea_template";


const createModal = (dialogId, buttonId) => {

    const modalDialog = document.createElement("dialog");
    modalDialog.id = dialogId;

    const modalForm = document.createElement("form");
    modalForm.setAttribute("method", "dialog");

    const modalTitle = createField("text", "title", "title", true);

    const modalDescription = createField("text", "desc", "desc");

    const modalDueDate = createField("date", "due-date", "due-date", true);

    const modalPriority = createSelect("priority", "priority", "low", "medium", "high", "urgent");

    const modalNotes = createTextarea("notes", "notes");

    const confirmButton = document.createElement("button");
    confirmButton.id = buttonId;
    confirmButton.textContent = "Confirm";

    modalForm.append(
        modalTitle,
        modalDescription,
        modalDueDate,
        modalPriority,
        modalNotes,
        confirmButton
    );

    modalDialog.appendChild(modalForm);

    return modalDialog;

};

export default createModal;