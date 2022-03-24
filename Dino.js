class Dino {

    constructor(canvas, image) {
        this._canvas = canvas;
        this._image = image;

        this._dinoWidth = 86;
        this._dinoHeight = 95;

        this._minY = ((canvas.height / 100) * 95) - this._dinoWidth;
        this._maxY = ((canvas.height / 100) * 50) - this._dinoWidth;

        this._x = (canvas.width / 100) * 10;
        this._y = this._minY;

        this._jumping = false;
        this._falling = false;

        this._count = 0;
    }

    /*
    img	Specifies the image, canvas, or video element to use
    sx	Optional. The x coordinate where to start clipping	Play it »
    sy	Optional. The y coordinate where to start clipping	Play it »
    swidth	Optional. The width of the clipped image	Play it »
    sheight	Optional. The height of the clipped image	Play it »
    x	The x coordinate where to place the image on the canvas	Play it »
    y	The y coordinate where to place the image on the canvas	Play it »
    width	Optional. The width of the image to use (stretch or reduce the image)	Play it »
    height	Optional. The height of the image to use (stretch or reduce the image)
     */

    draw() {
        var width = this._canvas.canvas.width, height = this._canvas.canvas.height;

        if(this._jumping) {
            if(this._falling) {
                if(this._y == this._minY) {
                    this._falling = false;
                    this._jumping = false;
                } else {
                    this._y++;
                }
            } else {
                if(this._y == this._maxY) {
                    this._falling = true;
                } else {
                    this._y--;
                }
            }

            this._draw(1340, 0)
            return;
        }

        if(this._count < 40) {
            this._draw(1516, 0)
        } else {
            this._draw(1604, 0)
        }
        if(this._count > 80) {
            this._count = 0;
        } else {
            this._count++;
        }
        document.getElementById("sec").innerText = this._count;
        document.getElementById("dinoy").innerText = this._dinoY + " " + this.isJumping;
    }

    _draw(sx, sy) {
        this._canvas.context.drawImage(this._image, sx, sy, this._dinoWidth, this._dinoHeight, this._x, this._y, this._dinoWidth, this._dinoHeight);
    }

    jump() {
        if(!this._jumping) {
            this._jumping = true;
        }
    }
}

module.exports = Dino;