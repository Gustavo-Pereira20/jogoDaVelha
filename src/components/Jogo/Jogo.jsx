import { useState, useEffect, useEffectEvent } from "react";
import Tabuleiro from "../Tabuleiro/Tabuleiro";
import { definirVencedor } from "../utils/definirVencedor";

export default function Jogo() {
    const [inicio, setInicio] = useState(false)
    const [historico, setHistorico] = useState([Array(9).fill(null)]);
    const [movimentoAtual, setMovimentoAtual] = useState(0);
    const xEProx = movimentoAtual % 2 === 0;
    const quadradoAtual = historico[movimentoAtual];
    const tempoJog = 5;
    const [tempoRestante, setTempo] = useState(tempoJog)

    useEffect(() => {
        if (!inicio) return;

        if (definirVencedor(quadradoAtual)) return;

        if (tempoRestante === 0) {
            setMovimentoAtual(xEProx ? 'X' : 'O')
            setTempo(tempoJog);
            return;
        }

        const timer = setInterval(() => {
            setTempo((prevTempo) => prevTempo - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [inicio, tempoRestante, movimentoAtual]) 

    const iniciarJogo = () => {
        setInicio(true)
    }

    function posicaoJogada(proxQuad) {
        const proxHistorico = [...historico.slice(0, movimentoAtual + 1), proxQuad];
        setHistorico(proxHistorico);
        setMovimentoAtual(proxHistorico.length - 1)
    }

    function pularPara(proxMovimento) {
        setMovimentoAtual(proxMovimento)
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
            <button onClick={iniciarJogo}>Iniciar jogo</button>
            <div>
                <Tabuleiro xEProx={xEProx} quadrados={quadradoAtual} jogadorAtual={posicaoJogada}/>
            </div>
            <div>
                <p>Tempo restante: {tempoRestante}s</p>
            </div>
            <div>
                <ol>{movimentos}</ol>
            </div>
        </div>
    )
}