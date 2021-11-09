import React from "react";
import style from './style/Paginado.module.css'
import { cambiarPag, aumentarPag, reducirPag } from "../actions/index.js";
import { useDispatch, useSelector } from "react-redux";


export default function Paginado({ allCountries, paisesXPagina, pagina, cambiarPag, aumentarPag, reducirPag }) {

    ////// Logica de cantidad de paginas //////
    const paginaNum = []

    const aux = Math.ceil(allCountries / paisesXPagina)
    for (let i = 1; i <= aux; i++) {
        paginaNum.push(i)
    }
    /////////////////////////////////////////////


    // Nombres para los botones //
    const izq = "<"
    const der = ">"


    return (
        <nav className={style.todoElNav}>






            <ul className={style.paginado} >
                <button className={style.izq} onClick={() => reducirPag()}>{izq}</button>

                {paginaNum && paginaNum.map((pageNumber) => (

                    <li key={pageNumber}>
                        <a className={pagina === pageNumber ? style.numero : style.numero2} onClick={() => cambiarPag(pageNumber)}>{pageNumber}</a>
                    </li>
                ))

                }
                <button className={style.der} onClick={() => aumentarPag(paginaNum.length)}>{der}</button>
            </ul>






        </nav>


    )



}