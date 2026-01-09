/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";
console.log(word);

// Dichiara la funzione qui.
function vowelsNumber(phrase) {
  phrase = phrase.split("");
  console.log(phrase);
  for (let i = 0; i < phrase.length; i++) {
    const currentLetter = phrase[i];
    console.log(currentLetter);
  }

  return;
}

// Invoca la funzione qui e stampa il risultato in console

word = vowelsNumber(word);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
