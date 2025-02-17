const etaStr = prompt("inserisci la tua età");
const eta = parseInt(etaStr);
const distanzaStr = prompt("inserisci la distanza da percorrere");
const distanza = parseInt(distanzaStr);
const prezzo = 0.21 * distanza;
const sconto20 = prezzo * 20 / 100;
const sconto40 = prezzo * 40 / 100;
const messaggio20 = `il prezzo del tuo biglietto è scontato del 20%. il totale è di: ${sconto20.toFixed(2)}€`;
const messaggio40 = `il prezzo del tuo biglietto è scontato del 40%. il totale è di: ${sconto40.toFixed(2)}€`;
const messaggio = `il prezzo del tuo biglietto è di ${prezzo.toFixed(2)}€`;
const errore = "Ops, sembra che i tuoi dati non siano numerici. riprova usando solo numeri";

if (isNaN(eta) || isNaN(distanza) === true) {
    console.log(errore);
} else {
    if (eta < 18) {
        console.log(messaggio20);        
    } else if (eta >= 65) {
        console.log(messaggio40);    
    } else {
        console.log(messaggio);   
    }
}















