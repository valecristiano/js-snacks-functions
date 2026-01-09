/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function vowelsNumber(phrase) {
  phrase = phrase.split("");
  console.log("word array:", phrase);
  const vowelsArray = [];
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < phrase.length; i++) {
    const currentLetter = phrase[i];

    for (let i = 0; i < vowels.length; i++) {
      const currentVowel = vowels[i];
      if (currentLetter === currentVowel) {
        vowelsArray.push(currentLetter);
      }
    }
  }
  return vowelsArray.length;
}

// Invoca la funzione qui e stampa il risultato in console

const output = vowelsNumber(word);
console.log(output);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
