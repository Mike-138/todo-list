const createField = (type, name, id, required = false) => {

    const fieldContainer = document.createElement("div");
    fieldContainer.classList.add("field-container");
    const fieldLabel = document.createElement("label");
    fieldLabel.setAttribute("for", id);
    const field = document.createElement("input");
    field.setAttribute("type", type);
    field.setAttribute("name", name);
    field.setAttribute("id", id);

    if (required) {
        field.setAttribute("required", "");
    }

    fieldContainer.append(fieldLabel, field);

    return fieldContainer;

};

export default createField;