/* Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero */

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Genero numeri casuali
numbers = [];

for (let i = 0; i < 5; i++) {
    let number = getRandomNumber(100);
    numbers.push(number);
}

alert(numbers);

// Chiedo all'utente i numeri che ricorda
userNumbers = [];
correctNumbers = [];

setTimeout(function() {
    for (let i = 0; i < 5; i++) {
    number = parseInt(prompt('Inserisci i numeri che hai visto precedentemente'));
    userNumbers.push(number);
    }
    // Controllo quali numeri l'utente ha ricordato
    for (let i = 0; i < userNumbers.length; i++) {
        if (numbers.includes(userNumbers[i])) {
            correctNumbers.push(userNumbers[i]);
        }
    }

    console.log(`Hai ricordato correttamente ${correctNumbers.length} numero/i:`, correctNumbers);

}, 3000)