/* Scrivi una funzione che accetti un array di nomi e 
restituisca nuovo array con le iniziali di ogni parola dell'array fornito */

let names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
console.table(names);

// Dichiara la funzione qui.
/**
 *
 * @param {Array} namesArray
 * @returns {Array}
 */
function initialsArray(namesArray) {
  const newArray = [];
  for (let i = 0; i < namesArray.length; i++) {
    const currentName = namesArray[i];
    const initial = currentName[0];
    console.log("initial", initial);
    newArray.push(initial);
  }
  return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

const output = initialsArray(names);
console.log(output);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
