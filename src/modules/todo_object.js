import { format } from "date-fns";


const todoItem = (title, dueDate, priority) => {

    const _createContainer = (tag) => {
        const addContent = (content) => {
            const container = document.createElement(tag);
            container.textContent = content;
            return container;
        };
        return addContent;
    };

    const _addTitleElement = _createContainer("label");

    const _addKeyElement = _createContainer("h4")

    const getTitle = () => title;

    const setTitle = (string) => {
        title = string;
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

    const fromObject = function(obj) {
        const { title = "", due = "", priority = ""} = obj;
        setTitle(title);
        setDueDate(due);
        setPriority(priority);
        return this;
    }

    const createCard = () => {

        const container = document.createElement("div");
        container.classList.add("task");

        const innerContainer = document.createElement("div");
        innerContainer.classList.add("task-content");

        const title = (() => {

            const container = document.createElement("div");
            container.classList.add("title");

            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");

            checkbox.addEventListener("click", (e) => {
                e.stopPropagation();
            });

            const label = _addTitleElement(getTitle());
            container.append(checkbox, label);

            return container;
        })();

        const dueDate = _addKeyElement(getFormattedDueDate());
        dueDate.classList.add("due");

        const priority = _addKeyElement(getPriority());
        priority.classList.add("priority");

        innerContainer.append(
            title,
            dueDate,
            priority,
        );

        container.appendChild(innerContainer);

        return container;
    };

    return {
        getTitle,
        setTitle,
        getDueDate,
        setDueDate,
        getFormattedDueDate,
        getPriority,
        setPriority,
        fromObject,
        createCard
    };
    
};

export default todoItem;