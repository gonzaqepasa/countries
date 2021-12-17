import React from "react";
import { useState } from "react";
import style from "./style/Paginado.module.scss";

export default function Paginado({
  allCountries,
  paisesXPagina,
  pagina,
  cambiarPag,
  aumentarPag,
  reducirPag,
}) {
  ////// Logica de cantidad de paginas //////
  const paginaNum = [];

  const aux = Math.ceil(allCountries / paisesXPagina);
  for (let i = 1; i <= aux; i++) {
    paginaNum.push(i);
  }
  /////////////////////////////////////////////

  ///////// Nombres para los botones ////////
  const izq = "<";
  const der = ">";
  /////////////////////////////////////////////



  /////////Estado de activacion de paginado ////////
const [pagActive,setPagActive] = useState(false)

  /////////////////////////////////////////////



  return       paginaNum.length > 0 ?  <nav className={pagActive?style.todoElNav: `${style.todoElNav} ${style.disabledPag}`}>
      <button onClick={()=>setPagActive(!pagActive) } className={style.btnActivePag}>Pagina </button>
        <ul className={style.paginado}>
          <button className={style.izq} onClick={() => reducirPag()}>
            {izq}
          </button>

          {/*  {paginaNum && paginaNum.map((pageNumber) => (

                    <li key={pageNumber}>
                        <a className={pagina === pageNumber ? style.numero : style.numero2} onClick={() => cambiarPag(pageNumber)}>{pageNumber}</a>
                    </li>
                ))
                } */}
          <div className={style.textPagina}>
            <p>
              Pagina <p className={style.numbeColor}>{pagina}</p> de{" "}
              {paginaNum.length}
            </p>
          </div>

          <button
            className={style.der}
            onClick={() => aumentarPag(paginaNum.length)}
          >
            {der}
          </button>
        </ul>
      
    </nav>:         false
      }
  

