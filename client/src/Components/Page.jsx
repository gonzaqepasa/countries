import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeColor } from "../actions/index.js";
import style from './style/Page.module.css'
import { Switch } from "react-switch-input";




export default function Page() {


    const dispatch = useDispatch()



    ////// Logica de color //////

    // const col = useSelector(state => state.color)
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
                    <p>Hola, bienvenido a mi pagina de paises realizada en Henry, espero que sea de tu agrado y gracias por la visita</p>
                    <p>☼En esta pagina podras buscar paises de todo el mundo y ver la informacion de cada uno de ellos</p>
                    <p>☼Podras crear actividades en cada pais y asi ...</p>

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