import { useState, useEffect, useEffectEvent } from "react";
import styles from "../Quadrados/quadrados.module.css"

// Primeiro componente do projeto de refatoração. Componente QUADRADO.
// Propriedades do componente quadrado ->

export default function Quadrado({valorQuadrado, funcaoClique}) {
        return(
            <>
                {/* funcaoClique: Define o que irá acontecer quando o botão for clicado. */}
                <button className={styles.quadrado} onClick={funcaoClique}>
                    {/* valorQuadrado: Vai definir o valor do quadrado assim que ele for clicado (X ou O) */}
                    {valorQuadrado}
                </button>
            </>
        )
}