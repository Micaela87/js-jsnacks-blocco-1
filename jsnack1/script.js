/*
1 - L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

// first value saved to a variable
const firstValue = parseInt(prompt('Inserisci un numero'));

// second value saved to a variable
const secondValue = parseInt(prompt('Inserisci un altro numero'));

// checks first value against the second one and prints the highest to the console
if (firstValue > secondValue) {
    console.log(firstValue);
} else if (firstValue < secondValue) {
    console.log(secondValue);
} else {
    console.log('Numeri uguali')
}