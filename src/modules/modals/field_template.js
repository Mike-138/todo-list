const createField = (field) => {

    const fieldContainer = document.createElement("div");
    fieldContainer.classList.add("field-container");
    const fieldLabel = document.createElement("label");
    fieldLabel.setAttribute("for", field.id);

    fieldContainer.append(fieldLabel, field);

    return fieldContainer;

};

export default createField;