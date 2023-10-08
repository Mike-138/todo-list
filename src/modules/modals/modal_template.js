import createField from "./field_template";


const createModal = (dialogId, titleId, descId, dueDateId, priorityId, notesId, buttonId) => {

    // Create all modal elements
    const modalDialog = document.createElement("dialog");
    modalDialog.setAttribute("id", dialogId);

    const modalForm = document.createElement("form");
    modalForm.setAttribute("method", "dialog");

    const modalTitle = document.createElement("input");
    modalTitle.setAttribute("type", "text");
    modalTitle.setAttribute("name", titleId);
    modalTitle.setAttribute("id", titleId);
    modalTitle.setAttribute("required", "");
    const modalTitleContainer = createField(modalTitle, "Title");

    const modalDescription = document.createElement("input");
    modalDescription.setAttribute("type", "text");
    modalDescription.setAttribute("name", descId);
    modalDescription.setAttribute("id", descId);
    const modalDescriptionContainer = createField(modalDescription, "Description");

    const modalDueDate = document.createElement("input");
    modalDueDate.setAttribute("type", "date");
    modalDueDate.setAttribute("name", dueDateId);
    modalDueDate.setAttribute("id", dueDateId);
    modalDueDate.setAttribute("required", "");
    const modalDueDateContainer = createField(modalDueDate, "Due");

    const modalPriority = document.createElement("select");
    modalPriority.setAttribute("name", priorityId);
    modalPriority.setAttribute("id", priorityId);

    const options = ["low", "medium", "high", "urgent"];
    for (let option of options) {
        let currentOption = document.createElement("option");
        currentOption.setAttribute("value", option);
        currentOption.textContent = option;
        modalPriority.appendChild(currentOption);
    }
    const modalPriorityContainer = createField(modalPriority, "Priority");

    const modalNotes = document.createElement("textarea");
    modalNotes.setAttribute("name", notesId);
    modalNotes.setAttribute("id", notesId);
    const modalNotesContainer = createField(modalNotes, "Notes");

    const confirmButton = document.createElement("button");
    confirmButton.setAttribute("id", buttonId);
    confirmButton.textContent = "Confirm";

    // Assemble modal elements
    modalForm.append(
        modalTitleContainer,
        modalDescriptionContainer,
        modalDueDateContainer,
        modalPriorityContainer,
        modalNotesContainer,
        confirmButton
    );

    modalDialog.appendChild(modalForm);

    // Store form information in modalDialog.information object
    modalForm.addEventListener("submit", () => {
        modalDialog.information = {
            title: modalTitle.value,
            description: modalDescription.value,
            dueDate: modalDueDate.value,
            priority: modalPriority.value,
            notes: modalNotes.value
        };
    });

    return modalDialog;

};

export default createModal;