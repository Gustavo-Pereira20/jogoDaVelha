import { useState, useEffect, useEffectEvent } from "react";

export default function Quadrado({valorQuadrado, funcaoClique}) {
        return(
            <>
                <button className="cuadrado" onClick={funcaoClique}>
                    {valorQuadrado}
                </button>
            </>
        )
}