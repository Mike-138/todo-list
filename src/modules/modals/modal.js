import createField from "./field";
import createSelect from "./select";
import createTextarea from "./textarea";


const createModal = () => {

    const modalDialog = document.createElement("dialog");
    modalDialog.setAttribute("open", ""); // temp

    const modalForm = document.createElement("form");
    modalForm.setAttribute("method", "dialog");

    const modalTitle = createField("text", "title", "title", true);

    const modalDescription = createField("text", "desc", "desc");

    const modalDueDate = createField("date", "due-date", "due-date", true);

    const modalPriority = createSelect("priority", "priority", "low", "medium", "high", "urgent");

    const modalNotes = createTextarea("notes", "notes");

    const confirmButton = document.createElement("button");
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