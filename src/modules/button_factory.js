const buttonFactory = () => {

    const button = document.createElement("button");

    const addContentImage = function(icon) {
        const image = new Image();
        image.src = icon;
        button.replaceChildren(image);
        return this;
    };

    const addContentText = function(text) {
        button.textContent = text;
        return this;
    };

    const build = () => button;

    return {
        addContentImage,
        addContentText,
        build
    };
};

export default buttonFactory;