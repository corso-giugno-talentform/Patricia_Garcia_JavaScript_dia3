let nome = "Patricia";
let cognome = "Garcia";
let date = new Date();
let citta = "Biscegle";
let hobby = "Programmazione";

console.log("Nome: " + nome);
console.log("Data corrente: " + date);
console.log('Ciao, mi chiamo '+ nome + ' ' + cognome + '. Sono di ' + citta + ' e mi piace la ' + hobby + '.');

let WEEKDAY = [ 0,'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì' ,'Sabato', 'Domenica']
const DATE = new Date();
let day = WEEKDAY [DATE.getDay()]
console.log('Buongiorno, Oggi è ' + day)



const giorno = date.getDay();
switch (giorno) {
    case 0:
        console.log('Oggi è Domenica');
        break;
    case 1:
        console.log('Oggi è Lunedì');
        break;
    case 2:
        console.log('Oggi è Martedì');
        break;
    case 3:
        console.log('Oggi è Mercoledì');
        break;
    case 4:
        console.log('Oggi è Giovedì');
        break;
    case 5:
        console.log('Oggi è Venerdì');
        break;
    case 6:
        console.log('Oggi è Sabato');
        break;
}


