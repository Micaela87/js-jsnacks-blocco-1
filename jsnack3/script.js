/*
3 - Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

// sets a counter
let i = 1;

// initialize a variable to save the sum of each number entered
let sum = 0;

// for each number entered, it's summed to 'sum' and then printed to the console
while (i <= 10) {
    const number = parseInt(prompt('inserisci un numero'));
    sum += number;
    i++;
}

console.log(sum);