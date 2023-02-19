class Rectangle {
    private _width : number;
    private _height : number;

    constructor(width : number, height : number) {
        this._height = height;
        this._width = width;

    }


    public get width() {
        return this._width;
    }

    public set width(value) {
        this._width = value;
    }

}


let a1 : Rectangle = new Rectangle(2,4);