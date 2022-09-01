export class Pixel {
    private _r: number;
    private _g: number;
    private _b: number;

    constructor(r: number, g: number, b: number) {
        if(!this.validarRango(r,g,b))
            throw new Error("Valor fuera del rango, solo valores entre 0 y 255");
        this._r = r;
        this._g = g;
        this._b = b;
    }

    private validarRango = (r: number, g: number, b: number): boolean =>
        r >= 0 && r <= 255 &&
        g >= 0 && g <= 255 &&
        b >= 0 && b <= 255;


    get r(): number {
        return this._r;
    }

    get g(): number {
        return this._g;
    }

    get b(): number {
        return this._b;
    }

    set r(value: number) {
        this._r = value;
    }

    set g(value: number) {
        this._g = value;
    }

    set b(value: number) {
        this._b = value;
    }
}
