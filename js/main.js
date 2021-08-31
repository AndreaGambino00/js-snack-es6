// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bici = [
    {nome: 'Bici1', peso: 8},
    {nome: 'Bici2', peso: 20},
    {nome: 'Bici3', peso: 40},
];
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let biciLeggera = bici [0];

for (let i = 0; i < bici.length ; i++) {
    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
}

console.log(biciLeggera)