// Creo una funzione sumWards che mi servirá a sommare le spese di ogni reparto
// In ingresso prende un input str
// Trasformare la stringa in un array wards, fondamentali per questo passaggio sono i metodi split cosí da dividere ogni parola da \n (il carattere di "a capo") e
// filter cosí da avere un array senza elementi ""
// Bisogna creare un nuovo array summedWards dove verranno pushati il nome del reparto e la somma delle spese di ognuno di loro, il primo viene pushato subito
// Creare una variabile sum dove verranno sommate le spese
// Ciclare l'array wards da 1 a wards.length - 1
// Se l'elemento corrente nella iterazione  é >= 0 convertire la stringa contenente la spesa in numero e sommare, se l'elemento corrente e' l'ultimo pushare adesso la somma
// Se l'elemento corrente e' < 0 pushare la variabile sum, resettarla e pushare l'elemento corrente nell'array (cosí da pushare i reparti)
// Ritornare il nuovo array

// Creare una funzione spendsMoreAndLessWards che prende in ingresso un input str
// Salvare all'interno di una variabile summedWards l'esecuzione della funzione sumWards cosí da avere l'array con i reparti e le somme (Gli indici pari di questo array saranno i reparti, gli indici dispari le somme)
// Creare le variabili moreName e lessName che avranno il nome del primo reparto, more e less che avranno le spese del primo reparto
// Ciclare solo gli indici dispari dell'array summedWards, cosi' da poter confrontare le spese, quindi partendo da 3 a summedWards.lenght - 1, con un incremento di i + 2 
    // Se la somma delle spese (elemento dell'array) attuale e' maggiore di more, modificare more con la somma delle spese attuale e moreName con il nome del reparto attuale
    // Se la somma delle spese attuale e' minore di less, modificare less con la somma delle spese attuale e lessName con il nome del reparto attuale
// Ritornare un array con due oggetti, il primo con il reparto con la maggiore spesa, il secono con il reparto con la maggiore spesa

const input = `

Cancelleria
500
40
60

Servizi igienici
1000
1
200

Vendite
0
`;
function sumWards(str) {
  const wards = str.split("\n").filter((el) => el != "");
  let summedWards = [],
    sum = 0;
  summedWards.push(wards[0]);

  for (let i = 1; i < wards.length; i++) {
    const element = wards[i];
    if (element >= 0) {
      number = parseInt(element);
      sum += number;
      if (i === wards.length - 1) {
        summedWards.push(sum);
      }
    } else {
      summedWards.push(sum);
      sum = 0;
      summedWards.push(element);
    }
  }
  return summedWards;
}

function spendsMoreAndLessWards(str) {
    const summedWards = sumWards(str)
    let moreName = summedWards[0], lessName = summedWards[0], more = summedWards[1], less = summedWards[1]
    for (let i = 3; i < summedWards.length; i = i + 2) {
        const spending = summedWards[i];
        if (spending > more) {
            more = spending
            moreName = summedWards[i-1]
        }
        if (spending < less) {
            less = spending
            lessName = summedWards[i-1]
        }
        
    }
    
    return [{"reparto": moreName, "spesa": more}, {"reparto": lessName, "spesa": less}]

}


console.log(spendsMoreAndLessWards(input));