import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from './style/Page.module.scss'
import { Switch } from "react-switch-input";




export default function Page() {






    ////// Logica de color //////  
    const [col, setCol] = useState(undefined)

    function handlerColor(e) {
        setCol(!col)
    }

    /////////////////////////////




    return (
        <div className={col ? style.page : style.pageBlack}>

            <div className={col ? style.box : style.boxBlack}>


                <div className={style.tituloBox}>
                    <h2> Hola</h2>
                    <div className={style.barrita}></div>
                </div>




                <div className={style.parrafo}>
                    <p >Bienvenido a mi pagina de paises realizada en Henry, espero que sea de tu agrado y gracias por la visita.</p>
                    <p>☼En esta pagina podras buscar paises de todo el mundo, filtrarlos por continente, ordenarlos alfabeticamente y por población, además podras ver la informacion de cada uno de ellos.</p>

                </div>
                <div className={style.botonBox}>
                    <Link className={col ? style.text : style.textBlack} to='/home'>INGRESAR</Link>


                    <Switch
                        onChange={() => handlerColor()}
                    />






                </div>
            </div>

        </div>
    )
}