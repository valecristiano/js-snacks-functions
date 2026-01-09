/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

// const name = 'Mario';

// Dichiara la funzione qui.
function time() {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  console.log("Ora attuale:", currentHour);
  return currentHour;
}

function greet(name) {
    if ()
  console.log("Buongiorno", name);
  console.log("Buonpomeriggio", name);
  console.log("Buonasera", name);
}

// Invoca la funzione qui e stampa il risultato in console

const orario = time();

const userName = greet("Mario");
console.log(userName);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
