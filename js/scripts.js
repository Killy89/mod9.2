var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

console.log('Imiona: ' + allNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
    console.log('Imiona: ' + allNames);  
} 
