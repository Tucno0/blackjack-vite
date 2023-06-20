
/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck es una arreglo de string, Ejemplo: ['C2', 'D3', 'H4', 'S5']
 * @returns {String} retorna una carta
 */
export const pedirCarta = ( deck ) => {

  if ( !deck || deck.length === 0 ) {
      throw 'No hay cartas en el deck';
  }
  const carta = deck.pop();
  return carta;
}