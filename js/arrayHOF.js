'use strict';
console.log('arrayHOF.js');

const numArray = [5, 15, -2, 0, -5, 7];

//

for (let sk of numArray) {
  // suksis per visa masyva
  // kiekvieno ciklo metu reiksme lygi sk
  // console.log('sk ===', sk);
}

// Array.prototype.forEach(fn) - kazka atlikti su kiekviena reiksme
//fn(elementas, indexas, patsMasyvas)

numArray.forEach(function (sk, i, arr) {
  // console.log(`indexas: ${i}, reiksme: ${sk ** 2} ---- `, arr);
  // console.log('priekyje index esanti reikmse', arr[i + 1]);
});

// const printPositiveNubers = function (sk) {
//   if (sk > 0) {
//     console.log(sk);
//   }
// };
function printPositiveNumbers(sk) {
  if (sk > 0) {
    console.log(sk);
  }
}

let kazkas = numArray.forEach(printPositiveNumbers);
console.log('kazkas ===', kazkas);

// atrinkti i nauja masyva visus teigiamus
const positives = [];
numArray.forEach((sk) => {
  if (sk > 0) {
    positives.push(sk);
  }
});

console.log('positives ===', positives);

// paversti masyvo neigiamus skaiciu teigiamais

numArray.forEach((sk, i, arr) => {
  // jei sk neigiamas
  if (sk < 0) {
    // padauginti is -1
    // console.log('sk * -1 ===', sk * -1);
    // irasyti reiksme i masyvo orginala
    arr[i] = sk * -1;
  } else {
    // console.log('sk', sk);
  }
});
// console.log('numArray ===', numArray);

// paskaiciuoti numArray masyvo vidurki
let total = 0;

numArray.forEach((sk, i, arr) => {

  total = total + sk
  console.log(total);
  
  }
);

let totalAvg = total/numArray.length;

console.log('totalavg ===', totalAvg );



// 1. pakeisti <h1>String methods</h1> teksto 'methods' dali i "metodai"

const h1El = document.querySelector('h1');

const h1ElText =  h1El.textContent;

console.log('h1ElText ===', h1ElText);

h1El.textContent = h1ElText.replace('Methods', 'metodai');

let h = 'String Methods';

console.log(h.replace('Methods', 'metodai'));

console.log(h1ElText.replace('Methods', 'metodai'));


// 2. pakeisti `<p>It is all a ok until we have to use loops</p>` 'until we' i 'we just'
const bodyEl = document.querySelector('body');
const pEl = document.createElement('p');
pEl.classList.add('pClass');

pEl.textContent = 'It is all a ok until we have to use loops';

pEl.textContent = pEl.textContent.replace('until we', 'we just')

bodyEl.append(pEl);

console.log('pEl ===', pEl);


// 3. sukurti funkcija kuri argumentu gauna stringa pvz 'lape' ir sukuria html h3 elementa su viduje esanciu tekstu kurio pirmoji raide paversta i didziaja ir pataplina elementa i dokumento body apacia pvz <h2>Lape</h2>

function crH3El(stringVal){
 const h3El = document.createElement('h3');
 bodyEl.append(h3El);
 h3El.textContent = stringVal;

 let stringValFirstL = stringVal[0].toLocaleUpperCase();
 let stringValrest = stringVal.slice(1);

 h3El.textContent = stringValFirstL+stringValrest;
}

crH3El('labas as krabas');


// 4.   const proverb = 'sesi eina po penkiu, bet tuo paciu sesi eina pries septynis. Ir sesi yra trisdesim sesi padalinta is sesiu';

// 4.1 pakeisti pirma 'sesi' i '6'
// 4.2 pakeisti visus 'sesi' i 'six'

{ // vienas sprendimas
//   const proverb2 = proverb.replace(/sesi /g, 'six ');
// const proverb1 = proverb.replace(/sesi /g, '6 ');

// console.log('proverb1 ===', proverb1);
// console.log('proverb2 ===', proverb2);
}
{ //nebaigtas su for loop

// const proverb = 'sesi eina po penkiu, bet tuo paciu sesi eina pries septynis. Ir sesi yra trisdesim sesi padalinta is sesiu';

// const proverbM = proverb.split(" ");



// let proverbForOF = [];

//   for (let sesi of proverbM){

    
//     if(sesi === 'sesi' && proverbM.indexOf(sesi) === proverbM[proverbM.length - 4]){

//       sesi = '5';}
    
//     proverbForOF.push(sesi);

//   }

//   // proverbM[proverbM.length - 4]

// console.log('proverbForOF ===', proverbForOF);
  
//   // function replaceF(){
//   //   for(let sesi of proverbM) {
//   //     if (sesi === proverbM[proverbM.length -2]){
//   //       sesi = 'sesi';
//   //     } else sesi = 6;
//   //   }
//   //   return proverbM;
//   // }

//   // function replaceD(proverbM){
//   //   for(let sesi of proverbM) {
//   //     if (proverbM[sesi] === proverbM[proverbM.length - 5]){
//   //       console.log(7)};
      
//   // }}

//   // console.log(replaceD(proverbM));

}

// 5. Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei sveikas, po apačia sukurk h2 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.

{ 6.
  /* <ul>
<li>one</li>
<li>one</li>
<li>one</li>
<li>one</li>
<li>one</li>
</ul>
prideti kiekvienam elementui zodeli 'was ' priekyje <li>was one</li> */}


{ 7. //pranesti kad ok jeigu visos salygos atitinka
//   tikrinti ar ivesties laukas htmle atitinka visas salygas. jei neatitinka pranesti apie tai <small class="feedback"></small> elemente

// salygos

// <li>bent viena *</li>
// <li>bent viena skaiciu</li>
// <li>netureti raides @</li>
// <li>nesibaigti su .</li>
}