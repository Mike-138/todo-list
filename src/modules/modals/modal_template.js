import createField from "./field_template";


const createModal = () => {

    // Store form inputs
    const formInfo = [];
    
    // Create all modal elements
    const modalDialog = document.createElement("dialog");

    const modalForm = document.createElement("form");
    modalForm.setAttribute("method", "dialog");

    const modalTitle = (titleId) => {
        document.createElement("input");
        modalTitle.setAttribute("type", "text");
        modalTitle.setAttribute("name", titleId);
        modalTitle.setAttribute("id", titleId);
        modalTitle.setAttribute("required", "");
        formInfo.push(modalTitle);
        const modalTitleContainer = createField(modalTitle, "Title");
    };

    const modalDescription = (descId) => {
        document.createElement("input");
        modalDescription.setAttribute("type", "text");
        modalDescription.setAttribute("name", descId);
        modalDescription.setAttribute("id", descId);
        formInfo.push(modalDescription);
        const modalDescriptionContainer = createField(modalDescription, "Description");
    };

    const modalDueDate = (dueDateId) => {
        document.createElement("input");
        modalDueDate.setAttribute("type", "date");
        modalDueDate.setAttribute("name", dueDateId);
        modalDueDate.setAttribute("id", dueDateId);
        modalDueDate.setAttribute("required", "");
        formInfo.push(modalDueDate);
        const modalDueDateContainer = createField(modalDueDate, "Due");
    };

    const modalPriority = (priorityId) => {
        document.createElement("select");
        modalPriority.setAttribute("name", priorityId);
        modalPriority.setAttribute("id", priorityId);

        const options = ["low", "medium", "high", "urgent"];
        for (let option of options) {
            let currentOption = document.createElement("option");
            currentOption.setAttribute("value", option);
            currentOption.textContent = option.toUpperCase();
            modalPriority.appendChild(currentOption);
        }
        formInfo.push(modalPriority);
        const modalPriorityContainer = createField(modalPriority, "Priority");
    };

    const modalNotes = (notesId) => {
        document.createElement("textarea");
        modalNotes.setAttribute("name", notesId);
        modalNotes.setAttribute("id", notesId);
        formInfo.push(modalNotes);
        const modalNotesContainer = createField(modalNotes, "Notes");
    };

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Add";

    // Assemble modal elements
    modalForm.append(
        modalTitleContainer,
        modalDescriptionContainer,
        modalDueDateContainer,
        modalPriorityContainer,
        modalNotesContainer,
        cancelButton,
        confirmButton
    );

    modalDialog.appendChild(modalForm);

    // Clear form
    const clear = () => {
        for (let item of formInfo) {
            if (item.tagName === "SELECT") {
                item.value = item.firstChild.value;
            } else {
                item.value = "";
            }
        }
    };

    // Cancel form
    cancelButton.addEventListener("click", (event) => {
        event.preventDefault();
        clear();
        modalDialog.close();
    });

    // Store form information in modalDialog.information object
    modalForm.addEventListener("submit", () => {
        modalDialog.information = {
            title: modalTitle.value,
            description: modalDescription.value,
            dueDate: modalDueDate.value,
            priority: modalPriority.value,
            notes: modalNotes.value
        };
        clear();
    });

    return modalDialog;

};

export default createModal;