const età = prompt("inserisci la tua età");
const distanza = prompt("inserisci la distanza da percorrere");
const prezzo = 0.21 * distanza;
const sconto20 = prezzo * 20 / 100;
const sconto40 = prezzo * 40 / 100;
const messaggio20 = `il prezzo del tuo biglietto è scontato del 20%. il totale è di: ${sconto20.toFixed(2)}€`;
const messaggio40 = `il prezzo del tuo biglietto è scontato del 40%. il totale è di: ${sconto40.toFixed(2)}€`;
const messaggio = `il prezzo del tuo biglietto è di ${prezzo.toFixed(2)}€`;


if (età < 18) {
    console.log(messaggio20);
    
} else if (età >= 65) {
    console.log(messaggio40);

} else {
    console.log(messaggio);
    
}








