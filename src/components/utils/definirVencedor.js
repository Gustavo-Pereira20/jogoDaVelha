export function definirVencedor(qd){
    const condicaoVitoria = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for(let x = 0; x < condicaoVitoria.length; x++) {
        const [v1, v2, v3] = condicaoVitoria[x];
        if (qd[v1] && qd[v1] === qd[v2] && qd[v1] === qd[v3]){
            return qd[v1];
        }    
    }
    return null;
}
    