import { useState, useEffect, useEffectEvent } from "react";
import Tabuleiro from "../Tabuleiro/Tabuleiro";
import { definirVencedor } from "../utils/definirVencedor";
import { parSimbolo } from "../utils/simbolosD";
import styles from "../Jogo/jogo.module.css"

export default function Jogo() {
    const [historico, setHistorico] = useState([Array(9).fill(null)]);
    const [movimentoAtual, setMovimentoAtual] = useState(0);
    const [simbolos, setSimbolos] = useState(parSimbolo);
    const [tema, setTema] = useState(() => {
        const temaSalvo = localStorage.getItem('tema')
        return temaSalvo ? temaSalvo : 'light'
    }) 

    const xEProx = movimentoAtual % 2 === 0;
    const quadradoAtual = historico[movimentoAtual];

    function alterarTema() {
        const novoTema = tema === 'light' ? 'dark' : 'light'
        setTema(novoTema)
        localStorage.setItem('tema', novoTema)
        console.log(tema)
    }

    function escuro(){
        if (tema === 'light'){
            return false
        } else{
            return true
        }
    }

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
            <li key={movimento} className={(`${styles.itemHistorico} ${escuro() ? styles.dark : ""}`)}>
                <button className={(`${styles.botaoHistorico} ${escuro() ? styles.dark : ""}`)} onClick={() => pularPara(movimento)}>{descricao}</button>
            </li>
        );
    });

    return (
        <div className={(`${styles.main} ${escuro() ? styles.dark : ""}`)}>
            <button onClick={alterarTema} className={`${styles.botaoTema} ${escuro() ? styles.dark : ""}`}>
                {escuro() ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
            </button>
            <div className={(`${styles.jogo} ${escuro() ? styles.dark : ""}`)}>
                <button className={(`${styles.botaoReset} ${escuro() ? styles.dark : ""}`)} onClick={resetJogo}>Resetar</button>
                <Tabuleiro xEProx={xEProx} quadrados={quadradoAtual} jogadorAtual={posicaoJogada} simbolos={simbolos} ehEscuro={escuro()}/>
                <ol className={(`${styles.listaHistorico} ${escuro() ? styles.dark : ""}`)}>{movimentos}</ol>
            </div>
        </div>
    )
}