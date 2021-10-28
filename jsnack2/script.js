/*
2- L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// saves the first user input to a variable
const firstWord = prompt('scrivi una parola');

// saves the first user input to a variable
const secondWord = prompt('scrivi un\'altra parola');

// checks the shortest word
if (firstWord.length < secondWord.length) {
    console.log(firstWord, secondWord);
} else if (firstWord.length > secondWord.length) {
    console.log(secondWord, firstWord);
} else {
    console.log('le parole inserite hanno la stessa lugnhezza');
}