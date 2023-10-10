const project = (title, description, dueDate, priority, notes, ...items) => {

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

    const generatePropertyElement = (getter) => {
        const element = getter();
        let container;

        switch (getter) {
            case getTitle:
                container = document.createElement("h1");
                break;
            case getDescription:
                container = document.createElement("h2");
                break;
            case getDueDate:
                container = document.createElement("h3");
                break;
            case getPriority:
                container = document.createElement("h4");
                break;
            case getNotes:
                container = document.createElement("p");
                break;
            default:
                return;
        }
        container.textContent = element;
        return container;
    };

    return {
        getTitle,
        setTitle,
        getDescription,
        setDescription,
        getDueDate,
        setDueDate,
        getPriority,
        setPriority,
        getNotes,
        setNotes,
        getTodoList,
        addToTodoList,
        removeFromTodoList,
        generatePropertyElement
    };

};

export default project;