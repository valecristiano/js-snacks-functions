/* Scrivi una funzione che accetti un'array di stringhe e
una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "adele", "Laura", "Alessandra"];
console.log(names);

// Dichiara la funzione qui.
function letterArray(stringArray, letter) {
  const newArray = [];
  for (i = 0; i < stringArray.length; i++) {
    currentWord = stringArray[i];
    initial = currentWord[0].toUpperCase();
    if (initial === letter.toUpperCase()) {
      newArray.push(currentWord);
    }
  }
  return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

const output = letterArray(names, "a");
console.log(output);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
