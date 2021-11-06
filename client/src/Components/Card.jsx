import React from "react";
import { useDispatch } from "react-redux";
import style from './style/Card.module.css'
import { onOffInfoChange } from "../actions/index.js";



export default function Card(props) {

    const dispatch = useDispatch()






    return (
        <div className={style.box}>

            <div className={style.boxImg}>
                <img className={style.img} src={props.flag} alt='no se encontro imagen' />
            </div>


            <div className={style.text}>
                <button className={style.boton} onClick={() => dispatch(onOffInfoChange(props.id))}>{props.name}</button>


                <div className={style.barrita}></div>
                <p className={style.capital}>{props.continent}</p>
            </div>






        </div>
    )
}
