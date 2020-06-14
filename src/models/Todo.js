export class Todo {
    constructor(todoText) {
        this._id = -1;
        this._text = todoText;
        this._completed = false;
    }

    get id() {
        return this._id;
    }

    get text() {
        return this._text;
    }

    get completed() {
        return this._completed;
    }

    set id(id) {
        this._id = id;
    }
}

