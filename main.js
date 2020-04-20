//creo una variabile in cui inserire il numero di chilometri da percorrere
var distanza = prompt ('Quanti chilometri devi percorrere?', 'inserisci un numero intero');

//creo una variabile in cui inserire l'età
var eta = prompt ('Quanti anni hai?', 'inserisci un numero intero');

//calcolo il costo del biglietto
var prezzo = distanza * 0.21;

if (eta < 18){
    prezzo= (prezzo - ((prezzo * 20) / 100));
    document.getElementById('ticket').innerHTML = prezzo;
}else if(eta > 65){
    prezzo= (prezzo - ((prezzo * 40) / 100));
    document.getElementById('ticket').innerHTML = prezzo;
}else{
    document.getElementById('ticket').innerHTML = prezzo;
}
