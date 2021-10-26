import React from "react";
import { Link } from "react-router-dom";
import style from './style/Page.module.css'





export default function Page() {
    return (
        <div className={style.page}>

            <div className={style.box}>


                <div className={style.tituloBox}>
                    <h2> Hola</h2>
                    <div className={style.barrita}></div>
                </div>




                <div className={style.parrafo}>
                    <p>Hola, bienvenido a mi pagina de paises realizada en Henry, espero que sea de tu agrado y gracias por la visita</p>
                    <p>☼En esta pagina podras buscar paises de todo el mundo y ver la informacion de cada uno de ellos</p>
                    <p>☼Podras crear actividades en cada pais y asi ...</p>

                </div>
                <Link className={style.text} to='/countries'>INGRESAR</Link>
            </div>
        </div>
    )
}