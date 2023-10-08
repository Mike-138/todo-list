const createField = (field, label) => {

    const fieldContainer = document.createElement("div");
    fieldContainer.classList.add("field-container");
    const fieldLabel = document.createElement("label");
    fieldLabel.setAttribute("for", field.id);
    fieldLabel.textContent = label;

    fieldContainer.append(fieldLabel, field);

    return fieldContainer;

};

export default createField;