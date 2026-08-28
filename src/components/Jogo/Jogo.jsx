import { useState, useEffect, useEffectEvent } from "react";
import Tabuleiro from "../Tabuleiro/Tabuleiro";
import { definirVencedor } from "../utils/definirVencedor";
import { parSimbolo } from "../utils/simbolosD";

export default function Jogo() {
    const [historico, setHistorico] = useState([Array(9).fill(null)]);
    const [movimentoAtual, setMovimentoAtual] = useState(0);
    const [simbolos, setSimbolos] = useState(parSimbolo);
    const xEProx = movimentoAtual % 2 === 0;
    const quadradoAtual = historico[movimentoAtual];

    function posicaoJogada(proxQuad) {
        const proxHistorico = [...historico.slice(0, movimentoAtual + 1), proxQuad];
        setHistorico(proxHistorico);
        setMovimentoAtual(proxHistorico.length - 1)
    }

    function pularPara(proxMovimento) {
        setMovimentoAtual(proxMovimento)
    }

    function resetJogo() {
    setHistorico([Array(9).fill(null)]);
    setMovimentoAtual(0);
    setSimbolos(parSimbolo());
  }

    const movimentos = historico.map((quadrados, movimento) => {
        let descricao;
        if (movimento > 0) {
            descricao = `Vá para o movimento #${movimento}`;
        } else {
            descricao = 'Volte para o início do jogo.';
        }
        return (
            <li key={movimento}>
                <button onClick={() => pularPara(movimento)}>{descricao}</button>
            </li>
        );
    });

    return (
        <div>
            <button onClick={resetJogo}>Resetar</button>
            <div>
                <Tabuleiro xEProx={xEProx} quadrados={quadradoAtual} jogadorAtual={posicaoJogada} simbolos={simbolos}/>
            </div>
            <div>
                <ol>{movimentos}</ol>
            </div>
        </div>
    )
}