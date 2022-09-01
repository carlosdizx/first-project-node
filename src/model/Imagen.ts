import { Pixel } from "./Pixel";

export class Imagen {
  private readonly _ancho: Pixel[];
  private readonly _alto: Pixel[];

  constructor() {
    this._ancho = [];
    this._alto = [];
  }

  get ancho(): Pixel[] {
    return this._ancho;
  }

  get alto(): Pixel[] {
    return this._alto;
  }
}
