/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 10;
let num2 = 20;

if (num1 > num2) {
  console.log("il numero maggiore tra " + num1 + " e " + num2 + "è: " + num1);
} else {
  console.log("il numero maggiore tra " + num1 + " e " + num2 + "è: " + num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let nr = 5;
let nr2 = 10;

if (nr != nr2) {
  console.log("il numero " + nr2 + " è diverso da " + nr);
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let nr3 = 25;

if (nr3 % nr === 0) {
  console.log("il numero " + nr3 + " è perfettamente divisibile per " + nr);
} else {
  console.log("il numero " + nr3 + " non è perfettamente divisibile per " + nr);
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nr4 = 32;
let nr5 = 24;
if (nr5 === 8) {
  console.log("il numero " + nr5 + " è uguale a 8 ");
} else if (nr4 - nr5) {
  console.log("la differenza tra  " + nr4 + " e " + nr5 + " è uguale a 8 ");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 49.99;
let totale = 50;

if (totalShoppingCart > totale) {
  console.log(" il totale del tuo carrello è euro " + totalShoppingCart + " hai raggiunto la spesa minima richiesta di euro 50. la tua spedizine è gratuita");
} else {
  let spedizione = 10;
  let totaleP = totalShoppingCart + spedizione;
  console.log(" il totale del tuo carrello è euro " + totaleP + " non hai raggiunto la spesa minima richiesta di euro 50. la tua spedizine è di euro 10");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function scontoTotale(totalShoppingCartBlack, percentuale) {
  let sconto = (totalShoppingCartBlack * percentuale) / 100;
  let totaleCart = totalShoppingCartBlack - sconto;
  return totaleCart;
}
let totalShoppingCartBlack = 80;
let percentuale = 20;
let totaleCart = scontoTotale(totalShoppingCartBlack, percentuale);
console.log(" Dato lo sconto del 20%, il totale del tuo carrello è euro " + totaleCart);

if (totaleCart > totale) {
  console.log(" il totale del tuo carrello è " + totaleCart + " hai raggiunto la spesa minima richiesta di euro 50. la tua spedizine è gratuita");
} else {
  console.log(" il totale del tuo carrello è " + totaleCart + " euro non hai raggiunto la spesa minima richiesta di euro 50. la tua spedizine è di euro 10");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 54;
let b = 107;
let c = 3;

if (a < b && a > c && b > c) {
  //107 54 3  maggiore >   --- minore <
  console.log(b, a, c);
} else if (a > b && a > c && b < c) {
  console.log(a, c, b);
} else if (a < b && a < c && b < c) {
  console.log(c, b, a);
} else if (a > b && a < c && b < c) {
  console.log(c, a, b);
} else {
  console.log("non sono in grado di ordinare i tuoi numeri");
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let t = 34;
if (typeof t === "number") {
  console.log(t + " è un numero");
} else {
  console.log(t + " non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n = 25;

if (n % 2 === 0) {
  console.log("il numero " + n + " è pari");
} else {
  console.log("il numero " + n + " è dispari ");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 11;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array1 = [];
array1.push(1);
array1.push(2);
array1.push(3);
array1.push(4);
array1.push(5);
array1.push(6);
array1.push(7);
array1.push(8);
array1.push(9);
array1.push(10);

console.log(array1);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array1.splice(9, 1, 100);
console.log(array1);
