const todoItem = (title, description, dueDate, priority, notes) => {

    const getTitle = () => title;

    const setTitle = (string) => {
        title = string;
    }

    const getDescription = () => description;

    const setDescription = (string) => {
        description = string;
    }

    const getDueDate = () => dueDate;

    const setDueDate = (date) => {
        dueDate = date;
    }

    const getPriority = () => priority;

    const setPriority = (value) => {
        priority = value;
    }

    const getNotes = () => notes;

    const setNotes = (string) => {
        notes = string;
    }
}