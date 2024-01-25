/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    let rectangleArea = l1 * l2;
    return rectangleArea;
}

let lungLato1 = 10;
let lungLato2 = 20;

let areaRettangolo = area(lungLato1, lungLato2);

console.log("L'area del rettangolo " + lungLato1 + " e " + lungLato2 + " è " + areaRettangolo)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum (num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
} else {
        return num1 + num2;
    }
}

let result = crazySum(2, 2);
console.log("il risultato è: " + result); // il risultato è 12

// let result = crazySum(1, 2);
// console.log("il risultato è: " + result); // il risultato è 3

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num) {
    let absoluteDiff = Math.abs(num - 19);
    if (absoluteDiff > 19) {
        return absoluteDiff * 3;
    } else {
        return absoluteDiff;
    }
}

let risult = crazyDiff(50);
console.log("Il risultato è: " + risult);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
        return true;
    } else {
        return false;
        
    }
}

// let risultato = boundary(150);
// console.log("Il risultato è " + risultato); // false
let risultato = boundary(77);
console.log("Il risultato è " + risultato); // true
    

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string) {
    if (string.startsWith("EPICODE")) {
        return string;
    } else {
        return "EPICODE" + string;
    }
}

// console.log(epify("Goku")); // "EPICODEGoku"
console.log(epify("EPICODEGoku")); // "EPICODEGoku"

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(number) {
    if (number > 0 && (number % 3 === 0 || number % 7 === 0)) {
        return true; 
    } else {
        return false;
    }   
}

console.log(check3and7(6));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
    const strReversed = str.split("").reverse().join("");
    return strReversed;
};

console.log(reverseString("DRAGONBALL"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
