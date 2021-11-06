import React from "react";
import { useDispatch } from "react-redux";
import style from './style/Info.module.css'
import { onOffInfoChange } from "../actions/index.js";

export default function Info(props) {

    const dispatch = useDispatch()

    const pais = props.countries.filter((p) => p.id === props.idOnOff)

    // console.log(pais)



    const areaEnKm = pais[0].area / 1000

    return (
        <div className={style.box}>



            <div className={style.boxText}>
                <h1 className={style.namePais}>{pais[0].name}</h1>                
                <div className={style.barrita}></div>

                <p className={style.titulos}>Capital:</p>
                <h2 className={style.infor}> {pais[0].capital}</h2>

                <p className={style.titulos}>Continente:</p>
                <h3 className={style.infor}>{pais[0].continent}</h3>

                <p className={style.titulos}>Informacion:</p>
                <p className={style.infor2}>Su territorio tiene un area de {areaEnKm} Kilometros cuadrados.</p>
                <p className={style.infor2}>Su poblacion es de {pais[0].population} habitantes.</p>
                {/* <h1>{pais[0].subregion}</h1> */}
                <button className={style.boton} onClick={() => dispatch(onOffInfoChange(false))}>Volver</button>

            </div>



            <div className={style.boxImg}>

                <img className={style.flags} src={pais[0].flag} alt="" />
            </div>





        </div>
    )
}