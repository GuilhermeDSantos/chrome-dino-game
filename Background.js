class Background {

    constructor(canvas, image) {
        this._canvas = canvas;
        this._image = image;
        this._sx = 10;
        this._x = this._sx;
        this._cloudX = 0;
        this._dinoWidth = 86;
        this._dinoHeight = 95;
    }

     draw() {
        var width = this._canvas.canvas.width, height = this._canvas.canvas.height;

        this._x++;

        document.getElementById("count").innerText = this._x;

        if(this._x == this._image.width) {
            this._x = this._sx;
        }

        if(this._cloudX < 1) {
            this._cloudX = width;
        }

        this._cloudX -= 0.5;

        this._canvas.context.drawImage(this._image, 170, 0, this._dinoWidth, this._dinoHeight, this._cloudX, ((height / 100) * 10), this._dinoWidth, this._dinoHeight);

        if(this._x + width > this._image.width) {
            var rest = this._image.width - this._x;

            this._canvas.context.drawImage(this._image, this._sx, this._image.height - 26, width - rest, 26, rest - 2, height - 26, width - (rest - 2), 26);
        }
                                       //           sx,        sy,  sw,   sh, x, y,                               w,   h
        this._canvas.context.drawImage(this._image, this._x, this._image.height - 26, width, 26, 0, height - 26, width, 26);
    }

}