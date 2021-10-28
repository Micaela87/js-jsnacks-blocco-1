/* 4 - In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

// user name saved to a variable
const userName = prompt('inserisci il tuo nome');

// initialize an array of guests
const guestList = ['mario', 'angelo', 'martina', 'federica', 'enzo', 'rebecca'];

// checks if the user is in the guestlist
let result = 'sorry you\'re not in the list'
for (let i = 0; i < guestList.length; i++) {
    if (guestList[i] === userName.toLowerCase()) {
        result = 'great! you\'re in the list';
    }
}

// prints result to the console
console.log(result);