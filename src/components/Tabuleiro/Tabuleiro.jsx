import { useState, useEffect, useEffectEvent } from "react";
import Quadrado from "../Quadrados/Quadrados";
import {definirVencedor} from "../utils/definirVencedor";

export default function Tabuleiro({quadrados}) {
    function posicaoClique(x) {
        if (definirVencedor(quadrados) || quadrados[x]) {
            return;
        }
    }
}

