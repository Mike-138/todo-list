const createSelect = (name, id, ...options) => {

    const fieldContainer = document.createElement("div");
    fieldContainer.classList.add("field-container");
    const fieldLabel = document.createElement("label");
    fieldLabel.setAttribute("for", id);
    const field = document.createElement("select");
    field.setAttribute("name", name);
    field.setAttribute("id", id);

    for (let option of options) {
        let currentOption = document.createElement("option");
        currentOption.setAttribute("value", option);
        currentOption.textContent = option;
        field.appendChild(currentOption);
    }

    fieldContainer.append(fieldLabel, field);

    return fieldContainer;

};

export default createSelect;