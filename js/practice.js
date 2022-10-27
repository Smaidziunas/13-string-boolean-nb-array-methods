'use strict';
console.log('practice.js');

// 1. pakeisti <h1>String methods</h1> teksto 'methods' dali i "metodai"

const h1El = document.querySelector('h1');

const h1ElText =  h1El.textContent;

console.log('h1ElText ===', h1ElText);

h1El.textContent = h1ElText.replace('Methods', 'metodai');

let h = 'String Methods';

console.log(h.replace('Methods', 'metodai'));

console.log(h1ElText.replace('Methods', 'metodai'));


// 2. pakeisti `<p>It is all a ok until we have to use loops</p>` 'until we' i 'we just'

const containerDivEl = document.querySelector('.container');

const bodyEl = document.querySelector('body');
const pEl = document.createElement('p');
pEl.classList.add('pClass');

pEl.textContent = 'It is all a ok until we have to use loops';

pEl.textContent = pEl.textContent.replace('until we', 'we just')

containerDivEl.append(pEl);

console.log('pEl ===', pEl);


// 3. sukurti funkcija kuri argumentu gauna stringa pvz 'lape' ir sukuria html h3 elementa su viduje esanciu tekstu kurio pirmoji raide paversta i didziaja ir pataplina elementa i dokumento body apacia pvz <h2>Lape</h2>

function crH3El(stringVal){
 const h3El = document.createElement('h3');

 containerDivEl.append(h3El);
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

const inputVardasEl = document.createElement('input');
containerDivEl.append(inputVardasEl);

inputVardasEl.classList.add('vardasInput');
inputVardasEl.setAttribute('placeholder', 'iveskite varda');
inputVardasEl.style.marginBottom = '0.3rem';

const inputskaiciusEl = document.createElement('input');
containerDivEl.append(inputskaiciusEl);
inputskaiciusEl.classList.add('vardasInput');
inputskaiciusEl.setAttribute('placeholder', 'iveskite skaiciu');

const h2El = document.createElement('h2');
containerDivEl.append(h2El);


// console.log('isInteger', typeof inputskaiciusEl.value);
  // inputas grazina string'a.
 

inputskaiciusEl.addEventListener('input', (event) => {
  // if (+inputskaiciusEl.value === isInteger()){
    event.preventDefault();
  //   // array.forEach(element => {
    
    // });
    console.log('number', parseInt(inputskaiciusEl.value));
    // makes the the value output a number.
    
    // h2El.textContent = 'inputskaiciusEl';
  // }
});


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