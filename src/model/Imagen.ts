import { Pixel } from "./Pixel";

export class Imagen {
  private _ancho: Pixel[];
  private _alto: Pixel[];

  constructor(ancho: number, alto: number) {
    this._ancho = [];
    this._alto = [];
  }

  get ancho(): Pixel[] {
    return this._ancho;
  }

  set ancho(value: Pixel[]) {
    this._ancho = value;
  }

  get alto(): Pixel[] {
    return this._alto;
  }

  set alto(value: Pixel[]) {
    this._alto = value;
  }
}
