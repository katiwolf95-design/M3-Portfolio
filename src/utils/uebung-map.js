// 1. Lieblingstiere
const lieblingstiere = [
    "wolf",
    "hund",
    "katze",
    "geko",
    "chameleon"
];

//map + Arrow Funktion
const tiereGross = lieblingstiere.map(tier => {
    return tier.toUpperCase();
});

//Ausgabe
console.log("Lieblingstiere (GROSS):", tiereGross);

//2. Preise
const preise = [12.3, 9.99, 4.1, 19.49];

const preiseGerundet = preise.map(preis => `${Math.ceil(preis)} €`);

console.log("Preise gerundet:", preiseGerundet);