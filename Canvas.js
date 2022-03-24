class Canvas {

    constructor(canvas) {
        this._canvas = canvas;
        this._context = canvas.getContext("2d");
        this._width = this._canvas.width;
        this._height = this._canvas.height;
    }

    get canvas() {
        return this._canvas;
    }

    get context() {
        return this._context;
    }

    set width(w) {
        this._width = w;
        this._canvas.width = w;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    clear() {
        var width = this._canvas.width, height = this._canvas.height;
        this.context.clearRect(0, 0, width, height);
    }
}