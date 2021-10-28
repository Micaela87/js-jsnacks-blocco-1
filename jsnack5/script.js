/*
5 - Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

// initialize an empty array
const oddNumbers = [];

// asks user 6 times to enter a number
let i = 1;
while (i <=6) {
    const userNumber = parseInt(prompt('inserisci un numero'));
    // checks if userNumber is odd or not
    if (userNumber % 2) {
        oddNumbers.push(userNumber);
    }
    i++;
}

console.log(oddNumbers);