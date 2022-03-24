class Dino {

    constructor(canvas, image) {
        this._canvas = canvas;
        this._image = image;
        this._sx = 10;
        this._dinoHeight = 95;
        this._sy = this._canvas.canvas.height - this._dinoHeight - 5;
        this._dinoY = this._sy;
        this._dinoWidth = 86;
        //this._dinoY = this._canvas.canvas.height - this._dinoHeight - 5;
        this._count = 0;
        this._jump = false;
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

        if(this.isJumping) {
            this._dinoY-=4;
        }

        if(this._count < 40) {
            this._canvas.context.drawImage(this._image, 1516, 0, this._dinoWidth, this._dinoHeight, ((width / 100) * 10), this._dinoY, this._dinoWidth, this._dinoHeight);
        } else {
            this._canvas.context.drawImage(this._image, 1604, 0, this._dinoWidth, this._dinoHeight, ((width / 100) * 10), this._dinoY, this._dinoWidth, this._dinoHeight);
        }
        if(this._count > 80) {
            this._count = 0;
        } else {
            this._count++;
        }
        document.getElementById("sec").innerText = this._count;
        document.getElementById("dinoy").innerText = this._dinoY + " " + this.isJumping;
    }

    jump() {
        if(!this.isJumping) {
            this._jump = true;
        }
        alert(this.isJumping)
    }

    get isJumping() {
        return this._jump;
    }
}

module.exports = Dino;