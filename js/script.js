//Descrizione: chiedere all'utente il numero di chilometri che vuole percorrere e l'età. Sulla base di ciò calcolare il prezzo del biglietto

var elementoOutput = document.getElementById('pagare');

//INPUT
  //l'utente inserisce i kilometri che vuole percorrere
  var tragitto = parseInt(prompt("Inserisca i kilometri che si desiderano percorrere"));
  console.log("i kilometri da percorrere sono: ", tragitto);

  //l'utente inserisce l'età
  var eta = parseInt(prompt("Inserisca l'età del passeggero"));
  console.log("l'età del passeggero è: ", eta);

//OPERAZIONE
  //calcolo prezzo del biglietto intero
  var prezzo = tragitto * 0.21;
  //questo serve ???
  var p = prezzo.toFixed(2);
  console.log("il prezzo senza sconto è: ", p);

  //calcolo prezzo del biglietto per minorenni (20%)
  var scontoM = prezzo - 0.20;
  var m = scontoM.toFixed(2);
  console.log("il prezzo con sconto minorenni è: ", m);

  //calcolo prezzo del biglietto per over 65 (40%)
  var scontoO = prezzo - 0.40;
  var o = scontoO.toFixed(2);
  console.log("il prezzo con sconto over 65 è: ", o);

//OUTPUT
//stabilire se l'utente ha diritto ad una percetuale di sconto
  if (eta < 18) {
    elementoOutput.innerHTML = "Il prezzo del biglietto è di: " + m + "<br> hai usufruito dello sconto del 20% per i minorenni";
  } else if (eta > 65) {
    elementoOutput.innerHTML = "Il prezzo del biglietto è di: " + o + "<br> hai usufruito dello sconto del 40% per gli over 65";
  } else {
    elementoOutput.innerHTML = "Il prezzo del biglietto è di: " + p;
  }
