// Creare una funzione isStringCrazy dove prende in ingresso una stringa "str",
// Far diventare questa stringa un array di parole chiamato strArray
// Creare tre set, uno contenente i soggetti, uno contenente la punteggiatura ed uno contenente le coniugazioni
// Creare due variabili firstConjugation e lastConjugation che ritornano true se la rispettivamente la prima o l'ultima parola hanno una coniugazione nelle ultime tre lettere (controllato tramite il metodo substring per prendere gli ultimi 3 caratteri)
// Creare due variabili hasCthulhu e hasSubject che partono da false

// Ciclare strArray da 0 a strArray.length - 1
// Se ciclando trova una stringa contenente "Church" o  "mare" ritornare false
// Sennó controllare se word e' Cthulhu, se si modificare la variabile hasCthulhu a true
// Controllare anche se word é un soggetto tramite il metodo has dei set, se trova un soggetto modificare la variabile hasSubject a true
// Controllato ció, se la stringa in ingresso ha la parola Cthulhu o non ha un soggetto o inizia con un segno di punteggiatura o
// finisce con ?!? (controllato grazie al metodo endwith) o sia firstConjugation che lastConjugation siano true,
// ritornare true (la stringa é pazza)
// Se non entra in questo if, significa che la stringa non é pazza ed ha un soggetto, quindi ritornare true, non potevo mettere ció prima perché la stringa puó anche
// avere il soggetto, ma essere comunque pazza, mettendolo qui significa che non rispetta i requisiti di una stringa pazza ed ha un soggetto (perché nell'if c'é anche !hasSubject)

function isStringCrazy(str) {
  const strArray = str.split(" ");

  const punctuation = new Set([",", ".", "!", "?", ":", ";", "-", "~"]);
  const subjects = new Set(["Lui", "Lei", "Egli", "Ella"]);
  const conjugations = new Set(["are", "ere", "ire"]);
  const firstConjugation = conjugations.has(strArray[0].substring(strArray[0].length - 3));
  const lastConjugation = conjugations.has(strArray[[strArray.length - 1]].substring(strArray[[strArray.length - 1]].length - 3));
  let hasCthulhu = false,
    hasSubject = false;

  for (let i = 0; i < strArray.length; i++) {
    const word = strArray[i];
    if (word.includes("Church") || word.includes("mare")) {
      return false;
    } else if (word == "Cthulhu") {
      hasCthulhu = true;
    } else if (subjects.has(word)) {
      hasSubject = true;
    }
  }

  if (
    hasCthulhu ||
    !hasSubject ||
    punctuation.has(strArray[0][0]) ||
    strArray[strArray.length - 1].endsWith("?!?”") ||
    (firstConjugation && lastConjugation)
  ) {
    return true;
  }
  return false;
}

console.log(isStringCrazy("Andare a rimirare"));
