/* Scrivi una funzione che accetti una stringa contenente un nome e 
restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

// Dichiara la funzione qui.
/**
 *
 * @param {string} name
 */
function greet(name) {
  console.log("Ciao", name);
}

// Invoca la funzione qui e stampa il risultato in console

const userName = greet("Mario");
console.log(userName);

//Risultato atteso se si passa 'Mario': // ciao Mario
