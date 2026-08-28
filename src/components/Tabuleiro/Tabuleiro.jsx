import { useState, useEffect, useEffectEvent } from "react";
import Quadrado from "../Quadrados/Quadrados";
import {definirVencedor} from "../utils/definirVencedor";

// Segundo componente do projeto de refatoração. Componente TABULEIRO.
// Propriedades do componente tabuleiro ->

export default function Tabuleiro({xEProx, quadrados, jogadorAtual, simbolos}) {
    // posicaoClique: No componente "Quadrado", será passado como propriedade para o "funcaoClique".
    
    function posicaoClique(x) {
        // Condicional para verificar se há algum vencedor da partida.
        if (definirVencedor(quadrados) || quadrados[x]) {
            return;
        }
        // Variável que dita o qual será o valor do próximo quadrado. (X ou O)
        const proxQuad = quadrados.slice();
        // Se 'X' for o próximo jogador, define o quadrado como 'X'.
        if (xEProx) {
            proxQuad[x] = simbolos[0]
        } 
        // Caso contrário, define como 'O'.
        else {
            proxQuad[x] = simbolos[1]
        }
        // Por fim, passa como argumentos o resultado da váriavel 'proxQuad'.
        jogadorAtual(proxQuad)
    }

    // Criação da variável 'vencedor' para definir o ganhador da partida.
    const vencedor = definirVencedor(quadrados)
    // Criação da variável 'estado'. Armazena o vencedor e imprime no fim da partida.
    let estado;
    // Se o retorno da função 'definirVencedor' for true.
    if (vencedor === "Empate") {
     estado = "O jogo deu velha! 👵";
    } else if (vencedor) {
        estado = `Vencedor: ${vencedor}`;
    } else {
        estado = `Próximo jogador: ${xEProx ? simbolos[0] : simbolos[1]}`;
    }
    
    return(
        <>
            <div>{estado}</div>
            <div>
                {/* 3 Linhas / 3 Colunas, atribuindo valores às propriedades do componente. */}
                <Quadrado valorQuadrado={quadrados[0]} funcaoClique={() => posicaoClique(0)}/>
                <Quadrado valorQuadrado={quadrados[1]} funcaoClique={() => posicaoClique(1)}/>
                <Quadrado valorQuadrado={quadrados[2]} funcaoClique={() => posicaoClique(2)}/>
            </div>
            <div>
                <Quadrado valorQuadrado={quadrados[3]} funcaoClique={() => posicaoClique(3)}/>
                <Quadrado valorQuadrado={quadrados[4]} funcaoClique={() => posicaoClique(4)}/>
                <Quadrado valorQuadrado={quadrados[5]} funcaoClique={() => posicaoClique(5)}/>
            </div>
            <div>
                <Quadrado valorQuadrado={quadrados[6]} funcaoClique={() => posicaoClique(6)}/>
                <Quadrado valorQuadrado={quadrados[7]} funcaoClique={() => posicaoClique(7)}/>
                <Quadrado valorQuadrado={quadrados[8]} funcaoClique={() => posicaoClique(8)}/>
            </div>
        </>
    )
}

