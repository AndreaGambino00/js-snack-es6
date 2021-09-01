// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

// const bici = [
//     {nome: 'Bici1', peso: 8},
//     {nome: 'Bici2', peso: 20},
//     {nome: 'Bici3', peso: 40},
// ];
// // Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// let biciLeggera = bici [0];

// for (let i = 0; i < bici.length ; i++) {
//     if (bici[i].peso < biciLeggera.peso) {
//         biciLeggera = bici[i];
//     }
// }

// console.log(biciLeggera)




// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const team = [
    {nome: 'Milan', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Inter', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Juve', puntiFatti: 0, falliSubiti: 0},
];

// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
for (let i = 0; i < team.length; i++) {
    team[i].puntiFatti = randomNumber(0,10);
    team[i].falliSubiti = randomNumber(0,10);
}

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const newTeams = [];

for (let i = 0; i < team.length; i++) {
    const {nome, falliSubiti } = team[i];
    let newObj = {nome, falliSubiti };
    newTeams.push(newObj);
}

console.log(newTeams);