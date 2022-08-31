// var a = 'hello world';
// let a = 'hello world';
// let vs var - var o defineste global (metoda veche)
const a = 'hello world';
// const - variabila nu poate fi modificata niciodata
console.log (a);
let b = ['string1', 'string2', 'string3'];
console.log (b);
console.log (b[1]);
let c = new Array ('string1', 'string2');

c.push ('string3'); // adauga la final inca un elem


c.unshift ('string0'); // adauga la inceput inca un elem


c.pop (); // sterge ultimul element


console.log (c [1]);
console.log (c.length);

let d = c.pop (); // rezulta ultimul element
let e = c.shift (); //rezulta primul element

// \n spune terminalului ca urmeaza o linie noua

let f = 'linie 1 \nlinie 2 \nlinie 3';
console.log (f);
console.log (f[2]);

let g = 'coloana1 \n coloana2';
console.log (f+g);




// variabila de tip object -  colectie de mai multe tipuri ordonate in cheie:valoare

let h = { nume: 'Anton',
        prenume: 'Roberta',
        nr_surori: 2}; 
console.log (h);
console.log (h.nume);
h.CNP = '2950505440052';
console.log (h['CNP']);

delete h.CNP; // DELETE - sterge o cheie
console.log (h['CNP']);


//Boolean - doar 0 sau 1

console.log ('prenume' in h);


let i = ['e', 'greu'];
let j = i.length;
let k = i.pop ();
if (j>2) { console.log (k);}
    else {console.log ('nu sunt multe elemente');}