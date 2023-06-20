
/**
 * Obtiene el valor de una carta
 * @param {String} carta Ejemplo: 'C2', 'D3', 'H4', 'S5'
 * @returns {Number} retorna el valor de la carta
 */
export const valorCarta = ( carta ) => {

  const valor = carta.substring(0, carta.length - 1);
  return ( isNaN( valor ) ) ? 
          ( valor === 'A' ) ? 11 : 10
          : valor * 1;
}