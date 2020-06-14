export class Todo {
    constructor(todoText) {
        this._text = todoText;
        this._completed = false;
    }

    get text() {
        return this._text;
    }

    get completed() {
        return this._completed;
    }
}

