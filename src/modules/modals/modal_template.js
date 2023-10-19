import "../../styles/modal.css";
import checkIcon from "../../assets/icons/check.svg";
import closeIcon from "../../assets/icons/close.svg";


const modalFactory = (modalId) => {

    // Store form elements
    const _formHeaders = [];
    const _formFields = [];
    
    // Define private properties
    const _info = {};

    const _modalDialog = document.createElement("dialog");
    _modalDialog.setAttribute("id", modalId);

    const _modalForm = document.createElement("form");
    _modalForm.setAttribute("method", "dialog");

    const _cancelButton = (() => {
        const button = document.createElement("button");
        button.classList.add("cancel-button");
        const image = new Image();
        image.src = closeIcon;
        button.appendChild(image);
        return button;
    })();

    const _confirmButton = (() => {
        const button = document.createElement("button");
        button.classList.add("confirm-button");
        const image = new Image();
        image.src = checkIcon;
        button.appendChild(image);
        return button;
    })();

    // Define private methods
    const _packageField = (field) => {

        const fieldContainer = document.createElement("div");
        fieldContainer.classList.add("field-container");
        const fieldLabel = document.createElement("label");
        fieldLabel.setAttribute("for", field.id);
        // Capitalize label name in DOM
        fieldLabel.textContent = field.name[0].toUpperCase() + field.name.slice(1);

        if (field.tagName === "TEXTAREA") {

            field.setAttribute("rows", 4);

        }

        if (field.dataset.width === "wide") {
            fieldContainer.classList.add("wide");
        }
    
        fieldContainer.append(fieldLabel, field);
    
        return fieldContainer;
    
    };

    const _fieldFactory = (divType, inputName, {inputType, required = false, options = []} = {}) => {

        // Function keyword over arrow function to attach "this" to an object and not to the outer function where it is defined
        const makeField = function(inputId, wide = false) {

            const field = document.createElement(divType);
            field.setAttribute("name", inputName);
            field.setAttribute("id", inputId);

            if (divType === "input") {

                field.setAttribute("type", inputType);

            } else if (divType === "select") {

                for (let option of options) {
                    let currentOption = document.createElement("option");
                    currentOption.setAttribute("value", option);
                    currentOption.textContent = option.toUpperCase();
                    field.appendChild(currentOption);
                }

            }
    
            if (required) {
                field.setAttribute("required", "");
            }

            if (wide) {
                field.setAttribute("data-width", "wide");
            }
            
            _formFields.push(field);
            return this;

        };

        return makeField;

    };

    // Define public methods
    const getHtml = () => _modalDialog;

    const getInfo = () => _info;

    const makeTitleField = _fieldFactory("input", "title", {inputType: "text", required: true});

    const makeDescriptionField = _fieldFactory("input", "description", {inputType: "text"});

    const makeDueDateField = _fieldFactory("input", "due", {inputType: "date", required: true});

    const makePriorityField = _fieldFactory("select", "priority", {options: ["low", "medium", "high", "urgent"]})

    const makeNotesField = _fieldFactory("textarea", "notes");

    // Function keyword over arrow function to attach "this" to an object and not to the outer function where it is defined
    const makeHeader = function(size, content, wide = true) {

        const header = document.createElement(size);
        header.textContent = content;

        if (wide) {
            header.classList.add("wide", "center");
        }

        _formHeaders.push(header);
        return this;

    }

    const build = () => {

        for (let header of _formHeaders) {
            _modalForm.appendChild(header);
        }

        for (let field of _formFields) {
            let packagedField = _packageField(field);
            _modalForm.appendChild(packagedField);
        }

        _modalForm.appendChild(_cancelButton);
        _modalForm.appendChild(_confirmButton);

        _modalDialog.appendChild(_modalForm)

        return {
            getHtml,
            getInfo
        };

    };

    const __setInfo = () => {
        for (let field of _formFields) {
            _info[field.name] = field.value;
        }
    }

    const __clearForm = () => {
        for (let field of _formFields) {
            if (field.tagName === "SELECT") {
                field.value = field.firstChild.value;
            } else {
                field.value = "";
            }
        }
    };

    // Cancel form
    _cancelButton.addEventListener("click", (event) => {
        event.preventDefault();
        __clearForm();
        _modalDialog.close();
    });

    // Store form information in info object
    _modalDialog.addEventListener("submit", () => {
        __setInfo();
        __clearForm();
    });

    return {
        makeHeader,
        makeTitleField,
        makeDescriptionField,
        makeDueDateField,
        makePriorityField,
        makeNotesField,
        build
    };

};

export default modalFactory;