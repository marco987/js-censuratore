// CENSURATORE
// Il software riceve in input un lungo testo
// e una serie di parole da censurare.
// Restituisce il testo con xxx
// al posto delle parole censurate.
// Stampa un “badword index” calcolato come
// il numero di parole censurate sul numero di parole totali

var testo = "La mia anima è pervasa da una mirabile serenità, simile a queste belle mattinate di maggio che io godo con tutto il cuore. Sono solo e mi rallegro di vivere in questo luogo che sembra esser creato per anime simili alla mia. Sono così felice, mio caro, così immerso nel sentimento della mia tranquilla esistenza che la mia arte ne soffre. Non potrei disegnare nulla ora, neppure un segno potrei tracciare; eppure mai sono stato così gran pittore come in questo momento. Quando l'amata valle intorno a me si avvolge nei suoi vapori, e l'alto sole posa sulla mia foresta";

var parole_censurate = ["mia", "mio", "sono", "questo", "queste"];

console.log(testo.split(" "));
var testo_split = testo.split(" ");


for (var i = 0; i < testo_split.length; i++) {
  if (parole_censurate.includes(testo_split[i])) {
    testo_split[i] = "XXX";
  }
}

console.log(testo_split);
