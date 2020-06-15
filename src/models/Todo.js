

/**
 * Class representing a Todo element.
 */
export class Todo {
    /**
     * Create a todo.
     * @param {String} todoText - The text value.
     */
    constructor(todoText) {
        this._text = todoText;
        this._completed = false;
    }

    /**
     * Get the text value.
     * @return {String} the text value.
     */
    get text() {
        return this._text;
    }

    /**
     * Get the completed value.
     * @return {Boolean} the completed value.
     */
    get completed() {
        return this._completed;
    }

    /**
     * Set the completed value.
     * @param {Boolean} completed - the new value of completed.
     */
    set completed(completed) {
        this._completed = completed;
    }
}

