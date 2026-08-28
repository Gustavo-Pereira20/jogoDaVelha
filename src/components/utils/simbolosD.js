export const pares_simbolos = [
    ['❌', '⭕'],
    ['⚔️', '🛡️'],
    ['🐶', '🐱'],
    ['🔥', '❄️'],
    ['🚀', '👾'],
    ['☀️', '🌙'],
];

export function parSimbolo() {
    const indexAleatorio = Math.floor(Math.random() * pares_simbolos.length);
    return pares_simbolos[indexAleatorio];
}