import { format } from "date-fns";


const project = (title, description, dueDate, priority, notes, ...items) => {

    const _createContainer = (tag) => {
        const addContent = (content) => {
            const container = document.createElement(tag);
            container.textContent = content;
            return container;
        };
        return addContent;
    };

    const _addTitleElement = _createContainer("h1");

    const _addSubtitleElement = _createContainer("h2")

    const _addKeyElement = _createContainer("h4")

    const _addBodyElement = _createContainer("p");

    const getTitle = () => title;

    const setTitle = (string) => {
        title = string;
    };

    const getDescription = () => description;

    const setDescription = (string) => {
        description = string;
    };

    const getDueDate = () => dueDate;

    const setDueDate = (date) => {
        dueDate = date;
    };

    const getFormattedDueDate = () => {
        const year = Number(dueDate.slice(0, 4));
        // Subtract one to correct index for formatting
        const month = Number(dueDate.slice(5, 7)) - 1;
        const day = Number(dueDate.slice(8, 10));
        return format(new Date(year, month, day), "PPP");
    }

    const getPriority = () => priority;

    const setPriority = (value) => {
        priority = value;
    };

    const getNotes = () => notes;

    const setNotes = (string) => {
        notes = string;
    };
    
    const _todoList = items;

    const getTodoList = () => _todoList;

    const addToTodoList = (item) => {
        _todoList.push(item);
    };

    const removeFromTodoList = (item) => {
        const index = _todoList.indexOf(item);
        _todoList.splice(index, 1);
    };

    const fromObject = function(obj) {
        const { title = "", description = "", due = "", priority = "", notes = "" } = obj;
        setTitle(title);
        setDescription(description);
        setDueDate(due);
        setPriority(priority);
        setNotes(notes);
        return this;
    }

    const createCard = () => {

        const container = document.createElement("div");
        container.classList.add("project");

        const title = _addTitleElement(getTitle());
        title.classList.add("title");

        const description = _addSubtitleElement(getDescription());
        description.classList.add("description");

        const dueDate = _addKeyElement(getFormattedDueDate());
        dueDate.classList.add("due");

        const priority = _addKeyElement(getPriority());
        priority.classList.add("priority");

        const notes = _addBodyElement(getNotes());
        notes.classList.add("notes");

        container.append(
            title,
            description,
            dueDate,
            priority,
            notes
        );

        return container;
    };

    return {
        getTitle,
        setTitle,
        getDescription,
        setDescription,
        getDueDate,
        setDueDate,
        getFormattedDueDate,
        getPriority,
        setPriority,
        getNotes,
        setNotes,
        getTodoList,
        addToTodoList,
        removeFromTodoList,
        fromObject,
        createCard
    };

};

export default project;