export class Cactus {

    constructor(canvas, image) {
        this._canvas = canvas;
        this._image = image;

        this._cactusWidth = 35;
        this._cacutsHeight = 71;

        this._x = canvas.width;
        this._y = ((canvas.height / 100) * 85) - this._cactusWidth;
        this._sx = 445;
        this._sy = 0;

        this._finished = false;
    }

    draw() {
        this._canvas.context.drawImage(this._image, this._sx, this._sy, this._cactusWidth, this._cacutsHeight, this._x, this._y, this._cactusWidth, this._cacutsHeight);

        this._x--;

        if(this._x <= -50) {
            this._finished = true;
        }
    }

    get isFinished() {
        return this._finished;
    }
}