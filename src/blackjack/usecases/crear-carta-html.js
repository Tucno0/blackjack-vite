
/**
 * Crea una imagen de una carta
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de retorno
 */
export const crearCartaHtml = (carta) => {
  if (!carta) throw new Error("No se recibió la carta, es obligatorio");

  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");

  return imgCarta;
};
