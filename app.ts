import { Imagen } from "./src/model/Imagen";
import { Pixel } from "./src/model/Pixel";

const img1 = new Imagen();
const img2 = new Imagen();
const img3 = new Imagen();
const img4 = new Imagen();

const poblarImagen = (img: Imagen, ancho: number, alto: number) => {
  for (let i = 0; i < ancho; i++) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    img.ancho.push(new Pixel(r, g, b));
  }

  for (let i = 0; i < alto; i++) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    img.alto.push(new Pixel(r, g, b));
  }
};
poblarImagen(img1, 10, 10);
poblarImagen(img2, 10, 10);
poblarImagen(img3, 10, 10);
poblarImagen(img4, 10, 10);

const generarImagenHTML = (img: Imagen) => {
  let html = "<tr>";

  for (const p of img.ancho) {
    const pixelHtml = `<td style='background-color: rgb(${p.r},${p.g},${p.b})'></td>`;
    html += pixelHtml;
  }
  for (const p of img.alto) {
    const pixelHtml = `<td style='background-color: rgb(${p.r},${p.g},${p.b})'></td>`;
    html += pixelHtml;
  }
  return html.concat("</tr>");
};

const htmlImg1 = generarImagenHTML(img1);
console.log(htmlImg1);
