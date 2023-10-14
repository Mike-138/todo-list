const todoItem = (title, description, dueDate, priority, notes) => {

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
        setNotes
    };
    
};

export default todoItem;